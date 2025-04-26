
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import SalesChart from '@/components/dashboard/SalesChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const SalesReport = () => {
  const [period, setPeriod] = React.useState('monthly');
  const [view, setView] = React.useState('trends');
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: `Exporting ${format.toUpperCase()}`,
      description: "Your report is being generated and will download shortly."
    });
  };

  // Sample sales data
  const salesData = [
    { id: 1, date: "2025-04-01", revenue: 1245.50, boxes: 45, topProduct: "Mixed Fruit Box" },
    { id: 2, date: "2025-04-02", revenue: 1322.75, boxes: 48, topProduct: "Berry Deluxe" },
    { id: 3, date: "2025-04-03", revenue: 978.25, boxes: 35, topProduct: "Citrus Collection" },
    { id: 4, date: "2025-04-04", revenue: 1542.00, boxes: 56, topProduct: "Mixed Fruit Box" },
    { id: 5, date: "2025-04-05", revenue: 1876.25, boxes: 68, topProduct: "Exotic Selection" },
    { id: 6, date: "2025-04-06", revenue: 1433.50, boxes: 52, topProduct: "Mixed Fruit Box" },
    { id: 7, date: "2025-04-07", revenue: 1687.75, boxes: 61, topProduct: "Berry Deluxe" },
    { id: 8, date: "2025-04-08", revenue: 1543.00, boxes: 56, topProduct: "Nut Medley" },
    { id: 9, date: "2025-04-09", revenue: 1322.25, boxes: 48, topProduct: "Citrus Collection" },
    { id: 10, date: "2025-04-10", revenue: 1456.50, boxes: 53, topProduct: "Mixed Fruit Box" },
  ];

  return (
    <DashboardLayout title="Sales Reports">
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
            title="Boxes Sold"
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
          <StatCard
            title="Average Order Value"
            value="$32.45"
            description="Last 30 days"
            trend={{ value: 3.2, isPositive: true }}
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
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            }
          />
          <StatCard
            title="Conversion Rate"
            value="68.7%"
            description="Subscriber retention"
            trend={{ value: 2.1, isPositive: false }}
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
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            }
          />
        </div>

        {/* Report Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <div>
                  <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={view} onValueChange={setView}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trends">Sales Trends</SelectItem>
                      <SelectItem value="products">Product Performance</SelectItem>
                      <SelectItem value="channels">Sales Channels</SelectItem>
                      <SelectItem value="customers">Customer Segments</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-8 w-[200px]" 
                  />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => handleExport('pdf')}
                >
                  Export PDF
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleExport('csv')}
                >
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <SalesChart title="Sales Performance" className="w-full" />

        {/* Detailed Sales Data */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Boxes Sold</TableHead>
                  <TableHead>Top Product</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>${row.revenue.toFixed(2)}</TableCell>
                    <TableCell>{row.boxes}</TableCell>
                    <TableCell>{row.topProduct}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing 1-10 of 145 entries
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SalesReport;
