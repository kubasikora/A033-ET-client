import React, { FC } from "react";
import { Chip } from "@mui/material";
import appTexts from "../../appTexts";

interface ConnectionStatusProps {
  isConnected: boolean;
}

export const ConnectionStatus: FC<ConnectionStatusProps> = ({
  isConnected,
}) => {
  if (isConnected)
    return (
      <Chip
        color="success"
        variant="outlined"
        role="status"
        label={appTexts.connectionPage.connectedBadge}
      />
    );
  else
    return (
      <Chip
        color="warning"
        variant="outlined"
        role="status"
        label={appTexts.connectionPage.notConnectedBadge}
      />
    );
};
