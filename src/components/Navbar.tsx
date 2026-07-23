import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight,
  ChevronRight,
  Home,
  UserCheck,
  Info,
  Activity
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Beranda', href: '#beranda', icon: Home },
    { label: 'Profil', href: '#profil', icon: Info },
    { label: 'Aparat Pemerintahan', href: '#serikat', icon: UserCheck },
    { label: 'Statistik', href: '#statistik', icon: Activity },
  ];

  return (
    <header 
      aria-label="Navigasi Utama"
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-slate-200/80' 
          : 'bg-white py-4 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand Identity */}
          <a 
            href="#beranda" 
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Beranda Desa Sukagalih"
          >
            <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors duration-150">
              Desa Sukagalih
            </span>
          </a>

          {/* Center Pill Navigation Bar (Horizon Courts Style) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200/80 p-1.5 rounded-full shadow-2xs">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#layanan"
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-150 shadow-xs active:scale-95 cursor-pointer"
            >
              <span>Layanan Warga</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer transition-colors duration-150"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 animate-in fade-in duration-150">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                      isActive 
                        ? 'bg-slate-900 text-white' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#layanan"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-full text-xs transition-colors duration-150 cursor-pointer active:scale-95"
                >
                  <span>Layanan Warga Mandiri</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
