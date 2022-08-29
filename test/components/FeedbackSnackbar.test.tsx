import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { FeedbackSnackbar } from "../../src/components/FeedbackSnackbar";

describe("FeedbackSnackbar", () => {
  it("should render the component", () => {
    render(
      <FeedbackSnackbar
        handler={async () => {}}
        params={{ open: true, status: "success", label: "test-label" }}
      />
    );

    const snackbar = screen.getByText("test-label");
    expect(snackbar).toBeInTheDocument();
  });
});
