import React from 'react';
import { MapPin, Clock, Phone, Shield } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        {/* Left Side: Location & Operating Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Kecamatan Harapan, Kabupaten Sukamaju, Jawa Barat</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Pelayanan: Senin - Jumat (08.00 - 15.30 WIB)</span>
          </div>
        </div>

        {/* Right Side: Emergency WhatsApp & Status */}
        <div className="flex items-center gap-5">
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WA Pengaduan: 0812-3456-7890</span>
          </a>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Layanan Publik Resmi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
