import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
      <div className="flex min-h-screen w-full bg-[#FAFAFA]">
        <div className="flex-none z-20 hidden md:flex">
          <AppSidebar />
        </div>

        <div className="md:hidden flex-none z-20">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <header className="flex h-20 items-center justify-between px-8 bg-transparent">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="h-10 w-10 rounded-xl bg-white text-slate-500 shadow-sm border border-slate-100 hover:bg-slate-50" />
            </div>
          </header>

          <div className="flex-1 overflow-auto p-8 pt-0">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
