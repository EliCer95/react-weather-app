import React from "react";

export default function Weather() {
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
              <span className="degree-number">18</span>
              <span className="celsius-sign">°C</span>
            </h2>
            <p className="description">Sunny</p>
            <h1>New York</h1>
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
