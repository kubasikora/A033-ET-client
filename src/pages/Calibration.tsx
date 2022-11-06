import React, { FC } from "react";
import { DeviceCalibration } from "../components/molecules/DeviceCalibration";
import { Typography, Stack } from "@mui/material";
import { ServerSettings } from "../components/molecules/ServerSettings";

export const CalibrationPage: FC = () => {
  return (
    <>
      <Typography variant="h5" sx={{mb: 3}}>Calibration</Typography>
      <Stack sx={{pb: 5}} spacing={2}>
        <ServerSettings />
        <DeviceCalibration />
      </Stack>
    </>
  );
};
