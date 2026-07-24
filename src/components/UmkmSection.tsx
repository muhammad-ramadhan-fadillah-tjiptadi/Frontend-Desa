import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Star, 
  CheckCircle, 
  ArrowUpRight, 
  ChevronDown, 
  Check, 
  X, 
  MapPin, 
  User 
} from 'lucide-react';
import umkmDodolImg from '../assets/umkm-dodol.png';
import umkmAnyamanImg from '../assets/umkm-anyaman.png';
import umkmKopiImg from '../assets/umkm-kopi.png';
import umkmHerbalImg from '../assets/umkm-herbal.png';
import umkmFallbackImg from '../assets/umkm-fallback.png';

interface UmkmProduct {
  id: string;
  name: string;
  category: 'Kuliner Khas' | 'Kerajinan Tangan' | 'Hasil Tani & Herbal';
  price: string;
  rating: string;
  reviewsCount: number;
  owner: string;
  address: string;
  phone: string;
  image: string;
  description: string;
}

export const UmkmSection: React.FC = () => {
  const products: UmkmProduct[] = [
    {
      id: 'umkm-1',
      name: 'Dodol Garut Asli Sukagalih',
      category: 'Kuliner Khas',
      price: 'Rp 25.000',
      rating: '4.9',
      reviewsCount: 128,
      owner: 'Ibu Hj. Nining',
      address: 'RW 03, Kelurahan Sukagalih',
      phone: '6281234567891',
      image: umkmDodolImg,
      description: 'Dodol Garut tradisional buatan tangan warga Sukagalih dengan resep warisan keluarga. Menggunakan beras ketan murni, gula merah Aren pilihan, dan tanpa bahan pengawet sintetis.',
    },
    {
      id: 'umkm-2',
      name: 'Kerajinan Anyaman Bambu Pasirwangi',
      category: 'Kerajinan Tangan',
      price: 'Rp 45.000',
      rating: '4.8',
      reviewsCount: 85,
      owner: 'Pak Maman & Kelompok Seni',
      address: 'RW 07, Kelurahan Sukagalih',
      phone: '6281234567892',
      image: umkmAnyamanImg,
      description: 'Produk kerajinan anyaman bambu berupa tempat bumbu, wadah hantaran, dan perlengkapan rumah tangga ramah lingkungan buatan perajin lokal Sukagalih.',
    },
    {
      id: 'umkm-3',
      name: 'Kopi Arabika Gunung Guntur',
      category: 'Kuliner Khas',
      price: 'Rp 55.000',
      rating: '4.9',
      reviewsCount: 152,
      owner: 'Kedai Kopi Warga Sukagalih',
      address: 'RW 02, Kelurahan Sukagalih',
      phone: '6281234567893',
      image: umkmKopiImg,
      description: 'Biji kopi arabika petik merah yang ditanam di lereng Gunung Guntur Garut. Memiliki cita rasa fruity khas dengan tingkat keasaman seimbang dan aroma harum mengikat.',
    },
    {
      id: 'umkm-4',
      name: 'Minyak Serai Wangi & Herbal Organik',
      category: 'Hasil Tani & Herbal',
      price: 'Rp 35.000',
      rating: '5.0',
      reviewsCount: 94,
      owner: 'Kelompok Tani Herbal Sukagalih',
      address: 'RW 05, Kelurahan Sukagalih',
      phone: '6281234567894',
      image: umkmHerbalImg,
      description: 'Minyak atsiri serai wangi murni hasil penyulingan tanaman herbal lokal Sukagalih. Bermanfaat untuk aromaterapi, relaksasi otot, dan pengusir nyamuk alami.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<UmkmProduct | null>(null);
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

  // Lock scroll when product detail modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  // Filter products by category and live search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'semua' ||
      product.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.owner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      id="umkm"
      className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Katalog UMKM Sukagalih</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Pemberdayaan Produk & Wirausaha Lokal Garut
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Dukungan penuh terhadap wirausaha mikro dan kelompok tani Sukagalih dalam memasarkan produk olahan makanan khas, kerajinan tangan, dan produk tani unggulan.
          </p>
        </div>

        {/* Live Search Input Box */}
        <div className="w-full lg:w-72 relative shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Cari produk / pemilik UMKM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-900 text-xs font-bold rounded-2xl py-3 pl-10 pr-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent transition-all shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filter Controls Toolbar */}
      <div>
        {/* Mobile Custom Floating Popover Dropdown (Visible on Mobile < sm) */}
        <div className="sm:hidden w-full relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-slate-100 border border-slate-300/90 rounded-2xl p-1.5 flex items-center justify-between shadow-xs transition-all cursor-pointer hover:bg-slate-200/60"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-slate-900 font-extrabold text-xs">
                {activeCategory === 'semua' && 'Semua Kategori'}
                {activeCategory === 'kuliner' && 'Kuliner Khas'}
                {activeCategory === 'kerajinan' && 'Kerajinan Tangan'}
                {activeCategory === 'tani' && 'Hasil Tani & Herbal'}
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
                  setActiveCategory('semua');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeCategory === 'semua'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Semua Kategori</span>
                {activeCategory === 'semua' && <Check className="w-4 h-4 text-white" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory('kuliner');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeCategory === 'kuliner'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Kuliner Khas</span>
                {activeCategory === 'kuliner' && <Check className="w-4 h-4 text-white" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory('kerajinan');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeCategory === 'kerajinan'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Kerajinan Tangan</span>
                {activeCategory === 'kerajinan' && <Check className="w-4 h-4 text-white" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory('tani');
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  activeCategory === 'tani'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Hasil Tani & Herbal</span>
                {activeCategory === 'tani' && <Check className="w-4 h-4 text-white" />}
              </button>
            </div>
          )}
        </div>

        {/* Desktop Horizontal Pill Tabs (Visible on >= sm) */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-200/60 p-1.5 rounded-2xl border border-slate-200/80 w-fit">
          <button
            onClick={() => setActiveCategory('semua')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'semua'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Semua
          </button>

          <button
            onClick={() => setActiveCategory('kuliner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'kuliner'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Kuliner Khas
          </button>

          <button
            onClick={() => setActiveCategory('kerajinan')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'kerajinan'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Kerajinan Tangan
          </button>

          <button
            onClick={() => setActiveCategory('tani')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'tani'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Hasil Tani & Herbal
          </button>
        </div>
      </div>

      {/* UMKM Products Card Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white border border-slate-200/90 rounded-3xl p-4 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Product Image Container with Fallback Support */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={400}
                    height={300}
                    onError={(e) => {
                      e.currentTarget.src = umkmFallbackImg;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Price Tag Pill */}
                  <div className="absolute top-3 left-3 bg-emerald-800 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-xs">
                    {product.price}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 text-amber-500 font-bold text-[10px] px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Title & Category */}
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                    {product.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Owner & Action Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span className="truncate max-w-[110px]">{product.owner}</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  className="bg-slate-100 hover:bg-emerald-800 text-slate-700 hover:text-white font-bold text-[11px] py-1.5 px-3 rounded-xl inline-flex items-center gap-1 transition-all cursor-pointer"
                >
                  <span>Detail</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white border border-slate-200/90 rounded-3xl p-8 text-center space-y-3 shadow-2xs">
            <ShoppingBag className="w-10 h-10 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-600">
              Tidak ada produk UMKM yang cocok dengan pencarian "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('semua');
              }}
              className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer"
            >
              Reset Filter & Pencarian
            </button>
          </div>
        )}
      </div>

      {/* Interactive Detail UMKM Modal Popup */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-900 rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative p-6 sm:p-8 animate-in zoom-in-95 duration-200 scrollbar-none"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              title="Tutup Detail UMKM"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Category & Verified Badge */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-800 text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                  {selectedProduct.category}
                </span>
                <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide inline-flex items-center gap-1 border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  <span>Terverifikasi Kelurahan</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {selectedProduct.name}
              </h2>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{selectedProduct.rating} ({selectedProduct.reviewsCount} ulasan)</span>
                </div>
                <div className="text-emerald-800 font-extrabold text-sm">
                  {selectedProduct.price}
                </div>
              </div>
            </div>

            {/* Product Image Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 h-56 sm:h-64 shadow-xs">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                onError={(e) => {
                  e.currentTarget.src = umkmFallbackImg;
                }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description & Owner Details */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {selectedProduct.description}
              </p>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span><strong>Pemilik UMKM:</strong> {selectedProduct.owner}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span><strong>Lokasi Bengkel/Toko:</strong> {selectedProduct.address}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
