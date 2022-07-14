import React from "react";
import PropTypes from "prop-types";
import "../Styles/ForecastSummary.css";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect } = props;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>

      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} style={{ fontSize: "40px" }} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;c
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button
        type="button"
        className="button__details"
        onClick={() => onSelect(date)}
      >
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
