
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample data
const data = [
  { name: 'Apples', stock: 120, capacity: 150, threshold: 30 },
  { name: 'Bananas', stock: 80, capacity: 100, threshold: 20 },
  { name: 'Oranges', stock: 40, capacity: 100, threshold: 25 },
  { name: 'Grapes', stock: 90, capacity: 120, threshold: 30 },
  { name: 'Berries', stock: 15, capacity: 80, threshold: 20 },
  { name: 'Mangoes', stock: 60, capacity: 80, threshold: 15 },
];

interface InventoryChartProps {
  className?: string;
}

const InventoryChart: React.FC<InventoryChartProps> = ({ className }) => {
  const [category, setCategory] = React.useState('all');

  // In a real application, we would filter based on category
  const filteredData = data;

  const getStockColor = (stock: number, capacity: number, threshold: number) => {
    if (stock <= threshold) return '#F44336'; // Red for low stock
    if (stock >= capacity * 0.8) return '#4CAF50'; // Green for high stock
    return '#FF9800'; // Orange for medium stock
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle>Inventory Levels</CardTitle>
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
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'stock') return [`${value} units`, 'Current Stock'];
                  if (name === 'capacity') return [`${value} units`, 'Total Capacity'];
                  if (name === 'threshold') return [`${value} units`, 'Restock Threshold'];
                  return [value, name];
                }}
                contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend />
              <Bar dataKey="stock" name="Current Stock">
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getStockColor(entry.stock, entry.capacity, entry.threshold)} 
                  />
                ))}
              </Bar>
              <Bar dataKey="capacity" name="Total Capacity" fill="#8884d8" fillOpacity={0.3} />
              <Bar dataKey="threshold" name="Restock Threshold" fill="#F44336" fillOpacity={0.3} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryChart;
