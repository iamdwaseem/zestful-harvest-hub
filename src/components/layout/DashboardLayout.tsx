
import React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import DashboardSidebar from './DashboardSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useToast } from '@/hooks/use-toast';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const { toast } = useToast();

  // Simulating a notification that could be triggered by real-time data
  React.useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Dashboard Updated",
        description: "Latest data has been loaded successfully",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <DashboardSidebar />
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
            <div className="flex h-16 items-center px-6">
              <h1 className="text-2xl font-bold dashboard-title">{title}</h1>
              <div className="ml-auto flex items-center space-x-4">
                <button
                  onClick={() => {
                    toast({
                      title: "Refreshed",
                      description: "Dashboard data has been refreshed",
                    });
                  }}
                  className="rounded-full bg-white p-2 text-gray-600 shadow-sm hover:text-fruitbox-green focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-fruitbox-green flex items-center justify-center text-white font-medium">
                    AD
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
