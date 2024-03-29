import React, { FC } from "react";
import { Box, TextField, Stack, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { FeedbackSnackbar } from "./FeedbackSnackbar";
import useFeedback from "../../hooks/useFeedback";

export const NewMeasurement: FC = () => {
  const [handler, params, openSnackbar] = useFeedback();

  const handleButtonClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    openSnackbar("error", "Can't connect to server");
  };

  const defaultValue = (): string => {
    const now = new Date();
    const date = now.toLocaleDateString().replace(/\//g, "-");
    const time = now.toLocaleTimeString().replace(/:/g, "-");
    return `${date}-${time}.csv`;
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 1, mb: 1, width: "100%" },
          mt: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row">
          <Box sx={{ width: "95%" }}>
            <TextField
              required
              id="session-name"
              label="Save session as"
              size="small"
              defaultValue={defaultValue()}
            />
          </Box>
          <IconButton
            size="large"
            color="primary"
            id="new-measurement-button"
            onClick={handleButtonClick}
          >
            <PlayArrowIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        <FeedbackSnackbar handler={handler} params={params} />
      </Box>
    </>
  );
};
