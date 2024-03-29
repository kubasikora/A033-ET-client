import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { ConnectionPage } from "../../src/pages/Connection";

describe('ConnectionPage', () => {
  it('should render the page', () => {
    render(<ConnectionPage />);
    const element = screen.getByText('Connect to server');
    expect(element).toBeInTheDocument();
  });
});