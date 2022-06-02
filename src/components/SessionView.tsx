import { Card } from "@mui/material";
import React, { FC } from "react";
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis } from "victory";

export const SessionView: FC<{}> = () => {
  const sampleData = [
    { x: 1.1, y: 2.1 },
    { x: 1.9, y: 3.3 },
    { x: 3.1, y: 2.4 },
    { x: 4.4, y: 2.5 },
    { x: 5.2, y: 1.4 },
  ];

  return (
    <>
      <Card variant="outlined">
        <VictoryChart
          theme={VictoryTheme.material}
          style={{}}
          domain={{ x: [0, 10], y: [0, 3] }}
          domainPadding={{x: [10, -10], y: 5}}
        >
          {/* <VictoryAxis dependentAxis/>
          <VictoryAxis /> */}
          <VictoryScatter
            style={{ 
                data: { fill: "#1976d2" }
            }}
            size={2}
            data={[]}
          />
        </VictoryChart>
      </Card>
    </>
  );
};
