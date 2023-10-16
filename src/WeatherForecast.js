import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
          <div className="forecast-day">Thursday</div>
          <div>
            <WeatherIcon code="01d" size={36} />
          </div>
          <span className="temperature-max">10°</span>
          <span className="temperature-min"> 8°</span>
        </div>
      </div>
    </div>
  );
}
