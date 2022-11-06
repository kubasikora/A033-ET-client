import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { NewMeasurement } from "../../../src/components/molecules/NewMeasurement";

describe("NewMeasurement", () => {
  it("should render the component", () => {
    const result = render(<NewMeasurement />);

    const newMeasurementButton = result.container.querySelector("#new-measurement-button");
    expect(newMeasurementButton).toBeInTheDocument(); 
  });
});
