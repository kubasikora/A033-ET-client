import React, { FC } from "react";
import { Box, TextField, Stack } from "@mui/material";
import { ActionButton } from "./ActionButton";
import { FeedbackSnackbar } from "./FeedbackSnackbar";
import useFeedback from "../hooks/useFeedback";
import appTexts from "../appTexts";

const { connectionPage } = appTexts;

export const ConnectionForm: FC = () => {
  const [handler, params, openSnackbar] = useFeedback();

  const handleButtonClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    openSnackbar("error", connectionPage.errorToastMessage);
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
      role="form"
    >
      <div>
        <TextField
          role="textbox"
          required
          id="ip-address-input"
          label={connectionPage.ipAddressLabel}
          defaultValue={connectionPage.ipAddressDefaultValue}
          fullWidth
        />
      </div>
      <div>
        <TextField
          role="textbox"
          required
          id="port-input"
          label={connectionPage.portLabel}
          defaultValue={connectionPage.portDefaultValue}
        />
      </div>
      <Stack direction="row-reverse">
        <ActionButton handler={handleButtonClick} label={connectionPage.connectButtonText} />
      </Stack>
      <FeedbackSnackbar handler={handler} params={params} />
    </Box>
  );
};
