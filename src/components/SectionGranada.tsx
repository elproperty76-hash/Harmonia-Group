import { BookOpen, Check, MapPin, ZoomIn } from 'lucide-react';
import { GRV_DATA } from '../data/harmoniaData';

interface SectionGranadaProps {
  onOpenPdfPage: (page: number) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export default function SectionGranada({ onOpenPdfPage, onZoomImage }: SectionGranadaProps) {
  return (
    <section id="grv-citarik" className="bg-[#073524] text-white border-b border-emerald-950">
      {/* Pages 27-28: Granada RiverView Overview & Ekowisata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 border-b border-white/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/15">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-emerald-200/80">
            <span>03. PORTOFOLIO</span>
            <span aria-hidden="true">/</span>
            <span>GRV – GRANADA RIVERVIEW, SUKABUMI</span>
            <span aria-hidden="true">·</span>
            <span>HAL. 23–27</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenPdfPage(28)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8CD73] hover:underline cursor-pointer self-start sm:self-auto"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Buka Halaman Asli (Hal. 28)</span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#05291C]">
              <img
                src="/images/harmonia/grv-isometric-cabin.jpg"
                alt="Ilustrasi isometrik Cabin Villa Granada RiverView Citarik"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/harmonia/logo-grv.png"
                alt="Logo Granada RiverView Citarik - Sukabumi Part of Harmonia Group"
                referrerPolicy="no-referrer"
                className="w-44 h-auto object-contain rounded-lg border border-white/10"
              />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider text-[#E8CD73]">
                {GRV_DATA.overviewTag}
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E8CD73] leading-tight">
                {GRV_DATA.headline}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-emerald-50/90 leading-relaxed">
                {GRV_DATA.subheadline}
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-emerald-100">
              <span className="font-semibold">{GRV_DATA.instagram}</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="inline-flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#E8CD73] shrink-0 mt-0.5" />
                <span>{GRV_DATA.address}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Ekowisata Editorial Block (Bottom half of Page 28) */}
        <div className="mt-14 pt-12 border-t border-white/15 text-center max-w-4xl mx-auto space-y-6">
          <p className="text-lg sm:text-xl font-bold tracking-[0.25em] text-white">
            {GRV_DATA.ekowisataKicker}
          </p>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-[0.06em] text-white">
            {GRV_DATA.ekowisataTitle}
          </h3>
          <p className="font-serif italic text-3xl sm:text-4xl text-[#E8CD73]">
            {GRV_DATA.ekowisataScript}
          </p>

          <div className="bg-white/95 text-slate-900 rounded-2xl p-6 sm:p-8 text-left sm:text-center space-y-4">
            <p className="text-sm sm:text-base leading-relaxed font-medium">
              {GRV_DATA.ekowisataPara1}
            </p>
            <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#073524] tracking-wide">
              {GRV_DATA.ekowisataPara2}
            </p>
            <p className="pt-2 text-lg sm:text-xl font-extrabold text-[#073524]">
              Part Of Harmonia Group
            </p>
          </div>
        </div>
      </div>

      {/* Page 29: Mengenal Granada Riverview & Lokasi Strategis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-white/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#E8CD73]">
              {GRV_DATA.mengenalTitle}
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-emerald-50/90 leading-relaxed">
              {GRV_DATA.mengenalParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/15">
              <img
                src="/images/harmonia/grv-sunset-cabins.jpg"
                alt="Kawasan kavling vila Granada Riverview saat senja"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/15">
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-center text-[#E8CD73]">
            {GRV_DATA.lokasiTitle}
          </h3>

          <button
            type="button"
            onClick={() =>
              onZoomImage(
                '/images/harmonia/grv-strategic-map.jpg',
                'Peta Lokasi Strategis Granada RiverView Citarik - Exit Tol Bocimi Parungkuda'
              )
            }
            className="mt-8 w-full rounded-2xl overflow-hidden border border-white/15 bg-[#05291C] cursor-zoom-in relative"
          >
            <img
              src="/images/harmonia/grv-strategic-map.jpg"
              alt="Peta akses dari Exit Tol Bocimi Parungkuda ke Granada RiverView"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 text-white text-xs">
              <ZoomIn className="w-3.5 h-3.5" />
              Perbesar Peta Akses
            </span>
          </button>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {GRV_DATA.lokasiMetrics.map((m) => (
              <div
                key={m.label}
                className="p-5 rounded-xl bg-white/5 border border-white/15 flex items-center gap-4"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-[#D9E245] tabular-nums shrink-0">
                  {m.value.split(' ')[0]}
                </span>
                <div>
                  <p className="text-xs font-extrabold text-[#D9E245]">MENIT</p>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 30: Objek Wisata Unggulan & Site Plan Kavling Vila */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-white/15">
        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#E8CD73]">
          {GRV_DATA.wisataTitle}
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {GRV_DATA.wisataCards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl overflow-hidden border border-white/15"
            >
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-center">
                <p className="text-xs sm:text-sm font-medium text-slate-200">{card.subtitle}</p>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">{card.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 py-5 px-6 rounded-xl bg-white/5 border border-white/15 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-sm text-emerald-100">{GRV_DATA.visitorStatPrefix}</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-[#D9E245] tabular-nums">
            {GRV_DATA.visitorStatNumber}
          </span>
          <span className="text-sm text-emerald-100">{GRV_DATA.visitorStatSuffix}</span>
        </div>

        {/* Siteplan Kavling Vila */}
        <div className="mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#E8CD73]">
                {GRV_DATA.siteplanTitle}
              </h4>
              <p className="mt-1 text-sm text-emerald-100 max-w-2xl">
                {GRV_DATA.siteplanDesc}
              </p>
            </div>
            <p className="text-lg font-extrabold text-[#D9E245] tabular-nums shrink-0">
              {GRV_DATA.siteplanArea}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onZoomImage(
                '/images/harmonia/grv-siteplan.jpg',
                'Site Plan Kavling Vila Granada RiverView Citarik - Luas Total 29.122 M²'
              )
            }
            className="w-full rounded-2xl overflow-hidden border border-white/20 cursor-zoom-in relative"
          >
            <img
              src="/images/harmonia/grv-siteplan.jpg"
              alt="Site Plan Kavling Vila Granada RiverView Citarik"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 text-white text-xs">
              <ZoomIn className="w-3.5 h-3.5" />
              Perbesar Site Plan
            </span>
          </button>
        </div>
      </div>

      {/* Page 31: Tipe-Tipe Cabin Villa, ROI, Fasilitas & Kelebihan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-white/15">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#E8CD73]">
            {GRV_DATA.cabinTitle}
          </h3>
          <button
            type="button"
            onClick={() => onOpenPdfPage(31)}
            className="text-xs font-semibold text-[#E8CD73] hover:underline cursor-pointer self-start sm:self-auto"
          >
            Lihat Halaman 31 PDF
          </button>
        </div>

        {/* 3 Cabin Villa Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GRV_DATA.cabinTypes.map((cabin) => (
            <div
              key={cabin.name}
              className="rounded-2xl overflow-hidden border border-white/15 bg-[#05291C] flex flex-col"
            >
              <img
                src={cabin.image}
                alt={cabin.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#E8CD73]">{cabin.name}</h4>
                  <p className="mt-2 text-xs tracking-wider text-slate-300">START FROM</p>
                  <div className="mt-1 flex items-baseline justify-center gap-2 tabular-nums">
                    <span className="text-4xl font-extrabold text-[#D9E245]">{cabin.price}</span>
                    <span className="text-sm line-through text-slate-400">{cabin.oldPrice}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-emerald-100 whitespace-pre-line leading-relaxed">
                    {cabin.features}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-left text-xs">
                  <div>
                    <p className="text-slate-400">Luas Tanah:</p>
                    <p className="font-bold text-white tabular-nums">{cabin.lt}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Luas Bangunan:</p>
                    <p className="font-bold text-white tabular-nums">{cabin.lb}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Summary Table for Cabin Villa */}
        <div className="mt-8 space-y-3">
          {GRV_DATA.cabinTypes.map((cabin) => (
            <div
              key={cabin.tableName}
              className="rounded-xl border border-white/15 bg-[#05291C] p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-3">
                <p className="font-serif text-lg font-bold text-[#E8CD73]">{cabin.tableName}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-xs text-slate-300">Harga Terendah (LT 104 m²)</p>
                <p className="text-base sm:text-lg font-extrabold text-white tabular-nums">
                  {cabin.lowestPrice}
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="text-xs text-slate-300">Potensi Income Tahunan</p>
                <p className="text-base sm:text-lg font-extrabold text-white tabular-nums">
                  {cabin.annualIncome}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="text-xs text-slate-300">Return On Investment (ROI)</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D9E245] tabular-nums">
                  {cabin.roi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fasilitas Kavling & Kelebihan */}
        <div className="mt-12 pt-10 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#E8CD73]">
              {GRV_DATA.fasilitasTitle}
            </h4>
            <div className="rounded-xl overflow-hidden border border-white/15">
              <img
                src="/images/harmonia/grv-fasilitas-grid.jpg"
                alt="Fasilitas Kavling Granada RiverView: Riverside Cafe, Riverside Glamping, Eco Park, Prayer Room, Kids Playground, Wisata Air"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-emerald-100">
              {GRV_DATA.fasilitasList.map((f) => (
                <div key={f} className="py-1.5 px-3 rounded bg-white/5 border border-white/10 font-medium">
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#E8CD73]">
                {GRV_DATA.kelebihanTitle}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-emerald-50">
                {GRV_DATA.kelebihanList.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#D9E245] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white text-[#073524]">
              <p className="text-xs font-extrabold tracking-wider uppercase">{GRV_DATA.gratisLabel}</p>
              <p className="mt-1 text-xs sm:text-sm font-bold">
                {GRV_DATA.gratisItems.join(' | ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 32: Closing Narrative */}
      <div className="bg-[#05291C] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <p className="text-lg sm:text-xl font-bold text-[#E8CD73] leading-relaxed">
            {GRV_DATA.closingNarrative}
          </p>
          <div className="inline-block">
            <img
              src="/images/harmonia/logo-grv.png"
              alt="Granada RiverView Citarik - Sukabumi Part of Harmonia Group"
              referrerPolicy="no-referrer"
              className="w-60 mx-auto h-auto object-contain rounded-xl border border-white/10"
            />
          </div>
          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-bold text-[#E8CD73]">
              {GRV_DATA.closingQuote}
            </p>
            <p className="text-base sm:text-lg font-semibold text-white">
              {GRV_DATA.closingNext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
