"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Activity,
  Ticket,
  BrainCircuit,
  Zap,
  Menu,
  X,
  Store,
} from "lucide-react";

const navItems = [
  { label: "Decision Logs", icon: Activity, id: "logs" },
  { label: "Tickets", icon: Ticket, id: "tickets" },
  { label: "AI Resolved", icon: BrainCircuit, id: "resolved" },
  { label: "Scenarios", icon: Zap, id: "scenarios" },
];

export default function AdminSidebar({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-[#E0E5EC]/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#6C63FF] flex items-center justify-center neu-extruded-sm">
            <LayoutDashboard size={16} className="text-white" />
          </div>
          <span className="font-[var(--font-display)] text-lg font-bold text-[#3D4852]">
            JEV<span className="text-[#6C63FF]">Admin</span>
          </span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 rounded-full bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center cursor-pointer"
        >
          {collapsed ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      {collapsed && (
        <div className="lg:hidden px-4 pb-3 animate-slide-in">
          <div className="neu-extruded rounded-[32px] p-4 bg-[#E0E5EC] flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setCollapsed(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === item.id
                    ? "neu-inset bg-[#E0E5EC] text-[#6C63FF]"
                    : "text-[#6B7280] hover:text-[#3D4852]"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
            <Link
              href="/storefront"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-[#6B7280] hover:text-[#3D4852] transition-colors"
            >
              <Store size={18} />
              Back to Store
            </Link>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-[260px] min-h-screen bg-[#E0E5EC] p-6 gap-6 shrink-0">
        <Link href="/admin" className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center neu-extruded-sm">
            <LayoutDashboard size={18} className="text-white" />
          </div>
          <span className="font-[var(--font-display)] text-xl font-bold text-[#3D4852]">
            JEV<span className="text-[#6C63FF]">Admin</span>
          </span>
        </Link>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === item.id
                  ? "neu-inset bg-[#E0E5EC] text-[#6C63FF]"
                  : "neu-extruded-sm text-[#6B7280] hover:text-[#3D4852] hover:-translate-y-0.5"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <Link
          href="/storefront"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl neu-extruded-sm text-sm font-medium text-[#6B7280] hover:text-[#3D4852] hover:-translate-y-0.5 transition-all duration-300"
        >
          <Store size={18} />
          Back to Store
        </Link>
      </aside>
    </>
  );
}
