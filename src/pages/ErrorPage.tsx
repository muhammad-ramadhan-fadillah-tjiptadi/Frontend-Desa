import React from 'react';
import { Home } from 'lucide-react';

export const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-[450px] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-extrabold text-2xl">
        404
      </div>
      <div className="max-w-md space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Halaman Tidak Ditemukan</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          Maaf, halaman atau tautan yang Anda tuju tidak ditemukan atau telah dipindahkan.
        </p>
      </div>
      <a
        href="#/"
        className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-full text-xs inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm"
      >
        <Home className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </a>
    </div>
  );
};

export default ErrorPage;
