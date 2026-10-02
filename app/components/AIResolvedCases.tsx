"use client";

import {
  CheckCircle,
  AlertTriangle,
  Eye,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  Minus,
  BrainCircuit,
} from "lucide-react";

interface ResolvedCase {
  id: string;
  ticketId: string;
  user: string;
  subject: string;
  resolvedAt: string;
  confidence: number;
  sentiment: "positive" | "negative" | "neutral";
  resolution: string;
  category: string;
}

const mockCases: ResolvedCase[] = [
  {
    id: "AI-301",
    ticketId: "TKT-4195",
    user: "Alex Turner",
    subject: "How to pair headphones with MacBook?",
    resolvedAt: "12 min ago",
    confidence: 97,
    sentiment: "positive",
    resolution: "Provided step-by-step Bluetooth pairing guide with screenshot links",
    category: "FAQ",
  },
  {
    id: "AI-300",
    ticketId: "TKT-4192",
    user: "Mika Tanaka",
    subject: "What's the return policy for opened items?",
    resolvedAt: "28 min ago",
    confidence: 94,
    sentiment: "neutral",
    resolution: "Quoted 30-day return policy with restocking fee breakdown for opened items",
    category: "Policy",
  },
  {
    id: "AI-299",
    ticketId: "TKT-4190",
    user: "Jordan Lee",
    subject: "Great product, recommend to friends! Love the ANC",
    resolvedAt: "45 min ago",
    confidence: 99,
    sentiment: "positive",
    resolution: "Acknowledged 5-star review, offered 10% referral code, tagged for testimonials",
    category: "Review",
  },
  {
    id: "AI-298",
    ticketId: "TKT-4187",
    user: "Casey Morgan",
    subject: "Estimated delivery to UK?",
    resolvedAt: "1 hr ago",
    confidence: 91,
    sentiment: "neutral",
    resolution: "Provided 7–10 business day UK delivery estimate with Royal Mail tracking info",
    category: "Shipping",
  },
  {
    id: "AI-297",
    ticketId: "TKT-4183",
    user: "Robin Patel",
    subject: "Battery died after 2 hours, this is terrible",
    resolvedAt: "1.5 hr ago",
    confidence: 72,
    sentiment: "negative",
    resolution: "Initiated warranty claim, offered expedited replacement, flagged for QA review",
    category: "Defect",
  },
];

function SentimentBadge({ sentiment }: { sentiment: string }) {
  if (sentiment === "positive")
    return (
      <span className="flex items-center gap-1 text-xs font-medium text-[#38B2AC] bg-[#38B2AC]/10 px-2.5 py-1 rounded-full">
        <ThumbsUp size={12} /> Positive
      </span>
    );
  if (sentiment === "negative")
    return (
      <span className="flex items-center gap-1 text-xs font-medium text-red-400 bg-red-400/10 px-2.5 py-1 rounded-full">
        <ThumbsDown size={12} /> Negative
      </span>
    );
  return (
    <span className="flex items-center gap-1 text-xs font-medium text-[#6B7280] bg-[#6B7280]/10 px-2.5 py-1 rounded-full">
      <Minus size={12} /> Neutral
    </span>
  );
}

function ConfidenceRing({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (value / 100) * circumference;
  const color =
    value >= 90 ? "#38B2AC" : value >= 75 ? "#6C63FF" : "#EF4444";

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="rgb(163,177,198,0.3)"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute text-[10px] font-bold text-[#3D4852]">{value}%</span>
    </div>
  );
}

export default function AIResolvedCases() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-[var(--font-display)] text-2xl font-bold text-[#3D4852] tracking-tight">
            AI Resolved Cases
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Audit log of AI-handled resolutions
          </p>
        </div>
        <div className="flex items-center gap-3 neu-extruded-sm rounded-2xl px-4 py-2 bg-[#E0E5EC]">
          <BrainCircuit size={16} className="text-[#6C63FF]" />
          <span className="text-sm font-semibold text-[#3D4852]">
            {mockCases.length} cases
          </span>
          <span className="text-xs text-[#38B2AC]">• 92% avg confidence</span>
        </div>
      </div>

      {/* Cases */}
      <div className="space-y-4">
        {mockCases.map((c) => (
          <div
            key={c.id}
            className="neu-extruded rounded-[24px] p-5 md:p-6 bg-[#E0E5EC] transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Confidence Ring */}
              <div className="shrink-0 flex md:flex-col items-center gap-3 md:gap-1">
                <ConfidenceRing value={c.confidence} />
                <span className="text-[10px] text-[#6B7280]">Confidence</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-mono text-[10px] text-[#6B7280]">
                    {c.id}
                  </span>
                  <span className="font-mono text-[10px] text-[#6B7280]">
                    → {c.ticketId}
                  </span>
                  <SentimentBadge sentiment={c.sentiment} />
                  <span className="text-[10px] font-medium text-[#6B7280] bg-[#6B7280]/10 px-2 py-0.5 rounded-full">
                    {c.category}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#3D4852]">
                  {c.user}: &ldquo;{c.subject}&rdquo;
                </p>
                <div className="mt-2 neu-inset rounded-xl px-4 py-3 bg-[#E0E5EC]">
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">
                    Resolution
                  </p>
                  <p className="text-sm text-[#3D4852]">{c.resolution}</p>
                </div>
                <p className="text-xs text-[#6B7280] mt-2">
                  Resolved {c.resolvedAt}
                </p>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-2 shrink-0">
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#E0E5EC] neu-extruded-sm text-xs font-medium text-[#6B7280] hover:text-[#3D4852] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <Eye size={12} />
                  Audit
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#E0E5EC] neu-extruded-sm text-xs font-medium text-[#6B7280] hover:text-[#6C63FF] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <RotateCcw size={12} />
                  Re-route
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
