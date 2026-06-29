"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal, Shield, Code, Calendar, CheckCircle, Server } from "lucide-react";

export default function Hero({ dict }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef} style={{ backgroundColor: "transparent" }} className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center px-4 max-w-6xl mx-auto relative">
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax, backgroundColor: "rgba(17, 24, 39, 0.15)" }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full rounded-[32px] ios-glass p-8 md:p-16 relative overflow-hidden group border border-white/5"
      >
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12" style={{ backgroundColor: "transparent" }}>
          <div className="flex-1 space-y-6 text-center lg:text-right" style={{ backgroundColor: "transparent" }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <Code size={14} />
              <span>{dict.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight" style={{ backgroundColor: "transparent" }}>
              {dict.hero.greeting} <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                {dict.hero.name}
              </span>
              {dict.hero.suffix && (
                <span className="text-2xl md:text-4xl font-extrabold text-zinc-500 dark:text-zinc-400 mx-2 md:mx-3 inline-block">
                  {dict.hero.suffix}
                </span>
              )}
            </h1>

            <div className="space-y-1" style={{ backgroundColor: "transparent" }}>
              <p className="text-xl md:text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 tracking-wide">
                {dict.hero.role}
              </p>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-wider">
                {dict.hero.spec}
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base max-w-3xl font-normal" style={{ backgroundColor: "transparent" }}>
              {dict.hero.bio}
            </p>
          </div>

          <div className="flex flex-row lg:flex-col gap-4 justify-center w-full lg:w-auto" style={{ backgroundColor: "transparent" }}>
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -10, rotateX: 10 }}
              style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }}
              className="p-8 rounded-[24px] ios-glass flex flex-col items-center justify-center space-y-3 aspect-square w-36 md:w-44 border border-white/10 shadow-xl"
            >
              <Terminal size={36} className="text-blue-500" />
              <span className="text-sm font-black tracking-wider text-zinc-700 dark:text-zinc-300">Full-Stack</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
              style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }}
              className="p-8 rounded-[24px] ios-glass flex flex-col items-center justify-center space-y-3 aspect-square w-36 md:w-44 border border-white/10 shadow-xl"
            >
              <Shield size={36} className="text-purple-500" />
              <span className="text-sm font-black tracking-wider text-zinc-700 dark:text-zinc-300">Security / Net</span>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-500/10 mt-12 pt-8" style={{ backgroundColor: "transparent" }}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-500/5">
            <Calendar className="text-blue-500" size={24} />
            <div style={{ backgroundColor: "transparent" }}>
              <p className="text-sm font-black text-zinc-800 dark:text-zinc-100">{dict.metrics.exp}</p>
            </div>
          </div>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-500/5">
            <CheckCircle className="text-purple-500" size={24} />
            <div style={{ backgroundColor: "transparent" }}>
              <p className="text-sm font-black text-zinc-800 dark:text-zinc-100">{dict.metrics.projects}</p>
            </div>
          </div>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }} className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-500/5">
            <Server className="text-emerald-500" size={24} />
            <div style={{ backgroundColor: "transparent" }}>
              <p className="text-sm font-black text-zinc-800 dark:text-zinc-100">{dict.metrics.uptime}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}