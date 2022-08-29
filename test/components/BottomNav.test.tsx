import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";

import { BottomNav } from "../../src/components/BottomNav";

describe("BottomNav", () => {
  it("should render the component", () => {
    render(
      <HashRouter>
        <BottomNav />
      </HashRouter>
    );

    const connectionLabel = screen.getByText("Connection");
    expect(connectionLabel).toBeInTheDocument();

    const calibrationLabel = screen.getByText("Calibration");
    expect(calibrationLabel).toBeInTheDocument();

    const measurementLabel = screen.getByText("Measurement");
    expect(measurementLabel).toBeInTheDocument();

    const analysisLabel = screen.getByText("Analysis");
    expect(analysisLabel).toBeInTheDocument();
  });
});
