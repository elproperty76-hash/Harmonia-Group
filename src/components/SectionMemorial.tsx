import { BookOpen, Check, MapPin, ShieldCheck, ZoomIn } from 'lucide-react';
import { HMG_DATA } from '../data/harmoniaData';

interface SectionMemorialProps {
  onOpenPdfPage: (page: number) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export default function SectionMemorial({ onOpenPdfPage, onZoomImage }: SectionMemorialProps) {
  return (
    <section id="hmg-rangkasbitung" className="bg-white border-b border-slate-200">
      {/* Pages 33-34: Hero & Mengenal Lebih Dekat */}
      <div className="bg-[#12263A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/15">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-300">
              <span>04. PORTOFOLIO</span>
              <span aria-hidden="true">/</span>
              <span>HMG – MEMORIAL GARDEN, LEBAK</span>
              <span aria-hidden="true">·</span>
              <span>HAL. 28–30</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenPdfPage(34)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#F4D078] hover:underline cursor-pointer self-start sm:self-auto"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buka Halaman Asli (Hal. 34)</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15">
                <img
                  src="/images/harmonia/hmg-hero-landscape.jpg"
                  alt="Kawasan Harmonia Memorial Garden Lebak, Banten"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span>{HMG_DATA.topLeftNote}</span>
                <span aria-hidden="true">|</span>
                <span>{HMG_DATA.topRightNote}</span>
                <span aria-hidden="true">·</span>
                <span className="font-bold text-[#F4D078]">{HMG_DATA.hashtag}</span>
              </div>

              <div className="bg-white rounded-xl p-5 inline-block">
                <img
                  src="/images/harmonia/logo-hmg.png"
                  alt="Logo Harmonia Memorial Garden"
                  referrerPolicy="no-referrer"
                  className="w-52 h-auto object-contain"
                />
              </div>

              <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-2xl">
                {HMG_DATA.heroDesc}
              </p>

              <div className="pt-4 border-t border-white/15 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-200">
                <span>IG: {HMG_DATA.instagram}</span>
                <span>Web: {HMG_DATA.website}</span>
                <span>FB: {HMG_DATA.facebook}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mengenal Lebih Dekat Harmonia Memorial Garden + Portfolio Thumbnails */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F2337]">
              {HMG_DATA.aboutTitle}
            </h3>
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              {HMG_DATA.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <img
                src="/images/harmonia/hmg-building-render.jpg"
                alt="Arsitektur Harmonia Memorial Garden Lebak, Banten"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {HMG_DATA.portfolioThumbs.map((thumb) => (
            <div
              key={thumb.label}
              className="rounded-xl overflow-hidden border border-slate-200 bg-white"
            >
              <img
                src={thumb.image}
                alt={thumb.label}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <p className="p-3 text-xs font-bold text-center text-[#0F2337] border-t border-slate-100">{thumb.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-serif text-2xl text-[#0F2337]">
          {HMG_DATA.locationFooter}
        </p>
      </div>

      {/* Page 35: Mengapa, Site Plan, Lokasi Strategis, Biaya, Tipe Kavling, Cara Pemesanan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200 space-y-16">
        {/* Top Row: Mengapa + Biaya Optional & IPL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
              {HMG_DATA.whyTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HMG_DATA.whyItems.map((item) => (
                <div
                  key={item}
                  className="p-3.5 rounded-lg bg-[#12263A] text-white text-xs sm:text-sm font-semibold flex items-center gap-2.5"
                >
                  <ShieldCheck className="w-4 h-4 text-[#F4D078] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-extrabold text-[#0F2337]">
              {HMG_DATA.biayaOptionalTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-base font-bold text-[#0F2337]">Biaya Jasa Optional</h4>
                {HMG_DATA.biayaJasaOptional.map((opt) => (
                  <div key={opt.title} className="text-xs sm:text-sm text-slate-700">
                    <p className="font-bold text-[#0F2337]">· {opt.title}</p>
                    <p className="pl-3 mt-0.5 leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
                <p className="text-[11px] italic text-slate-500">{HMG_DATA.biayaJasaNote}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-[#0F2337]">IPL dan Perawatan</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
                  {HMG_DATA.iplItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Site Plan & Lokasi Strategis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-slate-200">
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h3 className="text-2xl font-extrabold text-[#0F2337]">{HMG_DATA.siteplanTitle}</h3>
              <p className="text-sm font-bold text-slate-700 mt-1">
                {HMG_DATA.siteplanSubtitle} · {HMG_DATA.siteplanArea}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="grid grid-cols-3 sm:grid-cols-1 gap-3">
                {HMG_DATA.plotCounts.map((pc) => (
                  <div
                    key={pc.type}
                    className="p-3.5 rounded-lg border border-slate-200 bg-white text-center sm:text-left"
                  >
                    <p className="text-xs font-bold text-slate-600">{pc.type}</p>
                    <p className="text-2xl font-extrabold text-[#0F2337] tabular-nums">{pc.count}</p>
                    <p className="text-[11px] text-slate-500">{pc.unit}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  onZoomImage(
                    '/images/harmonia/hmg-siteplan-map.jpg',
                    'Site Plan Kavling Makam Harmonia Memorial Garden'
                  )
                }
                className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2 cursor-zoom-in relative"
              >
                <img
                  src="/images/harmonia/hmg-siteplan-map.jpg"
                  alt="Site Plan Harmonia Memorial Garden"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-900/80 text-white text-xs">
                  <ZoomIn className="w-3 h-3" />
                  Perbesar
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-extrabold text-[#0F2337]">{HMG_DATA.lokasiTitle}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HMG_DATA.lokasiDistances.map((loc) => (
                <div key={loc.distance} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xl font-extrabold text-[#0F2337] tabular-nums">{loc.distance}</p>
                  <p className="mt-1 text-xs text-slate-600 leading-snug">{loc.desc}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                onZoomImage(
                  '/images/harmonia/hmg-strategic-map.jpg',
                  'Peta Lokasi Strategis Harmonia Memorial Garden Rangkasbitung'
                )
              }
              className="w-full rounded-xl overflow-hidden border border-slate-200 cursor-zoom-in relative"
            >
              <img
                src="/images/harmonia/hmg-strategic-map.jpg"
                alt="Peta Lokasi Strategis Harmonia Memorial Garden"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-900/80 text-white text-xs">
                <ZoomIn className="w-3 h-3" />
                Perbesar Peta
              </span>
            </button>

            <p className="text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#12263A] shrink-0" />
              <span>{HMG_DATA.lokasiAddress}</span>
            </p>
          </div>
        </div>

        {/* Biaya Wajib & Tipe Unit Makam */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-slate-200">
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-2xl font-extrabold text-[#0F2337]">{HMG_DATA.biayaWajibTitle}</h3>
              <p className="mt-1 text-lg font-extrabold text-[#12263A] tabular-nums">
                {HMG_DATA.biayaWajibPrice}
              </p>
            </div>

            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              {HMG_DATA.biayaWajibBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <img
              src="/images/harmonia/hmg-tomb-photos.jpg"
              alt="Detail batu nisan dan rumput Jepang Harmonia Memorial Garden"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-xl border border-slate-200 object-contain"
            />

            <div className="p-5 rounded-xl bg-[#12263A] text-white text-xs sm:text-sm leading-relaxed">
              {HMG_DATA.valueText}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-extrabold text-[#0F2337]">
              Tipe Kavling & Harga Harmonia Memorial Garden
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HMG_DATA.plotTypes.map((pt) => (
                <div
                  key={pt.name}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 text-center flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-extrabold text-[#0F2337]">{pt.name}</h4>
                    <p className="mt-2 text-xs text-slate-600">{pt.size}</p>
                    <p className="text-xs font-medium text-slate-600">{pt.access}</p>
                  </div>
                  <p className="mt-4 pt-3 border-t border-slate-200 text-xl font-extrabold text-[#12263A] tabular-nums">
                    {pt.price}
                  </p>
                </div>
              ))}
            </div>

            <img
              src="/images/harmonia/hmg-type-cards.jpg"
              alt="Ilustrasi Tipe Single, Tipe Couple, dan Tipe Family"
              referrerPolicy="no-referrer"
              className="w-full rounded-xl border border-slate-200 object-contain bg-white"
            />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {HMG_DATA.parkFeatures.map((feat) => (
                <div
                  key={feat}
                  className="px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-950 flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cara Pemesanan & Biaya Wajib Jasa Pemakaman */}
        <div className="pt-10 border-t border-slate-200 bg-[#0F2235] text-white rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Cara Pemesanan</h3>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-200 list-disc list-inside leading-relaxed">
                  {HMG_DATA.caraPemesanan.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/15">
                <div>
                  <h4 className="text-base font-bold text-[#F4D078]">
                    Pre – use <span className="text-xs font-normal text-slate-300">(kebutuhan akan datang)</span>
                  </h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-200 list-disc list-inside leading-relaxed">
                    {HMG_DATA.preUse.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#F4D078]">
                    For – use <span className="text-xs font-normal text-slate-300">(kebutuhan saat itu juga)</span>
                  </h4>
                  <ul className="mt-2 space-y-2 text-xs text-slate-200 list-disc list-inside leading-relaxed">
                    {HMG_DATA.forUse.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Biaya Wajib Jasa Pemakaman
                </h3>
                <button
                  type="button"
                  onClick={() => onOpenPdfPage(35)}
                  className="text-xs font-semibold text-[#F4D078] hover:underline cursor-pointer"
                >
                  Lihat Halaman 35 PDF
                </button>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-200 list-disc list-inside">
                {HMG_DATA.jasaPemakamanItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="pt-3 grid grid-cols-2 gap-3 items-start">
                <img
                  src="/images/harmonia/hmg-facility-photos.jpg"
                  alt="Fasilitas Masjid Raya dan area taman Harmonia Memorial Garden"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-lg border border-white/15"
                />
                <img
                  src="/images/harmonia/hmg-ceremony-photo.jpg"
                  alt="Layanan tenda prosesi pemakaman Harmonia Memorial Garden"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain rounded-lg border border-white/15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 36: Closing HMG Quote */}
      <div className="bg-slate-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <p className="text-lg sm:text-xl font-bold text-[#0F2337] leading-relaxed">
            {HMG_DATA.closingParagraphs[0]}
          </p>
          <div className="inline-block bg-white rounded-xl p-6 border border-slate-200">
            <img
              src="/images/harmonia/logo-hmg.png"
              alt="Harmonia Memorial Garden"
              referrerPolicy="no-referrer"
              className="w-52 mx-auto h-auto object-contain"
            />
          </div>
          <p className="text-lg sm:text-xl font-bold text-[#0F2337] leading-relaxed">
            {HMG_DATA.closingParagraphs[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
