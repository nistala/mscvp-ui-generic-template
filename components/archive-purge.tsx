"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Archive, Trash2, AlertTriangle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"

const archiveJobs = [
  {
    id: "AJ-001",
    name: "Monthly Archive - December 2023",
    type: "Scheduled",
    status: "Completed",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
    recordsProcessed: 125000,
    dataSize: "2.4 GB",
    progress: 100,
  },
  {
    id: "AJ-002",
    name: "Quarterly Purge - Q4 2023",
    type: "Manual",
    status: "Running",
    startDate: "2024-01-15",
    endDate: null,
    recordsProcessed: 45000,
    dataSize: "890 MB",
    progress: 65,
  },
  {
    id: "AJ-003",
    name: "Partner A Data Archive",
    type: "Scheduled",
    status: "Pending",
    startDate: "2024-01-20",
    endDate: null,
    recordsProcessed: 0,
    dataSize: "0 MB",
    progress: 0,
  },
]

const retentionPolicies = [
  {
    id: "1",
    name: "Transaction Documents",
    dataType: "EDI Documents",
    retentionPeriod: "7 years",
    archiveAfter: "1 year",
    purgeAfter: "7 years",
    status: "Active",
  },
  {
    id: "2",
    name: "System Logs",
    dataType: "Application Logs",
    retentionPeriod: "2 years",
    archiveAfter: "6 months",
    purgeAfter: "2 years",
    status: "Active",
  },
  {
    id: "3",
    name: "Error Reports",
    dataType: "Error Logs",
    retentionPeriod: "5 years",
    archiveAfter: "1 year",
    purgeAfter: "5 years",
    status: "Active",
  },
]

export function ArchivePurge() {
  const [archiveDate, setArchiveDate] = useState<Date>()
  const [purgeDate, setPurgeDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Archive & Purge</h2>
        <p className="text-muted-foreground">
          Manage data archiving jobs and retention policies
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Archive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 running, 1 pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Archived</CardTitle>
            <Badge variant="default">This Month</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.3 GB</div>
            <p className="text-xs text-muted-foreground">
              170,000 records
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Saved</CardTitle>
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 GB</div>
            <p className="text-xs text-muted-foreground">
              From purged data
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention Policies</CardTitle>
            <Badge variant="secondary">3 Active</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              All policies active
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Schedule Archive Job */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule Archive Job</CardTitle>
            <CardDescription>
              Create a new data archiving job
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="jobName">Job Name</Label>
              <Input id="jobName" placeholder="Enter job name" />
            </div>
            <div className="space-y-2">
              <Label>Data Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select data type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transactions">Transaction Documents</SelectItem>
                  <SelectItem value="logs">System Logs</SelectItem>
                  <SelectItem value="errors">Error Reports</SelectItem>
                  <SelectItem value="all">All Data Types</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Archive Date Range</Label>
              <div className="grid gap-2 md:grid-cols-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal",
                        !archiveDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {archiveDate ? format(archiveDate, "PPP") : "From date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={archiveDate}
                      onSelect={setArchiveDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Input placeholder="To date (optional)" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Schedule Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Run Immediately</SelectItem>
                  <SelectItem value="scheduled">Schedule for Later</SelectItem>
                  <SelectItem value="recurring">Recurring Job</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">
              <Archive className="mr-2 h-4 w-4" />
              Schedule Archive Job
            </Button>
          </CardContent>
        </Card>

        {/* Manual Purge */}
        <Card>
          <CardHeader>
            <CardTitle>Manual Purge</CardTitle>
            <CardDescription>
              Permanently delete old data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-md">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">
                  Warning: Purged data cannot be recovered
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Data Type</Label>
              </div>
              </CardContent>
              </Card>
              </div>
              </div>
  )}