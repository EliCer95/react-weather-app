import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="weather-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="temperature-max">{maxTemperature()}</div>
    </div>
  );
}
