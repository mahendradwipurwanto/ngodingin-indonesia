import ProgressBarProvider from '@/components/progressbar-provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { NODE_TARGET } from '@/helper';

export const metadata: Metadata = {
  title: 'Ngodingin Indonesia',
  description: 'Ngodingin Indonesia',
  robots: NODE_TARGET === 'production' ? 'index,follow' : 'noindex,nofollow',
  alternates: {
    canonical: '/',
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
