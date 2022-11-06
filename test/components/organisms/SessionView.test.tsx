import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { SessionView } from "../../../src/components/organisms/SessionView";

describe("SessionView", () => {
  it("should render the component", () => {
    const result = render(<SessionView />);

    const chart = result.container.querySelector("#session-chart");
    expect(chart).toBeInTheDocument(); 
  });
});
