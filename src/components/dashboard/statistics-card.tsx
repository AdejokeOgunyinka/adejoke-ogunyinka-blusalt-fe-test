import { IStatisticsCard } from "@/app/types";
import { cn } from "@/lib/utils";

export const StatisticsCard = ({
  className,
  header,
  value,
  percentage,
  children,
}: IStatisticsCard) => {
  return (
    <div className={cn("rounded-2xl p-6 grid gap-y-2 h-fit", className)}>
      <h3 className="text-xs">{header}</h3>

      <div className="grid grid-cols-2">
        <p className="col-span-1 text-2xl font-semibold">{value}</p>
        <div className="col-span-1 flex flex-wrap gap-x-1 items-center justify-end">
          <p className="text-xs">{percentage}%</p>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
