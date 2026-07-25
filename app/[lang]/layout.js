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
  const ogImage = 'https://pourhajidev.ir/images/og-image.jpg';
  const ogLocale = lang === 'fa' ? 'fa_IR' : 'en_US';
  
  return {
    metadataBase: new URL('https://pourhajidev.ir'),
    title: {
      default: dictionary.meta.title,
      template: `%s | POURHAJIDEV`
    },
    description: dictionary.meta.description,
    keywords: [
      'امیرطاها پورحاجی', 
      'پورحاجی دو', 
      'طراح سایت', 
      'خرید وبسایت', 
      'PourhajiDeV', 
      'طراحی وبسایت اختصاصی',
      'برنامه نویس وب',
      'طراحی سایت فروشگاهی'
    ],
    authors: [{ name: 'امیرطاها پورحاجی', url: 'https://pourhajidev.ir' }],
    creator: 'امیرطاها پورحاجی',
    publisher: 'PourhajiDeV',
    alternates: {
      canonical: `https://pourhajidev.ir/${lang}`,
      languages: {
        'fa': 'https://pourhajidev.ir/fa',
        'en': 'https://pourhajidev.ir/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `https://pourhajidev.ir/${lang}`,
      siteName: 'PourhajiDeV | امیرطاها پورحاجی',
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'امیرطاها پورحاجی',
    alternateName: ['پورحاجی دو', 'PourhajiDeV'],
    url: 'https://pourhajidev.ir',
    image: 'https://pourhajidev.ir/header.jpg',
    jobTitle: 'طراح سایت و توسعه‌دهنده وب',
    sameAs: [
      'https://github.com/pourhajidev',
      'https://instagram.com/ilcherik',
      'https://t.me/pourhajidev'
    ],
    knowsAbout: [
      'طراحی سایت',
      'خرید وبسایت',
      'Next.js',
      'React',
      'توسعه وب'
    ]
  };

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontClass} ${lang === 'fa' ? 'font-iran' : 'font-sans'} antialiased selection:bg-blue-500/30`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ParticlesBg />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}