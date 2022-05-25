import React, { FC } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { SessionView } from "../components/SessionView";

export const MeasurementPage: FC = () => {
  return <>
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
      <Typography variant="h5">
        Sesja pomiarowa
      </Typography>  
    </Stack>
    <Box sx={{ pb: 5 }}>
      <SessionView />
    </Box>
  </>;
};
