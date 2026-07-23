import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import heroBannerImg from '../assets/hero-banner.png';

export const HeroSection: React.FC = () => {
  return (
    <div
      id="beranda"
      className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-200 shadow-lg min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between p-6 sm:p-10 text-white group scroll-mt-20"
    >
      {/* Background Image with Dark Vignette */}
      <img
        src={heroBannerImg}
        alt="Pemandangan Wilayah Desa Sukagalih"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />

      {/* Empty Top Space for Visual Balance */}
      <div className="relative z-10" />

      {/* Centered Hero Headline & Actions */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center py-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white drop-shadow-md text-balance">
          Mewujudkan Desa Mandiri, Asri & Transparan Berbasis Digital
        </h1>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 max-w-xl font-normal opacity-90">
          Portal resmi pelayanan publik kependudukan, pengurusan surat
          administrasi mandiri, profil wilayah, serta transparansi anggaran
          desa.
        </p>

        {/* Center Floating Pill Button */}
        <a
          href="#layanan"
          className="glass-pill hover:bg-slate-950 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm tracking-wide inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <span>Ajukan Surat Online</span>
          <ArrowUpRight className="w-4 h-4 text-emerald-500" />
        </a>
      </div>

      {/* Floating Bottom Widgets */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        {/* Bottom Left Floating Badge: Service Guarantee */}
        <div className="glass-pill-light px-4 py-2 rounded-full flex items-center gap-2.5 text-slate-900 shadow-sm border border-slate-200/50">
          <div className="w-5 h-5 rounded-full bg-emerald-800 flex items-center justify-center text-white shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold tracking-tight">
            Layanan Digital 24/7
          </span>
        </div>

        {/* Bottom Right Arrow Links */}
        <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
          <a
            href="#profil"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Peta Kelurahan</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#statistik"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Statistik</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#kontak"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Kontak WA</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
