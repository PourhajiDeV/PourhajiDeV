"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LangToggle({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLang = currentLang === "fa" ? "en" : "fa";
    const segments = pathname.split("/");
    segments[1] = nextLang;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="h-9 sm:h-11 px-3 sm:px-5 rounded-xl sm:rounded-2xl ios-glass text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 dark:text-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 uppercase flex items-center justify-center"
    >
      {currentLang === "fa" ? "EN" : "FA"}
    </button>
  );
}