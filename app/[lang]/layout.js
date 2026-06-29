import '../globals.css';
import { ThemeProvider } from 'next-themes';
import ParticlesBg from "@/components/ParticlesBg";
import localFont from 'next/font/local';

const iranSans = localFont({
  src: [
    { path: '../../Fonts/IRANSansWeb.ttf', weight: '400', style: 'normal' },
    { path: '../../Fonts/IRANSansWeb_Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../Fonts/IRANSansWeb_Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-iransans',
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dictionary = await import(`../../dictionaries/${lang}.json`).then((module) => module.default);
  const ogImage = lang === 'fa' ? 'https://pourhajidev.ir/images/og-fa.png' : 'https://pourhajidev.ir/images/og-en.png';
  const ogLocale = lang === 'fa' ? 'fa_IR' : 'en_US';
  
  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: ['امیرطاها پورحاجی', 'Amirtaha Pourhaji', 'PourhajiDeV', 'توسعه دهنده وب', 'ربات تلگرام', 'Next.js'],
    authors: [{ name: 'Amirtaha Pourhaji' }],
    creator: 'Amirtaha Pourhaji',
    publisher: 'PourhajiDeV',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `https://pourhajidev.ir/${lang}`,
      siteName: 'POURHAJIDEV',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: dictionary.meta.title,
        },
      ],
      locale: ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: [ogImage],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const direction = lang === 'fa' ? 'rtl' : 'ltr';
  const fontClass = lang === 'fa' ? iranSans.variable : '';

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <body className={`${fontClass} ${lang === 'fa' ? 'font-iran' : 'font-sans'} antialiased selection:bg-blue-500/30`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ParticlesBg />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}