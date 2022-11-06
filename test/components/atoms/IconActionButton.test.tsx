import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BiotechIcon from "@mui/icons-material/Biotech";

import { IconActionButton } from "../../../src/components/atoms/IconActionButton";

describe("IconActionButton", () => {
  it("should render the component", async () => {
    const buttonId = "test-button";
    const result = render(
      <IconActionButton
        id={buttonId}
        handler={jest.fn()}
        tooltipText={"test"}
        icon={<BiotechIcon />}
      />
    );

    const exportButton = result.container.querySelector(`#${buttonId}`);
    expect(exportButton).toBeInTheDocument();
  });
});
