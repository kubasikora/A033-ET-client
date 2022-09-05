import React, { FC, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";

interface ActionButtonProps {
  handler: () => Promise<void>
  label: string
}

export const ActionButton: FC<ActionButtonProps> = ({ handler, label }) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    await handler();
    setLoading(false);
  }

  return (
    <>
      <Box sx={{ m: 1, mr: 0, position: "relative" }}>
        <Button disabled={loading} onClick={handleButtonClick} role="button">
          {label}
        </Button>
        {loading && (
          <CircularProgress
            role="progressbar"
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
    </>
  );
};
