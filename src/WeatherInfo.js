import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="main-data">
            <h2>
              <span className="degree-number">
                {Math.round(props.data.temperature)}
              </span>
              <span className="celsius-sign"> °C</span>
            </h2>
            <p className="description text-capitalize">
              {props.data.description}
            </p>
            <h1>{props.data.city}</h1>
            <h4>
              Last updated: <FormattedDate date={props.data.date} />
            </h4>
            <div className="time">
              <FormattedTime time={props.data.time} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:</li>
            <li>
              <span className="secondary-data">{props.data.humidity}</span>
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
                {Math.round(props.data.max)}/{Math.round(props.data.min)}
              </span>
              <span className="unit">°C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
