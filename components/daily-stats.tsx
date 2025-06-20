import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import clsx from "clsx"
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


const kpiData = [
  { name: "Total Transactions", value: "4,567", change: "+12.5%", trend: "up",label:"vs 4,065 yesterday" },
  { name: "Sucess Rate", value: "4567", change: "97.8%", trend: "down", label:"100 failures" },
  { name: "Peak Hour", value: "551", change: "09:00", trend: "up",label:"transactions/hour" },
  { name: "Avg Processing", value: "2.1s", change: "-15.3%", trend: "down", label:"vs 2.5s yesterday" },
]

export function DailyStats() {

  const COLORS = ['#00aae7', '#2368a0', '#ef4048', '#8c8c8c'];

  const getBadgeColor = (ratio: number) => {
    if (ratio >= 97) return "bg-[#0d416b]";
    if (ratio >= 90) return "bg-[#00aae7]";
    return "#ef4048";
  };


  return (
    <div className="space-y-6">

      {/* <div className="flex items-center justify-between">
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
      </div> */}

      <Card className="h-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <div>
            <CardTitle className="text-3xl font-bold tracking-tight">Daily Stats</CardTitle>
            <p className="text-sm text-muted-foreground">
              Detailed daily transaction analysis and success ratios
            </p>
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
        </CardHeader>

        <CardContent>
          {/* Place your daily stats content here */}
        </CardContent>
      </Card>


      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {["#2368a0", "#00aae7", "#00aae7", "#2368a0"].map((bg, idx) => {
                const kpi = kpiData[idx];
                return (
                  <div key={kpi.name} className="relative">
                    {/* Left colored strip */}
                    <div
                      className="absolute top-0 left-0 h-full w-2 rounded-l-md"
                      style={{ backgroundColor: bg }}
                    />
      
                    <Card className="pl-3">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{kpi.name}</CardTitle>
                        <Badge
                          className={clsx("text-white", {
                            "bg-[#2368a0]": kpi.trend === "up",
                            "bg-[#00aae7]": kpi.trend !== "up",
                          })}
                        >
                          {kpi.change}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{kpi.value}</div>
                        <div className="text-sm text-muted-foreground">{kpi.label}</div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
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
                <Bar dataKey="success" stackId="a" fill="#2368a0" name="Success" />
                <Bar dataKey="failure" stackId="a" fill="#ef4048" name="Failure" />
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
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                    <Badge
                      className={`text-white ${getBadgeColor(partner.ratio)}`}
                    >
                      {partner.ratio}%</Badge>
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
