import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const language = locale.split('-')[0];
  //   const region = locale.split('-')[1] ?? 'en';

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as never)) notFound();

  return {
    messages: (await import(`../dictionaries/homepage/${language}.json`))
      .default,
  };
});
