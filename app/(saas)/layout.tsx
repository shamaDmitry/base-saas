import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={
        {
          "--sidebar-width": "218px",
          "--sidebar-width-icon": "5rem",
        } as React.CSSProperties
      }
    >
      <div className="flex min-h-screen w-full bg-background">
        <div className="flex-none z-20 hidden md:flex">
          <AppSidebar />
        </div>

        <div className="md:hidden flex-none z-20">
          <AppSidebar />
        </div>

        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="overflow-auto p-7.5">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
