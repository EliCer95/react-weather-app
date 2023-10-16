import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="degree-number">{Math.round(props.celsius)}</span>
        <span className="celsius-sign">
          {" "}
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            F°
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span>
        <span className="degree-number">{Math.round(fahrenheit)}</span>
        <span className="celsius-sign">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | F°
        </span>
      </span>
    );
  }
}
