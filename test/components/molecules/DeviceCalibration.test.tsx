import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { DeviceCalibration } from "../../../src/components/molecules/DeviceCalibration";

describe("DeviceCalibration", () => {
  it("should render the component", () => {
    render(<DeviceCalibration />);

    const label = screen.getByText('Device calibration');
    expect(label).toBeInTheDocument();
  });
});
