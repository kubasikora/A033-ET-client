import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import appTexts from "../../appTexts";

export const ApplicationHeader: FC = () => {
  return (
    <>
      <AppBar position="fixed" role="banner">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {appTexts.applicationName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
