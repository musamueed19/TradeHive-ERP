import {
    IconBasket,
  IconBasketFilled,
  IconCalendar,
  IconCalendarCheck,
  IconCalendarEvent,
  IconCalendarMonth,
  IconCalendarWeek,
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconPackage,
  IconReport,
  IconSearch,
  IconSettings,
  IconShoppingBag,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

export const sidebarItems = {
  user: {
    name: "Admin",
    email: "admin@tradehive.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: IconListDetails,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: IconPackage,
    },
    {
      title: "Sales",
      url: "/dashboard/sales",
      icon: IconShoppingCart,
    },

    /*
      {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
    */
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
    /*
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
    */
  ],
  documents: [
    {
      name: "Today",
      url: "/dashboard/reports/sales/today",
      icon: IconCalendar,
    },
    {
      name: "Weekly",
      url: "/dashboard/reports/sales/weekly",
      icon: IconCalendarWeek,
    },
    {
      name: "Monthly",
      url: "/dashboard/reports/sales/monthly",
      icon: IconCalendarMonth,
    },
    /*
      {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
    */
  ],
};
