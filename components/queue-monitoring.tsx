import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RefreshCw, Play, Square, AlertCircle } from "lucide-react"

const queueStatus = [
  {
    name: "Inbound Processing",
    pending: 45,
    inProgress: 12,
    completed: 1234,
    failed: 3,
    avgProcessingTime: "2.3s",
    status: "healthy",
  },
  {
    name: "Outbound Processing",
    pending: 23,
    inProgress: 8,
    completed: 987,
    failed: 1,
    avgProcessingTime: "1.8s",
    status: "healthy",
  },
  {
    name: "Acknowledgment Processing",
    pending: 67,
    inProgress: 15,
    completed: 2156,
    failed: 8,
    avgProcessingTime: "3.1s",
    status: "warning",
  },
  {
    name: "Error Processing",
    pending: 12,
    inProgress: 2,
    completed: 45,
    failed: 0,
    avgProcessingTime: "5.2s",
    status: "healthy",
  },
]

const activeTransactions = [
  {
    id: "TXN-2024-001",
    type: "EDI 850",
    partner: "Partner A",
    status: "Processing",
    startTime: "09:30:15",
    duration: "00:02:34",
    progress: 75,
  },
  {
    id: "TXN-2024-002",
    type: "EDI 855",
    partner: "Partner B",
    status: "Validating",
    startTime: "09:28:42",
    duration: "00:04:07",
    progress: 45,
  },
  {
    id: "TXN-2024-003",
    type: "EDI 856",
    partner: "Partner C",
    status: "Transmitting",
    startTime: "09:32:18",
    duration: "00:00:51",
    progress: 90,
  },
]

export function QueueMonitoring() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Queue Monitoring</h2>
          <p className="text-muted-foreground">Live status of transaction queues and processing</p>
        </div>
        <Button variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Queue Status Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {queueStatus.map((queue) => (
          <Card key={queue.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{queue.name}</CardTitle>
              <Badge
                variant={
                  queue.status === "healthy" ? "default" : queue.status === "warning" ? "secondary" : "destructive"
                }
              >
                {queue.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Pending: {queue.pending}</span>
                  <span>In Progress: {queue.inProgress}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Completed: {queue.completed}</span>
                  <span>Failed: {queue.failed}</span>
                </div>
                <div className="text-xs text-muted-foreground">Avg: {queue.avgProcessingTime}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Transactions</CardTitle>
          <CardDescription>Currently processing transactions with real-time status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.partner}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.status}</Badge>
                  </TableCell>
                  <TableCell>{transaction.startTime}</TableCell>
                  <TableCell>{transaction.duration}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={transaction.progress} className="w-[60px]" />
                      <span className="text-sm text-muted-foreground">{transaction.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Square className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Queue Controls */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Queue Controls</CardTitle>
            <CardDescription>Manage queue processing and system operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Button>Start All Queues</Button>
              <Button variant="outline">Pause All Queues</Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Clear Completed</Button>
              <Button variant="destructive">
                <AlertCircle className="mr-2 h-4 w-4" />
                Emergency Stop
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Overall system performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>CPU Usage</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Memory Usage</span>
                <span>62%</span>
              </div>
              <Progress value={62} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Queue Capacity</span>
                <span>78%</span>
              </div>
              <Progress value={78} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
