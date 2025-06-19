"use client"

import { useState } from "react"
import {
  BarChart3,
  UserPlus,
  Search,
  RefreshCw,
  Activity,
  Calendar,
  TrendingUp,
  FileText,
  Hash,
  Truck,
  Building2,
  Archive,
  LayoutDashboard,
  User,
  Settings,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import Image from "next/image"

// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: LayoutDashboard,
//     id: "dashboard",
//   },
// ]

const userManagement = [
  {
    title: "User Creation",
    icon: UserPlus,
    id: "user-creation",
  },
  {
    title: "User Search",
    icon: Search,
    id: "user-search",
  },
]

const transactionProcessing = [
  {
    title: "Reprocess",
    icon: RefreshCw,
    id: "reprocess",
  },
  {
    title: "Queue Monitoring",
    icon: Activity,
    id: "queue-monitoring",
  },
]

const analytics = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    title: "Daily Stats",
    icon: Calendar,
    id: "daily-stats",
  },
  {
    title: "TP Volumes",
    icon: TrendingUp,
    id: "tp-volumes",
  },
]

const transportation = [
  {
    title: "Document Repository",
    icon: FileText,
    id: "document-repository",
  },
  // {
  //   title: "Document Repository by ID",
  //   icon: Hash,
  //   id: "document-repository-by-id",
  // },
  // {
  //   title: "Transportation Order Management",
  //   icon: Truck,
  //   id: "transportation-order-management",
  // },
]

const management = [
  {
    title: "Partners",
    icon: Building2,
    id: "partners",
  },
  {
    title: "Archive & Purge",
    icon: Archive,
    id: "archive-purge",
  },
]

interface AppSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

type DocumentRepositoryByIdProps = {
  onBack: () => void;
};

export function AppSidebar({ activeView, setActiveView }: AppSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <Sidebar >
      <SidebarHeader >
        <div className="flex justify-center py-1">
          {/* <BarChart3 className="h-6 w-6" /> */}
          {/* <span className="font-semibold text-lg">miracleSCVP</span> */}
          <img
            src="/Miracle-Dark-Logo.png"
            alt="Logo"
            className="w-40 h-auto" 
          />
        </div>

      </SidebarHeader>
      <SidebarContent className="space-y-0" style={{ backgroundColor: "#2368a0", color: "white" }}>

        {/* <SidebarGroup>
          <SidebarGroupLabel>Transaction Processing</SidebarGroupLabel>
          <SidebarGroupContent>
        <SidebarMenu>
          {transactionProcessing.map((item) => (
            <SidebarMenuItem key={item.id}>
          <SidebarMenuButton onClick={() => setActiveView(item.id)} isActive={activeView === item.id}>
            <item.icon />
            <span>{item.title}</span>
          </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        <SidebarGroup>
          <SidebarGroupLabel className="cursor-pointer flex justify-between items-center font-bold text-black text-lg"
            style={{ color: "white" }}>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analytics.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton onClick={() => setActiveView(item.id)} isActive={activeView === item.id}
                    className={activeView === item.id ? "bg-[#ffffff] text-[#232527] font-semibold rounded-md" : "hover:bg-white/10"}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel className="cursor-pointer flex justify-between items-center font-bold text-black text-lg"
            style={{ color: "white" }}>Documentry</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {transportation.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton onClick={() => setActiveView(item.id)} isActive={activeView === item.id}
                    className={activeView === item.id ? "bg-[#ffffff] text-[#232527] font-semibold rounded-md" : "hover:bg-white/10"}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel className="cursor-pointer flex justify-between items-center font-bold text-black text-lg"
            style={{ color: "white" }}>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {management.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton onClick={() => setActiveView(item.id)} isActive={activeView === item.id}
                    className={activeView === item.id ? "bg-[#ffffff] text-[#232527] font-semibold rounded-md" : "hover:bg-white/10"}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup >
          <SidebarGroupLabel
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="cursor-pointer flex justify-between items-center font-bold text-black text-lg"
            style={{ color: "white" }}>
            User Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userManagement.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    isActive={activeView === item.id}
                    className={activeView === item.id ? "bg-[#ffffff] text-[#232527] font-semibold rounded-md" : "hover:bg-white/10"}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>



      <SidebarFooter className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-gray-200 text-gray-700">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">EDI Administrator</p>
          </div>
          <button
            type="button"
            onClick={() => setActiveView("profile")}
            className="p-1 rounded hover:bg-gray-100"
            aria-label="Go to profile"
          >
            <Settings className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
