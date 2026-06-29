import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import WhyChooseMe from "@/components/WhyChooseMe";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";
import AnimationToggle from "@/components/AnimationToggle";
import FloatingNav from "@/components/FloatingNav";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export default async function Page({ params }) {
  const { lang } = await params;
  const dict = await import(`../../dictionaries/${lang}.json`).then((module) => module.default);

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 ios-nav flex items-center justify-between px-4 sm:px-6 md:px-16" style={{ backgroundColor: "transparent" }}>
        <div className="text-base sm:text-lg font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase" style={{ backgroundColor: "transparent" }}>
          {dict.nav.brand}
        </div>
        <div className="flex items-center gap-2 sm:gap-4" style={{ backgroundColor: "transparent" }}>
          <AnimationToggle />
          <LangToggle currentLang={lang} />
          <ThemeToggle />
        </div>
      </header>

      <main className="pb-28" style={{ backgroundColor: "transparent" }}>
        <Hero dict={dict} />
        <WhyChooseMe dict={dict} />
        <Timeline dict={dict} />
        <Skills dict={dict} />
        <Portfolio dictionary={dict} />
        <Projects dict={dict} currentLang={lang} />
      </main>

      <FloatingNav />

      <footer className="py-10 text-center text-[10px] sm:text-xs font-bold tracking-wider text-zinc-500 border-t border-zinc-500/10 max-w-6xl mx-auto mb-20" style={{ backgroundColor: "transparent" }}>
        &copy; {new Date().getFullYear()} POURHAJIDEV. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}