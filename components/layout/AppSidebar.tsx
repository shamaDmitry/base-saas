"use client";

import * as React from "react";
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
  Hexagon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navMain = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard, isActive: true },
  { title: "Analytics", url: "#", icon: BarChart2 },
  { title: "Invoice", url: "#", icon: Ticket },
  { title: "Schedule", url: "#", icon: ListTodo },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Messages", url: "#", icon: MessageSquare, badge: "49" },
  { title: "Notification", url: "#", icon: Bell },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // 1. Hook into the sidebar state
  const { state } = useSidebar();

  // Helper to determine if we are in "expanded" mode
  const isExpanded = state === "expanded";

  return (
    <Sidebar
      collapsible="icon"
      className="border-r-0 bg-white transition-all duration-300 ease-in-out"
      // Force the width to 218px when open
      style={{ "--sidebar-width": "218px" } as React.CSSProperties}
      {...props}
    >
      {/* Header: Logo */}
      <SidebarHeader className="h-20 justify-center">
        <div
          className={`flex items-center px-2 ${isExpanded ? "gap-3" : "justify-center"}`}
        >
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-indigo-200 shadow-lg">
            <Hexagon className="size-6 fill-current" />
          </div>

          {/* 2. Conditionally render Text based on state */}
          {isExpanded && (
            <span className="truncate font-bold text-2xl text-slate-900 animate-in fade-in slide-in-from-left-2 duration-300">
              Base
            </span>
          )}
        </div>
      </SidebarHeader>

      {/* Body: Navigation Items */}
      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="gap-2">
          {navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={!isExpanded ? item.title : undefined}
                isActive={item.isActive}
                className={`
                  h-12 rounded-xl transition-all duration-200
                  hover:bg-slate-50 hover:text-indigo-600
                  data-[active=true]:bg-indigo-50 data-[active=true]:text-indigo-600
                  ${isExpanded ? "justify-start px-4" : "justify-center px-0"}
                `}
              >
                <item.icon className="!size-6 shrink-0" />

                {/* Text Label */}
                {isExpanded && (
                  <span className="ml-3 text-sm font-medium animate-in fade-in slide-in-from-left-1">
                    {item.title}
                  </span>
                )}

                {/* Badges */}
                {item.badge && isExpanded && (
                  <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
                    {item.badge}
                  </span>
                )}
                {/* Red dot for collapsed view */}
                {item.badge && !isExpanded && (
                  <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer: User Profile */}
      <SidebarFooter className="p-4">
        <div
          className={`flex items-center rounded-2xl bg-slate-50 p-2 ${isExpanded ? "gap-3" : "justify-center"}`}
        >
          <Avatar className="h-10 w-10 rounded-xl border-2 border-white shadow-sm">
            <AvatarImage src="/avatars/user.jpg" />
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
