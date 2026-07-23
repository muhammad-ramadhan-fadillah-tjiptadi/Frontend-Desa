import React from 'react';
import { Activity } from 'lucide-react';

export const DemographicsSection: React.FC = () => {
  return (
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
                <span className="text-slate-700">Perguruan Tinggi</span>
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
  );
};
