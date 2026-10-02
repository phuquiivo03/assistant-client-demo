"use client";

import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import DecisionLogs from "../components/DecisionLogs";
import TicketsTable from "../components/TicketsTable";
import AIResolvedCases from "../components/AIResolvedCases";
import ScenarioLauncher from "../components/ScenarioLauncher";

const panels: Record<string, React.ComponentType> = {
  logs: DecisionLogs,
  tickets: TicketsTable,
  resolved: AIResolvedCases,
  scenarios: ScenarioLauncher,
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("logs");
  const ActivePanel = panels[activeTab];

  return (
    <div className="min-h-screen bg-[#E0E5EC] flex flex-col lg:flex-row">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto">
        <ActivePanel />
      </main>
    </div>
  );
}
