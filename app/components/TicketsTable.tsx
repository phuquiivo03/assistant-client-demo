"use client";

import {
  User,
  AlertTriangle,
  Clock,
  CheckCircle,
  MoreHorizontal,
  ArrowUpRight,
  ShieldAlert,
  MessageSquare,
} from "lucide-react";

interface TicketItem {
  id: string;
  user: { name: string; email: string; avatar: string };
  subject: string;
  priority: "critical" | "high" | "medium" | "low";
  purchaseIntent: number;
  status: "open" | "in_progress" | "waiting" | "resolved";
  createdAt: string;
  category: string;
}

const mockTickets: TicketItem[] = [
  {
    id: "TKT-4201",
    user: { name: "Sarah Chen", email: "sarah@example.com", avatar: "SC" },
    subject: "Defective unit — left earpad crackling noise",
    priority: "critical",
    purchaseIntent: 15,
    status: "open",
    createdAt: "2 min ago",
    category: "Defect",
  },
  {
    id: "TKT-4200",
    user: { name: "Marcus Johnson", email: "marcus@demo.com", avatar: "MJ" },
    subject: "Bulk order inquiry — 50 units for corporate gifting",
    priority: "high",
    purchaseIntent: 92,
    status: "in_progress",
    createdAt: "8 min ago",
    category: "Sales",
  },
  {
    id: "TKT-4199",
    user: { name: "Emily Park", email: "emily@test.com", avatar: "EP" },
    subject: "How long does international shipping take?",
    priority: "low",
    purchaseIntent: 64,
    status: "waiting",
    createdAt: "15 min ago",
    category: "Shipping",
  },
  {
    id: "TKT-4198",
    user: { name: "David Liu", email: "david@example.com", avatar: "DL" },
    subject: "Absolutely love the ANC — 5-star review submitted",
    priority: "low",
    purchaseIntent: 78,
    status: "resolved",
    createdAt: "22 min ago",
    category: "Review",
  },
  {
    id: "TKT-4197",
    user: { name: "Priya Sharma", email: "priya@demo.com", avatar: "PS" },
    subject: "Warranty claim — Battery won't hold charge after 3 months",
    priority: "high",
    purchaseIntent: 30,
    status: "open",
    createdAt: "34 min ago",
    category: "Warranty",
  },
];

const priorityStyles: Record<string, string> = {
  critical: "bg-red-400/10 text-red-400",
  high: "bg-amber-400/10 text-amber-500",
  medium: "bg-[#6C63FF]/10 text-[#6C63FF]",
  low: "bg-[#38B2AC]/10 text-[#38B2AC]",
};

const statusStyles: Record<string, { color: string; label: string }> = {
  open: { color: "text-red-400", label: "Open" },
  in_progress: { color: "text-amber-500", label: "In Progress" },
  waiting: { color: "text-[#6B7280]", label: "Waiting" },
  resolved: { color: "text-[#38B2AC]", label: "Resolved" },
};

function IntentGauge({ value }: { value: number }) {
  const color =
    value >= 75 ? "bg-[#38B2AC]" : value >= 40 ? "bg-amber-400" : "bg-red-400";
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 rounded-full bg-[#E0E5EC] neu-inset-sm">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-mono font-semibold text-[#3D4852]">{value}%</span>
    </div>
  );
}

export default function TicketsTable() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#3D4852] tracking-tight">
            Tickets Management
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            {mockTickets.length} active tickets • Real-time updates
          </p>
        </div>
        <div className="flex gap-3">
          {["All", "Open", "Critical"].map((f) => (
            <button
              key={f}
              className={`text-xs font-medium px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                f === "All"
                  ? "bg-[#6C63FF] text-white neu-extruded-sm"
                  : "bg-[#E0E5EC] text-[#6B7280] neu-extruded-sm hover:-translate-y-0.5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Ticket Cards */}
      <div className="space-y-4">
        {mockTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="neu-extruded rounded-[24px] p-5 md:p-6 bg-[#E0E5EC] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* User + Subject */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#6C63FF]/10 flex items-center justify-center shrink-0 text-sm font-bold text-[#6C63FF]">
                  {ticket.user.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-[#3D4852]">
                      {ticket.user.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#6B7280]">
                      {ticket.id}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                        priorityStyles[ticket.priority]
                      }`}
                    >
                      {ticket.priority}
                    </span>
                    <span className="text-[10px] font-medium text-[#6B7280] bg-[#6B7280]/10 px-2 py-0.5 rounded-full">
                      {ticket.category}
                    </span>
                  </div>
                  <p className="text-sm text-[#3D4852] mt-1 truncate">
                    {ticket.subject}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1 flex items-center gap-1">
                    <Clock size={10} />
                    {ticket.createdAt}
                  </p>
                </div>
              </div>

              {/* Metrics + Actions */}
              <div className="flex items-center gap-6 shrink-0">
                {/* Purchase Intent */}
                <div className="hidden md:block">
                  <p className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-1">
                    Purchase Intent
                  </p>
                  <IntentGauge value={ticket.purchaseIntent} />
                </div>

                {/* Status */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      ticket.status === "open"
                        ? "bg-red-400"
                        : ticket.status === "in_progress"
                        ? "bg-amber-400 animate-pulse"
                        : ticket.status === "waiting"
                        ? "bg-[#6B7280]"
                        : "bg-[#38B2AC]"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      statusStyles[ticket.status].color
                    }`}
                  >
                    {statusStyles[ticket.status].label}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-xl bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" title="Respond">
                    <MessageSquare size={14} className="text-[#6B7280]" />
                  </button>
                  <button className="w-8 h-8 rounded-xl bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" title="Escalate">
                    <ArrowUpRight size={14} className="text-[#6B7280]" />
                  </button>
                  <button className="w-8 h-8 rounded-xl bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" title="More">
                    <MoreHorizontal size={14} className="text-[#6B7280]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
