import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";

import { ConnectionForm } from "../../src/components/ConnectionForm";
import appTexts from "../../src/appTexts";

describe("ConnectionForm", () => {
  beforeEach(async () => {
    await act(() => {
      render(<ConnectionForm />);
    });
  });

  it("should render the form", async () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("should render the ip address input", async () => {
    const ipAddressField = screen.getByLabelText(
      `${appTexts.connectionPage.ipAddressLabel} *`
    );

    expect(ipAddressField).toBeInTheDocument();
    expect((ipAddressField as HTMLInputElement).value).toContain(
      appTexts.connectionPage.ipAddressDefaultValue
    );
  });

  it("should render the port input", async () => {
    const portField = screen.getByLabelText(
      `${appTexts.connectionPage.portLabel} *`
    );

    expect(portField).toBeInTheDocument();
    expect((portField as HTMLInputElement).value).toContain(
      appTexts.connectionPage.portDefaultValue
    );
  });

  it("should render the submit button", async () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button.textContent).toEqual(
      appTexts.connectionPage.connectButtonText
    );
  });
});
