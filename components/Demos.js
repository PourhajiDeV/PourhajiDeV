"use client";
import { motion } from "framer-motion";
import { MonitorPlay, ExternalLink } from "lucide-react";

export default function Demos({ dict }) {
  const demos = dict.demos;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full relative">
      <div className="text-center mb-10 sm:mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
          <MonitorPlay size={14} />
          <span>{demos.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          {demos.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium">
          {demos.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {demos.items.map((demo) => (
          <motion.div
            key={demo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }}
            className="rounded-[28px] sm:rounded-[32px] ios-glass p-6 sm:p-8 flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  {demo.category}
                </span>
                <span className="text-[10px] font-black tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 uppercase">
                  {demo.status}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors">
                {demo.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {demo.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-500/10 flex items-center justify-between">
              <a
                href={demo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <span>{demos.viewBtn}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}