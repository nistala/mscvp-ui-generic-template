import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import clsx from "clsx"
const volumeData = [
  { period: "Week 1", partnerA: 2400, partnerB: 1800, partnerC: 1200, partnerD: 800 },
  { period: "Week 2", partnerA: 2600, partnerB: 1900, partnerC: 1100, partnerD: 900 },
  { period: "Week 3", partnerA: 2800, partnerB: 2100, partnerC: 1300, partnerD: 750 },
  { period: "Week 4", partnerA: 3200, partnerB: 2300, partnerC: 1400, partnerD: 850 },
]

const monthlyComparison = [
  { month: "Jan", volume: 45000, growth: 12.5 },
  { month: "Feb", volume: 48000, growth: 6.7 },
  { month: "Mar", volume: 52000, growth: 8.3 },
  { month: "Apr", volume: 49000, growth: -5.8 },
  { month: "May", volume: 54000, growth: 10.2 },
  { month: "Jun", volume: 58000, growth: 7.4 },
]

const partnerVolumes = [
  {
    partner: "Partner A",
    daily: 1250,
    weekly: 8750,
    monthly: 37500,
    trend: "up",
    change: "+15.2%",
  },
  {
    partner: "Partner B",
    daily: 890,
    weekly: 6230,
    monthly: 26700,
    trend: "up",
    change: "+8.7%",
  },
  {
    partner: "Partner C",
    daily: 650,
    weekly: 4550,
    monthly: 19500,
    trend: "down",
    change: "-3.2%",
  },
  {
    partner: "Partner D",
    daily: 420,
    weekly: 2940,
    monthly: 12600,
    trend: "up",
    change: "+12.1%",
  },
  {
    partner: "Partner E",
    daily: 380,
    weekly: 2660,
    monthly: 11400,
    trend: "down",
    change: "-1.8%",
  },
]


const kpiData = [
  { name: "Total Volume", value: "107,700", change: "+9.5%", label:"transactions this month",trend:"up" },
  { name: "Top Patners", value: "37,500", change: "Patner A", label:"34.8% of total volume", trend:"down" },
  { name: "Daily Average", value: "3590", change: "9.2%", label:"transactions per day",trend:"down"  },
  { name: "Growth Rate", value: "9.2%", change: "+3.1%", label:"vs previous month",trend:"up" },
]
export function TPVolumes() {

  const getTrendColor = (trend: string) =>
    trend === "up" ? "bg-[#0d416b]" : "bg-[#ef4048]";


  return (
    <div className="space-y-6">
      {/* <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">TP Volumes</h2>
          <p className="text-muted-foreground">Volumetric analysis by Trading Partner</p>
        </div>
        <Select defaultValue="monthly">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily View</SelectItem>
            <SelectItem value="weekly">Weekly View</SelectItem>
            <SelectItem value="monthly">Monthly View</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      <Card className="h-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <div>
            <CardTitle className="text-3xl font-bold tracking-tight">TP Volumes</CardTitle>
            <p className="text-sm text-muted-foreground">
              Volumetric analysis by Trading Partner
            </p>
          </div>

          <Select defaultValue="monthly">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily View</SelectItem>
              <SelectItem value="weekly">Weekly View</SelectItem>
              <SelectItem value="monthly">Monthly View</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent>
          {/* Add your chart or data content here */}
        </CardContent>
      </Card>


      {/* Volume Summary Cards */}
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
        {/* Weekly Volume Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Volume Trends</CardTitle>
            <CardDescription>Transaction volume by partner over the past 4 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="partnerA" fill="#0d416b" name="Partner A" />
                <Bar dataKey="partnerB" fill="#2368a0" name="Partner B" />
                <Bar dataKey="partnerC" fill="#00aae7" name="Partner C" />
                <Bar dataKey="partnerD" fill="#ef4048" name="Partner D" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Growth Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth Comparison</CardTitle>
            <CardDescription>Total volume and growth rate over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="volume" stroke="#0d416b" strokeWidth={2} name="Volume" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Partner Volume Table */}
      <Card>
        <CardHeader>
          <CardTitle>Partner Volume Breakdown</CardTitle>
          <CardDescription>Detailed volume analysis by trading partner</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner</TableHead>
                <TableHead>Daily Avg</TableHead>
                <TableHead>Weekly Total</TableHead>
                <TableHead>Monthly Total</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partnerVolumes.map((partner) => (
                <TableRow key={partner.partner}>
                  <TableCell className="font-medium">{partner.partner}</TableCell>
                  <TableCell>{partner.daily.toLocaleString()}</TableCell>
                  <TableCell>{partner.weekly.toLocaleString()}</TableCell>
                  <TableCell>{partner.monthly.toLocaleString()}</TableCell>
                  <TableCell>
                    {/* <Badge variant={partner.trend === "up" ? "default" : "secondary"}>
                      {partner.trend === "up" ? "↗" : "↘"} {partner.trend}
                    </Badge> */}
                    <Badge className={`text-white ${getTrendColor(partner.trend)}`}>
                      {partner.trend === "up" ? "↗" : "↘"} {partner.trend}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={partner.trend === "up" ? "text-[#0d416b]" : "text-[#ef4048]"}>{partner.change}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
