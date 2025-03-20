"use client";

import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
import { MARKETING_AND_SEO_COLORS, MARKETING_AND_SEO_DATA } from "@/lib";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui";

export const MarketingAndSeoChart = () => {
  const chartConfig = {
    amt: {
      label: "amt",
      color: "#0086F2",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <BarChart data={MARKETING_AND_SEO_DATA} barCategoryGap="25%">
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="amt" fill="#8884d8" radius={[6, 6, 6, 6]}>
          {MARKETING_AND_SEO_DATA.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={MARKETING_AND_SEO_COLORS[index % 20]}
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};
