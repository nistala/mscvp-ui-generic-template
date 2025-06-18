import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Filter, Truck, MapPin, Calendar, MoreHorizontal, Edit, Eye } from "lucide-react"

const transportationOrders = [
  {
    id: "TO-2024-001",
    orderNumber: "PO-12345",
    partner: "Partner A",
    carrier: "ABC Logistics",
    status: "In Transit",
    origin: "Los Angeles, CA",
    destination: "Chicago, IL",
    shipDate: "2024-01-15",
    deliveryDate: "2024-01-18",
    trackingNumber: "1Z999AA1234567890",
    value: "$15,750.00",
  },
  {
    id: "TO-2024-002",
    orderNumber: "PO-67890",
    partner: "Partner B",
    carrier: "XYZ Transport",
    status: "Delivered",
    origin: "New York, NY",
    destination: "Miami, FL",
    shipDate: "2024-01-12",
    deliveryDate: "2024-01-15",
    trackingNumber: "1Z999BB9876543210",
    value: "$8,420.00",
  },
  {
    id: "TO-2024-003",
    orderNumber: "PO-54321",
    partner: "Partner C",
    carrier: "DEF Freight",
    status: "Pending",
    origin: "Seattle, WA",
    destination: "Denver, CO",
    shipDate: "2024-01-16",
    deliveryDate: "2024-01-19",
    trackingNumber: "1Z999CC1122334455",
    value: "$22,100.00",
  },
  {
    id: "TO-2024-004",
    orderNumber: "PO-98765",
    partner: "Partner A",
    carrier: "GHI Shipping",
    status: "Exception",
    origin: "Houston, TX",
    destination: "Phoenix, AZ",
    shipDate: "2024-01-14",
    deliveryDate: "2024-01-17",
    trackingNumber: "1Z999DD5566778899",
    value: "$12,300.00",
  },
]

export function TransportationOrderManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Transportation Order Management</h2>
        <p className="text-muted-foreground">Monitor and manage EDI transportation orders</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Transit</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">50% of active orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered Today</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">On-time delivery: 87.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exceptions</CardTitle>
            <Badge variant="destructive" className="h-4 w-4 rounded-full p-0" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Orders</CardTitle>
          <CardDescription>Search and filter transportation orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="Order number, tracking..." className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="Exception">Exception</SelectItem>
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
              <Label>Carrier</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All carriers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All carriers</SelectItem>
                  <SelectItem value="ABC Logistics">ABC Logistics</SelectItem>
                  <SelectItem value="XYZ Transport">XYZ Transport</SelectItem>
                  <SelectItem value="DEF Freight">DEF Freight</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transportation Orders</CardTitle>
          <CardDescription>{transportationOrders.length} orders found</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Order Number</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Ship Date</TableHead>
                <TableHead>Delivery Date</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transportationOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.orderNumber}</TableCell>
                  <TableCell>{order.partner}</TableCell>
                  <TableCell>{order.carrier}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Delivered"
                          ? "default"
                          : order.status === "In Transit"
                            ? "secondary"
                            : order.status === "Exception"
                              ? "destructive"
                              : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{order.origin}</div>
                      <div className="text-muted-foreground">→ {order.destination}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.shipDate}</TableCell>
                  <TableCell>{order.deliveryDate}</TableCell>
                  <TableCell>{order.value}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Update Status
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Truck className="mr-2 h-4 w-4" />
                          Track Shipment
                        </DropdownMenuItem>
                        <DropdownMenuItem>Update Logistics Info</DropdownMenuItem>
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
  )
}
