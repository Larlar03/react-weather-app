import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./Form.css";

export default function Form() {
  return (
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
  );
}
