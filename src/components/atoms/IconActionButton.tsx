import React, { FC, useState } from "react";
import { Box, IconButton, CircularProgress, Tooltip } from "@mui/material";

interface ActionIconButtonProps {
  id?: string;
  handler: () => Promise<void>;
  icon: React.ReactNode;
  tooltipText: string;
}

export const IconActionButton: FC<ActionIconButtonProps> = ({
  id,
  handler,
  icon,
  tooltipText,
}) => {
  const buttonId = id !== undefined ? id : "icon-action-button";
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    await handler();
    setLoading(false);
  };

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Tooltip title={tooltipText}>
          <IconButton
            disabled={loading}
            onClick={handleButtonClick}
            id={buttonId}
          >
            {icon}
          </IconButton>
        </Tooltip>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-24px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </>
  );
};
