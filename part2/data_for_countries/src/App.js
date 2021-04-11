import React , {useState , useEffect} from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const [countries , setCountries] = useState('');
    const [countryList , setCountryList] = useState([]);  
    const [selectedCountry , setSelectedCountry] = useState([]);
    const [isClicked , setIsClicked] = useState(false);

    useEffect(() => {
        axios
            .get(`https://restcountries.eu/rest/v2/name/${countries}`)
            .then((response) => {
                setCountryList(response.data); 
            })
    },[countries])

    const handleCountryName = (event) => {
        setSelectedCountry([]); 
        setIsClicked(false);
        setCountries(event.target.value);
    };
 

    const renderLanguageList = (lang) => {
            return(
                <>
                    <h3>Spoken Languages</h3> 
                    <ul>
                        {
                            lang.map((test) => 
                                <li key = {uuidv4()}>
                                    {test.name}
                                </li>
                            )
                        }
                    </ul>
                </>
            )
    }
    


    const renderResult = () => {
        if(countryList.length > 10){
            return(
                <h3>Too much matches , specify another filter</h3>
            )
        }else{
            return(
                <ul>
                    {
                        countryList.map((country) => 
                            <li key = {uuidv4()}>
                                {country.name}
                            <button onClick = {() => {setSelectedCountry(country); setIsClicked(true);}} >
                                Click
                            </button>    
                            </li>
                        )
                    }
                </ul>
            )
        }
    };
 

    return(
        <div>
        Find Countries <input value = {countries} onChange = {handleCountryName} />
        {renderResult()} 
        { isClicked && (
            <div>
                <h3>{selectedCountry.name}</h3>
                <p>{selectedCountry.capital}</p>
                <p>{selectedCountry.population}</p>
                {renderLanguageList(Object.values(selectedCountry.languages))} 
                <img src = {selectedCountry.flag} alt = 'Country flag' style = {{width : '200px' , height : '100px' , display : 'block'}} /> 
                <button onClick = {() => setIsClicked(false)} >Close</button>
            </div>
        )}
        </div>
    );
};

export default App;