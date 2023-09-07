import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function update(response) {
    console.log(response);
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4aof9ee43493t03092f5abdcf7d5bf5d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(update);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (temperature) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(temperature)} ºC</li>
          <li> Description: {description} </li>
          <li>
            <img src={icon} alt={description} />
          </li>
          <li> Humidity: {humidity} %</li>
          <li> Wind: {wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
