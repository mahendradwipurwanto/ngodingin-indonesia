import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import { pJakartaSans, helvetica } from '@/lib/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${pJakartaSans.variable} ${helvetica.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
