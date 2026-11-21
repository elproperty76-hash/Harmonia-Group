import { useState } from 'react';
import { BookOpen, MapPin, ShieldCheck, ZoomIn } from 'lucide-react';
import { DRAMAGA_DATA, JATINANGOR_DATA } from '../data/harmoniaData';

interface SectionDramagaProps {
  onOpenPdfPage: (page: number) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export default function SectionDramaga({ onOpenPdfPage, onZoomImage }: SectionDramagaProps) {
  const [selectedUnit, setSelectedUnit] = useState<string>('all');

  const visibleUnits =
    selectedUnit === 'all'
      ? DRAMAGA_DATA.unitTypes
      : DRAMAGA_DATA.unitTypes.filter((u) => u.id === selectedUnit);

  return (
    <section id="hsh-dramaga" className="bg-white border-b border-slate-200">
      {/* Pages 18-19: Header & Tropical Contemporary Intro */}
      <div className="bg-[#235743] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/15">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-emerald-100/80">
              <span>02. PORTOFOLIO</span>
              <span aria-hidden="true">/</span>
              <span>HARMONIA STUDENT HOUSE DRAMAGA BOGOR</span>
              <span aria-hidden="true">·</span>
              <span>HAL. 15–22</span>
            </div>
            <button
              type="button"
              onClick={() => onOpenPdfPage(18)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#F4D078] hover:underline cursor-pointer self-start sm:self-auto"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buka Halaman Asli (Hal. 18)</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl p-6 inline-block">
                <img
                  src="/images/harmonia/logo-hsh-dramaga.png"
                  alt="Logo Harmonia Student House Dramaga - Bogor"
                  referrerPolicy="no-referrer"
                  className="w-52 h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20">
                <img
                  src="/images/harmonia/dramaga-hero-banner.jpg"
                  alt="Arsitektur Tropical Contemporary Harmonia Dramaga Bogor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide text-white">
                  {DRAMAGA_DATA.title}
                </h2>
                <p className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-[#F4D078]">
                  {DRAMAGA_DATA.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-emerald-50/95 leading-relaxed">
                {DRAMAGA_DATA.introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 20: Twilight Facade & Investment Narrative */}
      <div className="bg-[#2D6249] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-white/20">
                <img
                  src="/images/harmonia/dramaga-twilight-hero.jpg"
                  alt="Harmonia Student House Dramaga-Bogor saat senja"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {DRAMAGA_DATA.subtitle}
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-emerald-50/95 leading-relaxed">
                {DRAMAGA_DATA.twilightParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 21: Sertifikat, Pembayaran, Legalitas, Map IPB & Keunggulan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-slate-200">
          {DRAMAGA_DATA.ownershipItems.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/70"
            >
              <h3 className="text-lg font-extrabold text-[#1A4332]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <button
              type="button"
              onClick={() =>
                onZoomImage(
                  '/images/harmonia/dramaga-map-ipb.jpg',
                  'Peta Lokasi Harmonia Student House Dramaga - 4 Menit ke IPB'
                )
              }
              className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white cursor-zoom-in relative"
            >
              <img
                src="/images/harmonia/dramaga-map-ipb.jpg"
                alt="Peta lokasi sekitar IPB Dramaga Bogor"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 text-white text-xs">
                <ZoomIn className="w-3.5 h-3.5" />
                Perbesar Peta
              </span>
            </button>

            <div className="p-5 rounded-xl bg-[#235743] text-white">
              <div className="flex items-center gap-2 text-lg font-extrabold">
                <MapPin className="w-5 h-5 text-[#F4D078]" />
                <span>{DRAMAGA_DATA.campusHighlight}</span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/15">
                {DRAMAGA_DATA.distances.map((d) => (
                  <div key={d.label} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-emerald-100">{d.label}</span>
                    <span className="font-bold text-white tabular-nums">{d.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A4332]">
              Keunggulan Harmonia Student House Dramaga-Bogor
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DRAMAGA_DATA.keunggulan.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-lg border border-slate-200 bg-white"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#235743] shrink-0" />
                    <h4 className="text-sm font-bold text-[#0F2337]">{item.title}</h4>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pages 22-23: Tipe Unit & Denah Dramaga */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <p className="text-xs font-bold tracking-wider text-[#235743]">
              PILIHAN UNIT & DENAH DRAMAGA – BOGOR
            </p>
            <h3 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0F2337]">
              Tipe Unit Harmonia Student House Dramaga
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            <button
              type="button"
              onClick={() => setSelectedUnit('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedUnit === 'all'
                  ? 'bg-white text-[#1A4332] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Tipe (4)
            </button>
            {DRAMAGA_DATA.unitTypes.map((unit) => (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedUnit === unit.id
                    ? 'bg-white text-[#1A4332] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {unit.name.replace('Unit ', '')}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {visibleUnits.map((unit) => (
            <article
              key={unit.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h4 className="text-2xl font-extrabold text-[#0F2337]">{unit.name}</h4>
                    <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                      {unit.desc}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-wider text-slate-500 mb-3">
                      Spesifikasi Unit
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {unit.specs.map((spec) => (
                        <div
                          key={spec}
                          className="px-3 py-2 rounded-md border border-slate-200 bg-white text-xs font-semibold text-[#0F2337]"
                        >
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 items-start">
                    {unit.photos.map((photo, pIdx) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => onZoomImage(photo, `${unit.name} — Foto ${pIdx + 1}`)}
                        className="rounded-lg overflow-hidden border border-slate-200 bg-white cursor-zoom-in hover:border-[#235743] transition-colors"
                      >
                        <img
                          src={photo}
                          alt={`${unit.name} tampilan ${pIdx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-lg font-bold text-[#0F2337]">{unit.denahTitle}</h5>
                      <p className="text-xs text-slate-600">{unit.denahDesc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onZoomImage(unit.denahImage, unit.denahTitle)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 bg-white text-xs font-semibold text-[#0F2337] hover:bg-slate-50 cursor-pointer shrink-0"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Perbesar Denah</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onZoomImage(unit.denahImage, unit.denahTitle)}
                    className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white p-3 cursor-zoom-in hover:border-[#235743] transition-colors"
                  >
                    <img
                      src={unit.denahImage}
                      alt={unit.denahTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Page 24: Jaminan Okupansi + Perhitungan ROI (2 Tables) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        {/* Jaminan Okupansi + ROI Table 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-[#0F2337]">
                {JATINANGOR_DATA.occupancy.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {JATINANGOR_DATA.occupancy.desc}
              </p>
              <p className="text-xs font-bold text-[#0F2337]">
                {JATINANGOR_DATA.occupancy.label}
              </p>
              <div className="space-y-2.5">
                {JATINANGOR_DATA.occupancy.items.map((item) => (
                  <div key={item.title} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-[#0F2337]">{item.title}</p>
                    <p className="mt-0.5 text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/images/harmonia/dramaga-okupansi-photos.jpg"
                alt="Eksterior dan interior Harmonia Student House Dramaga"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-xl border border-slate-200 object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                  Perhitungan ROI
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
                  {DRAMAGA_DATA.roiDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenPdfPage(24)}
                className="text-xs font-semibold text-[#235743] hover:underline cursor-pointer shrink-0"
              >
                Lihat Halaman 24 PDF
              </button>
            </div>

            <p className="text-xs font-extrabold tracking-wider text-[#0F2337]">
              {DRAMAGA_DATA.roiTable1.subtitle}
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-300">
              <table className="w-full text-left border-collapse min-w-[540px] tabular-nums text-xs">
                <thead>
                  <tr className="bg-[#1F2730] text-white">
                    <th className="py-3 px-3 font-bold">URAIAN OPRASIONAL</th>
                    {DRAMAGA_DATA.roiTable1.columns.map((col) => (
                      <th key={col.title} className="py-3 px-3 text-center">
                        <div className="font-extrabold">{col.title}</div>
                        {col.subtitle && <div className="text-[11px] text-slate-300">{col.subtitle}</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {DRAMAGA_DATA.roiTable1.rows.map((row) => (
                    <tr key={row.label} className={row.bold ? 'bg-slate-50 font-bold' : ''}>
                      <td className="py-2.5 px-3 text-slate-800">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center text-slate-900">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold text-[#0F2337]">
                    <td colSpan={4} className="py-2 px-3">BIAYA OPERASIONAL BULAN</td>
                  </tr>
                  {DRAMAGA_DATA.roiTable1.operationalRows.map((row) => (
                    <tr key={row.label}>
                      <td className="py-2.5 px-3 text-slate-800">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center text-slate-900">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={4} className="py-2.5 px-3 bg-slate-50/70">
                      <span className="font-bold text-slate-800">INCLUDE: </span>
                      <span className="text-slate-600">
                        {DRAMAGA_DATA.roiTable1.includeItems.join(' · ')}
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-slate-50 font-bold">
                    <td className="py-2.5 px-3">TOTAL BIAYA OPERASIONAL</td>
                    {DRAMAGA_DATA.roiTable1.totalOperational.map((val, i) => (
                      <td key={i} className="py-2.5 px-3 text-center">{val}</td>
                    ))}
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0F2337]">
                    <td colSpan={4} className="py-2 px-3">PROYEKSI PROFITABILITAS</td>
                  </tr>
                  {DRAMAGA_DATA.roiTable1.profitRows.map((row) => (
                    <tr key={row.label} className="bg-[#EEF4DB]/60 font-bold text-[#3F6212]">
                      <td className="py-2.5 px-3 whitespace-pre-line">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center">{val}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-[#1F2730] text-white">
                    <td className="py-2.5 px-3 font-bold">URAIAN OPRASIONAL</td>
                    {DRAMAGA_DATA.roiTable1.columns.map((col) => (
                      <td key={col.title} className="py-2.5 px-3 text-center font-bold">
                        {col.title} {col.subtitle}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0F2337]">
                    <td colSpan={4} className="py-2 px-3">METRIK INVESTASI & ROI (RETURN ON INVESTMENT)</td>
                  </tr>
                  {DRAMAGA_DATA.roiTable1.roiRows.map((row) => (
                    <tr
                      key={row.label}
                      className={row.highlight ? 'bg-[#EEF4DB] font-extrabold text-[#3F6212]' : ''}
                    >
                      <td className="py-2.5 px-3 whitespace-pre-line">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center font-semibold">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ROI Table 2: TYPE PANGRANGO & TYPE SALAK */}
        <div className="mt-14 pt-12 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                Perhitungan ROI
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {DRAMAGA_DATA.roiDesc}
              </p>
              <p className="mt-4 text-xs font-extrabold tracking-wider text-[#0F2337]">
                {DRAMAGA_DATA.roiTable2.subtitle}
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-300">
              <table className="w-full text-left border-collapse min-w-[460px] tabular-nums text-xs">
                <thead>
                  <tr className="bg-[#1F2730] text-white">
                    <th className="py-3 px-3 font-bold">URAIAN OPRASIONAL</th>
                    {DRAMAGA_DATA.roiTable2.columns.map((col) => (
                      <th key={col.title} className="py-3 px-3 text-center">
                        <div className="font-extrabold">{col.title}</div>
                        <div className="text-[11px] text-slate-300">{col.subtitle}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {DRAMAGA_DATA.roiTable2.rows.map((row) => (
                    <tr key={row.label} className={row.bold ? 'bg-slate-50 font-bold' : ''}>
                      <td className="py-2.5 px-3 text-slate-800">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center text-slate-900">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold text-[#0F2337]">
                    <td colSpan={3} className="py-2 px-3">BIAYA OPERASIONAL BULAN</td>
                  </tr>
                  {DRAMAGA_DATA.roiTable2.operationalRows.map((row) => (
                    <tr key={row.label}>
                      <td className="py-2.5 px-3 text-slate-800">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center text-slate-900">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3} className="py-2.5 px-3 bg-slate-50/70">
                      <span className="font-bold text-slate-800">INCLUDE: </span>
                      <span className="text-slate-600">
                        {DRAMAGA_DATA.roiTable2.includeItems.join(' · ')}
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-slate-50 font-bold">
                    <td className="py-2.5 px-3">TOTAL BIAYA OPERASIONAL</td>
                    {DRAMAGA_DATA.roiTable2.totalOperational.map((val, i) => (
                      <td key={i} className="py-2.5 px-3 text-center">{val}</td>
                    ))}
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0F2337]">
                    <td colSpan={3} className="py-2 px-3">PROYEKSI PROFITABILITAS</td>
                  </tr>
                  {DRAMAGA_DATA.roiTable2.profitRows.map((row) => (
                    <tr key={row.label} className="bg-[#EEF4DB]/60 font-bold text-[#3F6212]">
                      <td className="py-2.5 px-3 whitespace-pre-line">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center">{val}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-[#1F2730] text-white">
                    <td className="py-2.5 px-3 font-bold">URAIAN OPRASIONAL</td>
                    {DRAMAGA_DATA.roiTable2.columns.map((col) => (
                      <td key={col.title} className="py-2.5 px-3 text-center font-bold">
                        {col.title} {col.subtitle}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-slate-100 font-bold text-[#0F2337]">
                    <td colSpan={3} className="py-2 px-3">METRIK INVESTASI & ROI (RETURN ON INVESTMENT)</td>
                  </tr>
                  {DRAMAGA_DATA.roiTable2.roiRows.map((row) => (
                    <tr
                      key={row.label}
                      className={row.highlight ? 'bg-[#EEF4DB] font-extrabold text-[#3F6212]' : ''}
                    >
                      <td className="py-2.5 px-3 whitespace-pre-line">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-2.5 px-3 text-center font-semibold">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/images/harmonia/dramaga-roi-photos.jpg"
              alt="Perspektif deret unit dan atap modern Harmonia Dramaga"
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-xl border border-slate-200 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Page 25: Galeri Arsitektur Dramaga */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2337]">
            Galeri Arsitektur Harmonia Student House Dramaga
          </h3>
          <span className="text-xs font-medium text-slate-500">Halaman 21 Dokumen</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {DRAMAGA_DATA.gallery.slice(0, 4).map((img, idx) => (
            <button
              key={img}
              type="button"
              onClick={() => onZoomImage(img, `Galeri Dramaga ${idx + 1}`)}
              className="rounded-xl overflow-hidden border border-slate-200 cursor-zoom-in hover:border-[#235743]"
            >
              <img
                src={img}
                alt={`Galeri Dramaga ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onZoomImage(DRAMAGA_DATA.gallery[4], 'Galeri Fasad Atap Harmonia Dramaga')}
          className="mt-4 w-full rounded-xl overflow-hidden border border-slate-200 cursor-zoom-in hover:border-[#235743]"
        >
          <img
            src={DRAMAGA_DATA.gallery[4]}
            alt="Detail fasad atap Harmonia Student House Dramaga"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain"
          />
        </button>
      </div>

      {/* Page 26: Transition Narrative */}
      <div className="bg-gradient-to-b from-[#0C251D] to-[#081A14] text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <p className="text-lg sm:text-xl font-bold text-[#E6C16E] leading-relaxed">
            {DRAMAGA_DATA.closingNarrative}
          </p>
          <div className="inline-block bg-white/95 rounded-xl px-8 py-6">
            <img
              src="/images/harmonia/logo-hsh-dramaga.png"
              alt="Harmonia Student House Dramaga - Bogor"
              referrerPolicy="no-referrer"
              className="w-48 mx-auto h-auto object-contain"
            />
          </div>
          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-bold text-[#E6C16E]">
              {DRAMAGA_DATA.closingQuote}
            </p>
            <p className="text-base sm:text-lg font-semibold text-white">
              {DRAMAGA_DATA.closingNext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
