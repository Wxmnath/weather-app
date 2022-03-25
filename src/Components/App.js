import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import "../Styles/App.css";

function App(props) {
  const { forecasts, location } = props;
  // Add a useState() hook to your <App /> component with its return value destructured to selectedDate and setSelectedDate. Set the initial value of useState() to the date of the first forecast within forecasts array.
  // We first need to add a useState() hook before we can add our state. We have to set the selectedDate property in state to the date of the first forecast from forecasts:
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  // Create a selectedForecast variable and set it equal to the date within your forecasts that matches the selectedDate, and pass this selectedForecast variable into the <ForecastDetails /> component.
  // Then we want to pass a forecast into <ForecastDetails /> based on the selected date:
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  // Now the <ForecastDetails /> component can render whichever forecast matches our selected date. If that date changes, then the forecast rendered in <ForecastDetails /> will also change, but you might see an error in the command line (where you run npm start) or in the browser:
  // Let's start by adding the handler function. Add the following code to your <App /> component:
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  // This is pretty simple - the function gets passed a date, and we use the setSelectedDate() method from our selectedDate hook to set that date on our state object.

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
        // onForcastSelect={handleForecastSelect} //handleForecastSelect() method passed into <ForecastSummaries /> as a prop called onForecastSelect. Add this prop to your PropTypes in <ForecastSummaries />
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
