
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample data
const data = [
  { name: 'Jan', sales: 4000, target: 4500 },
  { name: 'Feb', sales: 3000, target: 3500 },
  { name: 'Mar', sales: 5000, target: 4500 },
  { name: 'Apr', sales: 2780, target: 3000 },
  { name: 'May', sales: 1890, target: 2000 },
  { name: 'Jun', sales: 2390, target: 2500 },
  { name: 'Jul', sales: 3490, target: 3000 },
  { name: 'Aug', sales: 4000, target: 3500 },
  { name: 'Sep', sales: 2780, target: 2500 },
  { name: 'Oct', sales: 1890, target: 2000 },
  { name: 'Nov', sales: 2390, target: 2200 },
  { name: 'Dec', sales: 3490, target: 3000 },
];

interface SalesChartProps {
  className?: string;
  title?: string;
}

const SalesChart: React.FC<SalesChartProps> = ({ 
  className,
  title = "Sales Overview"
}) => {
  const [timeRange, setTimeRange] = React.useState('yearly');
  
  // In a real application, this would filter data based on the selected time range
  const filteredData = React.useMemo(() => {
    if (timeRange === 'monthly') {
      return data.slice(-1);
    } else if (timeRange === 'quarterly') {
      return data.slice(-3);
    } else if (timeRange === 'half-yearly') {
      return data.slice(-6);
    }
    return data;
  }, [timeRange]);

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle>{title}</CardTitle>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Last Month</SelectItem>
            <SelectItem value="quarterly">Last Quarter</SelectItem>
            <SelectItem value="half-yearly">Last 6 Months</SelectItem>
            <SelectItem value="yearly">Annual</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
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
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip 
                formatter={(value) => [`$${value}`, undefined]}
                contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stackId="1" 
                stroke="#4CAF50" 
                fill="#4CAF50" 
                fillOpacity={0.3} 
                activeDot={{ r: 6 }}
                name="Sales"
              />
              <Area 
                type="monotone" 
                dataKey="target" 
                stackId="2" 
                stroke="#FF9800" 
                fill="#FF9800" 
                fillOpacity={0.3}
                name="Target"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
