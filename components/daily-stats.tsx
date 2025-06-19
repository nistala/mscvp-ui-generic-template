import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const dailyData = [
  { hour: "00", success: 120, failure: 5, total: 125 },
  { hour: "01", success: 95, failure: 3, total: 98 },
  { hour: "02", success: 78, failure: 2, total: 80 },
  { hour: "03", success: 65, failure: 1, total: 66 },
  { hour: "04", success: 89, failure: 4, total: 93 },
  { hour: "05", success: 145, failure: 8, total: 153 },
  { hour: "06", success: 234, failure: 12, total: 246 },
  { hour: "07", success: 345, failure: 18, total: 363 },
  { hour: "08", success: 456, failure: 23, total: 479 },
  { hour: "09", success: 523, failure: 28, total: 551 },
  { hour: "10", success: 487, failure: 25, total: 512 },
  { hour: "11", success: 445, failure: 22, total: 467 },
]

const documentTypeData = [
  { name: "EDI 850", value: 45, color: "#0088FE" },
  { name: "EDI 855", value: 25, color: "#00C49F" },
  { name: "EDI 856", value: 20, color: "#FFBB28" },
  { name: "EDI 810", value: 10, color: "#FF8042" },
]

const partnerData = [
  { partner: "Partner A", success: 1234, failure: 23, ratio: 98.1 },
  { partner: "Partner B", success: 987, failure: 18, ratio: 98.2 },
  { partner: "Partner C", success: 756, failure: 45, ratio: 94.4 },
  { partner: "Partner D", success: 543, failure: 12, ratio: 97.8 },
  { partner: "Partner E", success: 432, failure: 8, ratio: 98.2 },
]

export function DailyStats() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Daily Stats</h2>
          <p className="text-muted-foreground">Detailed daily transaction analysis and success ratios</p>
        </div>
        <Select defaultValue="today">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="last7days">Last 7 Days</SelectItem>
            <SelectItem value="last30days">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#cbe6f3]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Badge variant="default">+12.5%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,567</div>
            <p className="text-xs text-muted-foreground">vs 4,065 yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-[#f5e7e0]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Badge variant="default">97.8%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,467</div>
            <p className="text-xs text-muted-foreground">100 failures</p>
          </CardContent>
        </Card>
        <Card className="bg-[#ebfaeb]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hour</CardTitle>
            <Badge variant="secondary">09:00</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">551</div>
            <p className="text-xs text-muted-foreground">transactions/hour</p>
          </CardContent>
        </Card>
        <Card className="bg-[#f4e8f7]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Processing</CardTitle>
            <Badge variant="default">-15.3%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1s</div>
            <p className="text-xs text-muted-foreground">vs 2.5s yesterday</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Hourly Transaction Volume */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Hourly Transaction Volume</CardTitle>
            <CardDescription>Success vs failure breakdown by hour</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="success" stackId="a" fill="#8884d8" name="Success" />
                <Bar dataKey="failure" stackId="a" fill="#82ca9d" name="Failure" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Document Type Distribution */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Document Type Distribution</CardTitle>
            <CardDescription>Transaction volume by document type</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={documentTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {documentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Partner Success Ratios */}
      <Card>
        <CardHeader>
          <CardTitle>Partner Success Ratios</CardTitle>
          <CardDescription>Success vs failure ratios by trading partner</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {partnerData.map((partner) => (
              <div key={partner.partner} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{partner.partner}</span>
                    <Badge variant={partner.ratio >= 97 ? "default" : "secondary"}>{partner.ratio}%</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {partner.success.toLocaleString()} success, {partner.failure} failures
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
