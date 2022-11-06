import React, { FC } from "react";
import Container from "@mui/material/Container";
import { HashRouter, Route, Routes } from "react-router-dom";

import { ApplicationHeader } from "./components/organisms/ApplicationHeader";
import { BottomNav } from "./components/organisms/BottomNav";

import { CalibrationPage } from "./pages/Calibration";
import { ConnectionPage } from "./pages/Connection";
import { MeasurementPage } from "./pages/Measurement";
import { AnalysisPage } from "./pages/Analysis";

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Container>
          <ApplicationHeader />

            <Routes>
              <Route path="/connection" element={<ConnectionPage />} />
              <Route path="/calibration" element={<CalibrationPage />} />
              <Route path="/measurement" element={<MeasurementPage />} />
              <Route path="/analysis" element={<AnalysisPage />} />

              <Route path="" element={<ConnectionPage />} />
            </Routes>

          <BottomNav />
        </Container>
      </HashRouter>
    </>
  );
};

export default App;
