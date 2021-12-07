import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metrics");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <p>
        <span className="current-temp">{props.celsius}</span>
        <span className="degree-units">
          <a className="celsius-link active" href="/">
            °C
          </a>
          /
          <a className="fahrenheit-link" href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

    return (
      <p>
        <span className="current-temp">{fahrenheit}</span>
        <span className="degree-units">
          <a className="celsius-link" href="/" onClick={showCelsius}>
            °C
          </a>
          /
          <a className="fahrenheit-link active" href="/">
            °F
          </a>
        </span>
      </p>
    );
  }
}
