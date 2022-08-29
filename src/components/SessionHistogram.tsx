import { Typography, Card } from "@mui/material";
import React, { FC } from "react";
import { VictoryChart, VictoryHistogram } from "victory";

export const SessionHistogram: FC<{}> = () => {
  const sampleHistogramData = [
    { x: 1 },
    { x: 2 },
    { x: 2 },
    { x: 4 },
    { x: 4 },
    { x: 5 },
    { x: 11 },
  ];

  return (
    <>
      <Card variant="outlined">
        <Typography sx={{ fontSize: 16, m: 2, mb: -2 }} color="text.secondary" gutterBottom>
          Histogram
        </Typography>
        <VictoryChart domainPadding={1}>
          <VictoryHistogram
            style={{ data: { fill: "#1976d2" } }}
            data={sampleHistogramData}
          />
        </VictoryChart>
      </Card>
    </>
  );
};
