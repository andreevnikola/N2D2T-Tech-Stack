import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Wrapper } from '@/components/Wrapper';
import ReactQueryProvider from '@/trpc/Provider';
import { cookies } from 'next/headers';
import { ClientCookiesProvider } from '@/components/CookiesProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'N2D2T - Tech Stack',
  description: "Generated by Nikola Andreev's N2DT Tech Stack"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ClientCookiesProvider value={cookies().getAll()}>
            <Wrapper cookies={new Map(cookies())}>{children}</Wrapper>
          </ClientCookiesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
