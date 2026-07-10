import type { Metadata } from 'next';
import { Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-d',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-m',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Neyvan Santos — Video Editor & Motion Designer',
  description:
    'Portfólio de Neyvan Santos. Editor de vídeo e motion designer especializado em edição cinematográfica, motion graphics, color grading e storytelling visual.',
  keywords: [
    'video editor',
    'motion designer',
    'editor de vídeo',
    'motion graphics',
    'color grading',
    'portfólio',
    'Neyvan Santos',
  ],
  openGraph: {
    title: 'Neyvan Santos — Video Editor & Motion Designer',
    description: 'Transformo ideias em experiências visuais cinematográficas.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${barlowCondensed.variable} ${ibmPlexMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
