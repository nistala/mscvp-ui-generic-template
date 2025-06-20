import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

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

export function TPVolumes() {
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
        <Card className="bg-[#cbe6f3]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <Badge variant="default">+9.2%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">107,700</div>
            <p className="text-xs text-muted-foreground">transactions this month</p>
          </CardContent>
        </Card>
        <Card className="bg-[#f5e7e0]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Partner</CardTitle>
            <Badge variant="secondary">Partner A</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37,500</div>
            <p className="text-xs text-muted-foreground">34.8% of total volume</p>
          </CardContent>
        </Card>
        <Card className="bg-[#ebfaeb]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
            <Badge variant="default">3,590</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,590</div>
            <p className="text-xs text-muted-foreground">transactions per day</p>
          </CardContent>
        </Card>
        <Card className="bg-[#f4e8f7]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <Badge variant="default">+9.2%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9.2%</div>
            <p className="text-xs text-muted-foreground">vs previous month</p>
          </CardContent>
        </Card>
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
                <Bar dataKey="partnerA" fill="#8884d8" name="Partner A" />
                <Bar dataKey="partnerB" fill="#82ca9d" name="Partner B" />
                <Bar dataKey="partnerC" fill="#ffc658" name="Partner C" />
                <Bar dataKey="partnerD" fill="#ff7300" name="Partner D" />
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
                <Line type="monotone" dataKey="volume" stroke="#8884d8" strokeWidth={2} name="Volume" />
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
                    <Badge variant={partner.trend === "up" ? "default" : "secondary"}>
                      {partner.trend === "up" ? "↗" : "↘"} {partner.trend}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={partner.trend === "up" ? "text-green-600" : "text-red-600"}>{partner.change}</span>
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
