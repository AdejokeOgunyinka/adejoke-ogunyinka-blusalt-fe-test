"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { TRAFFIC_BY_WEBSITE_DATA } from "@/lib";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui";

export const TrafficByWebsiteChart = () => {
  const chartConfig = {
    amt: {
      label: "amt",
      color: "#0086F2",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="w-[70%] h-full traffic-by-website"
    >
      <BarChart
        width={500}
        height={300}
        data={TRAFFIC_BY_WEBSITE_DATA}
        layout="vertical"
        barCategoryGap="40%"
      >
        <YAxis dataKey="name" type="category" />
        <XAxis type="number" dataKey="amt1" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="amt1" stackId="a" fill="#1C1C1C" radius={[6, 6, 6, 6]} />
        <Bar dataKey="gap" stackId="a" fill="transparent" />
        <Bar
          dataKey="amt2"
          stackId="a"
          fill="#1C1C1C66"
          radius={[6, 6, 6, 6]}
        />
        <Bar dataKey="gap" stackId="a" fill="transparent" />
        <Bar
          dataKey="amt3"
          stackId="a"
          fill="#1C1C1C1A"
          radius={[6, 6, 6, 6]}
        />
        <Bar dataKey="amt4" stackId="a" fill="#F7F9FB" radius={[6, 6, 6, 6]} />
      </BarChart>
    </ChartContainer>
  );
};
