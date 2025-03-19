"use client";

import { Dot, Line, LineChart, XAxis, YAxis } from "recharts";
import { TOTAL_USERS_DATA } from "@/lib";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui";

export const TotalUsersGraph = () => {
  const chartConfig = {
    this_year: {
      label: "this year",
      color: "#0086F2",
    },
    last_year: {
      label: "last year",
      color: "#FF8981",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig}>
      <LineChart width={500} height={300} data={TOTAL_USERS_DATA}>
        <XAxis dataKey="name" />

        <YAxis />

        <ChartTooltip content={<ChartTooltipContent />} />

        <Line
          type="monotone"
          dataKey="this_year"
          stroke="#1C1C1C"
          dot={<Dot className="hidden" />}
        />

        <Line
          type="monotone"
          dataKey="last_year"
          stroke="#A8C5DA"
          strokeDasharray="3 4 5 2"
          dot={<Dot className="hidden" />}
        />
      </LineChart>
    </ChartContainer>
  );
};
