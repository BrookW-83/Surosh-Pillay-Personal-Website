import { Suspense } from 'react';
import ServicesPage from '@/components/services-page/ServicesPage';

function ServicesPageLoader() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="animate-pulse text-white font-noto text-xl">Loading...</div>
    </div>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<ServicesPageLoader />}>
      <ServicesPage />
    </Suspense>
  );
}
