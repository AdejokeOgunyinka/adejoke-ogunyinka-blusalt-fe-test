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
      <PieChart width={200} height={200}>
        <Pie
          data={TRAFFIC_BY_LOCATION_DATA}
          cx={120}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
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
