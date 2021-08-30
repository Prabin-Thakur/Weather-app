import React, {useState,useEffect} from 'react';
import magnifier from '../svgs/magnifier.svg';
import PlaceInfo from './PlaceInfo';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';

const WeatherCard = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e75203e46d1b0fada5ea3fd9d6d3b77a`).then(result => setCity(result.data)).catch((re) => setCity(null));   
    }, [search]);

    return(
       <div className="weather_container">
           <div className="search_container">
               <div className="contents">
                   <div className="search_text">
                        <input onChange={(e) => setCurrentText(e.target.value)} className="input_text" type="text" placeholder="City Name" />
                   </div>
                   <div onClick={(e) => setSearch(currentText)} className="search_image">
                        <img className="image1" alt="magnifier" src={magnifier}/>
                   </div>
               </div>
           </div>
           {!city ? <p className="no_data"> No Data Found</p>: (<><PlaceInfo city={city}/> <WeatherInfo city={city}/> </>)}
       </div>
    );
};

export default WeatherCard;