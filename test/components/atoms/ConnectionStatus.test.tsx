import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import appTexts from "../../../src/appTexts";
import { ConnectionStatus } from "../../../src/components/atoms/ConnectionStatus";

describe("ConnectionStatus", () => {
  it("should render the component", async () => {
    render(<ConnectionStatus isConnected={true} />);
    const badge = screen.getByRole("status");
    expect(badge).toBeInTheDocument();
  });

  it("should display relevant message when there is a connection", async () => {
    render(<ConnectionStatus isConnected={true} />);
    const connectedLabel = screen.getByText(
      appTexts.connectionPage.connectedBadge
    );
    expect(connectedLabel).toBeInTheDocument();
  });

  it("should display relevant message when there is no connection", async () => {
    render(<ConnectionStatus isConnected={false} />);
    const notConnectedLabel = screen.getByText(
      appTexts.connectionPage.notConnectedBadge
    );
    expect(notConnectedLabel).toBeInTheDocument();
  });
});
