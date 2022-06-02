import React, { FC } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { SessionView } from "../components/SessionView";
import { NewMeasurement } from "../components/NewMeasurement";

export const MeasurementPage: FC = () => {
  return <>
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
      <Typography variant="h5">
        New measurement
      </Typography>  
    </Stack>
    <NewMeasurement/>
    <Box sx={{ pb: 5 }}>
      <SessionView />
    </Box>
  </>;
};
