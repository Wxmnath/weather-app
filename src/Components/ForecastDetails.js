import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__max-temperature">
        Max:
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min:
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity:{humidity}% </div>
      <div className="forecast-details__speed-wind">{wind.speed}mph</div>
      <div className="forecast-details__direction-wind">{wind.direction}</div>
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
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }),
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};
