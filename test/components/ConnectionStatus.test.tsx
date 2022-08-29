import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { ConnectionStatus } from "../../src/components/ConnectionStatus";

describe('ConnectionStatus', () => {
  it('should render the component', () => {
    render(<ConnectionStatus isConnected={true} />);

    const connectedLabel = screen.getByText('Connected');
    expect(connectedLabel).toBeInTheDocument();
  });

  it('should display relevant message when there is no connection', () => {
    render(<ConnectionStatus isConnected={false} />);

    const notConnectedLabel = screen.getByText('No connection');
    expect(notConnectedLabel).toBeInTheDocument();
  });
});