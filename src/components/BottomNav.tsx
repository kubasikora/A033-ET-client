import React, { FC, useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CableIcon from "@mui/icons-material/Cable";
import ScaleIcon from "@mui/icons-material/Scale";
import AddchartIcon from "@mui/icons-material/Addchart";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";

export const BottomNav: FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Połączenie"
          icon={<CableIcon />}
          component={Link}
          to="/connection"
        />
        <BottomNavigationAction
          label="Kalibracja"
          icon={<ScaleIcon />}
          component={Link}
          to="/calibration"
        />
        <BottomNavigationAction
          label="Pomiar"
          icon={<AddchartIcon />}
          component={Link}
          to="/measurement"
        />
        <BottomNavigationAction
          label="Analiza"
          icon={<BarChartIcon />}
          component={Link}
          to="/analysis"
        />
      </BottomNavigation>
    </Paper>
  );
};
