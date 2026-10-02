"use client";

import {
  ShoppingCart,
  AlertTriangle,
  Star,
  Truck,
  Zap,
  Play,
} from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  tagColor: string;
  metrics: string;
}

const scenarios: Scenario[] = [
  {
    id: "bulk",
    title: "Bulk Order Intent 92%",
    description:
      "Corporate buyer inquiring about 50 units with custom branding. High purchase intent, expects volume discount and NET-30 payment terms.",
    icon: ShoppingCart,
    tag: "Sales",
    tagColor: "bg-[#38B2AC]/10 text-[#38B2AC]",
    metrics: "Intent 92% • Revenue $17,500 • Priority High",
  },
  {
    id: "angry",
    title: "Angry Defective Unit",
    description:
      "Frustrated customer reporting crackling audio in left earpad after 2 weeks. Threatens negative review. Wants full refund or immediate replacement.",
    icon: AlertTriangle,
    tag: "Defect",
    tagColor: "bg-red-400/10 text-red-400",
    metrics: "Sentiment -0.8 • Urgency Critical • Churn Risk 85%",
  },
  {
    id: "review",
    title: "Positive 5-Star Review",
    description:
      "Happy customer leaving a glowing review about noise canceling performance. Mentions recommending to colleagues. Potential brand ambassador.",
    icon: Star,
    tag: "Review",
    tagColor: "bg-[#6C63FF]/10 text-[#6C63FF]",
    metrics: "Sentiment +0.95 • NPS 10 • Referral Potential High",
  },
  {
    id: "shipping",
    title: "Shipping FAQ",
    description:
      "Customer asking about international shipping to Germany, delivery times, customs duties, and whether tracking is included.",
    icon: Truck,
    tag: "FAQ",
    tagColor: "bg-amber-400/10 text-amber-500",
    metrics: "Intent 64% • Complexity Low • Auto-resolve 96%",
  },
];

export default function ScenarioLauncher() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#3D4852] tracking-tight">
          Scenario Quick-Launcher
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          Pre-configured test scenarios for demonstration
        </p>
      </div>

      {/* Scenario Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((s) => (
          <div
            key={s.id}
            className="neu-extruded rounded-[32px] p-6 md:p-8 bg-[#E0E5EC] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] group"
          >
            {/* Icon Well */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#E0E5EC] neu-inset-deep flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <s.icon size={24} className="text-[#6C63FF]" />
              </div>
              <span
                className={`text-[10px] font-semibold uppercase px-3 py-1 rounded-full ${s.tagColor}`}
              >
                {s.tag}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-[var(--font-display)] text-lg font-bold text-[#3D4852] mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
              {s.description}
            </p>

            {/* Metrics */}
            <div className="neu-inset rounded-xl px-4 py-2.5 bg-[#E0E5EC] mb-5">
              <p className="text-xs font-mono text-[#6B7280]">{s.metrics}</p>
            </div>

            {/* Launch Button */}
            <button className="w-full h-11 rounded-2xl bg-[#6C63FF] text-white text-sm font-semibold flex items-center justify-center gap-2 neu-extruded hover:-translate-y-0.5 hover:bg-[#8B84FF] active:translate-y-[0.5px] transition-all duration-300 cursor-pointer">
              <Play size={14} />
              Launch Scenario
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
