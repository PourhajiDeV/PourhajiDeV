"use client";
import { motion } from "framer-motion";
import { Coffee, Cpu, ArrowUpRight, Gem } from "lucide-react";

const iconsMap = {
  zehnigold: <Gem className="text-amber-400" style={{ backgroundColor: "transparent" }} size={26} />,
  rbl: <Cpu className="text-orange-500" style={{ backgroundColor: "transparent" }} size={26} />,
  karimi: <Coffee className="text-amber-500" style={{ backgroundColor: "transparent" }} size={26} />
};

export default function Projects({ dict }) {
  const projects = dict.projects.items || [];

  return (
    <section style={{ backgroundColor: "transparent" }} className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full relative">
      <div className="text-center mb-10 sm:mb-16 space-y-2" style={{ backgroundColor: "transparent" }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight" style={{ backgroundColor: "transparent" }}>
          {dict.projects.title}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium" style={{ backgroundColor: "transparent" }}>
          {dict.projects.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-10" style={{ backgroundColor: "transparent" }}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -4 }}
            style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }}
            className="rounded-[24px] sm:rounded-[32px] ios-glass p-6 sm:p-8 flex flex-col justify-between space-y-6 sm:space-y-8 group border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-4 sm:space-y-5" style={{ backgroundColor: "transparent" }}>
              <div className="flex flex-wrap items-center justify-between gap-3" style={{ backgroundColor: "transparent" }}>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-500/10 dark:bg-white/5 border border-zinc-500/10" style={{ backgroundColor: "transparent" }}>
                  {iconsMap[project.id]}
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest text-zinc-400 uppercase bg-zinc-500/10 dark:bg-white/5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-zinc-500/5">
                  {project.type}
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3" style={{ backgroundColor: "transparent" }}>
                <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-zinc-50 transition-colors group-hover:text-blue-500" style={{ backgroundColor: "transparent" }}>
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal" style={{ backgroundColor: "transparent" }}>
                  {project.desc}
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5" style={{ backgroundColor: "transparent" }}>
              <div className="flex flex-wrap gap-2" style={{ backgroundColor: "transparent" }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-md sm:rounded-lg bg-zinc-500/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border border-zinc-500/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-zinc-500/10 pt-4 sm:pt-5 text-xs sm:text-sm font-bold" style={{ backgroundColor: "transparent" }}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 sm:gap-1.5 text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "transparent" }}
                >
                  <ArrowUpRight size={16} />
                  {dict.projects.liveBtn}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}