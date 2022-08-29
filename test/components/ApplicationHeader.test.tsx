import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { ApplicationHeader } from "../../src/components/ApplicationHeader";

describe('ApplicationHeader', () => {
  it('should render the component', () => {
    render(<ApplicationHeader />);
    const element = screen.getByText('A033 ET Client');
    expect(element).toBeInTheDocument();
  });
});