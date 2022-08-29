import { useState, SyntheticEvent } from "react";

export type FeedbackStatus = "success" | "error";

export interface SnackbarInstanceParameters {
  open: boolean;
  status: FeedbackStatus;
  label: string;
}

export default function useFeedback(): [
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
