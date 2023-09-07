import React from "react";
import axios from "axios";

export default function Wether() {
  function handleResponse(response) {
    alert(`The weather in Kyiv is ${response.data.temperature.current}`);
  }
  let apiKey = "4aof9ee43493t03092f5abdcf7d5bf5d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Kyiv&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
