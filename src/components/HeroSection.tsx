import React from 'react';
import { ArrowUpRight, MapPin, ShieldCheck, ShoppingBag, Info, UserCheck } from 'lucide-react';
import heroBannerImg from '../assets/hero-banner.png';
import kepalaDesaImg from '../assets/kepala-desa.png';
import sekretarisDesaImg from '../assets/sekretaris-desa.png';
import kaurKeuanganImg from '../assets/kaur-keuangan.png';
import ketuaSerikatImg from '../assets/ketua-serikat.png';

interface OfficialItem {
  id: string;
  name: string;
  role: string;
  badgeColor: string;
  image: string;
  description: string;
}

export const HeroSection: React.FC = () => {
  const officials: OfficialItem[] = [
    {
      id: 'official-1',
      name: 'Drs. H. Ahmad Subagja, M.Si.',
      role: 'Kepala Desa',
      badgeColor: 'bg-emerald-800 text-white',
      image: kepalaDesaImg,
      description: 'Penanggung jawab utama tata kelola pemerintahan, transparansi APBDes, & ketahanan pangan desa.',
    },
    {
      id: 'official-2',
      name: 'Siti Nurhayati, S.AP.',
      role: 'Sekretaris Desa',
      badgeColor: 'bg-slate-900 text-white',
      image: sekretarisDesaImg,
      description: 'Pengelola kearsipan, administrasi publik, dan sistem pelayanan surat digital 24/7.',
    },
    {
      id: 'official-3',
      name: 'Susanto, S.E.',
      role: 'Kaur Keuangan',
      badgeColor: 'bg-slate-900 text-white',
      image: kaurKeuanganImg,
      description: 'Penanggung jawab akuntabilitas keuangan desa & publikasi laporan terbuka APBDes.',
    },
    {
      id: 'official-4',
      name: 'Ir. Rahmat Hidayat',
      role: 'Ketua Serikat Tani',
      badgeColor: 'bg-emerald-800 text-white',
      image: ketuaSerikatImg,
      description: 'Koordinator kelompok tani dan pembina 48+ usaha mikro lokal Desa Sukamaju.',
    },
  ];

  return (
    <section id="beranda" className="pt-4 pb-16 bg-white font-sans">
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
            <div className="glass-pill-light px-4 py-2 rounded-full flex items-center gap-3 text-slate-900 shadow-sm">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-bold text-white border border-white">
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
              <a href="#map" className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer">
                <span>Peta Desa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/30">•</span>
              <a href="#transparansi" className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer">
                <span>APBDes 2026</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/30">•</span>
              <a href="#kontak" className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer">
                <span>Kontak WA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* 2. PROFIL DESA SHOWCASE (SPACIOUS & UNIQUE CONTAINER) */}
        <div id="profil" className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs">
          
          {/* Header & Main Headline Statement */}
          <div className="max-w-4xl space-y-4">
            <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
              <Info className="w-3.5 h-3.5" />
              <span>Profil Desa Sukamaju</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transformasi Desa Mandiri: Menyatukan Keasrian Alam & Pelayanan Digital
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
              Desa Sukamaju adalah kawasan pedesaan mandiri di Kecamatan Harapan yang memadukan potensi agraris seluas 12,5 km² dengan sistem pelayanan publik berbasis digital. 
              Kami berkomitmen menciptakan tata kelola pemerintahan yang transparan, bebas dari birokrasi rumit, serta mendorong daya saing ekonomi seluruh warga secara berkelanjutan.
            </p>
          </div>

          {/* Grid 3 Pilar Utama Desa (Spacious Curved Cards with Big Highlights) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Pilar 1: Wilayah & Pertanian */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between h-[270px] shadow-xs hover:border-slate-300 transition-all duration-200 group">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Wilayah & Pertanian</span>
                </div>

                <span className="text-3xl font-extrabold text-slate-900 tracking-tight block mb-2">
                  12,5 km²
                </span>

                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  Kawasan pertanian persawahan produktif dengan 4 dusun aktif dan irigasi terpadu.
                </p>
              </div>

              <a href="#map" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 cursor-pointer transition-colors pt-4 border-t border-slate-100">
                <span>Pelajari Peta Wilayah</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pilar 2: Tata Kelola Digital (Dark Slate Card) */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-7 flex flex-col justify-between h-[270px] shadow-md group">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500 mb-3">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Tata Kelola Digital</span>
                </div>

                <span className="text-3xl font-extrabold text-white tracking-tight block mb-2">
                  24/7 Siaga
                </span>

                <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
                  Pelayanan surat mandiri online instan & publikasi transparansi anggaran APBDes 2026.
                </p>
              </div>

              <a href="#layanan" className="text-xs font-bold text-white group-hover:text-emerald-500 inline-flex items-center gap-1.5 cursor-pointer transition-colors pt-4 border-t border-white/10">
                <span>Akses Layanan Mandiri</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pilar 3: Ekonomi & UMKM Tani */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between h-[270px] shadow-xs hover:border-slate-300 transition-all duration-200 group">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>Ekonomi & UMKM</span>
                </div>

                <span className="text-3xl font-extrabold text-slate-900 tracking-tight block mb-2">
                  48+ Usaha
                </span>

                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  Pendampingan usaha lokal dan kelompok tani untuk pengembangan produk olahan desa.
                </p>
              </div>

              <a href="#umkm" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 cursor-pointer transition-colors pt-4 border-t border-slate-100">
                <span>Jelajahi UMKM Desa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* 3. PERANGKAT & SERIKAT DESA SHOWCASE (Horizon Courts Curved Cards) */}
        <div id="serikat" className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Serikat & Lembaga Desa</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Struktur Kepemimpinan & Pengabdi Warga Sukamaju
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Aparatur dan pengurus lembaga desa yang siap mengabdi dan melayani kebutuhan warga secara profesional, transparan, dan ramah.
            </p>
          </div>

          {/* Grid 4 Cards of Officials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officials.map((official) => (
              <div
                key={official.id}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
              >
                {/* Official Headshot Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={official.image}
                    alt={official.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Role Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-xs ${official.badgeColor}`}>
                      {official.role}
                    </span>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-800 transition-colors duration-150 leading-snug">
                      {official.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {official.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span>Aparatur Desa</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-800 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
