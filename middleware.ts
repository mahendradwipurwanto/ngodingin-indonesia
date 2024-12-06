import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';
// import { languageRegions } from './lib/lang-region';

export default createMiddleware(routing);

// const matcherPaths = languageRegions.join('|');
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    `/(en|en-id|id-id|en-my|en-sg|en-ph|en-vn|en-th|en-au|en-us|en-gb|en-kz|en-qa|en-sa|en-il|en-ae|en-nl|en-de)/:path*`,
  ],
};
