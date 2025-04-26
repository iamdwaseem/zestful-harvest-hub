
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample data
const data = [
  { name: 'Fruits', value: 45 },
  { name: 'Nuts', value: 20 },
  { name: 'Salads', value: 25 },
  { name: 'Mixed', value: 10 },
];

const ageDistribution = [
  { name: '18-24', value: 15 },
  { name: '25-34', value: 30 },
  { name: '35-44', value: 25 },
  { name: '45-54', value: 20 },
  { name: '55+', value: 10 },
];

const COLORS = ['#4CAF50', '#FF9800', '#8BC34A', '#9C27B0', '#00BCD4'];

interface CustomerPreferencesChartProps {
  className?: string;
}

const CustomerPreferencesChart: React.FC<CustomerPreferencesChartProps> = ({ className }) => {
  const [dataType, setDataType] = React.useState('preferences');

  const chartData = dataType === 'preferences' ? data : ageDistribution;

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle>Customer Analysis</CardTitle>
        <Select value={dataType} onValueChange={setDataType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select data type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="preferences">Product Preferences</SelectItem>
            <SelectItem value="age">Age Distribution</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip 
                formatter={(value) => [`${value}%`, undefined]} 
                contentStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerPreferencesChart;
