"use client";
import { motion } from "framer-motion";
import { Zap, CreditCard, LifeBuoy, Code2 } from "lucide-react";

export default function WhyChooseMe({ dict }) {
  const icons = [
    <Zap size={32} className="text-amber-500" style={{ backgroundColor: "transparent" }} />,
    <CreditCard size={32} className="text-emerald-500" style={{ backgroundColor: "transparent" }} />,
    <LifeBuoy size={32} className="text-blue-500" style={{ backgroundColor: "transparent" }} />,
    <Code2 size={32} className="text-purple-500" style={{ backgroundColor: "transparent" }} />
  ];

  const bentoLayouts = [
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1"
  ];

  return (
    <section style={{ backgroundColor: "transparent" }} className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full relative">
      <div className="text-center mb-10 sm:mb-16 space-y-2" style={{ backgroundColor: "transparent" }}>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50" style={{ backgroundColor: "transparent" }}>
          {dict.features.title}
        </h2>
        <p className="text-xs sm:text-base text-zinc-500 dark:text-zinc-400 font-medium" style={{ backgroundColor: "transparent" }}>
          {dict.features.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" style={{ backgroundColor: "transparent" }}>
        {dict.features.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{ backgroundColor: "rgba(17, 24, 39, 0.15)" }}
            className={`rounded-[24px] sm:rounded-[32px] ios-glass p-6 sm:p-8 flex flex-col justify-center space-y-4 sm:space-y-6 border border-white/5 relative overflow-hidden group shadow-xl ${bentoLayouts[idx]}`}
          >
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 sm:gap-5" style={{ backgroundColor: "transparent" }}>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-500/10 dark:bg-white/5 border border-zinc-500/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" style={{ backgroundColor: "transparent" }}>
                {icons[idx]}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-zinc-800 dark:text-zinc-100" style={{ backgroundColor: "transparent" }}>
                {item.title}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-xl" style={{ backgroundColor: "transparent" }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}