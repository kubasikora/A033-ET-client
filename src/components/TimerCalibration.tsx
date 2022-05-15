import React, { FC, useEffect, useState } from "react";
import { Box, Card, CardActions, CardContent, Typography, Stack, Button, TextField, InputAdornment, CircularProgress, Alert } from "@mui/material";

export const TimerCalibration: FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, setValue]     = useState(0);

  const timer = React.useRef<number>();
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setValue(3.451 + Math.random());
      }, 1000);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Kalibracja urządzenia
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{mt: 2}}>
        <TextField
          id="calibration-output"
          label="Dokładność"
          size="small"
          disabled
          value={(Math.round(value * 1000) / 1000).toFixed(3)}
          sx={{
              width: 150,
              '& .MuiInputLabel-root.Mui-disabled': { color: "black" },
              '& .MuiOutlinedInput-input.Mui-disabled': { '-webkit-text-fill-color': "black" }

          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">ps</InputAdornment>,
          }}
        />
        <Box sx={{ m: 1, mr: 0, position: "relative" }}>
          <Button
            disabled={loading}
            onClick={handleButtonClick}
          >
            Kalibruj
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
        </Stack>
      </CardContent>

    </Card>
  );
};
