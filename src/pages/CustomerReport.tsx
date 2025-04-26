
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import CustomerPreferencesChart from '@/components/dashboard/CustomerPreferencesChart';
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
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const CustomerReport = () => {
  const [filter, setFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('name');
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: `Exporting ${format.toUpperCase()}`,
      description: "Your customer analytics report is being generated and will download shortly."
    });
  };

  // Sample customer data
  const customers = [
    { 
      id: 1, 
      name: "John Smith", 
      email: "john.smith@example.com", 
      status: "active", 
      subscription: "Weekly Fruit Box",
      orderValue: 34.99,
      lastOrder: "2025-04-20",
      preferences: ["Fruits", "Nuts"]
    },
    { 
      id: 2, 
      name: "Emily Johnson", 
      email: "emily.j@example.com", 
      status: "active", 
      subscription: "Family Box",
      orderValue: 49.99,
      lastOrder: "2025-04-22",
      preferences: ["Fruits", "Salads"]
    },
    { 
      id: 3, 
      name: "Michael Brown", 
      email: "m.brown@example.com", 
      status: "inactive", 
      subscription: "Monthly Variety",
      orderValue: 29.99,
      lastOrder: "2025-03-15",
      preferences: ["Nuts"]
    },
    { 
      id: 4, 
      name: "Sarah Davis", 
      email: "sarah.d@example.com", 
      status: "active", 
      subscription: "Office Box",
      orderValue: 89.99,
      lastOrder: "2025-04-18",
      preferences: ["Fruits", "Nuts", "Salads"]
    },
    { 
      id: 5, 
      name: "Robert Wilson", 
      email: "rob.wilson@example.com", 
      status: "active", 
      subscription: "Weekly Fruit Box",
      orderValue: 34.99,
      lastOrder: "2025-04-21",
      preferences: ["Fruits"]
    },
    { 
      id: 6, 
      name: "Jessica Taylor", 
      email: "j.taylor@example.com", 
      status: "paused", 
      subscription: "Healthy Snack Box",
      orderValue: 24.99,
      lastOrder: "2025-04-05",
      preferences: ["Nuts", "Salads"]
    },
    { 
      id: 7, 
      name: "David Martinez", 
      email: "david.m@example.com", 
      status: "active", 
      subscription: "Premium Exotic Box",
      orderValue: 59.99,
      lastOrder: "2025-04-19",
      preferences: ["Fruits"]
    },
    { 
      id: 8, 
      name: "Jennifer Garcia", 
      email: "j.garcia@example.com", 
      status: "active", 
      subscription: "Weekly Fruit Box",
      orderValue: 34.99,
      lastOrder: "2025-04-22",
      preferences: ["Fruits", "Salads"]
    },
    { 
      id: 9, 
      name: "Christopher Lee", 
      email: "chris.l@example.com", 
      status: "inactive", 
      subscription: "Office Box",
      orderValue: 89.99,
      lastOrder: "2025-02-28",
      preferences: ["Fruits", "Nuts"]
    },
    { 
      id: 10, 
      name: "Amanda White", 
      email: "a.white@example.com", 
      status: "active", 
      subscription: "Family Box",
      orderValue: 49.99,
      lastOrder: "2025-04-20",
      preferences: ["Fruits", "Nuts", "Salads"]
    },
  ];

  // Filter customers based on status
  const filteredCustomers = React.useMemo(() => {
    if (filter === 'all') return customers;
    return customers.filter(customer => customer.status === filter);
  }, [filter, customers]);

  // Sort customers
  const sortedCustomers = React.useMemo(() => {
    return [...filteredCustomers].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'orderValueHigh') return b.orderValue - a.orderValue;
      if (sortBy === 'orderValueLow') return a.orderValue - b.orderValue;
      if (sortBy === 'recent') {
        return new Date(b.lastOrder).getTime() - new Date(a.lastOrder).getTime();
      }
      return 0;
    });
  }, [filteredCustomers, sortBy]);

  return (
    <DashboardLayout title="Customer Analysis">
      <div className="grid gap-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Customers"
            value="478"
            description="Active subscribers"
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
            title="Average Order Value"
            value="$42.99"
            description="Per customer"
            trend={{ value: 3.5, isPositive: true }}
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
            title="Retention Rate"
            value="86.5%"
            description="Last 90 days"
            trend={{ value: 1.2, isPositive: true }}
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
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            }
          />
          <StatCard
            title="New Customers"
            value="45"
            description="Last 30 days"
            trend={{ value: 12.8, isPositive: true }}
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
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
            }
          />
        </div>

        {/* Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <div>
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Customers</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name (A-Z)</SelectItem>
                      <SelectItem value="orderValueHigh">Order Value (High to Low)</SelectItem>
                      <SelectItem value="orderValueLow">Order Value (Low to High)</SelectItem>
                      <SelectItem value="recent">Most Recent Orders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Search customers..." 
                    className="pl-8 w-[220px]" 
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
                <Button onClick={() => handleExport('pdf')}>Export PDF</Button>
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomerPreferencesChart />
          
          {/* Subscription Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Weekly Fruit Box</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Family Box</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2 bg-muted [&>div]:bg-fruitbox-orange" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Office Box</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <Progress value={18} className="h-2 bg-muted [&>div]:bg-fruitbox-purple" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Healthy Snack Box</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-2 bg-muted [&>div]:bg-fruitbox-leaf" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Premium Exotic Box</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <Progress value={5} className="h-2 bg-muted [&>div]:bg-fruitbox-red" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Table */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Subscription Type</TableHead>
                  <TableHead>Order Value</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Preferences</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.subscription}</TableCell>
                    <TableCell>${customer.orderValue.toFixed(2)}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
                    <TableCell>
                      <Badge className={`${
                        customer.status === 'active' ? 'bg-fruitbox-green' : 
                        customer.status === 'paused' ? 'bg-amber-500' : 'bg-red-500'
                      }`}>
                        {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {customer.preferences.map((pref, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing 1-10 of 478 customers
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

export default CustomerReport;
