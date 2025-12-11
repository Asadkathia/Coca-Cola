"use client";

import { Calendar, User, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const [user, setUser] = useState<"Lubaba" | "Faizan">("Lubaba");
  const toggleUser = () => {
    setUser((u) => (u === "Lubaba" ? "Faizan" : "Lubaba"));
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigation = [
    { name: "Demand Planning", href: "/demand-planning" },
    { name: "Supply Planning", href: "/supply-planning" },
    { name: "Warehouse Optimization", href: "/warehouse-optimization" },
    { name: "Financial Projections", href: "/financial-projections" },
  ];

  return (
    <div className="h-16 fixed top-0 left-0 lg:left-64 right-0 z-20 px-3 lg:px-6 flex items-center justify-between text-white">
      <div className="glass flex items-center justify-between w-full h-12 px-4">
        <div className="flex items-center space-x-3">
          <button
            className="lg:hidden p-2 rounded-full bg-white/10 border border-white/20"
            onClick={() => setIsSidebarOpen((o) => !o)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="text-lg lg:text-xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur hover:border-red-400 transition">
            <Calendar className="h-4 w-4 text-white" />
            <span className="text-sm text-white">Jan 2025</span>
          </div>
          <button
            onClick={toggleUser}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur hover:border-red-400 transition"
          >
            <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/40">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-white">{user}</span>
            <ChevronDown className="h-4 w-4 text-white/80" />
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-black/80 backdrop-blur z-30">
          <div className="flex flex-col space-y-1 p-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-lg border border-white/15 bg-white/10 hover:border-red-400 transition"
              >
                <span className="text-sm font-medium text-white">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

