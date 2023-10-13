import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      time: "13:56",
      date: "Friday, October 13",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form className="d-flex">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control search-window shadow"
            />
            <input
              type="submit"
              value="search"
              className="btn btn-success shadow"
            />
          </form>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="main-data">
              <h2>
                <span className="degree-number">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="celsius-sign">°C</span>
              </h2>
              <p className="description">{weatherData.description}</p>
              <h1>{weatherData.city}</h1>
              <h4>Last updated: {weatherData.date}</h4>
              <div className="time">{weatherData.time}</div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:</li>
              <li>
                <span className="secondary-data">{weatherData.humidity}</span>
                <span className="unit">%</span>
              </li>
              <li>Wind speed:</li>
              <li>
                <span className="secondary-data">2,1</span>
                <span className="unit">km/h</span>
              </li>
              <li>Max/min:</li>
              <li>
                <span className="secondary-data">
                  {Math.round(weatherData.max)}/{Math.round(weatherData.min)}
                </span>
                <span className="unit">°C</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Praha";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5af297a6d7993b7bb3c2ec51eeeaccd4&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "The app is loading.."; //integrate external loading component
  }

  //   function getCity(event) {
  //     console.log(event.target.value);
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }
}
