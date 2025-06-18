import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export function UserCreation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">User Creation</h2>
        <p className="text-muted-foreground">Create new user accounts with role assignment and access control</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New User</CardTitle>
          <CardDescription>Fill in the user details and configure access permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
              </Label>
              <Input id="firstName" placeholder="Enter first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
              </Label>
              <Input id="lastName" placeholder="Enter last name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" placeholder="user@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT Operations</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="procurement">Procurement</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">User Role <span className="text-red-500">*</span></Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="operator">Operator</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Additional notes about the user..." />
          </div>

          <div className="space-y-4">
            <Label className="text-base font-medium">Access Permissions</Label>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="dashboard" />
                <Label htmlFor="dashboard">Dashboard Access</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="userManagement" />
                <Label htmlFor="userManagement">User Management</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="transactionProcessing" />
                <Label htmlFor="transactionProcessing">Transaction Processing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="analytics" />
                <Label htmlFor="analytics">Analytics & Reporting</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="transportation" />
                <Label htmlFor="transportation">Transportation Management</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="partnerManagement" />
                <Label htmlFor="partnerManagement">Partner Management</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="archivePurge" />
                <Label htmlFor="archivePurge">Archive & Purge</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="systemConfig" />
                <Label htmlFor="systemConfig">System Configuration</Label>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="sendWelcome" defaultChecked />
            <Label htmlFor="sendWelcome">Send welcome email with login credentials</Label>
          </div>

          <div className="flex space-x-2">
            <Button>Create User</Button>
            <Button variant="outline">Save as Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
