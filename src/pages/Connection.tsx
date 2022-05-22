import React, { FC } from "react";
import { ConnectionStatus } from "../components/ConnectionStatus";
import { ConnectionForm } from "../components/ConnectionForm";
import { Typography, Stack } from "@mui/material";

export const ConnectionPage: FC = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Połącz z serwerem</Typography>
        <ConnectionStatus isConnected={false}/>
      </Stack>
      <ConnectionForm />
    </>
  );
};
