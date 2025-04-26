
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-fruitbox-green flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5 text-white"
            >
              <path d="M17.5 6H17C15.6 3.2 12.5 1 9 1C4.6 1 1 4.6 1 9C1 12.5 3.2 15.6 6 17V17.5C6 20 8 22 10.5 22H13.5C16 22 18 20 18 17.5V17C20.8 15.6 23 12.5 23 9C23 4.6 19.4 1 15 1C11.5 1 8.4 3.2 7 6H6.5" />
            </svg>
          </div>
          <span className="text-xl font-bold text-fruitbox-green">Fruit Box</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <nav className="grid gap-1 px-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors ${
              isActive("/dashboard") ? "bg-muted" : ""
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`h-4 w-4 ${isActive("/dashboard") ? "text-fruitbox-green" : ""}`}
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            Dashboard
          </Link>
          <Link
            to="/reports/sales"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors ${
              isActive("/reports/sales") ? "bg-muted" : ""
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`h-4 w-4 ${isActive("/reports/sales") ? "text-fruitbox-green" : ""}`}
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" x2="12" y1="22" y2="12" />
            </svg>
            Sales Reports
          </Link>
          <Link
            to="/reports/inventory"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors ${
              isActive("/reports/inventory") ? "bg-muted" : ""
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`h-4 w-4 ${isActive("/reports/inventory") ? "text-fruitbox-green" : ""}`}
            >
              <path d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
              <path d="M8 6v12" />
              <path d="M16 6v12" />
              <path d="M8 12h8" />
            </svg>
            Inventory Insights
          </Link>
          <Link
            to="/reports/customers"
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors ${
              isActive("/reports/customers") ? "bg-muted" : ""
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`h-4 w-4 ${isActive("/reports/customers") ? "text-fruitbox-green" : ""}`}
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Customer Analysis
          </Link>
        </nav>
      </SidebarContent>
      <SidebarFooter className="px-3 py-4">
        <div className="rounded-md bg-fruitbox-green/10 p-4">
          <h3 className="font-medium text-fruitbox-green">Need help?</h3>
          <p className="mt-1 text-xs">Contact our support team for assistance with your reports and analytics.</p>
          <button className="mt-3 text-xs font-medium text-fruitbox-green hover:underline">Contact Support</button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
