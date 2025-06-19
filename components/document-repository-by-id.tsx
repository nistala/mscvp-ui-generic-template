"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, RefreshCw, Clock, CheckCircle, XCircle } from "lucide-react"


type DocumentRepositoryByIdProps = {
  docId: string;
  onBack: () => void;
};

const documentDetails = {
  id: "DOC-2024-001",
  type: "EDI 850 (Purchase Order)",
  partner: "Partner A",
  status: "Processed",
  direction: "Inbound",
  timestamp: "2024-01-15 09:30:15",
  size: "2.4 KB",
  reference: "PO-12345",
  sender: "PARTNER_A_ID",
  receiver: "OUR_COMPANY_ID",
  controlNumber: "000000001",
  functionalGroup: "PO",
}

const traceLog = [
  {
    timestamp: "2024-01-15 09:30:15",
    event: "Document Received",
    status: "success",
    details: "EDI document received from Partner A",
  },
  {
    timestamp: "2024-01-15 09:30:16",
    event: "Syntax Validation",
    status: "success",
    details: "Document structure validated successfully",
  },
  {
    timestamp: "2024-01-15 09:30:17",
    event: "Business Validation",
    status: "success",
    details: "Business rules validation passed",
  },
  {
    timestamp: "2024-01-15 09:30:18",
    event: "Data Mapping",
    status: "success",
    details: "EDI data mapped to internal format",
  },
  {
    timestamp: "2024-01-15 09:30:19",
    event: "Database Update",
    status: "success",
    details: "Purchase order created in system",
  },
  {
    timestamp: "2024-01-15 09:30:20",
    event: "Acknowledgment Sent",
    status: "success",
    details: "997 Functional Acknowledgment sent to Partner A",
  },
]

const documentContent = `ISA*00*          *00*          *ZZ*PARTNER_A_ID   *ZZ*OUR_COMPANY_ID *240115*0930*U*00401*000000001*0*P*>~
GS*PO*PARTNER_A_ID*OUR_COMPANY_ID*20240115*0930*1*X*004010~
ST*850*0001~
BEG*00*SA*PO-12345**20240115~
REF*VN*VENDOR123~
DTM*002*20240120~
N1*ST*SHIP TO LOCATION~
N3*123 MAIN STREET~
N4*ANYTOWN*CA*12345*US~
PO1*1*100*EA*10.50**VP*PRODUCT123*VN*VENDOR_PART_456~
CTT*1~
SE*10*0001~
GE*1*1~
IEA*1*000000001~`

export function DocumentRepositoryById({ docId, onBack }: DocumentRepositoryByIdProps) {
  const [searchId, setSearchId] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Document Repository by ID</h2>
        <p className="text-muted-foreground">Quick lookup for documents using transaction or reference ID</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Document Lookup</CardTitle>
          <CardDescription>Enter a document ID, transaction ID, or reference number</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <div className="flex-1">
              <Label htmlFor="searchId" className="sr-only">
                Document ID
              </Label>
              <Input
                id="searchId"
                placeholder="Enter Document ID, Transaction ID, or Reference..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Document Details */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Document Details</CardTitle>
            <CardDescription>Complete information and processing history</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reprocess
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trace">Trace Log</TabsTrigger>
              <TabsTrigger value="content">Document Content</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Document ID</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.id}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Document Type</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.type}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Trading Partner</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.partner}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Status</Label>
                    <Badge variant="default" className="mt-1">
                      {documentDetails.status}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Direction</Label>
                    <Badge variant="outline" className="mt-1">
                      {documentDetails.direction}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Timestamp</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.timestamp}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">File Size</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.size}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Reference Number</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.reference}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Control Number</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.controlNumber}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Functional Group</Label>
                    <p className="text-sm text-muted-foreground">{documentDetails.functionalGroup}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trace" className="space-y-4">
              <div className="space-y-4">
                {traceLog.map((log, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {log.status === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : log.status === "error" ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{log.event}</p>
                        <p className="text-xs text-muted-foreground">{log.timestamp}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{log.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Raw EDI Content</Label>
                <div className="bg-muted p-4 rounded-md">
                  <pre className="text-xs font-mono whitespace-pre-wrap overflow-x-auto">{documentContent}</pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
