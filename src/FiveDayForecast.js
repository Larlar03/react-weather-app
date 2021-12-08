import React from "react";
import axios from "axios";

export default function FiveDayForecast(props) {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function handleResponse(response) {
    console.log(response.data);
    let forecast = response.data.daily;
    let forecastHTML = "";
    forecast.forEach(function (forecastDay, index) {
      if (index > 0 && index < 7) {
        forecastHTML =
          forecastHTML +
          `<div class="col-2" id="forecast-day">
              <h4>${formatDay(forecastDay.dt)}</h4>
               <img src="https://openweathermap.org/img/wn/${
                 forecastDay.weather[0].icon
               }@2x.png" alt="${forecastDay.weather.description}" />
              <ul>
                <li><span id="temp-min">${Math.round(
                  forecastDay.temp.min
                )}</span><span class="min-degree">°</span> </li>
                <li><span id="temp-max">${Math.round(
                  forecastDay.temp.max
                )}</span><span class="max-degree">°</span></li>
              </ul>
          </div>
          `;
      }
    });

    let forecastElement = document.querySelector("#forecast-container");
    forecastElement.innerHTML = forecastHTML;
  }

  let apiKey = "76261526781005dcd8b27ca5524074f5";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row" id="forecast-container">
      forecast
    </div>
  );
}
