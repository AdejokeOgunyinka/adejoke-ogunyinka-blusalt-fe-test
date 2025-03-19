"use client";

import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
import { REPORT_GENERATED_COLORS, REPORTS_GENERATED_DATA } from "@/lib";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui";

export const ReportsGeneratedChart = () => {
  const chartConfig = {
    amt: {
      label: "amt",
      color: "#0086F2",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={REPORTS_GENERATED_DATA} barCategoryGap="25%">
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="amt" fill="#8884d8" radius={[6, 6, 6, 6]}>
          {REPORTS_GENERATED_DATA.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={REPORT_GENERATED_COLORS[index % 20]}
            />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};
