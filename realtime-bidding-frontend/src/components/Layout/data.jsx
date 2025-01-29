import { ROUTES } from "@/constants/routes";
import { DashboardIcon, ProfileIcon, PricingIcon, EmailIcon } from "../svgs";

export const SideBarData = [
    {
      icon: <DashboardIcon />,
      text: "Applied Jobs",
      href: ROUTES.HOME,
    },
    {
      icon: <ProfileIcon />,
      text: "Job Profile Management",
      href: ROUTES.MANAGE_JOB_PROFILE,
    },
    {
      icon: <EmailIcon />,
      text: "Saved Questions",
      href: ROUTES.SAVED_QUESTIONS,
    },
    {
      icon: <PricingIcon />,
      text: "Subscriptions",
      href: ROUTES.SUBSCRIPTION,
    },
  ];