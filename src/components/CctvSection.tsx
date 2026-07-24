import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Maximize2, 
  X, 
  Wifi, 
  ShieldCheck, 
  Radio, 
  RotateCw,
  Volume2,
  VolumeX
} from 'lucide-react';
import sejarahSukagalihImg from '../assets/sejarah-sukagalih.png';
import potensiPertanianImg from '../assets/potensi-pertanian.png';
import potensiUmkmImg from '../assets/potensi-umkm.png';
import potensiEkowisataImg from '../assets/potensi-ekowisata.png';
import cctvFallbackImg from '../assets/berita-fallback.png';

interface CctvCamera {
  id: string;
  code: string;
  name: string;
  location: string;
  fps: number;
  image: string;
  status: 'ONLINE' | 'MAINTENANCE';
}

export const CctvSection: React.FC = () => {
  const cameras: CctvCamera[] = [
    {
      id: 'cam-1',
      code: 'CAM-01',
      name: 'Simpang Utama Kantor Kelurahan',
      location: 'Jl. Raya Tarogong No. 42, Sukagalih',
      fps: 30,
      image: sejarahSukagalihImg,
      status: 'ONLINE',
    },
    {
      id: 'cam-2',
      code: 'CAM-02',
      name: 'Kawasan Sentra UMKM & Pasar',
      location: 'Area Pasar & Olahan Warga, Sukagalih',
      fps: 30,
      image: potensiUmkmImg,
      status: 'ONLINE',
    },
    {
      id: 'cam-3',
      code: 'CAM-03',
      name: 'Pertanian & Irigasi Gunung Guntur',
      location: 'Blok Sawah Organik RW 05, Sukagalih',
      fps: 30,
      image: potensiPertanianImg,
      status: 'ONLINE',
    },
    {
      id: 'cam-4',
      code: 'CAM-04',
      name: 'Ekowisata & Jalan Pemukiman RW 04',
      location: 'Jalan Lingkungan Asri, Sukagalih',
      fps: 30,
      image: potensiEkowisataImg,
      status: 'ONLINE',
    },
  ];

  const [selectedCam, setSelectedCam] = useState<CctvCamera | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live Timestamp Clock Update Every Second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toISOString().replace('T', ' ').substring(0, 19) + ' WIB';
      setCurrentTime(formatted);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock scroll when CCTV Fullscreen Modal is open
  useEffect(() => {
    if (selectedCam) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCam]);

  return (
    <div
      id="cctv"
      className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
            <Video className="w-3.5 h-3.5 animate-pulse" />
            <span>CCTV Live Publik Sukagalih</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Pemantauan Keamanan & Irigasi Wilayah 24 Jam
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Simulasi pemantauan jaringan kamera pengawas publik digital untuk menjaga ketertiban lalu lintas, keamanan pemukiman, serta kelancaran irigasi Sukagalih.
          </p>
        </div>

        {/* Status System Badge */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 px-5 flex items-center gap-4 shadow-2xs shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              4 Kamera Aktif
            </span>
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-emerald-800" />
            <span>Latency: 18ms</span>
          </div>
        </div>
      </div>

      {/* Multi-View Grid Wall (2x2 Camera Monitor Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameras.map((cam) => (
          <div
            key={cam.id}
            onClick={() => setSelectedCam(cam)}
            className="bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-emerald-800/80 transition-all duration-300 group cursor-pointer relative"
          >
            {/* Camera Screen Feed Container */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
              <img
                src={cam.image}
                alt={cam.name}
                loading="lazy"
                width={800}
                height={500}
                onError={(e) => {
                  e.currentTarget.src = cctvFallbackImg;
                }}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500 ease-out"
              />

              {/* CCTV HUD Overlay Screen Details - Mobile First Responsive */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/70 p-3 sm:p-4 flex flex-col justify-between pointer-events-none">
                {/* Top HUD: Code, REC badge, & Live Time */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 text-white">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="bg-slate-900/90 border border-slate-800 text-emerald-400 font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                      {cam.code}
                    </span>
                    <span className="bg-red-600 text-white font-extrabold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md uppercase inline-flex items-center gap-1 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>REC</span>
                    </span>
                  </div>

                  <span className="font-mono text-[9px] sm:text-[11px] text-slate-200 font-bold bg-slate-900/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-800 shrink-0">
                    {currentTime || '2026-07-24 10:28:00 WIB'}
                  </span>
                </div>

                {/* Bottom HUD: Camera Name & Fullscreen Button */}
                <div className="flex items-end justify-between gap-2 text-white pointer-events-auto">
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-extrabold text-xs sm:text-base text-white tracking-tight leading-snug group-hover:text-emerald-400 transition-colors truncate">
                      {cam.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 font-normal flex items-center gap-1 truncate">
                      <Radio className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{cam.location}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCam(cam);
                    }}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900/80 hover:bg-emerald-800 text-white flex items-center justify-center border border-slate-700 transition-colors cursor-pointer shadow-xs shrink-0"
                    title="Perbesar Layar CCTV"
                  >
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="bg-slate-900 px-4 sm:px-5 py-2.5 flex items-center justify-between border-t border-slate-800 text-[10px] sm:text-[11px] text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>STATUS: {cam.status}</span>
              </span>
              <span>1080p • {cam.fps} FPS</span>
            </div>
          </div>
        ))}
      </div>

      {/* CCTV Fullscreen Monitor Modal Popup */}
      {selectedCam && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedCam(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-950 border border-slate-800 text-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden space-y-0 relative animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header Toolbar */}
            <div className="bg-slate-900 p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white leading-tight">
                    {selectedCam.name} ({selectedCam.code})
                  </h3>
                  <p className="text-[11px] text-slate-400 font-normal">
                    {selectedCam.location}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCam(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                title="Tutup CCTV"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Large Fullscreen Video Feed Box */}
            <div className="relative h-[320px] sm:h-[450px] w-full bg-slate-950 overflow-hidden">
              <img
                src={selectedCam.image}
                alt={selectedCam.name}
                onError={(e) => {
                  e.currentTarget.src = cctvFallbackImg;
                }}
                className="w-full h-full object-cover"
              />

              {/* Fullscreen HUD Overlay - Mobile First Responsive */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/70 p-3 sm:p-5 flex flex-col justify-between pointer-events-none">
                <div className="flex flex-wrap items-center justify-between gap-1.5 text-white">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="bg-red-600 text-white font-extrabold text-[9px] sm:text-xs px-2.5 py-1 rounded-md uppercase inline-flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>LIVE STREAMING</span>
                    </span>
                    <span className="bg-slate-900/90 border border-slate-800 text-emerald-400 font-mono text-[9px] sm:text-xs font-bold px-2.5 py-1 rounded-md">
                      FULL HD 1080P
                    </span>
                  </div>

                  <span className="font-mono text-[10px] sm:text-xs text-slate-200 font-bold bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 shrink-0">
                    {currentTime}
                  </span>
                </div>

                {/* Bottom Fullscreen Controls */}
                <div className="flex items-center justify-between gap-2 pointer-events-auto">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-300 bg-slate-900/80 px-2.5 py-1.5 rounded-xl border border-slate-800">
                    <RotateCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 animate-spin" />
                    <span>Signal: 98%</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-[10px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl inline-flex items-center gap-1.5 border border-slate-800 transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                        <span>Mute Audio</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Audio On</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Bottom Footer Bar */}
            <div className="bg-slate-900 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-normal">
                Sistem Kamera Publik Digital Kelurahan Sukagalih • Tarogong Kidul, Garut
              </span>

              <button
                type="button"
                onClick={() => setSelectedCam(null)}
                className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-2 rounded-xl transition-colors cursor-pointer"
              >
                Tutup Monitor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
