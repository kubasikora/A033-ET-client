import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act, fireEvent } from "@testing-library/react";

import { ActionButton } from "../../src/components/ActionButton";

describe("ActionButton", () => {
  const buttonText: string = "test-button";
  const buttonRole: string = "button";
  const spinnerRole: string = "progressbar";
  const sleepingHandler = async () => {
    await new Promise((r) => setTimeout(r, 1000));
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should render the button and display the label", async () => {
    await act(() => {
      render(<ActionButton handler={async () => {}} label={buttonText} />);
    });
    let button = screen.getByRole(buttonRole);
    expect(button).toBeInTheDocument();
    expect(button.textContent).toEqual(buttonText);
  });

  it("should run the handler when pressed", async () => {
    const dummyHandler = jest.fn();
    await act(() => {
      render(<ActionButton handler={dummyHandler} label={buttonText} />);
    });

    const button = screen.getByRole(buttonRole);
    await act(async () => {
      fireEvent.click(button);
    });

    expect(dummyHandler).toHaveBeenCalled();
  });

  it("should display spinner while handler is running", async () => {
    await act(async () => {
      render(<ActionButton handler={sleepingHandler} label={buttonText} />);
    });

    const button = screen.getByRole(buttonRole);
    await act(async () => {
      fireEvent.click(button);
    });

    let spinner = screen.queryByRole(spinnerRole);
    expect(spinner).toBeInTheDocument();
    await act(async () => {
      jest.runAllTimers();
    });
    spinner = screen.queryByRole(spinnerRole);
    expect(spinner).not.toBeInTheDocument();
  });

  it("should disable the button while handler is running", async () => {
    await act(async () => {
      render(<ActionButton handler={sleepingHandler} label={buttonText} />);
    });

    const button = screen.getByRole(buttonRole);
    await act(async () => {
      fireEvent.click(button);
    });

    expect(button).toBeDisabled();
    await act(async () => {
      jest.runAllTimers();
    });
    expect(button).not.toBeDisabled();
  });
});
