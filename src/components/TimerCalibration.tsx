import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { ActionButton } from "./ActionButton";

export const TimerCalibration: FC = () => {
  const [value, setValue] = useState(0);

  const handleButtonClick = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setValue(3.451 + Math.random());
  };

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Device calibration
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <TextField
            id="calibration-output"
            label="Std. deviation"
            size="small"
            disabled
            value={(Math.round(value * 1000) / 1000).toFixed(3)}
            sx={{
              width: 150,
              "& .MuiInputLabel-root.Mui-disabled": { color: "black" },
              "& .MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "black",
              },
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">ps</InputAdornment>,
            }}
          />
          <ActionButton handler={handleButtonClick} label="Calibrate" />
        </Stack>
      </CardContent>
    </Card>
  );
};
