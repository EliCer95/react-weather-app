import React from "react";

import ClearDay from "./icons/sunny.png";
import ClearNight from "./icons/night.png";
import PartlyCloudyDay from "./icons/partly-cloudy.png";
import Cloudy from "./icons/cloudy.png";
import ShowerRain from "./icons/heavy-rain.png";
import Rain from "./icons/rain.png";
import Storm from "./icons/storm.png";
import Snow from "./icons/snow.png";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": ClearDay,
    "01n": ClearNight,
    "02d": PartlyCloudyDay,
    "02n": ClearNight,
    "03d": Cloudy,
    "03n": Cloudy,
    "04d": Cloudy,
    "04n": Cloudy,
    "09d": ShowerRain,
    "09n": ShowerRain,
    "10d": Rain,
    "10n": Rain,
    "11d": Storm,
    "11n": Storm,
    "13d": Snow,
    "13n": Snow,
    "50d": Cloudy,
    "50n": Cloudy,
  };

  return <img className="icon" src={codeMapping[code]} alt={alt} width={180} />;
}
