import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const ApplicationHeader: FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            A033 ET Client
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
