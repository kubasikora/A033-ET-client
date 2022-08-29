import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { AnalysisPage } from "../../src/pages/Analysis";

describe('AnalysisPage', () => {
  it('should render the page', () => {
    render(<AnalysisPage />);
    const element = screen.getByText('Current session:');
    expect(element).toBeInTheDocument();
  });
});