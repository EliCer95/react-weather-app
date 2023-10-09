import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("New york");

  function getCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setResult(city);
  }
  return (
    <div className="Weather">
      <div className="row">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control search-window shadow"
            onChange={getCity}
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
              <span className="degree-number">18</span>
              <span className="celsius-sign">°C</span>
            </h2>
            <p className="description">Sunny</p>
            <h1>{result}</h1>
            <h4>Last updated: Friday, October 13</h4>
            <div className="time">13:56</div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:</li>
            <li>
              <span className="secondary-data">30</span>
              <span className="unit">%</span>
            </li>
            <li>Wind speed:</li>
            <li>
              <span className="secondary-data">2,1</span>
              <span className="unit">km/h</span>
            </li>
            <li>Max/min:</li>
            <li>
              <span className="secondary-data">24/14</span>
              <span className="unit">°C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
