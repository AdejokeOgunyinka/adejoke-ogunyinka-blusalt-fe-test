import { ReactElement } from "react";

export interface IStatisticsCard {
  className: string;
  header: string;
  value: string;
  percentage: string;
  children: ReactElement;
}
