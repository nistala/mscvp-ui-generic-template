"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Plus, Edit, Trash2, MoreHorizontal, Building2 } from "lucide-react"

const partners = [
  {
    id: "1",
    name: "Partner A Corporation",
    partnerId: "PARTNER_A_ID",
    status: "Active",
    connectionType: "AS2",
    documentTypes: ["EDI 850", "EDI 855", "EDI 856", "EDI 810"],
    lastActivity: "2024-01-15 09:30",
    monthlyVolume: 15750,
  },
  {
    id: "2",
    name: "Partner B Industries",
    partnerId: "PARTNER_B_ID",
    status: "Active",
    connectionType: "SFTP",
    documentTypes: ["EDI 850", "EDI 855"],
    lastActivity: "2024-01-15 08:45",
    monthlyVolume: 8420,
  },
  {
    id: "3",
    name: "Partner C Solutions",
    partnerId: "PARTNER_C_ID",
    status: "Inactive",
    connectionType: "HTTP",
    documentTypes: ["EDI 856", "EDI 810"],
    lastActivity: "2024-01-10 16:20",
    monthlyVolume: 2100,
  },
]

export function Partners() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState<any>(null)

  return (
    <div className="space-y-6">
      {/* <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Partners</h2>
          <p className="text-muted-foreground">Manage trading partner profiles and EDI configurations</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Partner
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Partner</DialogTitle>
              <DialogDescription>Add a new trading partner with EDI configuration</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="partnerName">Partner Name *</Label>
                  <Input id="partnerName" placeholder="Enter partner name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partnerId">Partner ID *</Label>
                  <Input id="partnerId" placeholder="EDI Partner ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="connectionType">Connection Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select connection type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AS2">AS2</SelectItem>
                      <SelectItem value="SFTP">SFTP</SelectItem>
                      <SelectItem value="HTTP">HTTP/HTTPS</SelectItem>
                      <SelectItem value="FTP">FTP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="Active">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Testing">Testing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Allowed Document Types</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edi850" />
                    <Label htmlFor="edi850">EDI 850 (Purchase Order)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edi855" />
                    <Label htmlFor="edi855">EDI 855 (PO Acknowledgment)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edi856" />
                    <Label htmlFor="edi856">EDI 856 (Advance Ship Notice)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="edi810" />
                    <Label htmlFor="edi810">EDI 810 (Invoice)</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Additional notes about the partner..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Partner</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div> */}

      <Card className="h-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <div>
            <CardTitle className="text-3xl font-bold tracking-tight">Partners</CardTitle>
            <p className="text-sm text-muted-foreground">
              Manage trading partner profiles and EDI configurations
            </p>
          </div>

          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Partner
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Partner</DialogTitle>
                <DialogDescription>
                  Add a new trading partner with EDI configuration
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="partnerName">Partner Name *</Label>
                    <Input id="partnerName" placeholder="Enter partner name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partnerId">Partner ID *</Label>
                    <Input id="partnerId" placeholder="EDI Partner ID" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="connectionType">Connection Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select connection type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AS2">AS2</SelectItem>
                        <SelectItem value="SFTP">SFTP</SelectItem>
                        <SelectItem value="HTTP">HTTP/HTTPS</SelectItem>
                        <SelectItem value="FTP">FTP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue="Active">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Testing">Testing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Allowed Document Types</Label>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edi850" />
                      <Label htmlFor="edi850">EDI 850 (Purchase Order)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edi855" />
                      <Label htmlFor="edi855">EDI 855 (PO Acknowledgment)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edi856" />
                      <Label htmlFor="edi856">EDI 856 (Advance Ship Notice)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edi810" />
                      <Label htmlFor="edi810">EDI 810 (Invoice)</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Additional notes about the partner..." />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsCreateDialogOpen(false)}>Create Partner</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Search Partners</CardTitle>
          <CardDescription>Find partners by name, ID, or connection type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Partners</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="Search by name or partner ID..." className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Testing">Testing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Connection Type</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="AS2">AS2</SelectItem>
                  <SelectItem value="SFTP">SFTP</SelectItem>
                  <SelectItem value="HTTP">HTTP/HTTPS</SelectItem>
                  <SelectItem value="FTP">FTP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Partner List</CardTitle>
          <CardDescription>{partners.length} partners configured</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner Name</TableHead>
                <TableHead>Partner ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Connection Type</TableHead>
                <TableHead>Document Types</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Monthly Volume</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>{partner.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{partner.partnerId}</TableCell>
                  <TableCell>
                    <Badge variant={partner.status === "Active" ? "default" : "secondary"}>{partner.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{partner.connectionType}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {partner.documentTypes.slice(0, 2).map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                      {partner.documentTypes.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{partner.documentTypes.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{partner.lastActivity}</TableCell>
                  <TableCell>{partner.monthlyVolume.toLocaleString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedPartner(partner)
                            setIsEditDialogOpen(true)
                          }}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Partner
                        </DropdownMenuItem>
                        <DropdownMenuItem>Test Connection</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Archive Partner
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Partner Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Partner</DialogTitle>
            <DialogDescription>Update trading partner configuration</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="editPartnerName">Partner Name *</Label>
                <Input
                  id="editPartnerName"
                  defaultValue={selectedPartner?.name || ""}
                  placeholder="Enter partner name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editPartnerId">Partner ID *</Label>
                <Input
                  id="editPartnerId"
                  defaultValue={selectedPartner?.partnerId || ""}
                  placeholder="EDI Partner ID"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="editConnectionType">Connection Type</Label>
                <Select defaultValue={selectedPartner?.connectionType || "AS2"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select connection type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AS2">AS2</SelectItem>
                    <SelectItem value="SFTP">SFTP</SelectItem>
                    <SelectItem value="HTTP">HTTP/HTTPS</SelectItem>
                    <SelectItem value="FTP">FTP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="editStatus">Status</Label>
                <Select defaultValue={selectedPartner?.status || "Active"}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Testing">Testing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Allowed Document Types</Label>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="editEdi850" defaultChecked={selectedPartner?.documentTypes?.includes("EDI 850")} />
                  <Label htmlFor="editEdi850">EDI 850 (Purchase Order)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="editEdi855" defaultChecked={selectedPartner?.documentTypes?.includes("EDI 855")} />
                  <Label htmlFor="editEdi855">EDI 855 (PO Acknowledgment)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="editEdi856" defaultChecked={selectedPartner?.documentTypes?.includes("EDI 856")} />
                  <Label htmlFor="editEdi856">EDI 856 (Advance Ship Notice)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="editEdi810" defaultChecked={selectedPartner?.documentTypes?.includes("EDI 810")} />
                  <Label htmlFor="editEdi810">EDI 810 (Invoice)</Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="editNotes">Notes</Label>
              <Textarea id="editNotes" placeholder="Additional notes about the partner..." />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsEditDialogOpen(false)}>Update Partner</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
