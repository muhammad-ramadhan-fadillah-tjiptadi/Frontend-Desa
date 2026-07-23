import React, { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';

// Lazy loading page components according to project standards
const HomePage = lazy(() => import('../pages/HomePage'));

// Fallback loader for asynchronous lazy loading
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-emerald-800 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-bold text-slate-500">Memuat halaman...</span>
    </div>
  </div>
);

export const router = createHashRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <HomePage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);
