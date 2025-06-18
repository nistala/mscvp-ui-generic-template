"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, RefreshCw, AlertTriangle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const failedTransactions = [
  {
    id: "TXN-001",
    type: "EDI 850",
    partner: "Partner A",
    status: "Failed",
    error: "Connection timeout",
    timestamp: "2024-01-15 09:30:15",
    retryCount: 2,
  },
  {
    id: "TXN-002",
    type: "EDI 855",
    partner: "Partner B",
    status: "Stuck",
    error: "Invalid format",
    timestamp: "2024-01-15 08:45:22",
    retryCount: 0,
  },
  {
    id: "TXN-003",
    type: "EDI 856",
    partner: "Partner C",
    status: "Failed",
    error: "Authentication failed",
    timestamp: "2024-01-15 07:15:33",
    retryCount: 1,
  },
]

export function Reprocess() {
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([])
  const [dateFrom, setDateFrom] = useState<Date>()
  const [dateTo, setDateTo] = useState<Date>()

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTransactions(failedTransactions.map((t) => t.id))
    } else {
      setSelectedTransactions([])
    }
  }

  const handleSelectTransaction = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedTransactions([...selectedTransactions, id])
    } else {
      setSelectedTransactions(selectedTransactions.filter((t) => t !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reprocess</h2>
        <p className="text-muted-foreground">Reprocess failed or stuck transactions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Transactions</CardTitle>
          <CardDescription>Filter by transaction type, status, and date range</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <Label>Transaction Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="EDI 850">EDI 850</SelectItem>
                  <SelectItem value="EDI 855">EDI 855</SelectItem>
                  <SelectItem value="EDI 856">EDI 856</SelectItem>
                  <SelectItem value="EDI 810">EDI 810</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                  <SelectItem value="Stuck">Stuck</SelectItem>
                  <SelectItem value="Timeout">Timeout</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !dateFrom && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? format(dateFrom, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !dateTo && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Failed Transactions</CardTitle>
            <CardDescription>{failedTransactions.length} transactions found</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" disabled={selectedTransactions.length === 0}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Reprocess Selected ({selectedTransactions.length})
            </Button>
            <Button variant="destructive" disabled={selectedTransactions.length === 0}>
              <AlertTriangle className="mr-2 h-4 w-4" />
              Bulk Reprocess
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedTransactions.length === failedTransactions.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Error</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Retry Count</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {failedTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedTransactions.includes(transaction.id)}
                      onCheckedChange={(checked) => handleSelectTransaction(transaction.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.partner}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.status === "Failed" ? "destructive" : "secondary"}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.error}</TableCell>
                  <TableCell>{transaction.timestamp}</TableCell>
                  <TableCell>{transaction.retryCount}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Reprocess
                    </Button>
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
