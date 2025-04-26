
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import InventoryChart from '@/components/dashboard/InventoryChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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
import { useToast } from '@/hooks/use-toast';

const InventoryReport = () => {
  const [category, setCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('name');
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: `Exporting ${format.toUpperCase()}`,
      description: "Your inventory report is being generated and will download shortly."
    });
  };

  const inventoryItems = [
    { 
      id: 1, 
      name: "Apples", 
      category: "Fruits", 
      stock: 120, 
      capacity: 150, 
      threshold: 30,
      expiryDate: "2025-05-10",
      supplier: "Organic Farms Inc."
    },
    { 
      id: 2, 
      name: "Bananas", 
      category: "Fruits", 
      stock: 80, 
      capacity: 100, 
      threshold: 20,
      expiryDate: "2025-05-03",
      supplier: "Tropical Imports Ltd."
    },
    { 
      id: 3, 
      name: "Oranges", 
      category: "Fruits", 
      stock: 40, 
      capacity: 100, 
      threshold: 25,
      expiryDate: "2025-05-15",
      supplier: "Citrus Growers Co."
    },
    { 
      id: 4, 
      name: "Almonds", 
      category: "Nuts", 
      stock: 90, 
      capacity: 120, 
      threshold: 30,
      expiryDate: "2025-08-20",
      supplier: "Nutty Harvests"
    },
    { 
      id: 5, 
      name: "Mixed Berries", 
      category: "Fruits", 
      stock: 15, 
      capacity: 80, 
      threshold: 20,
      expiryDate: "2025-05-05",
      supplier: "Berry Farms Co."
    },
    { 
      id: 6, 
      name: "Walnuts", 
      category: "Nuts", 
      stock: 75, 
      capacity: 100, 
      threshold: 25,
      expiryDate: "2025-09-15",
      supplier: "Nutty Harvests"
    },
    { 
      id: 7, 
      name: "Caesar Salad Kit", 
      category: "Salads", 
      stock: 25, 
      capacity: 50, 
      threshold: 15,
      expiryDate: "2025-05-02",
      supplier: "Fresh Greens Inc."
    },
    { 
      id: 8, 
      name: "Greek Salad Kit", 
      category: "Salads", 
      stock: 18, 
      capacity: 50, 
      threshold: 15,
      expiryDate: "2025-05-01",
      supplier: "Fresh Greens Inc."
    },
    { 
      id: 9, 
      name: "Cashews", 
      category: "Nuts", 
      stock: 60, 
      capacity: 80, 
      threshold: 20,
      expiryDate: "2025-08-30",
      supplier: "Premium Nuts Co."
    },
    { 
      id: 10, 
      name: "Mangoes", 
      category: "Fruits", 
      stock: 30, 
      capacity: 80, 
      threshold: 15,
      expiryDate: "2025-05-07",
      supplier: "Tropical Imports Ltd."
    },
  ];

  // Filter inventory items based on category
  const filteredItems = React.useMemo(() => {
    if (category === 'all') return inventoryItems;
    return inventoryItems.filter(item => item.category.toLowerCase() === category);
  }, [category, inventoryItems]);

  // Sort inventory items
  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'stockLow') return a.stock - b.stock;
      if (sortBy === 'stockHigh') return b.stock - a.stock;
      if (sortBy === 'expiry') return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      return 0;
    });
  }, [filteredItems, sortBy]);

  return (
    <DashboardLayout title="Inventory Insights">
      <div className="grid gap-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Items in Stock"
            value="553"
            description="Across all categories"
            trend={{ value: 1.5, isPositive: true }}
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
            title="Low Stock Items"
            value="12"
            description="Need restocking"
            trend={{ value: 4.2, isPositive: false }}
            icon={
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-7 w-7 text-amber-500"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
            }
            className="border-amber-200"
          />
          <StatCard
            title="Expiring Soon"
            value="8"
            description="Within 5 days"
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
                className="h-7 w-7 text-red-500"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            }
            className="border-red-200"
          />
          <StatCard
            title="Inventory Value"
            value="$12,540"
            description="Current stock"
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
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="nuts">Nuts</SelectItem>
                      <SelectItem value="salads">Salads</SelectItem>
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
                      <SelectItem value="stockLow">Stock (Low to High)</SelectItem>
                      <SelectItem value="stockHigh">Stock (High to Low)</SelectItem>
                      <SelectItem value="expiry">Expiry Date</SelectItem>
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

        {/* Charts */}
        <InventoryChart />
        
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Distribution by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-fruitbox-green rounded-full"></div>
                    <span>Fruits</span>
                  </div>
                  <span className="text-sm font-medium">285 items (51%)</span>
                </div>
                <Progress value={51} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-fruitbox-orange rounded-full"></div>
                    <span>Nuts</span>
                  </div>
                  <span className="text-sm font-medium">225 items (41%)</span>
                </div>
                <Progress value={41} className="h-2 bg-muted [&>div]:bg-fruitbox-orange" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-fruitbox-leaf rounded-full"></div>
                    <span>Salads</span>
                  </div>
                  <span className="text-sm font-medium">43 items (8%)</span>
                </div>
                <Progress value={8} className="h-2 bg-muted [&>div]:bg-fruitbox-leaf" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Items Table */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Items</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stock Level</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24">
                          <Progress 
                            value={(item.stock / item.capacity) * 100} 
                            className="h-2"
                            indicator={item.stock <= item.threshold ? "bg-red-500" : undefined}
                          />
                        </div>
                        <span className="text-sm">{item.stock}/{item.capacity}</span>
                      </div>
                    </TableCell>
                    <TableCell>{item.expiryDate}</TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell>
                      {item.stock <= item.threshold ? (
                        <Badge className="bg-red-500">Low Stock</Badge>
                      ) : new Date(item.expiryDate) <= new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) ? (
                        <Badge className="bg-amber-500">Expiring Soon</Badge>
                      ) : (
                        <Badge className="bg-fruitbox-green">Good</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing 1-10 of 45 entries
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

export default InventoryReport;
