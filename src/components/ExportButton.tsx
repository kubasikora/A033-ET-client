import React, { FC, useState } from "react";
import { Box, IconButton, CircularProgress, Tooltip } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface ExportButtonProps {
  handler: () => Promise<void>
}

export const ExportButton: FC<ExportButtonProps> = ({ handler }) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);
    await handler();
    setLoading(false);
  }

  return (
    <>
      <Box sx={{ position: "relative" }}>
      <Tooltip title="Eksportuj do CSV">
        <IconButton disabled={loading} onClick={handleButtonClick}>
          <FileDownloadIcon />
        </IconButton>
        </Tooltip>
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
    </>
  );
};
