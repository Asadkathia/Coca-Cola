import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen text-white bg-transparent">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <TopBar title={title} />
        <main className="pt-20 lg:pt-24 p-3 lg:p-6 overflow-y-auto min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

