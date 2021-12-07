import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div id="app-container">
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
      <div className="row" id="forecast-container">
        <div className="col-2" id="forecast-day">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="temporary"
          />
          <ul>
            <li>
              <span id="temp-max">1</span>
              <span className="max-degree">°</span>
            </li>
            <li>
              <span id="temp-min">7</span>
              <span className="min-degree">°</span>
            </li>
          </ul>
        </div>
        <div className="col-2" id="forecast-day">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="temporary"
          />
          <ul>
            <li>
              <span id="temp-max">1</span>
              <span className="max-degree">°</span>
            </li>
            <li>
              <span id="temp-min">7</span>
              <span className="min-degree">°</span>
            </li>
          </ul>
        </div>
        <div className="col-2" id="forecast-day">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="temporary"
          />
          <ul>
            <li>
              <span id="temp-max">1</span>
              <span className="max-degree">°</span>
            </li>
            <li>
              <span id="temp-min">7</span>
              <span className="min-degree">°</span>
            </li>
          </ul>
        </div>
        <div className="col-2" id="forecast-day">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="temporary"
          />
          <ul>
            <li>
              <span id="temp-max">1</span>
              <span className="max-degree">°</span>
            </li>
            <li>
              <span id="temp-min">7</span>
              <span className="min-degree">°</span>
            </li>
          </ul>
        </div>
        <div className="col-2" id="forecast-day">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="temporary"
          />
          <ul>
            <li>
              <span id="temp-max">1</span>
              <span className="max-degree">°</span>
            </li>
            <li>
              <span id="temp-min">7</span>
              <span className="min-degree">°</span>
            </li>
          </ul>
        </div>
        <div className="col-2" id="forecast-day">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="temporary"
          />
          <ul>
            <li>
              <span id="temp-max">1</span>
              <span className="max-degree">°</span>
            </li>
            <li>
              <span id="temp-min">7</span>
              <span className="min-degree">°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
