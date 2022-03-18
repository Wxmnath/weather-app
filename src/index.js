import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import forecast from "./Data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={forecast.forecasts} location={forecast.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
