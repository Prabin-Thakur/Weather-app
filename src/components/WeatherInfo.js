import React from 'react';
const WeatherInfo = (props) => {
    return (
        <div className="weather_info">
            <div className="weather_degree">
                <div>{props.city.main.temp}°C</div>
            </div>
            <div className="weather_minmax">
                Min : {props.city.main.temp_min}°C  |  Max : {props.city.main.temp_max}°C
            </div>
        </div>
    )
}

export default WeatherInfo;