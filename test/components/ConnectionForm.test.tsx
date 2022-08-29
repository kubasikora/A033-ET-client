import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { ConnectionForm } from "../../src/components/ConnectionForm";

describe('ConnectionForm', () => {
  it('should render the component', () => {
    render(<ConnectionForm />);

    const ipAddressLabel = screen.getByText('IP Address');
    expect(ipAddressLabel).toBeInTheDocument();

    const portLabel = screen.getByText('Port');
    expect(portLabel).toBeInTheDocument();
  });
});