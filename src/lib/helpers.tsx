import {
  AdministrationIcon,
  AuditTrailIcon,
  CustomersIcon,
  DashboardIcon,
  KYCIcon,
  ReportsIcon,
  RequestsIcon,
  SettingsIcon,
  TasksIcon,
  UsersIcon,
} from "@/components/icons";
import {
  ADMINISTRATION,
  AUDIT_TRAIL,
  CUSTOMERS,
  DASHBOARD,
  KYC,
  REPORTS,
  REQUESTS,
  SETTINGS,
  TASKS,
  USERS,
} from "../lib/routes";
export const getSidebarItems = (location: string) => {
  const getColor = (href: string) => {
    return href === location ? "#161716" : "#292D32";
  };
  const getVariant = (href: string) => {
    return href === location ? "Bold" : "Outline";
  };
  const size = "size-4";

  return [
    {
      id: 1,
      name: "Dashboard",
      icon: (
        <DashboardIcon
          variant={getVariant(DASHBOARD)}
          color={getColor(DASHBOARD)}
          className={size}
        />
      ),
      href: DASHBOARD,
    },
    {
      id: 2,
      name: "Requests",
      icon: (
        <RequestsIcon
          variant={getVariant(REQUESTS)}
          color={getColor(REQUESTS)}
          className={size}
        />
      ),
      href: REQUESTS,
    },
    {
      id: 3,
      name: "KYC",
      icon: (
        <KYCIcon
          variant={getVariant(KYC)}
          color={getColor(KYC)}
          className={size}
        />
      ),
      href: KYC,
    },
    {
      id: 4,
      name: "Reports",
      icon: (
        <ReportsIcon
          variant={getVariant(REPORTS)}
          color={getColor(REPORTS)}
          className={size}
        />
      ),
      href: REPORTS,
    },
    {
      id: 5,
      name: "Tasks",
      icon: (
        <TasksIcon
          variant={getVariant(TASKS)}
          color={getColor(TASKS)}
          className={size}
        />
      ),
      href: TASKS,
    },
    {
      id: 6,
      name: "Audit Trail",
      icon: (
        <AuditTrailIcon
          variant={getVariant(AUDIT_TRAIL)}
          color={getColor(AUDIT_TRAIL)}
          className={size}
        />
      ),
      href: AUDIT_TRAIL,
    },
    {
      id: 7,
      name: "Customers",
      icon: (
        <CustomersIcon
          variant={getVariant(CUSTOMERS)}
          color={getColor(CUSTOMERS)}
          className={size}
        />
      ),
      href: CUSTOMERS,
    },
    {
      id: 8,
      name: "Users",
      icon: (
        <UsersIcon
          variant={getVariant(USERS)}
          color={getColor(USERS)}
          className={size}
        />
      ),
      href: USERS,
    },
    {
      id: 9,
      name: "Settings",
      icon: (
        <SettingsIcon
          variant={getVariant(SETTINGS)}
          color={getColor(SETTINGS)}
          className={size}
        />
      ),
      href: SETTINGS,
    },
    {
      id: 10,
      name: "Administration",
      icon: (
        <AdministrationIcon
          variant={getVariant(ADMINISTRATION)}
          color={getColor(ADMINISTRATION)}
          className={size}
        />
      ),
      href: ADMINISTRATION,
    },
  ];
};
