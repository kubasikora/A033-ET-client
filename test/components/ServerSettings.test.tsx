import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ServerSettings } from "../../src/components/ServerSettings";

describe("ServerSettings", () => {
  it("should render the component", () => {
    render(<ServerSettings />);

    const settingsLabel = screen.getByText("Event Timer settings");
    expect(settingsLabel).toBeInTheDocument();

    const triggeringLabel = screen.getAllByText("Triggering");
    expect(triggeringLabel[0]).toBeInTheDocument();

    const totalEventsLabel = screen.getAllByText("Total events (K)");
    expect(totalEventsLabel[0]).toBeInTheDocument();

    const eventsInPackLabel = screen.getAllByText("Events in pack");
    expect(eventsInPackLabel[0]).toBeInTheDocument();

    const periodLabel = screen.getAllByText("Period (x10ms)");
    expect(periodLabel[0]).toBeInTheDocument();
  });
});
