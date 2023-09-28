import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "4aof9ee43493t03092f5abdcf7d5bf5d";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
