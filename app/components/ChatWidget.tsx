"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi there! 👋 I'm JEV, your AI shopping assistant. How can I help you today?",
    time: "Just now",
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: input,
      time: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Mock assistant reply
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: "Thank you for your message! I'm currently in demo mode. In production, I would route your query through the JEV decision engine for real-time resolution. 🚀",
        time: "Just now",
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] max-h-[520px] rounded-[32px] bg-[#E0E5EC] neu-extruded flex flex-col overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="px-6 py-4 flex items-center gap-3 border-b border-transparent">
            <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center neu-extruded-sm">
              <Bot size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-[var(--font-display)] font-bold text-sm text-[#3D4852]">
                JEV AI Assistant
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38B2AC] animate-pulse-dot" />
                <span className="text-xs text-[#6B7280]">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <X size={14} className="text-[#6B7280]" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 max-h-[340px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-[#6C63FF]/10 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={14} className="text-[#6C63FF]" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#6C63FF] text-white rounded-2xl rounded-br-lg"
                      : "bg-[#E0E5EC] neu-inset rounded-2xl rounded-bl-lg text-[#3D4852]"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#3D4852]/10 flex items-center justify-center shrink-0 mt-1">
                    <User size={14} className="text-[#3D4852]" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3">
            <div className="flex items-center gap-2 neu-inset-deep rounded-2xl px-4 py-2 bg-[#E0E5EC]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask JEV anything..."
                className="flex-1 bg-transparent outline-none text-sm text-[#3D4852] placeholder-[#A0AEC0]"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-xl bg-[#6C63FF] flex items-center justify-center hover:bg-[#8B84FF] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-[#6C63FF] flex items-center justify-center neu-extruded hover:-translate-y-1 hover:bg-[#8B84FF] transition-all duration-300 cursor-pointer animate-float"
        >
          <MessageCircle size={24} className="text-white" />
        </button>
      )}
    </div>
  );
}
