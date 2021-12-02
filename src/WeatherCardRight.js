import React from "react";

import "./WeatherCardRight.css";

export default function WeatherCardRight() {
  let weatherData = {
    description: "Sunny",
    humidity: "90",
    wind: "1.34",
  };
  return (
    <div className="weather-card-right">
      <ul>
        <li className="weather-description">{weatherData.description}</li>
        <br />
        <li>
          Humidity <span className="purple-text">{weatherData.humidity} %</span>
        </li>
        <br />
        <li>
          Wind <span className="purple-text">{weatherData.wind} m/s</span>
        </li>
      </ul>
    </div>
  );
}
