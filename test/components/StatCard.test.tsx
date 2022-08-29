import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { StatCard } from "../../src/components/StatCard";

describe("StatCard", () => {
  it("should render the component", () => {
    const label = 'test-label';
    const value = 100;
    const unit = 'kg';
    render(<StatCard label={label} value={value} unit={unit} float={false} />);

    const cardLabel = screen.getByText(label);
    expect(cardLabel).toBeInTheDocument();

    const valueLabel = screen.getByText(value);
    expect(valueLabel).toBeInTheDocument();

    const unitLabel = screen.getByText(unit);
    expect(unitLabel).toBeInTheDocument();
  });
});
