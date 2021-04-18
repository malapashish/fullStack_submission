import React , {useState , useEffect} from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; 
require('dotenv').config();

  

const App = () => {

    const [inputCountry , setInputCountry] = useState('');
    const [countryList , setCountryList] = useState([]);  
    const [selectedCountry , setSelectedCountry] = useState([]);
    const [isClicked , setIsClicked] = useState(false);
    const [capital , setCapital] = useState('');
    const [countryWeather , setCountryWeather] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY ;
    


    useEffect(() => { 
        axios
            .get(`https://restcountries.eu/rest/v2/name/${inputCountry}`)
            .then((response) => {
                setCountryList(response.data); 
            }) 
    },[inputCountry])

    useEffect(() => { 
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then((response) => {
                setCountryWeather(response.data.current); 
            }) 
    },[capital , api_key]);

    const handleCountryName = (event) => {
        setSelectedCountry([]); 
        setCountryWeather([]);
        setIsClicked(false);
        setInputCountry(event.target.value);
    }; 
    
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
                            <button onClick = {() => {
                                setSelectedCountry(country); 
                                setIsClicked(true); 
                                setCapital(country.capital)}} 
                            >
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
        Find Countries <input value = {inputCountry} onChange = {handleCountryName} />
        {renderResult()} 
        { isClicked && (
            <div>
                <h3>{selectedCountry.name}</h3>
                <p>Capital : {selectedCountry.capital}</p>
                <p>Population : {selectedCountry.population}</p>
                <ul>
                    { selectedCountry && (   
                            Object.values(selectedCountry.languages).map((language) => 
                                    <li key = {uuidv4()}>
                                        {language.name}
                                    </li>
                            ) 
                        )
                    }
                </ul> 
                <img src = {selectedCountry.flag} alt = 'Country flag' style = {{width : '200px' , height : '100px' , display : 'block'}} /> 
                { countryWeather && (
                    <div>
                        <p><b>Temperature :</b>{countryWeather.temperature} Celcius </p>
                        <img src = {countryWeather.weather_icons} alt = {countryWeather.weather_descriptions} style = {{ width : '100px' , height : '100px' , display : 'block' }} /> 
                        <p><b>Wind : </b>{countryWeather.wind_speed} mph direction {countryWeather.wind_dir}</p>
                    </div>
                )}
                <button onClick = {() => setIsClicked(false)} >Close</button>
            </div>
        )} 
        
        </div>
    );
};

export default App;