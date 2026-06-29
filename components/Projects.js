"use client";
import { motion } from "framer-motion";
import { MessageSquare, Coffee, ArrowUpRight } from "lucide-react";

const projectData = [
  {
    title: "Dashaq Bot",
    type: "Advanced Telegram System",
    descriptionFa: "ربات تلگرام پیشرفته مدیریت و سرگرمی گروه‌ها. این سیستم مجهز به سیستم پیشرفته شهرداری، مکانیزم سازمان‌دهی شورش‌های درون‌گروهی، رتبه‌بندی کامل تراکنش‌های مالی همتا‌به‌همتا (دستور pay/) و مینی‌گیم‌های تعاملی است که برای گروه‌های با بیش از ۲۰ عضو انسانی فعال بهینه‌سازی شده است.",
    descriptionEn: "Advanced Telegram management and entertainment bot. Features a custom mayor system, collective group riot mechanics, comprehensive peer-to-peer transactional ledgers (/pay tracing), and interactive group mini-games optimized for communities with 20+ active human users.",
    icon: <MessageSquare className="text-purple-500" style={{ backgroundColor: "transparent" }} size={26} />,
    tags: ["Node.js", "SQLite3 Structured", "Telegram Bot API", "Linux Server VPS"],
    link: "#"
  },
  {
    title: "Karimi Lounge",
    type: "Premium E-Menu Platform",
    descriptionFa: "وب‌سایت اختصاصی و منوی دیجیتال تعاملی مجموعه کافه کریمی لانژ. پیاده‌سازی شده در روت menu.karimilounge.com با بهینه‌سازی حداکثری لود تصاویر منو، طراحی کاملاً ریسپانسیو و منعطف برای پلتفرم‌های موبایل و رابط کاربری شیشه‌ای لوکس.",
    descriptionEn: "Bespoke digital interaction menu platform deployed for Karimi Lounge at menu.karimilounge.com. Highly optimized for ultra-fast asset delivery, robust responsive mobile layouts, and premium glassmorphic components.",
    icon: <Coffee className="text-amber-500" style={{ backgroundColor: "transparent" }} size={26} />,
    tags: ["PHP Core", "Vanilla JS", "HTML5", "CSS3"],
    link: "https://menu.karimilounge.com"
  }
];

export default function Projects({ dict, currentLang }) {
  return (
    <section style={{ backgroundColor: "transparent" }} className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full relative">
      <div className="text-center mb-10 sm:mb-16 space-y-2" style={{ backgroundColor: "transparent" }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight" style={{ backgroundColor: "transparent" }}>{dict.projects.title}</h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium" style={{ backgroundColor: "transparent" }}>{dict.projects.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-10" style={{ backgroundColor: "transparent" }}>
        {projectData.map((project, idx) => (
          <motion.div
            key={idx}
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
                  {project.icon}
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
                  {currentLang === "fa" ? project.descriptionFa : project.descriptionEn}
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