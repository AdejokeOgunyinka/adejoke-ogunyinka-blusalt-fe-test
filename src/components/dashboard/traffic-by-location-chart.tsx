"use client";

import { Cell, Pie, PieChart } from "recharts";
import { TRAFFIC_BY_LOCATION_COLORS, TRAFFIC_BY_LOCATION_DATA } from "@/lib";
import { ChartContainer, type ChartConfig } from "../ui";

export const TrafficByLocationChart = () => {
  const chartConfig = {
    amt: {
      label: "amt",
      color: "#0086F2",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig}>
      <PieChart width={150} height={150}>
        <Pie
          data={TRAFFIC_BY_LOCATION_DATA}
          cx={65}
          cy={90}
          innerRadius={35}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {TRAFFIC_BY_LOCATION_DATA.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                TRAFFIC_BY_LOCATION_COLORS[
                  index % TRAFFIC_BY_LOCATION_COLORS.length
                ]
              }
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};
