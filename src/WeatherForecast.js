import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { ThreeDots } from "react-loader-spinner";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-2 mb-2 forecast-row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col forecast-item" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);

    return (
      <div className="d-flex justify-content-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#ffb258"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
