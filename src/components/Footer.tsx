import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-10 rounded-t-[2.5rem] mt-16 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP CTA BANNER CARD (Horizon Courts Style) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
              Siap Menggunakan Pelayanan Digital Desa Sukamaju?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Akses pengurusan surat administrasi mandiri 24 jam, cek transparansi anggaran APBDes, atau hubungi tim siaga kantor desa.
            </p>
          </div>

          <a
            href="#layanan"
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-full text-xs transition-all duration-150 active:scale-95 cursor-pointer inline-flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Ajukan Surat Sekarang</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2. 4-COLUMN LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Address */}
          <div className="space-y-4 md:col-span-1">
            <span className="font-extrabold text-lg text-white tracking-tight block">
              Desa Sukamaju
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pemerintah Desa Sukamaju — Mandiri, Asri & Transparan Berbasis Digital.
            </p>
            <div className="pt-2 text-xs space-y-2">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Jl. Raya Sukamaju No. 01, Kec. Harapan, Kab. Sukamaju, Jawa Barat 40123</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigasi Utama */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Navigasi Utama</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#beranda" className="hover:text-emerald-500 transition-colors cursor-pointer">Beranda</a></li>
              <li><a href="#profil" className="hover:text-emerald-500 transition-colors cursor-pointer">Profil Desa</a></li>
              <li><a href="#serikat" className="hover:text-emerald-500 transition-colors cursor-pointer">Serikat & Lembaga</a></li>
              <li><a href="#map" className="hover:text-emerald-500 transition-colors cursor-pointer">Peta Interaktif</a></li>
            </ul>
          </div>

          {/* Column 3: Layanan & Fitur */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Layanan Publik</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#layanan" className="hover:text-emerald-500 transition-colors cursor-pointer">Surat Keterangan Online</a></li>
              <li><a href="#transparansi" className="hover:text-emerald-500 transition-colors cursor-pointer">Transparansi APBDes</a></li>
              <li><a href="#umkm" className="hover:text-emerald-500 transition-colors cursor-pointer">Katalog UMKM Tani</a></li>
              <li><a href="#berita" className="hover:text-emerald-500 transition-colors cursor-pointer">Berita & Pengumuman</a></li>
            </ul>
          </div>

          {/* Column 4: Jam Kerja & Kontak */}
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Kontak & Pelayanan</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Senin - Jumat (08.00 - 15.30 WIB)</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WA Siaga: 0812-3456-7890</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>kontak@desasukamaju.go.id</span>
              </p>
            </div>
          </div>

        </div>

        {/* 3. BOTTOM LEGAL & PILL LINKS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pemerintah Desa Sukamaju. Hak Cipta Dilindungi.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#privasi" className="hover:text-emerald-500 transition-colors flex items-center gap-1 cursor-pointer">
              <span>Kebijakan Privasi</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#syarat" className="hover:text-emerald-500 transition-colors flex items-center gap-1 cursor-pointer">
              <span>Syarat & Ketentuan</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="#transparansi" className="hover:text-emerald-500 transition-colors flex items-center gap-1 cursor-pointer">
              <span>Transparansi</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
