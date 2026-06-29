"use client";
import { Layers, Cpu, Database, Hexagon } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    subtitle: "Architecture & UI",
    icon: <Cpu className="text-blue-500" size={32} />,
    accent: "group-hover:border-blue-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    iconBg: "bg-blue-500/10",
    skills: ["React 19", "Next.js 15", "Tailwind CSS", "JavaScript ES6+", "HTML5 / CSS3"]
  },
  {
    title: "Back-End",
    subtitle: "Engines & Bots",
    icon: <Layers className="text-purple-500" size={32} />,
    accent: "group-hover:border-purple-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    iconBg: "bg-purple-500/10",
    skills: ["Node.js Architecture", "PHP Core / OOP", "Telegram Bot API", "REST API Design"]
  },
  {
    title: "Databases",
    subtitle: "Storage & Query",
    icon: <Database className="text-emerald-500" size={32} />,
    accent: "group-hover:border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-500/10",
    skills: ["MongoDB (NoSQL)", "PostgreSQL", "MySQL Systems", "SQLite Storage"]
  }
];

export default function Skills({ dict }) {
  return (
    <section style={{ backgroundColor: "transparent" }} className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full relative">
      <div className="text-center mb-12 sm:mb-20 space-y-2" style={{ backgroundColor: "transparent" }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50" style={{ backgroundColor: "transparent" }}>
          {dict.skills.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium" style={{ backgroundColor: "transparent" }}>
          {dict.skills.subtitle}
        </p>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" 
        style={{ backgroundColor: "transparent" }}
      >
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }}
            className={`rounded-[32px] ios-glass p-8 sm:p-10 border border-white/5 relative overflow-hidden group transition-all duration-500 ${category.accent} ${category.glow}`}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="flex flex-col space-y-8 relative z-10" style={{ backgroundColor: "transparent" }}>
              <div className="flex flex-col gap-4" style={{ backgroundColor: "transparent" }}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${category.iconBg}`} style={{ backgroundColor: "transparent" }}>
                  {category.icon}
                </div>
                <div style={{ backgroundColor: "transparent" }}>
                  <h3 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50" style={{ backgroundColor: "transparent" }}>
                    {category.title}
                  </h3>
                  <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-widest" style={{ backgroundColor: "transparent" }}>
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3" style={{ backgroundColor: "transparent" }}>
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    style={{ backgroundColor: "rgba(150, 150, 150, 0.05)" }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-500/10 transition-all duration-300 hover:bg-zinc-500/10 hover:translate-x-2"
                  >
                    <Hexagon size={14} className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}