import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  ShoppingBag, 
  Info, 
  UserCheck, 
  BookOpen, 
  Target 
} from 'lucide-react';

export const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visi-misi' | 'potensi' | 'peta'>('sejarah');

  return (
    <div
      id="profil"
      className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs scroll-mt-20"
    >
      {/* Section Header */}
      <div className="max-w-4xl space-y-4">
        <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
          <Info className="w-3.5 h-3.5" />
          <span>Profil Desa Sukagalih</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
          Mengenal Lebih Dekat Wilayah, Sejarah, & Potensi Sukagalih
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          Pusat informasi resmi kelurahan mengenai napak tilas sejarah, arah kebijakan visi-misi pembangunan, potensi ekonomi wilayah, serta peta administrasi digital.
        </p>
      </div>

      {/* Interactive Profile Tab Bar Menu */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-200/60 p-1.5 rounded-2xl border border-slate-200/80">
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
            <ShoppingBag className="w-3.5 h-3.5" />
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
            <MapPin className="w-3.5 h-3.5" />
            Peta Interaktif
          </span>
        </button>
      </div>

      {/* Tab Content Panels */}
      <div className="pt-2">
        {activeTab === 'sejarah' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4 text-slate-600 text-sm leading-relaxed font-normal">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Napak Tilas Asal Usul Sukagalih</h3>
              <p>
                Nama <strong>Sukagalih</strong> berasal dari gabungan dua kata bahasa Sunda, yaitu <em>"Suka"</em> (senang/suka) dan <em>"Galih"</em> (hati/intuk), yang secara filosofis bermakna tempat di mana masyarakatnya senantiasa hidup tenteram, damai, dan penuh kesenangan hati.
              </p>
              <p>
                Dahulu wilayah ini merupakan kawasan agraris subur di bawah naungan Kedewanaan Tarogong. Seiring perkembangan jumlah penduduk dan kebutuhan modernisasi pelayanan publik, pada tahun 2002 pemerintah daerah menetapkan alih status resmi wilayah ini menjadi <strong>Kelurahan Sukagalih</strong> berdasarkan Peraturan Daerah Kabupaten Garut Nomor 32 Tahun 2002.
              </p>
            </div>

            <div className="lg:col-span-1 bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Linimasa Bersejarah</div>
              <div className="space-y-3 text-xs text-slate-600">
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
                <a href="#profil" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 transition-colors">
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
                <a href="#profil" className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 inline-flex items-center gap-1.5 transition-colors">
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
                title="Peta Administrasi Kelurahan Sukagalih Garut"
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
  );
};
