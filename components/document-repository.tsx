"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarIcon,
  Search,
  Download,
  Eye,
  RefreshCw,
  MoreHorizontal,
  AlertTriangle,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const documents = [
  {
    id: "DOC-2024-001",
    type: "EDI 850",
    partner: "Partner A",
    status: "Processed",
    direction: "Inbound",
    timestamp: "2024-01-15 09:30:15",
    size: "2.4 KB",
    reference: "PO-12345",
  },
  {
    id: "DOC-2024-002",
    type: "EDI 855",
    partner: "Partner B",
    status: "Failed",
    direction: "Outbound",
    timestamp: "2024-01-15 08:45:22",
    size: "1.8 KB",
    reference: "ACK-67890",
  },
  {
    id: "DOC-2024-003",
    type: "EDI 856",
    partner: "Partner C",
    status: "Processing",
    direction: "Inbound",
    timestamp: "2024-01-15 07:15:33",
    size: "3.2 KB",
    reference: "ASN-54321",
  },
  {
    id: "DOC-2024-004",
    type: "EDI 810",
    partner: "Partner A",
    status: "Processed",
    direction: "Outbound",
    timestamp: "2024-01-15 06:30:45",
    size: "2.1 KB",
    reference: "INV-98765",
  },
];

export function DocumentRepository() {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>(
    []
  );
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTransactions(documents.map((t) => t.id));
    } else {
      setSelectedTransactions([]);
    }
  };

  const handleSelectTransaction = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedTransactions([...selectedTransactions, id]);
    } else {
      setSelectedTransactions(selectedTransactions.filter((t) => t !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Document Repository
        </h2>
        <p className="text-muted-foreground">
          Centralized view of all transaction documents
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Documents</CardTitle>
          <CardDescription>
            Filter by document type, status, partner, and date range
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Document ID, Reference..."
                  className="pl-8"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Document Type</Label>
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
                  <SelectItem value="Processed">Processed</SelectItem>
                  <SelectItem value="Processing">Processing</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Partner</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All partners" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All partners</SelectItem>
                  <SelectItem value="Partner A">Partner A</SelectItem>
                  <SelectItem value="Partner B">Partner B</SelectItem>
                  <SelectItem value="Partner C">Partner C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateFrom && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? format(dateFrom, "PPP") : "Pick date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateFrom}
                    onSelect={setDateFrom}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateTo && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateTo ? format(dateTo, "PPP") : "Pick date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateTo}
                    onSelect={setDateTo}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button>Apply Filters</Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Results
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Document List</CardTitle>
            <CardDescription>
              {documents.length} documents found
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              disabled={
              selectedTransactions.length === 0 ||
              selectedTransactions.length === documents.length
              }
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reprocess Selected ({selectedTransactions.length})
            </Button>
            <Button
              variant="destructive"
              disabled={selectedTransactions.length !== documents.length}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Bulk Reprocess
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-[#e6e8e9]">
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={selectedTransactions.length === documents.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>Document ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedTransactions.includes(doc.id)}
                      onCheckedChange={(checked) =>
                        handleSelectTransaction(doc.id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{doc.id}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.partner}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        doc.status === "Processed"
                          ? "default"
                          : doc.status === "Processing"
                            ? "secondary"
                            : doc.status === "Failed"
                              ? "destructive"
                              : "outline"
                      }
                    >
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{doc.direction}</Badge>
                  </TableCell>
                  <TableCell>{doc.timestamp}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.reference}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                          // Set a state to show the document-repository-by-id component for this doc.id
                          setSelectedDocumentId(doc.id);
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Document
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Trace Log</DropdownMenuItem>
                        <DropdownMenuItem>Reprocess</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
