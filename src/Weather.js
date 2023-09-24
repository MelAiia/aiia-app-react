import React from "react";
import FormatteDate from "./FormatteDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <ul>
        <li>
          <FormatteDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <h1>{props.data.city}</h1>
      <div className="row mt-1">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Pressure: {props.data.pressure} mb</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
