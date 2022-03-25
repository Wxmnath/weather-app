import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../Components/App";
import forecast from "../Data/forecast.json";

describe("App", () => {
  test("renders App component correclty", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
