import { ArrowDownRight, BookOpen, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, SELAYANG_PANDANG, TOC_ITEMS } from '../data/harmoniaData';

interface HeroAndOverviewProps {
  onOpenPdfPage: (page: number) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export default function HeroAndOverview({ onOpenPdfPage, onZoomImage }: HeroAndOverviewProps) {
  return (
    <>
      {/* HALAMAN 1-2: SAMPUL UTAMA HARMONIA GROUP */}
      <section id="beranda" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Top corporate header from Page 1 */}
          <div className="text-center max-w-2xl mx-auto pb-10 border-b border-slate-200">
            <p className="text-sm font-bold tracking-[0.18em] text-[#0F2337] uppercase">
              {COMPANY_INFO.ptShort}
            </p>
            <p className="mt-1.5 text-sm font-semibold tracking-wider text-[#1B4965] tabular-nums inline-flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{COMPANY_INFO.phone}</span>
            </p>
            <p className="mt-1.5 text-xs sm:text-sm italic font-medium text-slate-600 leading-relaxed">
              {COMPANY_INFO.address}
            </p>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Official Harmonia Group Brand Lockup & Investment Statement */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-60 sm:w-72 mb-6">
                <img
                  src="/images/harmonia/logo-harmonia-group.png"
                  alt="Logo Resmi Harmonia Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F2337]">
                {COMPANY_INFO.ptFull}
              </h1>

              <div className="mt-6 w-full max-w-md pt-6 border-t border-slate-200">
                <p className="text-xl sm:text-2xl font-extrabold tracking-[0.35em] text-[#0F2337]">
                  {COMPANY_INFO.tagline}
                </p>
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-5 sm:gap-8 text-xs sm:text-sm font-bold tracking-[0.22em] text-[#0F2337]">
                  <span>{COMPANY_INFO.subTagline[0]}</span>
                  <span aria-hidden="true" className="text-[#C49A3D]">·</span>
                  <span>{COMPANY_INFO.subTagline[1]}</span>
                  <span aria-hidden="true" className="text-[#C49A3D]">·</span>
                  <span>{COMPANY_INFO.subTagline[2]}</span>
                </div>
                <div className="mt-5 h-2 w-44 bg-[#0B2230] mx-auto lg:mx-0" />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#hsh-jatinangor"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F2337] rounded-md hover:bg-[#193858] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Jelajahi Portofolio</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onOpenPdfPage(1)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F2337] bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Lihat Dokumen PDF Asli</span>
                </button>
              </div>
            </div>

            {/* Right: Daftar Isi Arch Card (Page 3 faithful recreation) */}
            <div id="daftar-isi" className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-[#1D476B] text-white rounded-t-[999px] rounded-b-xl border-2 border-[#C49A3D]/80 px-7 sm:px-10 pt-16 pb-10 shadow-sm">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    DAFTAR ISI
                  </h2>
                  <p className="mt-2 text-sm sm:text-base font-medium text-slate-200">
                    Harmonia Group - HG
                  </p>
                </div>

                <ol className="mt-8 space-y-3 border-t border-white/15 pt-6">
                  {TOC_ITEMS.map((item) => (
                    <li key={item.targetId}>
                      <a
                        href={`#${item.targetId}`}
                        className="flex items-center justify-between py-1.5 text-sm sm:text-base font-medium text-white/95 hover:text-[#F4D078] transition-colors group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {item.label}
                        </span>
                        <span className="font-mono tabular-nums font-bold text-white group-hover:text-[#F4D078]">
                          {item.page}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-9 pt-6 border-t border-white/15 text-center">
                  <p className="text-sm font-medium text-slate-200">{COMPANY_INFO.expansionTag}</p>
                  <p className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
                    {COMPANY_INFO.phaseTag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HALAMAN 4-5: KILAS BALIK SELAYANG PANDANG */}
      <section id="selayang-pandang" className="bg-[#090B0E] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Page 4 ornament & headline */}
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="/images/harmonia/selayang-ornament-top.png"
              alt="Ornamen Kilas Balik Selayang Pandang"
              referrerPolicy="no-referrer"
              className="w-64 sm:w-80 mx-auto h-auto object-contain"
            />
            <p className="mt-4 text-xs sm:text-sm tracking-[0.35em] text-slate-300 font-medium">
              {SELAYANG_PANDANG.kicker}
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-white">
              {SELAYANG_PANDANG.title}
            </h2>
            <p className="mt-8 text-base sm:text-lg tracking-[0.22em] text-[#E6C16E] font-medium">
              {SELAYANG_PANDANG.subtitle}
            </p>
            <div className="mt-5 space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              {SELAYANG_PANDANG.introParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Page 5: Brouwer Quote + Bintaro-Jatinangor Map + Story */}
          <div className="mt-16 pt-14 border-t border-white/15">
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-20 h-0.5 bg-[#E6C16E] mx-auto mb-6" />
              <blockquote className="text-sm sm:text-base tracking-[0.25em] text-white font-medium leading-loose">
                {SELAYANG_PANDANG.quote}
              </blockquote>
              <p className="mt-2 text-xs sm:text-sm tracking-[0.28em] text-[#E6C16E]">
                {SELAYANG_PANDANG.quoteAuthor}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <button
                  type="button"
                  onClick={() =>
                    onZoomImage(
                      '/images/harmonia/selayang-map-perjalanan.jpg',
                      'Peta Perjalanan Harmonia: Dari Barat Jawa Menuju Jawa Barat (Bintaro - Jatinangor)'
                    )
                  }
                  className="w-full rounded-xl overflow-hidden border border-white/15 bg-white/5 hover:border-[#E6C16E]/60 transition-colors cursor-zoom-in text-left"
                >
                  <img
                    src="/images/harmonia/selayang-map-perjalanan.jpg"
                    alt="Peta Perjalanan Harmonia dari Bintaro menuju Jatinangor"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain"
                  />
                </button>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#E6C16E]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>AKAR DI BINTARO · TUMBUH BESAR DI JATINANGOR</span>
                </div>
                <div className="space-y-5 font-serif italic text-lg sm:text-xl text-slate-100 leading-relaxed">
                  {SELAYANG_PANDANG.journeyParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-400">
                  <span>Halaman Dokumen Asli: 2–3</span>
                  <button
                    type="button"
                    onClick={() => onOpenPdfPage(5)}
                    className="text-[#E6C16E] hover:underline cursor-pointer"
                  >
                    Buka Halaman 5 PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
