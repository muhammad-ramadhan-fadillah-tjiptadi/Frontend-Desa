import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Landmark 
} from 'lucide-react';
import heroBannerImg from '../assets/hero-banner.png';

export const HeroSection: React.FC = () => {
  const [isServiceActive, setIsServiceActive] = useState(true);

  return (
    <section id="beranda" className="pt-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. HERO BANNER CARD CONTAINER (Horizon Courts Full Card Style) */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-200 shadow-lg min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between p-6 sm:p-10 text-white group">
          
          {/* Background Image with Dark Vignette */}
          <img
            src={heroBannerImg}
            alt="Pemandangan Wilayah Desa Sukamaju"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />

          {/* Empty Top Space for Visual Balance */}
          <div className="relative z-10" />

          {/* Centered Hero Headline & Actions */}
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center py-6">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white drop-shadow-md">
              Mewujudkan Desa Mandiri, Asri & Transparan Berbasis Digital
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 max-w-xl font-normal opacity-90">
              Portal resmi pelayanan publik kependudukan, pengurusan surat administrasi mandiri, profil wilayah, serta transparansi anggaran desa.
            </p>

            {/* Center Floating Pill Button (Horizon Courts Style) */}
            <a
              href="#layanan"
              className="glass-pill hover:bg-slate-950 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm tracking-wide inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Ajukan Surat Online</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>

          </div>

          {/* Floating Bottom Widgets */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            
            {/* Bottom Left Floating Badge: Service Guarantee */}
            <div className="glass-pill-light px-4 py-2 rounded-full flex items-center gap-3 text-slate-900 shadow-sm">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-[10px] font-bold text-white border border-white">
                  DS
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white border border-white">
                  WA
                </div>
              </div>
              <span className="text-xs font-bold tracking-tight">
                Pelayanan Surat Mandiri 24/7
              </span>
            </div>

            {/* Bottom Right Arrow Links */}
            <div className="flex items-center gap-4 text-xs font-semibold text-white/90">
              <a href="#map" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>Peta Desa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/30">•</span>
              <a href="#transparansi" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>APBDes 2026</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/30">•</span>
              <a href="#kontak" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>Kontak WA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* 2. SUB-HERO SECTION ("About Horizon" Equivalent) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-4">
          <div className="bg-slate-100 border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 shrink-0">
            Tentang Desa Sukamaju
          </div>

          <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-relaxed max-w-4xl tracking-tight">
            Di Desa Sukamaju, kami mengabdi untuk kesejahteraan warga dan keterbukaan informasi publik secara digital. 
            Sejak 2021, desa kami bertransformasi menjadi desa mandiri yang asri, transparan, dan berdaya saing bagi seluruh lapisan masyarakat.
          </p>
        </div>

        {/* 3. ASYMMETRICAL 3 FEATURE CARDS GRID (Horizon Courts Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Dark Slate Card with Toggle Switch */}
          <div className="bg-slate-950 text-white rounded-3xl p-7 flex flex-col justify-between h-[320px] shadow-sm border border-slate-900">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 mb-6">
                <Landmark className="w-5 h-5" />
              </div>
              <p className="text-base font-semibold leading-relaxed text-slate-200">
                Pelayanan administrasi mandiri dengan verifikasi digital instan dan akuntabilitas terbuka — tanpa pungutan liar.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-medium text-slate-400">Mode Pelayanan Publik</span>
              <button
                onClick={() => setIsServiceActive(!isServiceActive)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer ${
                  isServiceActive ? 'bg-emerald-600' : 'bg-slate-700'
                }`}
                aria-label="Toggle mode pelayanan"
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-in-out shadow-xs ${
                  isServiceActive ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
            </div>
          </div>

          {/* Card 2: Emerald Visual Image Card with Glass Pill */}
          <div className="relative rounded-3xl overflow-hidden h-[320px] border border-slate-200 shadow-sm group">
            <img
              src={heroBannerImg}
              alt="Hasil Pertanian Desa Sukamaju"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <span className="glass-pill text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md">
                Sektor Tani & Ketahanan Pangan
              </span>
            </div>
          </div>

          {/* Card 3: Light Gray Metric Card with Breakdown Dots */}
          <div className="bg-slate-100/90 border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between h-[320px] shadow-xs">
            <div>
              <span className="text-4xl font-extrabold text-slate-900 tracking-tight block mb-1">
                3.450+
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-6">
                Warga Terdaftar di SIMDES
              </span>

              {/* Profession Dots Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold">Petani & Tani Ternak</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-extrabold tracking-widest">●●●●●●●●</span>
                    <span className="font-bold">58%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold">Wiraswasta & UMKM</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-extrabold tracking-widest">●●●●●</span>
                    <span className="font-bold">24%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold">PNS & Swasta</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-extrabold tracking-widest">●●●</span>
                    <span className="font-bold">18%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-200/80">
              Data terverifikasi Dinas Kependudukan 2026
            </div>
          </div>

        </div>

        {/* 4. FACTS & NUMBERS GRID (Horizon Courts Bottom Grid) */}
        <div className="pt-8 text-center space-y-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Ringkasan Fakta & Data Desa Sukamaju
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mb-1">
                12,5 km²
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Luas Wilayah Tani & Pemukiman
              </span>
            </div>

            <div className="p-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mb-1">
                89%
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Kepuasan Pelayanan Warga
              </span>
            </div>

            <div className="p-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mb-1">
                4 Dusun
              </span>
              <span className="text-xs font-semibold text-slate-500">
                12 RT / 4 RW Wilayah Admin
              </span>
            </div>

            <div className="p-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mb-1">
                48+
              </span>
              <span className="text-xs font-semibold text-slate-500">
                UMKM & Hasil Tani Aktif
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
