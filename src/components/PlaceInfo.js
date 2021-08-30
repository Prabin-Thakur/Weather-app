import React from 'react';
import pin from '../svgs/pin.svg';
import sun from '../svgs/sun.svg';
import rainy from '../svgs/rainy.svg';
import cloudy from '../svgs/cloudy.svg';

const PlaceInfo = (props) => {
    return (
        <div className="name_container">
            <div className="weather_image">
                <img className="image2" alt="weather" src={`${props.city.weather[0].main === 'Clouds' ? cloudy : props.city.weather[0].main === 'Rain' ? rainy : props.city.weather[0].main === 'Clear' ? sun : cloudy }`}/>
            </div>
            <div className="place_contents">
                <div className="pin_image">
                    <img className="image3" alt="pin" src={pin}/>
                </div>
                <div className="place_name">
                   {props.city.name}
                </div>
            </div>
        </div>
    );
};

export default PlaceInfo;