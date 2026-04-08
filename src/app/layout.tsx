import type { Metadata } from 'next';
import { Lexend, Space_Grotesk } from 'next/font/google';
import '@/app/globals.css';

const lexend = Lexend({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-lexend',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'SEAS 2026',
  description: 'SEAS - Summer in Engineering and Applied Sciences',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${lexend.variable} ${spaceGrotesk.variable} font-space-grotesk`}>
        {children}
      </body>
    </html>
  );
}
