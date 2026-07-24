import React, { useState, useRef, useEffect } from 'react';
import { Newspaper, Calendar, User, ArrowUpRight, ChevronDown, Check, X } from 'lucide-react';
import beritaLayananDigitalImg from '../assets/berita-layanan-digital.png';
import beritaPertanianBantuanImg from '../assets/berita-pertanian-bantuan.png';
import beritaGotongRoyongImg from '../assets/berita-gotong-royong.png';
import beritaFallbackImg from '../assets/berita-fallback.png';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  fullContent: string[];
  badgeColor: string;
}

export const NewsSection: React.FC = () => {
  const newsList: NewsItem[] = [
    {
      id: 'news-1',
      title: 'Peluncuran Anjungan Layanan Surat Mandiri Digital 24 Jam di Sukagalih',
      category: 'Pengumuman Resmi',
      date: '24 Juli 2026',
      author: 'Aparatur Kelurahan',
      image: beritaLayananDigitalImg,
      excerpt: 'Masyarakat Sukagalih kini dapat mengurus surat keterangan usaha, domisili, dan pengantar secara mandiri lewat mesin anjungan digital dan portal online.',
      fullContent: [
        'Dalam rangka mewujudkan tata kelola kelurahan modern dan mandiri berbasis teknologi informasi, Pemerintah Kelurahan Sukagalih secara resmi meluncurkan Anjungan Pelayanan Publik Mandiri Digital 24 Jam yang ditempatkan di Balai Desa Sukagalih, Kecamatan Tarogong Kidul, Garut.',
        'Melalui fasilitas anjungan ini, masyarakat kini dapat mengurus berbagai dokumen administrasi penting seperti Surat Keterangan Usaha (SKU), Surat Keterangan Domisili, Pengantar KTP-el / Kartu Keluarga, serta Surat Keterangan Tidak Mampu (SKTM) secara mandiri hanya dalam hitungan menit tanpa harus mengantre lama di loket kantor.',
        'Lurah Sukagalih Bapak Sopi Periardiansyah mengimbau seluruh lapisan warga dari RW 01 hingga RW 12 untuk dapat memanfaatkan fasilitas digital ini secara bijak, transparan, dan cepat guna meningkatkan efisiensi pelayanan publik desa.'
      ],
      badgeColor: 'bg-emerald-800 text-white',
    },
    {
      id: 'news-2',
      title: 'Penyaluran Bantuan Benih Organik & Program Ketahanan Padi Terpadu',
      category: 'Pembangunan & Sosial',
      date: '20 Juli 2026',
      author: 'LPM Sukagalih',
      image: beritaPertanianBantuanImg,
      excerpt: 'Pemerintah Kelurahan bersama LPM Sukagalih menyalurkan bantuan bibit organik dan pupuk terpadu bagi kelompok tani di kawasan Tarogong Garut.',
      fullContent: [
        'Lembaga Pemberdayaan Masyarakat (LPM) Kelurahan Sukagalih bekerja sama dengan Dinas Pertanian Kabupaten Garut merampungkan pendistribusian 2 ton benih padi organik unggulan dan puluhan paket pupuk kandang terpadu bagi kelompok tani lokal.',
        'Program bantuan ini ditujukan untuk memperkuat ketahanan pangan warga pedesaan serta menjaga produktivitas sawah seluas 12,5 km² yang berada di kaki Gunung Guntur agar tetap ramah lingkungan dan bebas pestisida kimia berbahaya.',
        'Para perwakilan kelompok tani menyambut antusias program ini dan berkomitmen untuk terus menjaga komoditas beras organik berkualitas unggul yang menjadi kebanggaan daerah Tarogong Kidul Garut.'
      ],
      badgeColor: 'bg-slate-900 text-white',
    },
    {
      id: 'news-3',
      title: 'Gotong Royong Masal & Penghijauan Lingkungan Sambut Hari Jadi Garut',
      category: 'Kegiatan Warga',
      date: '15 Juli 2026',
      author: 'Karang Taruna',
      image: beritaGotongRoyongImg,
      excerpt: 'Warga RW 01 hingga RW 12 bergotong-royong membersihkan saluran irigasi dan menanam 500 bibit pohon di pemukiman area kaki gunung.',
      fullContent: [
        'Menyambut momentum Hari Jadi Kabupaten Garut, ratusan elemen warga dari RW 01 hingga RW 12 Sukagalih secara serentak menggelar aksi gotong royong masal untuk membersihkan saluran air irigasi sawah dan perbaikan fasilitas jalan pemukiman.',
        'Aksi kemasyarakatan ini dipelopori oleh Karang Taruna Sukagalih yang juga merangkaikan kegiatan dengan penanaman 500 bibit pohon produktif seperti mahoni, durian, dan alpukat di sepanjang daerah aliran sungai desa.',
        'Kegiatan yang berlangsung hangat ini diakhiri dengan ramah tamah dan makan bersama seluruh warga sebagai simbol mempererat ikatan silaturahmi dan nilai kebudayaan gotong royong Sunda yang lestari.'
      ],
      badgeColor: 'bg-emerald-800 text-white',
    },
  ];

  const [activeFilter, setActiveFilter] = useState<string>('semua');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll when modal popup is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNews]);

  const filteredNews = activeFilter === 'semua'
    ? newsList
    : newsList.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div
      id="berita"
      className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Papan Mading Digital</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Berita, Pengumuman & Informasi Publik Sukagalih
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Papan informasi digital resmi mengenai pengumuman kelurahan, jadwal agenda kegiatan warga, serta kabar terbaru perkembangan pembangunan.
          </p>
        </div>

        {/* Mobile Custom Floating Popover Dropdown (Visible on Mobile < sm) */}
        <div className="sm:hidden w-full relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-slate-100 border border-slate-300/90 rounded-2xl p-1.5 flex items-center justify-between shadow-xs transition-all cursor-pointer hover:bg-slate-200/60"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Newspaper className="w-4 h-4" />
              </div>
              <span className="text-slate-900 font-extrabold text-xs">
                {activeFilter === 'semua' && 'Semua Berita'}
                {activeFilter === 'pengumuman' && 'Pengumuman Resmi'}
                {activeFilter === 'kegiatan' && 'Kegiatan Warga'}
              </span>
            </div>
            <div className={`w-6 h-6 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 bg-emerald-800 text-white' : ''}`}>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Floating Pill Popover Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-1.5 animate-in fade-in duration-150">
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('semua');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeFilter === 'semua'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Semua Berita</span>
                {activeFilter === 'semua' && <Check className="w-4 h-4 text-white" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter('pengumuman');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeFilter === 'pengumuman'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Pengumuman Resmi</span>
                {activeFilter === 'pengumuman' && <Check className="w-4 h-4 text-white" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter('kegiatan');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeFilter === 'kegiatan'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Kegiatan Warga</span>
                {activeFilter === 'kegiatan' && <Check className="w-4 h-4 text-white" />}
              </button>
            </div>
          )}
        </div>

        {/* Desktop Horizontal Pill Tabs (Visible on >= sm) */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-200/60 p-1.5 rounded-2xl border border-slate-200/80 shrink-0">
          <button
            onClick={() => setActiveFilter('semua')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
              activeFilter === 'semua'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setActiveFilter('pengumuman')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
              activeFilter === 'pengumuman'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Pengumuman
          </button>
          <button
            onClick={() => setActiveFilter('kegiatan')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-center ${
              activeFilter === 'kegiatan'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Kegiatan Warga
          </button>
        </div>
      </div>

      {/* Digital Bulletin Board Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredNews.map((item) => (
          <article
            key={item.id}
            onClick={() => setSelectedNews(item)}
            className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group cursor-pointer"
          >
            <div>
              {/* Card Image Container with Fallback Image Support */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={600}
                  height={400}
                  onError={(e) => {
                    // Fallback Image Handler
                    e.currentTarget.src = beritaFallbackImg;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide uppercase shadow-xs ${item.badgeColor}`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body & Metadata */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-800" />
                    <span>{item.author}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-800 transition-colors duration-150 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </div>

            {/* Read More Footer */}
            <div className="px-6 pb-6 pt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedNews(item);
                }}
                className="w-full bg-slate-100 hover:bg-emerald-800 text-slate-700 hover:text-white font-bold text-xs py-2.5 px-4 rounded-xl inline-flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
              >
                <span>Baca Selengkapnya</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Detail News Modal Popup */}
      {selectedNews && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedNews(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative p-6 sm:p-8 animate-in zoom-in-95 duration-200 scrollbar-none"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedNews(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              title="Tutup Detail Berita"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Category Badge & Metadata */}
            <div className="space-y-3 pt-2">
              <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase inline-block shadow-2xs ${selectedNews.badgeColor}`}>
                {selectedNews.category}
              </span>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{selectedNews.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Diterbitkan oleh: {selectedNews.author}</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {selectedNews.title}
              </h2>
            </div>

            {/* Featured Image inside Modal */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs h-56 sm:h-72">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                onError={(e) => {
                  e.currentTarget.src = beritaFallbackImg;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full News Content Paragraphs */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
              {selectedNews.fullContent.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Tutup Berita
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
