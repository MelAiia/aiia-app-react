import React from "react";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <img src={props.data.condition.icon_url}></img>
      </div>
      <div className="ForecastTemperature">
        <div className="ForecastMax">{maxTemperature()}</div>
        <div className="ForecastMin">{minTemperature()}</div>
      </div>
    </div>
  );
}
