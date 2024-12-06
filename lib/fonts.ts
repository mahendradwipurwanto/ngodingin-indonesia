import { Plus_Jakarta_Sans as PJakartaSans } from 'next/font/google';
import localFont from 'next/font/local';

export const pJakartaSans = PJakartaSans({
  subsets: ['latin'],
  variable: '--pJakartaSans',
  weight: ['400', '500', '600', '700'],
});

export const helvetica = localFont({
  src: [
    { path: '../app/fonts/HelveticaNowDisplay-Light.woff', weight: '300' },
    { path: '../app/fonts/HelveticaNowDisplay-Regular.woff', weight: '400' },
    { path: '../app/fonts/HelveticaNowDisplay-Bold.woff', weight: '700' },
  ],
  variable: '--helvetica',
});
