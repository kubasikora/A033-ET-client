import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { SessionHistogram } from "../../src/components/SessionHistogram";

describe("SessionHistogram", () => {
  it("should render the component", () => {
    render(<SessionHistogram />);

    const histogramLabel = screen.getByText("Histogram");
    expect(histogramLabel).toBeInTheDocument();
  });
});
