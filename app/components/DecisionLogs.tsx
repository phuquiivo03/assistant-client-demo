"use client";

import {
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Activity,
} from "lucide-react";

interface LogEntry {
  id: string;
  timestamp: string;
  route: string;
  schemaValid: boolean;
  latency: number;
  refId: string;
  status: "success" | "error" | "pending";
}

const mockLogs: LogEntry[] = [
  {
    id: "1",
    timestamp: "14:32:01.234",
    route: "/api/intent/classify",
    schemaValid: true,
    latency: 42,
    refId: "REF-7A3F",
    status: "success",
  },
  {
    id: "2",
    timestamp: "14:32:00.891",
    route: "/api/ticket/create",
    schemaValid: true,
    latency: 128,
    refId: "REF-7A3E",
    status: "success",
  },
  {
    id: "3",
    timestamp: "14:31:59.445",
    route: "/api/sentiment/analyze",
    schemaValid: false,
    latency: 315,
    refId: "REF-7A3D",
    status: "error",
  },
  {
    id: "4",
    timestamp: "14:31:58.102",
    route: "/api/resolution/suggest",
    schemaValid: true,
    latency: 67,
    refId: "REF-7A3C",
    status: "success",
  },
  {
    id: "5",
    timestamp: "14:31:57.788",
    route: "/api/intent/classify",
    schemaValid: true,
    latency: 89,
    refId: "REF-7A3B",
    status: "pending",
  },
  {
    id: "6",
    timestamp: "14:31:56.340",
    route: "/api/ticket/escalate",
    schemaValid: true,
    latency: 201,
    refId: "REF-7A3A",
    status: "success",
  },
  {
    id: "7",
    timestamp: "14:31:55.001",
    route: "/api/sentiment/analyze",
    schemaValid: true,
    latency: 54,
    refId: "REF-7A39",
    status: "success",
  },
  {
    id: "8",
    timestamp: "14:31:53.672",
    route: "/api/resolution/suggest",
    schemaValid: false,
    latency: 478,
    refId: "REF-7A38",
    status: "error",
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "success")
    return <CheckCircle size={16} className="text-[#38B2AC]" />;
  if (status === "error")
    return <XCircle size={16} className="text-red-400" />;
  return <Clock size={16} className="text-amber-400 animate-pulse" />;
}

function LatencyBadge({ ms }: { ms: number }) {
  const color =
    ms < 100
      ? "text-[#38B2AC] bg-[#38B2AC]/10"
      : ms < 200
      ? "text-amber-500 bg-amber-500/10"
      : "text-red-400 bg-red-400/10";
  return (
    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full ${color}`}>
      {ms}ms
    </span>
  );
}

export default function DecisionLogs() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#3D4852] tracking-tight">
            Real-Time Decision Logs
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Live telemetry from JEV decision engine
          </p>
        </div>
        <div className="flex items-center gap-2 neu-extruded-sm rounded-full px-4 py-2 bg-[#E0E5EC]">
          <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse-dot" />
          <span className="text-xs font-medium text-[#38B2AC]">LIVE</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Requests", value: "1,247", icon: Activity },
          { label: "Avg Latency", value: "86ms", icon: Clock },
          { label: "Schema Pass", value: "98.2%", icon: CheckCircle },
          { label: "Errors", value: "3", icon: XCircle },
        ].map((stat) => (
          <div
            key={stat.label}
            className="neu-extruded rounded-2xl p-5 bg-[#E0E5EC] transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#E0E5EC] neu-inset-deep flex items-center justify-center mb-3">
              <stat.icon size={16} className="text-[#6C63FF]" />
            </div>
            <p className="text-2xl font-bold text-[#3D4852]">{stat.value}</p>
            <p className="text-xs text-[#6B7280] mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Log Stream */}
      <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] overflow-hidden">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-[100px_1fr_100px_80px_100px_60px] gap-4 px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider border-b border-[#D1D5DB]/30">
          <span>Time</span>
          <span>Route</span>
          <span>Schema</span>
          <span>Latency</span>
          <span>Ref ID</span>
          <span>Status</span>
        </div>
        {/* Rows */}
        <div className="divide-y divide-[#D1D5DB]/20">
          {mockLogs.map((log, idx) => (
            <div
              key={log.id}
              className={`grid grid-cols-1 md:grid-cols-[100px_1fr_100px_80px_100px_60px] gap-2 md:gap-4 px-6 py-4 hover:bg-[#D8DDE4]/40 transition-colors duration-200 ${
                idx === 0 ? "animate-slide-in" : ""
              }`}
            >
              <span className="font-mono text-xs text-[#6B7280]">
                {log.timestamp}
              </span>
              <span className="font-mono text-sm text-[#3D4852] flex items-center gap-1">
                <ArrowRight size={12} className="text-[#6C63FF] shrink-0" />
                {log.route}
              </span>
              <span>
                {log.schemaValid ? (
                  <span className="text-xs font-medium text-[#38B2AC] bg-[#38B2AC]/10 px-2 py-0.5 rounded-full">
                    ✓ Valid
                  </span>
                ) : (
                  <span className="text-xs font-medium text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">
                    ✗ Invalid
                  </span>
                )}
              </span>
              <span>
                <LatencyBadge ms={log.latency} />
              </span>
              <span className="font-mono text-xs text-[#6B7280]">
                {log.refId}
              </span>
              <span>
                <StatusIcon status={log.status} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
