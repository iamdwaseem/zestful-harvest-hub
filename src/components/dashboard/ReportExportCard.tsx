
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface ReportExportCardProps {
  className?: string;
}

const ReportExportCard: React.FC<ReportExportCardProps> = ({ className }) => {
  const [reportType, setReportType] = React.useState('sales');
  const [format, setFormat] = React.useState('pdf');
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Report Export Started",
      description: `Your ${reportType} report will be downloaded as ${format.toUpperCase()} shortly.`,
    });
    
    // In a real application, this would trigger an API call to generate and download the report
    setTimeout(() => {
      toast({
        title: "Report Generated",
        description: "Your report has been successfully generated and downloaded.",
      });
    }, 2000);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Export Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Report Type
            </label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Report</SelectItem>
                <SelectItem value="inventory">Inventory Report</SelectItem>
                <SelectItem value="customer">Customer Analysis</SelectItem>
                <SelectItem value="comprehensive">Comprehensive Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Format
            </label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={handleExport} 
            className="w-full bg-fruitbox-green hover:bg-fruitbox-green/90"
          >
            Generate & Download
          </Button>
          
          <p className="text-xs text-gray-500 mt-2">
            Reports are generated based on the currently selected filters in each dashboard section.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportExportCard;
