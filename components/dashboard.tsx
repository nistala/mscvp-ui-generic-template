import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import clsx from "clsx"

const kpiData = [
  { name: "Total Transactions", value: "24,567", change: "+12.5%", trend: "up" },
  { name: "Failed Transactions", value: "342", change: "-8.2%", trend: "down" },
  { name: "Avg Processing Time", value: "2.3s", change: "-15.3%", trend: "down" },
  { name: "Active Partners", value: "156", change: "+3.1%", trend: "up" },
]

const dailyTrends = [
  { day: "Mon", transactions: 3200, failures: 45 },
  { day: "Tue", transactions: 3800, failures: 32 },
  { day: "Wed", transactions: 3400, failures: 28 },
  { day: "Thu", transactions: 4100, failures: 51 },
  { day: "Fri", transactions: 3900, failures: 38 },
  { day: "Sat", transactions: 2800, failures: 22 },
  { day: "Sun", transactions: 2400, failures: 18 },
]

const partnerData = [
  { name: "Partner A", value: 35, color: "#0088FE" },
  { name: "Partner B", value: 25, color: "#00C49F" },
  { name: "Partner C", value: 20, color: "#FFBB28" },
  { name: "Partner D", value: 15, color: "#FF8042" },
  { name: "Others", value: 5, color: "#8884D8" },
]

const documentTypes = [
  { type: "EDI 850 (Purchase Order)", count: 8542, percentage: 85 },
  { type: "EDI 855 (Purchase Order Acknowledgment)", count: 7234, percentage: 72 },
  { type: "EDI 856 (Advance Ship Notice)", count: 6891, percentage: 69 },
  { type: "EDI 810 (Invoice)", count: 5432, percentage: 54 },
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Overview of EDI transaction processing and system performance</p>
      </div> */}

      <Card className="h-24">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle className="text-3xl " style={{ display: "flex", flexDirection: "row" }}>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm font-bold text-[#8c8c8c]">Overview of EDI transaction processing and system performance</div>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {["#00aae7", "#b7b2b3", "#0d416b", "#8c8c8c"].map((bg, idx) => {
          const kpi = kpiData[idx];
          return (
            <Card key={kpi.name}
            // style={{ backgroundColor: bg }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.name}</CardTitle>
                <Badge
                  // variant={kpi.trend === "up" ? "default" : "secondary"}
                  className={clsx("text-white", {
                    "bg-[#2368a0]": kpi.trend === "up",
                    "bg-[#00aae7]": kpi.trend !== "up",
                  })}
                >{kpi.change}</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div> */}

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
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>


      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Daily Trends Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Daily Transaction Trends</CardTitle>
            <CardDescription>Transaction volume and failure rates over the past week</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dailyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="transactions" fill="#8884d8" name="Transactions" />
                <Bar dataKey="failures" fill="#82ca9d" name="Failures" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Partner Distribution */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Partner Distribution</CardTitle>
            <CardDescription>Transaction volume by trading partner</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={partnerData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {partnerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Document Types Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Document Types Summary</CardTitle>
          <CardDescription>Processing volume by EDI document type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documentTypes.map((doc) => (
              <div key={doc.type} className="flex items-center space-x-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{doc.type}</p>
                  <p className="text-sm text-muted-foreground">{doc.count.toLocaleString()} transactions</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={doc.percentage} className="w-[60px]" />
                  <span className="text-sm text-muted-foreground w-[40px]">{doc.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
