import React, { FC, SyntheticEvent } from "react";
import { Snackbar, Alert } from "@mui/material";
import { SnackbarInstanceParameters } from "../../hooks/useFeedback";

interface FeedbackSnackbarProps {
  handler: (_event: SyntheticEvent, reason?: string) => void;
  params: SnackbarInstanceParameters;
}

export const FeedbackSnackbar: FC<FeedbackSnackbarProps> = ({
  handler,
  params,
}) => {
  const { open, status, label } = params;

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handler}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handler} severity={status} sx={{ width: "100%" }}>
          {label}
        </Alert>
      </Snackbar>
    </>
  );
};
