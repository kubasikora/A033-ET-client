import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import { ActionButton } from "../../src/components/ActionButton";

describe('ActionButton', () => {
  it('should render the component', () => {
    render(<ActionButton handler={async () => {}} label={'test-button'}/>);
    const element = screen.getByText('test-button');
    expect(element).toBeInTheDocument();
  });
});