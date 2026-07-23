import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  ShoppingBag, 
  Info, 
  UserCheck, 
  BookOpen, 
  Target, 
  Activity, 
  Map
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visi-misi' | 'potensi' | 'peta'>('sejarah');

  const officials: OfficialItem[] = [
    {
      id: 'official-1',
      name: 'Sopi Periardiansyah',
      role: 'Lurah Sukagalih',
      badgeColor: 'bg-emerald-800 text-white',
      image: kepalaDesaImg,
      description: 'Penanggung jawab utama tata kelola pemerintahan kelurahan, koordinasi kewilayahan, dan pelayanan publik.',
    },
    {
      id: 'official-2',
      name: 'Siti Nurhayati, S.AP.',
      role: 'Sekretaris Kelurahan',
      badgeColor: 'bg-slate-900 text-white',
      image: sekretarisDesaImg,
      description: 'Pengelola kearsipan, administrasi umum, keuangan internal kelurahan, dan sistem surat digital 24/7.',
    },
    {
      id: 'official-3',
      name: 'Susanto, S.E.',
      role: 'Kasi Pemerintahan',
      badgeColor: 'bg-slate-900 text-white',
      image: kaurKeuanganImg,
      description: 'Penanggung jawab administrasi kependudukan, ketertiban umum, dan fasilitasi program sosial.',
    },
    {
      id: 'official-4',
      name: 'Ir. Rahmat Hidayat',
      role: 'Ketua LPM',
      badgeColor: 'bg-emerald-800 text-white',
      image: ketuaSerikatImg,
      description: 'Koordinator Lembaga Pemberdayaan Masyarakat untuk fasilitasi pembangunan fisik & UMKM lokal Sukagalih.',
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
                href="#transparansi"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>APBDes 2026</span>
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

        {/* 2. PROFIL DESA SHOWCASE (SPACIOUS & UNIQUE TAB CONTAINER) */}
        <div
          id="profil"
          className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs scroll-mt-20"
        >
          {/* Header & Main Headline Statement */}
          <div className="max-w-4xl space-y-4">
            <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
              <Info className="w-3.5 h-3.5" />
              <span>Profil Desa Sukagalih</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Mengenal Sukagalih: Harmoni Kearifan Lokal & Inovasi Administrasi
            </h2>
          </div>

          {/* Interactive Profile Tab Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-2xl max-w-xl border border-slate-200/80">
            <button
              onClick={() => setActiveTab('sejarah')}
              className={`flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'sejarah'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Sejarah
              </span>
            </button>
            <button
              onClick={() => setActiveTab('visi-misi')}
              className={`flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'visi-misi'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Visi & Misi
              </span>
            </button>
            <button
              onClick={() => setActiveTab('potensi')}
              className={`flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'potensi'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                Potensi Desa
              </span>
            </button>
            <button
              onClick={() => setActiveTab('peta')}
              className={`flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'peta'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <span className="flex items-center justify-center gap-1.5">
                <Map className="w-3.5 h-3.5" />
                Peta Interaktif
              </span>
            </button>
          </div>

          {/* Dynamic Content Rendering */}
          <div className="pt-2 animate-in fade-in duration-200">
            {activeTab === 'sejarah' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    Napak Tilas Sukagalih: Dari Pertanian Menuju Digitalisasi
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Wilayah Sukagalih terbentuk sejak awal abad ke-19 dari penyatuan dua wilayah pemukiman bersejarah, yaitu <strong>Desa Cirengit</strong> dan <strong>Desa Pamoyanan</strong>. Awalnya, kawasan ini merupakan bentang alam persawahan subur, kebun bambu, dan rawa di kaki Gunung Guntur, Tarogong Kidul, Garut.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Nama <strong>Sukagalih</strong> berasal dari gabungan bahasa Sunda: <em>Suka</em> (senang/cinta) dan <em>Galih</em> (hati yang terdalam). Secara filosofis bermakna <strong>"Desa yang Senang Hati"</strong>, mencerminkan kepribadian warga yang tulus, rukun, dan ramah dalam gotong royong sehari-hari.
                  </p>
                  <p className="text-xs text-slate-500 font-semibold italic bg-slate-100/60 p-3.5 rounded-xl border border-slate-200/50 inline-block">
                    Catatan Sejarah: Desa Sukagalih resmi bermutasi status administratif menjadi Kelurahan Sukagalih pada 27 Desember 2002 berdasarkan Perda Kabupaten Garut No. 32 Tahun 2002.
                  </p>
                </div>
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-2xs">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Garis Waktu Administrasi</div>
                  <div className="space-y-4 text-xs font-semibold text-slate-700">
                    <div className="flex gap-3">
                      <span className="text-emerald-800 font-bold shrink-0">1800-an</span>
                      <span>Penyatuan Desa Cirengit & Desa Pamoyanan</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-emerald-800 font-bold shrink-0">1980-an</span>
                      <span>Kawasan agraris andalan di Tarogong Garut</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-emerald-800 font-bold shrink-0">2002</span>
                      <span>Alih status resmi menjadi Kelurahan Sukagalih (Perda No. 32/2002)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-emerald-800 font-bold shrink-0">2026</span>
                      <span>Transformasi pelayanan mandiri & digitalisasi transparansi publik</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'visi-misi' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1 bg-slate-900 text-white rounded-3xl p-7 space-y-4 shadow-sm border border-slate-800">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Pernyataan Visi</div>
                  <p className="text-lg font-extrabold leading-snug tracking-tight">
                    "Terwujudnya Sukagalih yang terdepan dalam membangun masyarakat yang mandiri, cerdas, berbudaya, serta prima dalam pelayanan publik digital."
                  </p>
                </div>
                <div className="lg:col-span-2 space-y-5">
                  <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">Misi Pelayanan & Pembangunan</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Amanah & Transparansi Tata Kelola</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                          Menyelenggarakan tata kelola pemerintahan yang bersih, akuntabel, dan berbasis platform digital untuk pelayanan surat mandiri 24 jam.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Pemberdayaan Wirausaha & Ekonomi Kreatif</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                          Mengembangkan potensi 48+ UMKM lokal dan kesejahteraan warga dengan memperluas akses pasar serta inovasi produk hasil tani olahan.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3.5 items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">Peningkatan Mutu SDM & Nilai Budaya</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1 font-normal">
                          Meningkatkan kerukunan antarwarga, mutu pendidikan formal/informal, serta melestarikan kebudayaan gotong royong Sunda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'potensi' && (
              <div className="space-y-6">
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Sektor Unggulan Potensi Wilayah Sukagalih</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Potensi 1 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between h-[220px] shadow-2xs group hover:border-slate-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>Pertanian Organik</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Kawasan sawah produktif seluas 12,5 km² yang ditopang pengairan irigasi terpadu di kaki gunung untuk padi organik unggulan.
                      </p>
                    </div>
                    <a href="#map" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 transition-colors">
                      <span>Cek Lahan Pertanian</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Potensi 2 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between h-[220px] shadow-2xs group hover:border-slate-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                        <ShoppingBag className="w-4 h-4 shrink-0" />
                        <span>UMKM Olahan Garut</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Pemberdayaan 48+ usaha lokal meliputi industri kuliner dodol khas Garut, kerajinan anyaman bambu, dan industri rumah tangga kreatif.
                      </p>
                    </div>
                    <a href="#umkm" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 transition-colors">
                      <span>Lihat Katalog Produk</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Potensi 3 */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between h-[220px] shadow-2xs group hover:border-slate-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                        <UserCheck className="w-4 h-4 shrink-0" />
                        <span>Ekowisata Lokal</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Pengembangan pariwisata berbasis alam pedesaan, perkebunan terintegrasi, dan pemandangan pemukiman asri berlatar pegunungan Garut.
                      </p>
                    </div>
                    <a href="#serikat" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 transition-colors">
                      <span>Info Kelompok Sadar Wisata</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'peta' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Peta Administrasi Kelurahan Sukagalih</h3>
                  <p className="text-xs text-slate-500">Koordinat Utama: 7.2279° S, 107.9087° E — Tarogong Kidul, Garut</p>
                </div>

                {/* Real Google Maps Embed Iframe Container */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 h-[400px] shadow-md">
                  <iframe
                    src="https://maps.google.com/maps?q=Sukagalih%20Tarogong%20Kidul%20Garut&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Peta Administrasi Desa Sukagalih Garut"
                  ></iframe>
                </div>

                <div className="text-xs text-slate-500 font-semibold bg-slate-100/60 p-3 rounded-xl border border-slate-200/50 inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span>Gunakan kontrol bawaan di atas untuk menggeser, memperbesar, atau melihat peta lebih detail.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. PERANGKAT & SERIKAT DESA SHOWCASE (Horizon Courts Curved Cards) */}
        <div
          id="serikat"
          className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs scroll-mt-20"
        >
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Aparat Pemerintahan</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Struktur Kepemimpinan & Pengabdi Warga Sukagalih
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Aparatur dan pengurus lembaga desa yang siap mengabdi dan melayani
              kebutuhan warga secara profesional, transparan, dan ramah.
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
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Role Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-xs ${official.badgeColor}`}
                    >
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
                    <span>Kelurahan Sukagalih</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-800 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. STATISTIK DEMOGRAFI SECTION */}
        <div
          id="statistik"
          className="bg-white border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs scroll-mt-20"
        >
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
              <Activity className="w-3.5 h-3.5" />
              <span>Statistik Demografi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Visualisasi Data Kependudukan Desa Sukagalih
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Informasi kependudukan, tingkat pendidikan akhir, dan profil mata pencaharian warga Desa Sukagalih yang dihimpun dari publikasi resmi Badan Pusat Statistik (BPS) Kabupaten Garut.
            </p>
          </div>

          {/* Demographic Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Distribusi Populasi */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Distribusi Populasi</h3>
                <div className="space-y-1">
                  <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">13.645</div>
                  <p className="text-xs text-slate-500 font-semibold">Total Jiwa Penduduk Terdaftar</p>
                </div>

                {/* Male/Female Progress Bars */}
                <div className="space-y-3 pt-2">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-700">Laki-laki</span>
                      <span className="text-slate-950">6.920 Jiwa (50.7%)</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-800 h-full rounded-full" style={{ width: '50.7%' }} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-700">Perempuan</span>
                      <span className="text-slate-950">6.725 Jiwa (49.3%)</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-600 h-full rounded-full" style={{ width: '49.3%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Stats Table/List */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Kepadatan</span>
                  <p className="text-sm font-extrabold text-slate-900">5.906 jiwa/km²</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total KK</span>
                  <p className="text-sm font-extrabold text-slate-900">4.120 Kepala Keluarga</p>
                </div>
              </div>
            </div>

            {/* Card 2: Tingkat Pendidikan Akhir */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Tingkat Pendidikan Akhir</h3>
              <div className="space-y-3.5">
                {/* SD */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">SD / Sederajat</span>
                    <span className="text-slate-950">22.8% (3.120 Jiwa)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full rounded-full" style={{ width: '22.8%' }} />
                  </div>
                </div>

                {/* SMP */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">SMP / Sederajat</span>
                    <span className="text-slate-950">20.8% (2.840 Jiwa)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full rounded-full" style={{ width: '20.8%' }} />
                  </div>
                </div>

                {/* SMA */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">SMA / Sederajat</span>
                    <span className="text-slate-950">30.9% (4.210 Jiwa)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full rounded-full" style={{ width: '30.9%' }} />
                  </div>
                </div>

                {/* PT */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Perguruan Tinggi (Diploma/S1-S3)</span>
                    <span className="text-slate-950">12.3% (1.680 Jiwa)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full rounded-full" style={{ width: '12.3%' }} />
                  </div>
                </div>

                {/* Lainnya */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Lainnya / Belum Sekolah</span>
                    <span className="text-slate-950">13.2% (1.795 Jiwa)</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full rounded-full" style={{ width: '13.2%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Profil Mata Pencaharian */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Mata Pencaharian Utama</h3>
              <div className="space-y-3.5">
                {/* Karyawan Swasta */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Karyawan Swasta</span>
                    <span className="text-slate-950">32.4%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-600 h-full rounded-full" style={{ width: '32.4%' }} />
                  </div>
                </div>

                {/* Wiraswasta */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Wiraswasta / Pedagang</span>
                    <span className="text-slate-950">25.2%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-600 h-full rounded-full" style={{ width: '25.2%' }} />
                  </div>
                </div>

                {/* Pegawai Negeri */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">PNS / TNI / Polri</span>
                    <span className="text-slate-950">18.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-600 h-full rounded-full" style={{ width: '18.5%' }} />
                  </div>
                </div>

                {/* Buruh Harian/Tani */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Buruh Harian / Tani</span>
                    <span className="text-slate-950">15.1%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-600 h-full rounded-full" style={{ width: '15.1%' }} />
                  </div>
                </div>

                {/* Lainnya */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Lainnya / Tidak Bekerja</span>
                    <span className="text-slate-950">8.8%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal-600 h-full rounded-full" style={{ width: '8.8%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
