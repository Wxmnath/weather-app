import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../Components/ForecastDetails";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 80,
    wind: {
      speed: 13,
      direction: "NW",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        temperature={validProps.temperature}
        humidity={validProps.humidity}
        wind={validProps.wind}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
