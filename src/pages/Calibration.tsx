import React, { FC } from "react";
import { TimerCalibration } from "../components/TimerCalibration";
import { Typography, Stack } from "@mui/material";
import { ServerSettings } from "../components/ServerSettings";
import { TimersClock } from "../components/TimersClock";

export const CalibrationPage: FC = () => {
  return (
    <>
      <Typography variant="h5" sx={{mb: 3}}>Kalibracja połączenia</Typography>
      <Stack sx={{pb: 5}} spacing={2}>
        <TimerCalibration />
        <ServerSettings />
        <TimersClock />
      </Stack>
    </>
  );
};
