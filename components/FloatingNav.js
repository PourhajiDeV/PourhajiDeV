"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Send } from "lucide-react";

export default function FloatingNav() {
  return (
    <div className="fixed bottom-6 sm:bottom-8 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        style={{ backgroundColor: "rgba(17, 24, 39, 0.45)" }}
        className="flex items-center gap-4 sm:gap-6 px-5 py-3 sm:px-6 sm:py-4 ios-glass rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-3xl pointer-events-auto"
      >
        <a 
          href="https://github.com/pourhajidev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 sm:p-3 bg-zinc-500/10 hover:bg-zinc-800 dark:hover:bg-white text-zinc-700 dark:text-zinc-200 hover:text-white dark:hover:text-zinc-900 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Github size={20} className="sm:w-5 sm:h-5" />
        </a>
        
        <div className="w-px h-6 bg-zinc-500/20 rounded-full" />

        <a 
          href="https://instagram.com/ilcherik" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 sm:p-3 bg-zinc-500/10 hover:bg-pink-600 text-zinc-700 dark:text-zinc-200 hover:text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Instagram size={20} className="sm:w-5 sm:h-5" />
        </a>

        <div className="w-px h-6 bg-zinc-500/20 rounded-full" />

        <a 
          href="https://t.me/pourhajidevir" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 sm:p-3 bg-zinc-500/10 hover:bg-blue-500 text-zinc-700 dark:text-zinc-200 hover:text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <Send size={20} className="sm:w-5 sm:h-5" />
        </a>
      </motion.div>
    </div>
  );
}