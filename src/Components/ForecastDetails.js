import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function ForecastDetails(props) {
  const { date, temperature, humidity, wind } = props;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>

      <div className="forecast-summary__max-temperature">
        {temperature.max}
        &deg;C
      </div>

      <div className="forecast-summary__min-temperature">
        {temperature.min}
        &deg;C
      </div>

      <div className="forecast-details__humidity">{humidity} </div>

      <div className="forecast-summary__wind">{wind.speed}</div>

      <div className="forecast-summary__direction">{wind.direction}</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
};

export default ForecastDetails;
