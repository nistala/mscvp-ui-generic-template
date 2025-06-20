import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">John Doe</h2>
        <p className="text-muted-foreground">View and manage your profile details</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information and contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline">Change Avatar</Button>
                <p className="text-sm text-muted-foreground mt-2">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Sai Kartik" disabled />
              </div>
              <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Nistala" disabled />
              </div>
              <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="snistala@miraclesoft.com" disabled />
              </div>
              <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" disabled />
              </div>
              <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" defaultValue="IT Operations" disabled />
              </div>
              <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="EDI Administrator" disabled />
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="w-32 bg-[ #0d416b]" disabled={true}>Save Changes</Button>
              <Button className="w-32 bg-[ #8c8c8c]">Edit</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your password to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
