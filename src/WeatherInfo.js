import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIconBig from "./WeatherIconBig.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <h1 className="pt-3">
            {props.data.city}, {props.data.country}
          </h1>
        </div>
        <div className="col-4">
          <div className="main-data">
            <h2>
              <span className="degree-number">
                {Math.round(props.data.temperature)}
              </span>
              <span className="celsius-sign">°C</span>
            </h2>
            <p className="description text-capitalize">
              {props.data.description}
            </p>
          </div>
        </div>
        <div className="col-4 icon-section">
          <div className="weather-icon">
            <WeatherIconBig code={props.data.icon} />
          </div>
        </div>
        <div className="col-4 secondary-data">
          <h4>
            {" "}
            <FormattedDate date={props.data.date} />
            <FormattedTime time={props.data.time} />
          </h4>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
