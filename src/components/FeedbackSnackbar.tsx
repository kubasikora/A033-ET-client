import React, { FC, useState, SyntheticEvent } from "react";
import { Snackbar, Alert } from "@mui/material";

type FeedbackStatus = "success" | "error";

interface SnackbarInstanceParameters {
  open: boolean;
  status: FeedbackStatus;
  label: string;
}

interface FeedbackSnackbarProps {
  handler: (_event: SyntheticEvent, reason?: string) => void;
  params: SnackbarInstanceParameters;
}

export function useFeedback(): [
  (_event: SyntheticEvent, reason?: string) => void,
  SnackbarInstanceParameters,
  (status: FeedbackStatus, label: string) => void
] {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("success" as FeedbackStatus);
  const [label, setLabel] = useState("");

  const handleClose = (_event: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const openSnackbar = (newStatus: FeedbackStatus, newLabel: string) => {
    setStatus(newStatus);
    setLabel(newLabel);
    setOpen(true);
  };

  return [handleClose, { open, status, label }, openSnackbar];
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
