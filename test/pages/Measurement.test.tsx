import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { MeasurementPage } from "../../src/pages/Measurement";

describe('MeasurementPage', () => {
  it('should render the page', () => {
    render(<MeasurementPage />);
    const element = screen.getByText('New measurement');
    expect(element).toBeInTheDocument();
  });
});