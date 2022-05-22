import React, { FC } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ExportButton } from "../components/ExportButton";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { StatCard } from "../components/StatCard";
import { SessionHistogram } from "../components/SessionHistogram";

export const AnalysisPage: FC = () => {
  const handleButtonClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <Typography variant="h5">
          Analiza wyników
        </Typography>
        <ExportButton handler={handleButtonClick} />
      </Stack>
      <Box sx={{ pb: 5 }}>
        <ImageList cols={3} gap={8}>
          <ImageListItem>
            <StatCard label="Liczba próbek" value={100} />
          </ImageListItem>
          <ImageListItem>
            <StatCard label="Min" value={Math.random()} unit="ns" float />
          </ImageListItem>
          <ImageListItem>
            <StatCard label="Max" value={Math.random()} unit="ns" float />
          </ImageListItem>
        </ImageList>

        <SessionHistogram />

        <ImageList cols={3} gap={8}>
          <ImageListItem>
            <StatCard label="Średnia" value={Math.random()} unit="ns" float />
          </ImageListItem>
          <ImageListItem>
            <StatCard
              label="Odchylenie std."
              value={Math.random()}
              unit="ns"
              float
            />
          </ImageListItem>
          <ImageListItem>
            <StatCard
              label="Wariancja"
              value={Math.random()}
              unit={"ns" + String.fromCharCode(178)}
              float
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </>
  );
};
