"use client";

import { Calendar, User, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const [user, setUser] = useState<"Lubaba" | "Faizan">("Lubaba");
  const toggleUser = () => {
    setUser((u) => (u === "Lubaba" ? "Faizan" : "Lubaba"));
  };

  return (
    <div className="h-16 fixed top-0 left-64 right-0 z-20 px-6 flex items-center justify-between text-white">
      <div className="glass flex items-center justify-between w-full h-12 px-4">
        <h2 className="text-xl font-semibold">{title}</h2>
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
    </div>
  );
}

