"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl sm:rounded-2xl ios-glass animate-pulse" />;

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl sm:rounded-2xl ios-glass flex items-center justify-center text-zinc-800 dark:text-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}