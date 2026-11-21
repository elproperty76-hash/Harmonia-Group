import { useState, type FormEvent } from 'react';
import { BookOpen, CheckCircle2, ChevronRight, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, PENUTUP_DATA, TOC_ITEMS } from '../data/harmoniaData';

interface SectionClosingFooterProps {
  onOpenPdfPage: (page: number) => void;
  inquirySectionRef: React.RefObject<HTMLDivElement | null>;
}

export default function SectionClosingFooter({
  onOpenPdfPage,
  inquirySectionRef,
}: SectionClosingFooterProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState('HSH - Jatinangor, Sumedang');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/[^0-9+]/g, '');
    if (name.trim().length < 2) {
      setError('Mohon masukkan nama lengkap Anda.');
      return;
    }
    if (cleanedPhone.length < 9) {
      setError('Mohon masukkan nomor WhatsApp / telepon yang valid.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      {/* Pages 37-38: Penutup & Ekspansi HG */}
      <section id="penutup" className="bg-white border-b border-slate-200">
        {/* Page 37: TAHAP 2 HSHJ Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-500">
              <span>05. PENUTUP</span>
              <span aria-hidden="true">/</span>
              <span>HARMONIA GROUP – TAHAP 2</span>
              <span aria-hidden="true">·</span>
              <span>HAL. 31</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenPdfPage(37)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D476B] hover:underline cursor-pointer self-start sm:self-auto"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buka Halaman Asli (Hal. 37–38)</span>
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#CCA753] text-[#0F2337] rounded-md font-extrabold tracking-wide">
              <span className="text-xs font-bold">TAHAP 2</span>
              <span className="text-lg">HSHJ</span>
            </div>

            <div className="mt-10 w-60 sm:w-72">
              <img
                src="/images/harmonia/logo-harmonia-group.png"
                alt="Harmonia Group"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-10 w-full max-w-4xl rounded-full bg-[#134674] text-white px-6 sm:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left text-xs sm:text-sm space-y-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1 font-bold">
                  <span>{COMPANY_INFO.tower}</span>
                  <span className="tabular-nums">{COMPANY_INFO.phone}</span>
                </div>
                <p className="text-slate-200">{COMPANY_INFO.addressMixed}</p>
              </div>
              <a
                href="#konsultasi"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#DFCF53] text-[#0F2337] text-xs sm:text-sm font-extrabold hover:bg-[#eadb66] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{PENUTUP_DATA.ctaPill}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Page 38: Full Closing Statement */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-10">
            <p className="text-xl font-bold tracking-widest text-slate-400">HARMONIA</p>
            <p className="text-sm font-semibold tracking-[0.25em] text-slate-400">GROUP</p>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#0F2337] font-semibold leading-relaxed text-justify">
            {PENUTUP_DATA.letterParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <p className="mt-12 text-center text-2xl sm:text-3xl font-bold tracking-wider text-slate-400">
            {COMPANY_INFO.ptFull}
          </p>
        </div>

        {/* Interactive Consultation & Contact Section */}
        <div
          id="konsultasi"
          ref={inquirySectionRef}
          className="bg-slate-50 border-t border-slate-200 py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-bold tracking-wider text-[#C49A3D]">
                KONSULTASI INVESTASI HARMONIA GROUP
              </p>
              <h2 className="text-3xl font-extrabold text-[#0F2337]">
                Informasi & Kunjungan Lokasi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hubungi tim kami untuk mendapatkan detail ketersediaan unit, rincian skema kepemilikan, serta jadwal survei kawasan proyek Harmonia Group.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0F2337] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{COMPANY_INFO.ptShort} · {COMPANY_INFO.ptFull}</p>
                    <p className="tabular-nums font-semibold text-[#1D476B]">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0F2337] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold">{COMPANY_INFO.tower}</p>
                    <p className="text-slate-600">{COMPANY_INFO.addressMixed}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-extrabold text-[#0F2337]">
                    Permintaan Informasi Tercatat
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <span className="font-semibold text-slate-900">{name}</span>. Ketertarikan Anda untuk proyek{' '}
                    <span className="font-semibold text-slate-900">{project}</span> telah dicatat. Anda juga dapat langsung menghubungi nomor resmi{' '}
                    <span className="font-bold tabular-nums">{COMPANY_INFO.phone}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-[#0F2337] border border-slate-300 rounded-md hover:bg-slate-50 cursor-pointer"
                  >
                    Kirim Permintaan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama Anda"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2337]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nomor WhatsApp / Telepon
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="08xx-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2337]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-project" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Proyek yang Diminati
                    </label>
                    <select
                      id="lead-project"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2337]"
                    >
                      <option value="HSH - Jatinangor, Sumedang">HSH - Jatinangor, Sumedang</option>
                      <option value="HSH - Dramaga, Bogor">HSH - Dramaga, Bogor</option>
                      <option value="GRV - Citarik, Sukabumi">GRV - Citarik, Sukabumi</option>
                      <option value="HMG - Rangkasbitung, Lebak">HMG - Rangkasbitung, Lebak</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Catatan / Pertanyaan (Opsional)
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan tipe unit atau pertanyaan Anda"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F2337]"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-semibold text-red-700" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Kontak resmi: <strong className="tabular-nums text-slate-700">{COMPANY_INFO.phone}</strong>
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0F2337] rounded-md hover:bg-[#193858] transition-colors cursor-pointer"
                    >
                      Kirim Permintaan Informasi
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="bg-[#0F2337] text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-base font-bold text-white">HARMONIA GROUP</p>
            <p className="text-xs text-slate-400">
              {COMPANY_INFO.ptFull} · {COMPANY_INFO.addressMixed}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.targetId}
                href={`#${item.targetId}`}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
