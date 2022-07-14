import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../Styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind, icon } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <h3 className="forecast-details__date">
        {moment(date).format("dddd Do MMMM")}
      </h3>
      <div className="forecast-details__icon" data-testid="forecast-icon">
        <WeatherIcon
          name="owm"
          style={{ color: "blue", fontSize: "70px" }}
          iconId={icon}
        />
      </div>
      <div className="forecast-details__max-temperature">
        Max: {temperature.max}
        &deg;c
      </div>
      <div className="forecast-details__min-temperature">
        Min: {temperature.min}
        &deg;c
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}% </div>
      <div className="forecast-details__speed-wind">
        Wind Speed: {wind.speed} mph
      </div>
      <div className="forecast-details__direction-wind">
        Wind Direction: {wind.direction.toUpperCase()}
      </div>
    </div>
  );
}
export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    icon: PropTypes.string.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }),
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};
