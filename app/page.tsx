"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Dashboard } from "@/components/dashboard"
import { Profile } from "@/components/profile"
import { UserCreation } from "@/components/user-creation"
import { UserSearch } from "@/components/user-search"
import { Reprocess } from "@/components/reprocess"
import { QueueMonitoring } from "@/components/queue-monitoring"
import { DailyStats } from "@/components/daily-stats"
import { TPVolumes } from "@/components/tp-volumes"
import { DocumentRepository } from "@/components/document-repository"
import { DocumentRepositoryById } from "@/components/document-repository-by-id"
import { TransportationOrderManagement } from "@/components/transportation-order-management"
import { Partners } from "@/components/partners"
import { ArchivePurge } from "@/components/archive-purge"
import { SidebarInset } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import LoginCard from "@/components/LoginCard"
import { ProfileHeader } from "@/components/profile-header"

export default function Page() {
  const [activeView, setActiveView] = useState("dashboard")
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 🔐 Add login state

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />
      case "profile":
        return <Profile />
      case "user-creation":
        return <UserCreation />
      case "user-search":
        return <UserSearch />
      case "reprocess":
        return <Reprocess />
      case "queue-monitoring":
        return <QueueMonitoring />
      case "daily-stats":
        return <DailyStats />
      case "tp-volumes":
        return <TPVolumes />
      case "document-repository":
        return <DocumentRepository />
      case "document-repository-by-id":
        return <DocumentRepositoryById />
      case "transportation-order-management":
        return <TransportationOrderManagement />
      case "partners":
        return <Partners />
      case "archive-purge":
        return <ArchivePurge />
      default:
        return <Dashboard />
    }
  }

  if (!isLoggedIn) {
    // 🟣 Show login until logged in
    return <LoginCard onLoginSuccess={() => setIsLoggedIn(true)} />
  }

  return (
  <SidebarProvider>
    <AppSidebar
      activeView={activeView}
      setActiveView={setActiveView}
    />
    <SidebarInset>
      <ProfileHeader activeView={activeView} />
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">{renderContent()}</main>
    </SidebarInset>
   </SidebarProvider>
  )
}
