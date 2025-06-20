"use client"

import { Bell, Menu, Settings, User } from "lucide-react"
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

interface ProfileHeaderProps {
    activeView: string;
    onToggleSidebar: () => void;
}

export function ProfileHeader({ activeView, onToggleSidebar }: ProfileHeaderProps) {
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
            style={{ background: "#0d416b", left: "var(--sidebar-width, 240px)" }}
        >
            <div className="flex items-center space-x-4">
                <button onClick={onToggleSidebar} className="text-gray-600 hover:text-[#ffffff]" style={{color:"#ffffff"}}>
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-[#ffffff]">Miracle Supply Chain Visibility Portal</h1>
            </div>


            <div className="flex items-center space-x-4">
                <span className="text-sm font-medium" style={{ color: "#ffffff" }}>
                    Sai Kartik Nistala
                    <p className="text-xs leading-none text-muted-foreground" style={{ color: "#ffffff" }}>snistala@miraclesoft.com</p>
                </span>
                {/* Notifications */}
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-transparent focus-visible:bg-transparent"
                    >
                        <Bell className="h-4 w-4" color="#ffffff" />
                        <span className="sr-only">Notifications</span>
                        {/* Badge */}
                        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                            2
                        </span>
                    </Button>
                </div>

                {/* User Profile Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/avatar.png?height=32&width=32" alt="Profile" />
                                <AvatarFallback>
                                    <User className="h-4 w-4" />
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 " align="end" forceMount>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem >
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
