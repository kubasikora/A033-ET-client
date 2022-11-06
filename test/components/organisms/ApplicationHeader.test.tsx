import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import appTexts from "../../../src/appTexts";
import { ApplicationHeader } from "../../../src/components/organisms/ApplicationHeader";

describe("ApplicationHeader", () => {
  beforeEach(async () => {
    await act(() => {
      render(<ApplicationHeader />);
    });
  })
  
  it("should render the banner", async () => {
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });

  it("should display the application name", async () => {
    const banner = screen.getByRole("banner");
    expect(banner.textContent).toEqual(appTexts.applicationName);
  });
});
