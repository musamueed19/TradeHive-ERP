"use client"

import { AppSidebar } from "@/components/app-sidebar";
import Loading from "@/components/Loading";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Loader2 className="animate-spin size-14 h-screen mx-auto" />
      // <Loading loading={true} />
    )
  }
  if (status === "unauthenticated") {
    redirect('/login')
  }
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
