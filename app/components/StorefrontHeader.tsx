"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Menu,
  X,
  Headphones,
  LayoutDashboard,
} from "lucide-react";

export default function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#E0E5EC]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/storefront" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center neu-extruded-sm group-hover:-translate-y-0.5 transition-all duration-300">
            <Headphones size={20} className="text-white" />
          </div>
          <span className="font-[var(--font-display)] text-xl font-bold text-[#3D4852] tracking-tight">
            JEV<span className="text-[#6C63FF]">Audio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {["Products", "Reviews", "Support"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#6B7280] hover:text-[#6C63FF] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <Link
            href="/admin"
            className="flex items-center gap-2 h-10 px-5 rounded-2xl bg-[#E0E5EC] neu-extruded-sm text-sm font-medium text-[#3D4852] hover:-translate-y-0.5 transition-all duration-300"
          >
            <LayoutDashboard size={16} />
            Admin
          </Link>
          <button className="w-10 h-10 rounded-full bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 relative cursor-pointer">
            <ShoppingCart size={18} className="text-[#3D4852]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6C63FF] text-[10px] text-white flex items-center justify-center font-bold">
              2
            </span>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-[#E0E5EC] neu-extruded-sm flex items-center justify-center cursor-pointer"
        >
          {menuOpen ? (
            <X size={18} className="text-[#3D4852]" />
          ) : (
            <Menu size={18} className="text-[#3D4852]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-slide-in">
          <div className="neu-extruded rounded-[32px] p-6 bg-[#E0E5EC] flex flex-col gap-4">
            {["Products", "Reviews", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-[#6B7280] hover:text-[#6C63FF] transition-colors py-2"
              >
                {item}
              </a>
            ))}
            <Link
              href="/admin"
              className="flex items-center gap-2 text-sm font-medium text-[#3D4852] py-2"
            >
              <LayoutDashboard size={16} />
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
