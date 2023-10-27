import type { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import { Locale, i18n } from '@/i18n.config';

import { getDictionary } from '@/lib/dictionary';
import '../globals.css';
import { Footer } from '@/layout/Footer';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { common, information } = await getDictionary(lang);
  const { footer } = common;

  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} ${raleway.variable}`}>
        {children}
        <Footer footer={footer} information={information} />
        <div id="modal" />
      </body>
    </html>
  );
}
