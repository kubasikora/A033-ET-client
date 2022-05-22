import React, { FC } from "react";
import { Box, TextField, Stack } from "@mui/material";
import { ActionButton } from "./ActionButton";
import { FeedbackSnackbar, useFeedback } from "./FeedbackSnackbar";


export const ConnectionForm: FC = () => {
  const [handler, params, openSnackbar] = useFeedback();

  const handleButtonClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    openSnackbar("error", "Nie udało połączyć się z serwerem")
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
        <ActionButton handler={handleButtonClick} label="Połącz" />
      </Stack>
      <FeedbackSnackbar
        handler={handler}
        params={params}
      />
    </Box>
  );
};
