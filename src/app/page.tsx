import {
  MarketingAndSeoChart,
  ReportsGeneratedChart,
  StatisticsCard,
  TotalUsersGraph,
  TrafficByLocationChart,
  TrafficByWebsiteChart,
} from "@/components/dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import {
  ACTIVITIES,
  CONTACTS,
  DASHBOARD_STATISTICS,
  NOTIFICATION_ICONS,
  NOTIFICATIONS,
  TOTAL_USERS_LEGEND,
  TRAFFIC_BY_LOCATION_PERCENTAGE_DATA,
} from "@/lib";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3.5">
      <div className="md:w-[calc(100%-278px)] 2xl:w-[calc(100%-414px)] grid gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3.5">
          {DASHBOARD_STATISTICS.map((stat) => (
            <StatisticsCard
              key={stat.id}
              className={stat.className}
              header={stat.title}
              value={stat.value}
              percentage={stat.percentage}
            >
              {stat.icon}
            </StatisticsCard>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-6 gap-3.5 place-content-start">
          <div className="col-span-1 xl:col-span-4 bg-[#F7F9FB] rounded-2xl p-6 grid gap-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-sm font-semibold text-[#1C1C1C]">
                Total Users
              </h1>

              <p className="text-sm text-[#1C1C1C66]">Total Projects</p>
              <p className="text-sm text-[#1C1C1C66]">Operating Status</p>

              <div className="w-[1px] h-4 border-r border-[#1C1C1C33]"></div>

              <div className="flex gap-4">
                {TOTAL_USERS_LEGEND.map((legend) => (
                  <div
                    className="flex gap-x-[5px] items-center"
                    key={legend.id}
                  >
                    <div
                      className={`size-1.5 rounded-full ${legend.color}`}
                    ></div>
                    <p className="text-xs">{legend.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <TotalUsersGraph />
          </div>

          <div className="col-span-1 xl:col-span-2 bg-[#F7F9FB] rounded-2xl p-6 grid gap-y-4">
            <h1 className="text-sm font-semibold text-[#1C1C1C]">
              Traffic by Website
            </h1>

            <TrafficByWebsiteChart />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3.5">
          <div className="col-span-2 bg-[#F7F9FB] rounded-2xl p-6 grid gap-y-4">
            <h1 className="text-sm font-semibold text-[#1C1C1C]">
              Reports Generated
            </h1>

            <ReportsGeneratedChart />
          </div>

          <div className="col-span-2 bg-[#F7F9FB] rounded-2xl p-6 grid gap-y-4 relative">
            <h1 className="text-sm font-semibold text-[#1C1C1C]">
              Traffic by Location
            </h1>

            <TrafficByLocationChart />

            <div className="grid gap-3 lg:absolute lg:right-11 xl:right-7 lg:top-23">
              {TRAFFIC_BY_LOCATION_PERCENTAGE_DATA.map((traffic) => (
                <div
                  className="flex gap-x-12 items-center justify-between"
                  key={traffic.name}
                >
                  <div className="flex items-center gap-x-[5px]">
                    <div
                      className={cn("rounded-full size-1.5", traffic.color)}
                    ></div>
                    <p>{traffic.name}</p>
                  </div>

                  <p className="text-xs text-[#1C1C1C]">{traffic.percent}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F7F9FB] rounded-2xl p-6 flex flex-col gap-y-4">
          <h1 className="text-sm font-semibold text-[#1C1C1C]">
            Marketing & SEO
          </h1>
          <div>
            <MarketingAndSeoChart />
          </div>
        </div>
      </div>

      <div className="bg-[#FFF8F8] md:w-[264px] 2xl:w-[400px] p-4 rounded-[20px] xl:rounded-[30px] h-fit md:h-[calc(100vh-120px)] overflow-y-scroll md:fixed md:right-[30px] md:top-[103px] 2xl:top-[115px]">
        <div className="grid gap-y-1">
          <div className="px-1 py-2">
            <h2 className="text-sm">Notifications</h2>
          </div>

          {NOTIFICATIONS.map((notification) => (
            <div
              className="p-2 flex gap-x-2 items-center"
              key={notification.id}
            >
              {NOTIFICATION_ICONS[notification.type]}

              <div>
                <h2 className="text-sm text-[#1C1C1C]">
                  {notification.description}
                </h2>
                <p className="text-xs text-[#1C1C1C66]">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-y-1">
          <div className="px-1 py-2">
            <h2 className="text-sm">Activities</h2>
          </div>

          {ACTIVITIES.map((activity) => (
            <div className="p-2 flex gap-x-2 items-center" key={activity.id}>
              <Avatar>
                <AvatarImage
                  src={activity.img}
                  alt="@shadcn"
                  className="object-cover"
                />

                <AvatarFallback>
                  {activity.description.split(" ")[0][0]}
                  {activity.description.split(" ")[1][0]}
                </AvatarFallback>
              </Avatar>

              <div>
                <h2 className="text-sm text-[#1C1C1C]">
                  {activity.description}
                </h2>
                <p className="text-xs text-[#1C1C1C66]">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-y-1">
          <div className="px-1 py-2">
            <h2 className="text-sm">Contacts</h2>
          </div>

          {CONTACTS.map((contact) => (
            <div className="p-2 flex gap-x-2 items-center" key={contact.id}>
              <Avatar>
                <AvatarImage
                  src={contact.img}
                  alt="@shadcn"
                  className="object-cover"
                />

                <AvatarFallback>
                  {contact.name.split(" ")[0][0]}
                  {contact.name.split(" ")[1][0]}
                </AvatarFallback>
              </Avatar>

              <h2 className="text-sm">{contact.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
