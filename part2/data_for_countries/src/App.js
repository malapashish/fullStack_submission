import React , {useState , useEffect} from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const [countries , setCountries] = useState('');
    const [countryList , setCountryList] = useState([]);

    useEffect(() => {
        axios
            .get(`https://restcountries.eu/rest/v2/name/${countries}`)
            .then((response) => {
                setCountryList(response.data); 
            })
    },[countries])

    const handleCountryName = (event) => {
        setCountries(event.target.value);
    };

    const renderResult = () => {
        if(countryList.length === 1){
            return(
                <ul>
                    {
                        countryList.map((country) => 
                            <div>
                                <h3>{country.name}</h3>
                                <p>Capital : {country.capital}</p>
                                <p>Population : {country.population}</p>
                                <h3>Spoken Languages</h3>
                                <ul>
                                    {country.languages.map((language) => 
                                        <li key = {uuidv4()}>{language.name}</li>
                                    )}
                                </ul>
                                <img src = {country.flag} alt = 'Country Flag' style = {{width : '200px' , height : '100px'}} />
                            </div>
                        )
                    }
                </ul>
            )
        }else if(countryList.length > 10){
            return(
                <h3>Too much matches , specify another filter</h3>
            )
        }else{
            return(
                <ul>
                    {
                        countryList.map((country) => 
                            <li key = {uuidv4()}>{country.name}</li>
                        )
                    }
                </ul> 
            )
        }
    }

    return(
        <div>
        Find Countries <input value = {countries} onChange = {handleCountryName} />
        {renderResult()} 
        </div>
    );
};

export default App;