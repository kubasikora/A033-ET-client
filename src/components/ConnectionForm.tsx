import React, { FC, useEffect, useState } from "react";
import { Box, TextField, Stack, Button, CircularProgress, Alert, Snackbar } from "@mui/material";

export const ConnectionForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

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
        setOpen(true);
      }, 1000);
    }
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 1, mb: 1, width: "100%" },
        mt: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="ip-address-input"
          label="Adres IP"
          defaultValue="10.0.0.1"
          fullWidth
        />
      </div>
      <div>
        <TextField required id="port-input" label="Port" defaultValue="13334" />
      </div>
      <Stack direction="row-reverse">
        <Box sx={{ m: 1, mr: 0, position: "relative" }}>
          <Button
            variant="contained"
            disabled={loading}
            onClick={handleButtonClick}
          >
            Połącz
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {success ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Połączono z serwerem!
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            Nie udało połączyć się z serwerem!
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};
