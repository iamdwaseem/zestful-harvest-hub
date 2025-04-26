
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import SalesChart from '@/components/dashboard/SalesChart';
import InventoryChart from '@/components/dashboard/InventoryChart';
import CustomerPreferencesChart from '@/components/dashboard/CustomerPreferencesChart';
import ReportExportCard from '@/components/dashboard/ReportExportCard';

const Dashboard = () => {
  return (
    <DashboardLayout title="Analytics Dashboard">
      <div className="grid gap-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="$24,780"
            description="Last 30 days"
            trend={{ value: 12.5, isPositive: true }}
            icon={
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-7 w-7"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
          />
          <StatCard
            title="Active Subscriptions"
            value="478"
            description="Current month"
            trend={{ value: 8.2, isPositive: true }}
            icon={
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-7 w-7"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <StatCard
            title="Inventory Value"
            value="$12,540"
            description="Current stock"
            trend={{ value: 3.2, isPositive: false }}
            icon={
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-7 w-7"
              >
                <path d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
                <path d="M8 6v12" />
                <path d="M16 6v12" />
                <path d="M8 12h8" />
              </svg>
            }
          />
          <StatCard
            title="Delivered Boxes"
            value="1,235"
            description="Last 30 days"
            trend={{ value: 15.3, isPositive: true }}
            icon={
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-7 w-7"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
            }
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SalesChart className="col-span-1 lg:col-span-2" />
          <ReportExportCard className="col-span-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InventoryChart />
          <CustomerPreferencesChart />
        </div>

        {/* Additional Data Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { action: "New subscription", customer: "John Doe", time: "10 minutes ago" },
              { action: "Inventory updated", customer: "System", time: "30 minutes ago" },
              { action: "Report generated", customer: "Admin User", time: "1 hour ago" },
              { action: "Delivery completed", customer: "Route 5", time: "3 hours ago" },
              { action: "Low stock alert", customer: "System", time: "5 hours ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-fruitbox-green mr-3"></div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.customer}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
