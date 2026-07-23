import React from 'react';
import { UserCheck, ArrowUpRight } from 'lucide-react';
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

export const OfficialsSection: React.FC = () => {
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
          Aparatur kelurahan dan pengurus lembaga kemasyarakatan (LPM) yang bersinergi melayani seluruh
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
  );
};
