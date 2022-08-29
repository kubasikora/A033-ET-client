import { Card } from "@mui/material";
import React, { FC } from "react";
import { VictoryChart, VictoryScatter, VictoryTheme } from "victory";

export const SessionView: FC<{}> = () => {
  return (
    <>
      <Card variant="outlined" id="session-chart">
        <VictoryChart
          theme={VictoryTheme.material}
          style={{}}
          domain={{ x: [0, 10], y: [0, 3] }}
          domainPadding={{x: [10, -10], y: 5}}
        >
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
