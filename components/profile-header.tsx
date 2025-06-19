"use client"

import { Bell, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProfileHeaderProps {
    activeView: string
}

export function ProfileHeader({ activeView }: ProfileHeaderProps) {
    // Get the title based on active view
    const getPageTitle = (view: string) => {
        const titles: Record<string, string> = {
            dashboard: "Dashboard",
            profile: "User Profile",
            "user-creation": "User Creation",
            "user-search": "User Search",
            reprocess: "Reprocess",
            "queue-monitoring": "Queue Monitoring",
            "daily-stats": "Daily Statistics",
            "tp-volumes": "TP Volumes",
            "document-repository": "Document Repository",
            "document-repository-by-id": "Document Repository by ID",
            "transportation-order-management": "Transportation Order Management",
            partners: "Partners",
            "archive-purge": "Archive & Purge",
        }
        return titles[view] || "Miracle Supply Chain Visibility Portal"
    }

    return (
        <header
            className="fixed top-0 right-0 z-50 flex h-16 items-center justify-between border-b px-4 lg:px-6 "
            style={{ background: "#ffffff", left: "var(--sidebar-width, 240px)" }}
        >
            <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-[#2368a0]">Miracle Supply Chain Visibility Portal</h1>
            </div>

            {/* Right side - Profile section */}
            <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                    <AvatarFallback>
                        <User className="h-4 w-4" />
                    </AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                    <span>Log out</span>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </header>
    )
}
