"use client";

import {
  LayoutDashboard,
  BarChart2,
  Ticket,
  ListTodo,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscribeCTA from "@/components/SubscribeCTA";

const navMain = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  { title: "Analytics", url: "/analytics", icon: BarChart2 },
  { title: "Customer List", url: "/customers", icon: Users },
  { title: "Invoice", url: "/invoices", icon: Ticket },
  { title: "Schedule", url: "/schedule", icon: ListTodo },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Messages", url: "#", icon: MessageSquare, badge: "49" },
  { title: "Notification", url: "#", icon: Bell },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();

  const isExpanded = state === "expanded";

  return (
    <Sidebar
      collapsible="icon"
      className="border-r-0 bg-white transition-all duration-300 ease-in-out"
      style={{ "--sidebar-width": "218px" } as React.CSSProperties}
      {...props}
    >
      <SidebarHeader className="justify-center pt-12.5 pb-9.5">
        <div
          className={cn(
            "flex items-center justify-center",
            isExpanded ? "gap-3" : "justify-center",
          )}
        >
          <SidebarTrigger className="h-10 w-10 rounded-xl bg-white text-slate-500 shadow-sm border border-slate-100 hover:bg-slate-50" />

          <div className="flex items-center justify-center gap-3">
            <Logo className="text-primary size-10.5" />

            {isExpanded && (
              <span className="truncate font-semibold text-2xl text-foreground animate-in fade-in slide-in-from-left-2 duration-300">
                Base
              </span>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-0 min-h-60">
        <SidebarMenu className="gap-2 overflow-auto ">
          {navMain.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={!isExpanded ? item.title : undefined}
                  isActive={pathname.startsWith(item.url)}
                  className={cn(
                    "h-12 text-black/50 rounded-xl transition-all duration-200  hover:bg-slate-50 hover:text-indigo-600 data-[active=true]:bg-indigo-50 data-[active=true]:text-indigo-600",
                    {
                      "px-4 justify-start": isExpanded,
                      "px-0 justify-center": !isExpanded,
                    },
                  )}
                >
                  <Link href={item.url}>
                    <item.icon className="size-6! shrink-0" />

                    {isExpanded && (
                      <span className="ml-3 text-sm font-medium animate-in fade-in slide-in-from-left-1">
                        {item.title}
                      </span>
                    )}

                    {item.badge && isExpanded && (
                      <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
                        {item.badge}
                      </span>
                    )}

                    {item.badge && !isExpanded && (
                      <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!!isExpanded && <SubscribeCTA />}

        <div
          className={`mt-7.5 flex items-center rounded-2xl bg-slate-50 p-2 ${isExpanded ? "gap-3" : "justify-center"}`}
        >
          <Avatar className="h-10 w-10 rounded-xl border-2 border-white shadow-sm">
            <AvatarImage src="/images/avatar.png" />

            <AvatarFallback className="rounded-xl bg-pink-100 text-pink-600 font-bold">
              EA
            </AvatarFallback>
          </Avatar>

          {isExpanded && (
            <div className="flex flex-1 flex-col overflow-hidden animate-in fade-in zoom-in-95">
              <span className="truncate text-sm font-bold text-slate-900">
                Easin Arafat
              </span>
              <span className="truncate text-xs text-slate-500">
                Free Account
              </span>
            </div>
          )}

          {isExpanded && (
            <LogOut className="size-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
