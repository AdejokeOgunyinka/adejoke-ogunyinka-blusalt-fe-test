import { ReactElement } from "react";
import {
  BugBeetleIcon,
  NewUserIcon,
  WiFiSignalIcon,
} from "../components/icons";

export const SIDEBAR_SEPARATOR_INDICES = [1, 4, 6];

export const NOTIFICATION_ICONS: Record<string, ReactElement> = {
  bug: <BugBeetleIcon />,
  user: <NewUserIcon />,
  subscription: <WiFiSignalIcon />,
};

export const REPORT_GENERATED_COLORS = [
  "#95A4FC",
  "#BAEDBD",
  "#1C1C1C",
  "#B1E3FF",
  "#A8C5DA",
  "#A1E3CB",
];

export const TRAFFIC_BY_LOCATION_COLORS = [
  "linear-gradient(180deg, #000000 0%, rgba(28, 28, 28, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%)",
  "#B1E3FF",
  "#A1E3CB",
  "#A8C5DA",
];

export const TOTAL_USERS_LEGEND = [
  { id: 1, name: "This year", color: "bg-[#1C1C1C]" },
  { id: 2, name: "Last year", color: "bg-[#A8C5DA]" },
];

export const TRAFFIC_BY_WEBSITE_COLORS = [
  "#1C1C1C",
  "#1C1C1C66",
  "#1C1C1C1A",
  "#FFF",
  "#FFF",
  "#FFF",
  "#FFF",
  "#FFF",
];
