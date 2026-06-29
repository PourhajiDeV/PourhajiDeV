"use client";
import { motion } from "framer-motion";
import { Terminal, Code2, Server } from "lucide-react";

export default function Timeline({ dict }) {
  const steps = [
    { 
      title: dict.timeline.item1_title, 
      desc: dict.timeline.item1_desc, 
      date: "2023 - 2024", 
      icon: <Terminal size={18} className="text-blue-500" /> 
    },
    { 
      title: dict.timeline.item2_title, 
      desc: dict.timeline.item2_desc, 
      date: "2024 - 2025", 
      icon: <Code2 size={18} className="text-purple-500" /> 
    },
    { 
      title: dict.timeline.item3_title, 
      desc: dict.timeline.item3_desc, 
      date: "2025 - 2026", 
      icon: <Server size={18} className="text-emerald-500" /> 
    },
  ];

  return (
    <section style={{ backgroundColor: "transparent" }} className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full relative">
      <div className="text-center mb-16 sm:mb-20 space-y-2" style={{ backgroundColor: "transparent" }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight" style={{ backgroundColor: "transparent" }}>
          {dict.timeline.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium" style={{ backgroundColor: "transparent" }}>
          {dict.timeline.subtitle}
        </p>
      </div>

      <div style={{ backgroundColor: "transparent" }} className="relative max-w-3xl mx-auto">
        <div className="absolute top-4 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent left-[24px] rtl:left-auto rtl:right-[24px] rounded-full opacity-30 dark:opacity-50" />

        <div className="space-y-12 sm:space-y-16" style={{ backgroundColor: "transparent" }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-16 rtl:pl-0 rtl:pr-16 flex flex-col group"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="absolute left-2 rtl:left-auto rtl:right-2 top-0 w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 border-[3px] border-zinc-300 dark:border-zinc-800 flex items-center justify-center z-10 shadow-lg group-hover:border-blue-500 transition-colors duration-300">
                {step.icon}
              </div>

              <div style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }} className="rounded-[24px] ios-glass p-6 sm:p-8 border border-white/5 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4" style={{ backgroundColor: "transparent" }}>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-zinc-100" style={{ backgroundColor: "transparent" }}>
                    {step.title}
                  </h3>
                  <span className="px-3 py-1 bg-zinc-500/10 dark:bg-white/5 rounded-lg text-xs font-bold text-zinc-600 dark:text-zinc-400 w-max border border-zinc-500/5">
                    {step.date}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium" style={{ backgroundColor: "transparent" }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}