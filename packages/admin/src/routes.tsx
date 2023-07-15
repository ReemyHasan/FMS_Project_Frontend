import { ReactNode } from "react";
import DashboardIcon from "@/src/components/assets/custom-ant-icons/sidebar/dashboard-icon";
import CustomerIcon from "@/src/components/assets/custom-ant-icons/sidebar/customer-icon";
import TeamsIcon from "@/src/components/assets/custom-ant-icons/sidebar/teams-icon";
import SchedulingIcon from "@/src/components/assets/custom-ant-icons/sidebar/scheduling-icon";
import AboutIcon from "@/src/components/assets/custom-ant-icons/sidebar/about-icon";
import UsersIcon from "@/src/components/assets/custom-ant-icons/sidebar/users-icon";
import SetupIcon from "@/src/components/assets/custom-ant-icons/sidebar/setup-icon";

type RoutesType = {
  key: string;
  icon: ReactNode;
  label: string;
};

export const routes: Array<RoutesType> = [
  {
    key: "dashboard",
    icon: <DashboardIcon />,
    label: "dashboard",
  },
  {
    key: "add-user",
    icon: <CustomerIcon />,
    label: "add-user",
  },
  {
    key: "profile",
    icon: <TeamsIcon />,
    label: "profile",
  },
  {
    key: "traps",
    icon: <SchedulingIcon />,
    label: "traps",
  },
  {
    key: "about",
    icon: <AboutIcon />,
    label: "about",
  },
  {
    key: "users",
    icon: <UsersIcon />,
    label: "users",
  },
  {
    key: "setup",
    icon: <SetupIcon />,
    label: "setup",
  },
];
