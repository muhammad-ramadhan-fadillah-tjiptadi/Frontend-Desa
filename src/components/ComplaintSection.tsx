import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquarePlus, 
  Send, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileText, 
  AlertCircle,
  ChevronDown,
  Check,
  MapPin,
  Tag
} from 'lucide-react';

interface ComplaintFormState {
  fullName: string;
  nik: string;
  phone: string;
  rwNumber: string;
  category: string;
  subject: string;
  description: string;
}

export const ComplaintSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketNumber, setTicketNumber] = useState<string>('');

  const [formData, setFormData] = useState<ComplaintFormState>({
    fullName: '',
    nik: '',
    phone: '',
    rwNumber: 'RW 01',
    category: 'Pengaduan Fasilitas Publik',
    subject: '',
    description: '',
  });

  const [formError, setFormError] = useState<string>('');

  // Dropdown Open States inside Modal
  const [isRwDropdownOpen, setIsRwDropdownOpen] = useState<boolean>(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);

  const rwDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // Click outside handlers for custom form dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rwDropdownRef.current && !rwDropdownRef.current.contains(event.target as Node)) {
        setIsRwDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll when Complaint Modal Popup is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setFormError('Nama lengkap wajib diisi.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Nomor WhatsApp / telepon wajib diisi untuk konfirmasi.');
      return;
    }
    if (!formData.subject.trim()) {
      setFormError('Judul laporan / aspirasi wajib diisi.');
      return;
    }
    if (!formData.description.trim()) {
      setFormError('Detail deskripsi pengaduan wajib diisi.');
      return;
    }

    // Generate random simulation ticket number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `SKG-2026-${randomNum}`;
    setTicketNumber(newTicket);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setIsRwDropdownOpen(false);
    setIsCategoryDropdownOpen(false);
    setFormError('');
    setFormData({
      fullName: '',
      nik: '',
      phone: '',
      rwNumber: 'RW 01',
      category: 'Pengaduan Fasilitas Publik',
      subject: '',
      description: '',
    });
  };

  const rwOptions = Array.from({ length: 12 }, (_, i) => `RW ${String(i + 1).padStart(2, '0')}`);
  
  const categoryOptions = [
    'Pengaduan Fasilitas Publik',
    'Aspirasi Pembangunan',
    'Layanan Administrasi',
    'Ketertiban & Keamanan',
  ];

  return (
    <div
      id="layanan"
      className="bg-slate-50/90 border border-slate-200/90 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 space-y-10 shadow-xs scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <div className="bg-emerald-800 text-white font-extrabold text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase inline-flex items-center gap-2 shadow-2xs">
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Layanan Pengaduan Daring</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Formulir Lapor & Aspirasi Warga Sukagalih
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Sampaikan pengaduan infrastruktur, usulan pembangunan desa, serta laporan ketertiban wilayah secara langsung dan transparan kepada aparatur kelurahan.
          </p>
        </div>

        {/* Trigger Button to Open Modal Form */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2.5 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Buat Laporan / Aspirasi</span>
          </button>
        </div>
      </div>

      {/* Feature Guarantee Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">Kerahasiaan Data Terjamin</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Identitas dan NIK pelapor terenkripsi aman serta hanya diakses oleh aparatur kelurahan yang berwenang.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">Respon Cepat 1x24 Jam</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Setiap laporan pengaduan yang masuk akan ditindaklanjuti dan diverifikasi oleh tim siaga kelurahan dalam waktu 24 jam.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 space-y-3 shadow-2xs">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">Nomor Tiket Pelacakan</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Setiap pelapor mendapatkan nomor tiket unik untuk melacak status perkembangan penanganan laporan secara berkala.
          </p>
        </div>
      </div>

      {/* Interactive Form Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={handleResetAndClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-900 rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative p-6 sm:p-8 animate-in zoom-in-95 duration-200 scrollbar-none"
          >
            {/* Modal Header Toolbar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                  <MessageSquarePlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                    Formulir Lapor Warga Sukagalih
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Layanan pengaduan & aspirasi daring resmi
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Tutup Form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success State View */}
            {isSubmitted ? (
              <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-slate-900">Laporan Berhasil Terkirim!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md mx-auto">
                    Terima kasih <strong>{formData.fullName}</strong>. Pengaduan Anda telah tercatat di sistem kelurahan dan akan ditindaklanjuti oleh petugas terkait.
                  </p>
                </div>

                {/* Ticket Number Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Nomor Tiket Pelacakan
                  </span>
                  <div className="font-mono text-lg font-extrabold text-emerald-800">
                    {ticketNumber}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-7 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Selesai & Tutup
                </button>
              </div>
            ) : (
              /* Complaint Form Inputs */
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold p-3 rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900">
                      Nama Lengkap Pelapor <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Contoh: Ahmad Subagja"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>

                  {/* NIK / KTP */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900">
                      NIK / KTP <span className="text-slate-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="text"
                      name="nik"
                      placeholder="16 digit NIK Garut"
                      value={formData.nik}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nomor WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900">
                      No. WhatsApp / Telp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>

                  {/* Custom Styled Dropdown 1: Wilayah RW */}
                  <div className="space-y-1.5 relative" ref={rwDropdownRef}>
                    <label className="text-xs font-bold text-slate-900">
                      Wilayah Asal RW <span className="text-red-500">*</span>
                    </label>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setIsRwDropdownOpen(!isRwDropdownOpen);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-900 text-xs font-bold rounded-xl py-2.5 px-3.5 flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                        <span>Wilayah {formData.rwNumber} - Sukagalih</span>
                      </div>
                      <div className={`w-5 h-5 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center transition-transform duration-200 ${isRwDropdownOpen ? 'rotate-180 bg-emerald-800 text-white' : ''}`}>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </button>

                    {/* Floating Pill Popover Menu for RW */}
                    {isRwDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1.5 z-40 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-1 max-h-48 overflow-y-auto animate-in fade-in duration-150 scrollbar-none">
                        {rwOptions.map((rw) => (
                          <button
                            key={rw}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, rwNumber: rw }));
                              setIsRwDropdownOpen(false);
                            }}
                            className={`w-full px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                              formData.rwNumber === rw
                                ? 'bg-emerald-800 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                          >
                            <span>Wilayah {rw} - Sukagalih</span>
                            {formData.rwNumber === rw && <Check className="w-3.5 h-3.5 text-white" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Custom Styled Dropdown 2: Kategori Laporan */}
                <div className="space-y-1.5 relative" ref={categoryDropdownRef}>
                  <label className="text-xs font-bold text-slate-900">
                    Kategori Laporan / Aspirasi <span className="text-red-500">*</span>
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                      setIsRwDropdownOpen(false);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-900 text-xs font-bold rounded-xl py-2.5 px-3.5 flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>{formData.category}</span>
                    </div>
                    <div className={`w-5 h-5 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180 bg-emerald-800 text-white' : ''}`}>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </button>

                  {/* Floating Pill Popover Menu for Category */}
                  {isCategoryDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 z-40 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-1 animate-in fade-in duration-150">
                      {categoryOptions.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, category: cat }));
                            setIsCategoryDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                            formData.category === cat
                              ? 'bg-emerald-800 text-white shadow-xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                        >
                          <span>{cat}</span>
                          {formData.category === cat && <Check className="w-3.5 h-3.5 text-white" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Judul Laporan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900">
                    Judul Singkat Laporan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Contoh: Perbaikan Lampu Penerangan Jalan RW 03"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>

                {/* Deskripsi Laporan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900">
                    Detail Deskripsi Laporan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Jelaskan secara rinci lokasi, kronologi, atau usulan aspirasi Anda..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-normal rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-800 leading-relaxed"
                  />
                </div>

                {/* Form Footer Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs px-6 py-2.5 rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Laporan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
