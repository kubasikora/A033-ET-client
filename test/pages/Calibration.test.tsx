import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { CalibrationPage } from "../../src/pages/Calibration";

describe('CalibrationPage', () => {
  it('should render the page', () => {
    render(<CalibrationPage />);
    const element = screen.getByText('Calibration');
    expect(element).toBeInTheDocument();
  });
});