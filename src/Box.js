import React from "react";
import "./Box.css";

export default function Box() {
  return (
    <div className="Box">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>
      <ul>
        <li>Wednesday 14 June, 14:46</li>
        <li>Cloudy</li>
      </ul>
      <h1>Kyiv</h1>
      <div className="row mt-1">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Cloudy"
          />

          <span className="temperature">20</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: 20°C</li>
            <li>Pressure: 1012 mb</li>
            <li>Humidity: 60 %</li>
            <li>Wind: 1 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
