import React from "react";
import "./WeatherCardLeft.css";

export default function WeatherCardLeft() {
  let weatherData = {
    city: "New York, USA",
    date: "Thursday 21:59",
    temp: "11",
  };
  return (
    <div className="weather-card-left">
      <h2>{weatherData.date}</h2>
      <h1>{weatherData.city}</h1>
      <div className="current-temp-and-icon">
        <p>
          <span className="current-temp">{weatherData.temp}</span>
          <span className="degree-units">
            <a className="celsius-link active" href="/">
              °C
            </a>
            /
            <a className="fahrenheit-link" href="/">
              °F
            </a>
          </span>
        </p>
        <img
          className="current-icon"
          src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
          alt="weather-icon"
        />
      </div>
    </div>
  );
}
