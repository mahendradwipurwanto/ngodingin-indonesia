import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <div className='container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 text-center'>
      <Image
        src='/assets/images/icon.png'
        width={80}
        height={80}
        alt='logo'
        className='rounded-md'
      />

      <div>
        <h1 className='text-primary-70 h4-700'>Ngodingin Indonesia</h1>
        <p className='text-gray-100'>{t('coming_soon')}</p>
      </div>
    </div>
  );
}
