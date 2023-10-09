import React from "react";

export default function SecondaryData() {
  return (
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
  );
}
