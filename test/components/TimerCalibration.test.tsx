import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { TimerCalibration } from "../../src/components/TimerCalibration";

describe("TimerCalibration", () => {
  it("should render the component", () => {
    render(<TimerCalibration />);

    const label = screen.getByText('Device calibration');
    expect(label).toBeInTheDocument();
  });
});
