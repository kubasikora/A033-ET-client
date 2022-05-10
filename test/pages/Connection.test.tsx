import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import { ConnectionPage } from "../../src/pages/Connection";

describe('ConnectionPage', () => {
  it('should render', () => {
    render(<ConnectionPage />);
    const divElement = screen.getByText("Connection page");
    expect(divElement).toBeInTheDocument();
  });
});