import React from "react";
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

import { ExportButton } from "../../src/components/ExportButton";

describe('ExportButton', () => {
  it('should render the component', () => {
    const result = render(<ExportButton handler={async () => {}} />);

    const exportButton = result.container.querySelector("#export-button");
    expect(exportButton).toBeInTheDocument(); 
  });
});