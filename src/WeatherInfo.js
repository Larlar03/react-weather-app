import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="col-12" id="weather-card">
      <div className="weather-card-left">
        <h2>
          <FormattedDate />
        </h2>
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <div className="current-temp-and-icon">
          <WeatherTemperature celsius={props.data.temperature} />
          <img
            className="current-icon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
        </div>
      </div>
      <div className="weather-card-right">
        <ul>
          <li className="weather-description text-capitalize">
            {props.data.description}
          </li>
          <br />
          <li>
            Humidity
            <span className="purple-text"> {props.data.humidity} %</span>
          </li>
          <br />
          <li>
            Wind
            <span className="purple-text"> {props.data.wind} m/s</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
