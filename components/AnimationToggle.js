"use client";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function AnimationToggle() {
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("particles-enabled");
    if (stored === "false") {
      setEnabled(false);
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("particles-toggle", { detail: false }));
      }, 100);
    }
  }, []);

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    localStorage.setItem("particles-enabled", newState.toString());
    window.dispatchEvent(new CustomEvent("particles-toggle", { detail: newState }));
  };

  if (!mounted) return <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl sm:rounded-2xl ios-glass animate-pulse" />;

  return (
    <button
      onClick={toggle}
      className={`w-9 sm:w-11 h-9 sm:h-11 rounded-xl sm:rounded-2xl ios-glass flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
        enabled ? "text-blue-500" : "text-zinc-500 dark:text-zinc-500 opacity-50"
      }`}
    >
      <Sparkles size={18} />
    </button>
  );
}