import React from "react";
import WeatherCardLeft from "./WeatherCardLeft";
import WeatherCardRight from "./WeatherCardRight";

import "./WeatherCard.css";

export default function WeatherCard() {
  return (
    <div className="col-12" id="weather-card">
      <WeatherCardLeft />
      <WeatherCardRight />
    </div>
  );
}
