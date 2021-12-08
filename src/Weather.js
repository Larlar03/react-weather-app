import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Weather.css";
import FiveDayForecast from "./FiveDayForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = "76261526781005dcd8b27ca5524074f5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    const apiKey = "76261526781005dcd8b27ca5524074f5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <main>
        <div className="form-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              id="search-input"
              type="text"
              className="form-control"
              placeholder="Enter a location..."
              aria-label="city"
              aria-describedby="button-addon2"
              onChange={handleCityChange}
            />
            <button className=" btn btn-outline search-button">Search</button>
            <button
              className="btn btn-outline current-location-button"
              onClick={getCurrentLocation}
            >
              <FaMapMarkerAlt />
            </button>
          </form>
        </div>
        <div id="app-container">
          <WeatherInfo data={weatherData} />
          <FiveDayForecast coordinates={weatherData.coordinates} />
        </div>
      </main>
    );
  } else {
    search();
    return "Loading";
  }
}
