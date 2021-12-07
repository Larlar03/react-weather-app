import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <main>
        <div className="form-container">
          <form className="search-form">
            <input
              id="search-input"
              type="text"
              className="form-control"
              placeholder="Enter a location..."
              aria-label="city"
              aria-describedby="button-addon2"
            />
            <button className=" btn btn-outline search-button">Search</button>
            <button className="btn btn-outline current-location-button">
              <FaMapMarkerAlt />
            </button>
          </form>
        </div>
        <div id="app-container">
          <div className="col-12" id="weather-card">
            <div className="weather-card-left">
              <h2>
                <FormattedDate />
              </h2>
              <h1>
                {weatherData.city}, {weatherData.country}
              </h1>
              <div className="current-temp-and-icon">
                <p>
                  <span className="current-temp">
                    {weatherData.temperature}
                  </span>
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
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />
              </div>
            </div>
            <div className="weather-card-right">
              <ul>
                <li className="weather-description text-capitalize">
                  {weatherData.description}
                </li>
                <br />
                <li>
                  Humidity
                  <span className="purple-text">{weatherData.humidity} %</span>
                </li>
                <br />
                <li>
                  Wind
                  <span className="purple-text">{weatherData.wind} m/s</span>
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
      </main>
    );
  } else {
    const apiKey = "76261526781005dcd8b27ca5524074f5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
