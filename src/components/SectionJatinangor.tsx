import { useState } from 'react';
import { BookOpen, Building2, Check, FileCheck2, MapPin, ShieldCheck, ZoomIn } from 'lucide-react';
import { JATINANGOR_DATA } from '../data/harmoniaData';

interface SectionJatinangorProps {
  onOpenPdfPage: (page: number) => void;
  onZoomImage: (src: string, alt: string) => void;
}

export default function SectionJatinangor({ onOpenPdfPage, onZoomImage }: SectionJatinangorProps) {
  const [selectedUnit, setSelectedUnit] = useState<string>('all');

  const visibleUnits =
    selectedUnit === 'all'
      ? JATINANGOR_DATA.unitTypes
      : JATINANGOR_DATA.unitTypes.filter((u) => u.id === selectedUnit);

  return (
    <section id="hsh-jatinangor" className="bg-white border-b border-slate-200">
      {/* Pages 6-7: Logo & Intro Narrative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-500">
            <span>01. PORTOFOLIO</span>
            <span aria-hidden="true">/</span>
            <span>HARMONIA STUDENT HOUSE JATINANGOR</span>
            <span aria-hidden="true">·</span>
            <span>HAL. 4–14</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenPdfPage(6)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D476B] hover:underline cursor-pointer self-start sm:self-auto"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Buka Halaman Asli (Hal. 6)</span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 bg-slate-50/60">
            <img
              src="/images/harmonia/logo-hsh-jatinangor.png"
              alt="Logo Harmonia Student House Jatinangor"
              referrerPolicy="no-referrer"
              className="w-56 h-auto object-contain"
            />
            <p className="mt-4 text-xs font-bold tracking-[0.25em] text-[#1D476B]">
              JATINANGOR
            </p>
          </div>

          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-slate-800 leading-relaxed">
            {JATINANGOR_DATA.introParagraphs.map((para, idx) => (
              <p key={idx} className="font-medium">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Page 8: Hero Showcase Banner */}
      <div className="bg-[#0F2337] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#0A1826]">
              <img
                src="/images/harmonia/jatinangor-aerial.jpg"
                alt="Tampak udara Harmonia Student House Jatinangor"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <div className="bg-gradient-to-t from-black/90 via-black/70 to-black/30 p-6 sm:p-8 border-t border-white/10">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {JATINANGOR_DATA.heroBannerTitle}
                </h3>
                <p className="mt-1 text-lg sm:text-xl font-semibold text-[#F4D078]">
                  {JATINANGOR_DATA.heroBannerSubtitle}
                </p>
                <p className="mt-3 text-sm text-slate-200 leading-relaxed max-w-xl">
                  {JATINANGOR_DATA.heroBannerDesc}
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0A1826]">
              <img
                src="/images/harmonia/jatinangor-facade-hero.jpg"
                alt="Fasad Harmonia Student House Jatinangor"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page 9: Passive Income & Strategic Location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                src="/images/harmonia/jatinangor-vert-facade.jpg"
                alt="Fasad modern minimalis Harmonia Student House Jatinangor"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              {JATINANGOR_DATA.conceptDesc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
              {JATINANGOR_DATA.conceptPillars.map((pillar) => (
                <div key={pillar} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F2337]">
                  <Check className="w-4 h-4 text-[#C49A3D] shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img
                src="/images/harmonia/jatinangor-bottom-facade.jpg"
                alt="Perspektif deret unit Harmonia Student House Jatinangor"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2B3D4F]">
                {JATINANGOR_DATA.passiveTitle}
              </h3>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                {JATINANGOR_DATA.passiveDesc}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {JATINANGOR_DATA.passiveBadges.map((badge) => (
                  <div
                    key={badge}
                    className="px-4 py-3.5 rounded-lg bg-[#2B3D4F] text-white font-bold text-sm tracking-wide flex items-center justify-between"
                  >
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={() =>
                  onZoomImage(
                    '/images/harmonia/jatinangor-map-vector.png',
                    'Peta Lokasi Harmonia Student House Jatinangor - Jl. Cikuda'
                  )
                }
                className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-[#1D476B] transition-colors cursor-zoom-in relative group"
              >
                <img
                  src="/images/harmonia/jatinangor-map-vector.png"
                  alt="Peta lokasi Jl. Cikuda Harmonia Student House Jatinangor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 text-white text-xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Perbesar Peta
                </span>
              </button>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {JATINANGOR_DATA.distances.map((item) => (
                  <div
                    key={item.place}
                    className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70"
                  >
                    <p className="text-xs font-semibold text-slate-500">{item.place}</p>
                    <p className="mt-1 text-base font-bold text-[#0F2337] tabular-nums">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 10: Dua Potensi Keuntungan + Legalitas SHM + Sistem Kepemilikan */}
      <div className="bg-[#2D3844] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {JATINANGOR_DATA.profitTitle}
              </h3>
              <p className="text-base text-slate-200 leading-relaxed">
                {JATINANGOR_DATA.profitDesc}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {JATINANGOR_DATA.profitCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl overflow-hidden border border-white/15 bg-[#3A4756]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain bg-[#2B3744]"
                  />
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-white">{card.title}</h4>
                    <p className="mt-2 text-sm text-slate-200 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SHM & Sistem Kepemilikan Mudah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {[
              { src: '/images/harmonia/jatinangor-shm-1.jpg', label: 'Bukti Sertifikat Hak Milik (SHM) 1' },
              { src: '/images/harmonia/jatinangor-shm-2.jpg', label: 'Bukti Sertifikat Hak Milik (SHM) 2' },
              { src: '/images/harmonia/jatinangor-shm-3.jpg', label: 'Bukti Sertifikat Hak Milik (SHM) 3' },
            ].map((doc) => (
              <button
                key={doc.src}
                type="button"
                onClick={() => onZoomImage(doc.src, doc.label)}
                className="group relative rounded-lg overflow-hidden border border-slate-300 bg-slate-50 hover:border-[#0F2337] transition-colors cursor-zoom-in"
              >
                <img
                  src={doc.src}
                  alt={doc.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain bg-white"
                />
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-900/80 text-white text-xs">
                  <ZoomIn className="w-3 h-3" />
                  Perbesar SHM
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#C49A3D]">
                <FileCheck2 className="w-4 h-4" />
                <span>DOKUMEN KEPEMILIKAN TRANSPARAN</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                {JATINANGOR_DATA.legalitasTitle}
              </h3>
              <div className="mt-3 space-y-3 text-base text-slate-700 leading-relaxed">
                {JATINANGOR_DATA.legalitasDesc.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                {JATINANGOR_DATA.ownershipTitle}
              </h3>
              <p className="mt-3 text-base text-slate-700 leading-relaxed">
                {JATINANGOR_DATA.ownershipDesc}
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                {JATINANGOR_DATA.ownershipItems.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/70"
                  >
                    <h4 className="text-base font-bold text-[#0F2337]">{item.title}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 11: Dekat Kampus, Keunggulan Harmonia & PBG */}
      <div className="bg-[#232D38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() =>
                  onZoomImage(
                    '/images/harmonia/jatinangor-gmaps.jpg',
                    'Pengukuran Jarak Real Time Google Maps Harmonia Student House Jatinangor'
                  )
                }
                className="w-full rounded-xl overflow-hidden border border-white/15 cursor-zoom-in relative"
              >
                <img
                  src="/images/harmonia/jatinangor-gmaps.jpg"
                  alt="Peta jarak ke kampus UNPAD, ITB, IKOPIN"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 text-white text-xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Perbesar Peta
                </span>
              </button>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {JATINANGOR_DATA.proximityTitle}
              </h3>

              <div className="space-y-4">
                {JATINANGOR_DATA.proximityItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <MapPin className="w-5 h-5 text-[#F4D078] shrink-0" />
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-xl font-extrabold text-white tabular-nums">
                        {item.time}
                      </span>
                      <span className="text-base font-medium text-slate-200">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {JATINANGOR_DATA.proximityFootnote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keunggulan & Proses Legalitas PBG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
              Keunggulan Harmonia
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {JATINANGOR_DATA.keunggulanSubtitle}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {JATINANGOR_DATA.keunggulan.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-lg border border-slate-200 bg-slate-50/60"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1D476B] shrink-0" />
                    <h4 className="text-sm font-bold text-[#0F2337]">{item.title}</h4>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                {JATINANGOR_DATA.pbgTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {JATINANGOR_DATA.pbgDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <button
                type="button"
                onClick={() =>
                  onZoomImage(
                    '/images/harmonia/jatinangor-pbg-doc.jpg',
                    'Dokumen Penerimaan Berkas PBG Pemerintah Kabupaten Sumedang'
                  )
                }
                className="relative rounded-xl overflow-hidden border border-slate-300 bg-white cursor-zoom-in hover:border-[#0F2337]"
              >
                <img
                  src="/images/harmonia/jatinangor-pbg-doc.jpg"
                  alt="Penerimaan Berkas PBG Pemerintah Kabupaten Sumedang"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain bg-white p-2"
                />
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-900/80 text-white text-xs">
                  <ZoomIn className="w-3 h-3" />
                  Perbesar Dokumen PBG
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pages 12-14: Tipe Unit & Denah Jatinangor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <p className="text-xs font-bold tracking-wider text-[#C49A3D]">
              PILIHAN UNIT & DENAH TATA RUANG
            </p>
            <h3 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0F2337]">
              Tipe Unit Harmonia Student House Jatinangor
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            <button
              type="button"
              onClick={() => setSelectedUnit('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedUnit === 'all'
                  ? 'bg-white text-[#0F2337] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Tipe (4)
            </button>
            {JATINANGOR_DATA.unitTypes.map((unit) => (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnit(unit.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedUnit === unit.id
                    ? 'bg-white text-[#0F2337] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {unit.name.replace('Unit ', '').replace(' (Mezzanine) - 4 kamar', ' (Mezzanine)')}
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
                      SPESIFIKASI UNIT
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

                  <div className="grid grid-cols-3 gap-3 items-start">
                    {unit.photos.map((photo, pIdx) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => onZoomImage(photo, `${unit.name} — Foto ${pIdx + 1}`)}
                        className="rounded-lg overflow-hidden border border-slate-200 bg-white cursor-zoom-in hover:border-[#0F2337] transition-colors"
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
                    className="w-full rounded-xl overflow-hidden border border-slate-200 bg-white p-2 cursor-zoom-in hover:border-[#0F2337] transition-colors"
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

      {/* Page 15: Tabel Proyeksi Keuangan Komperatif & Siteplan Harmonia */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-bold tracking-wider text-[#C49A3D]">
              {JATINANGOR_DATA.financialTable.sideLabel}
            </p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
              {JATINANGOR_DATA.financialTable.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onOpenPdfPage(15)}
            className="text-xs font-semibold text-[#1D476B] hover:underline cursor-pointer self-start sm:self-auto"
          >
            Lihat Halaman 15 PDF
          </button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-300">
          <table className="w-full text-left border-collapse min-w-[780px] tabular-nums">
            <thead>
              <tr className="bg-[#1F2730] text-white">
                <th className="py-3.5 px-4 text-xs font-bold tracking-wider">URAIAN OPRASIONAL</th>
                {JATINANGOR_DATA.financialTable.columns.map((col) => (
                  <th key={col.subtitle} className="py-3.5 px-4 text-center">
                    <div className="text-xs font-extrabold">{col.title}</div>
                    <div className="text-[11px] font-medium text-slate-300">{col.subtitle}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm divide-y divide-slate-200 bg-white">
              {JATINANGOR_DATA.financialTable.rows.map((row) => (
                <tr key={row.label} className={row.bold ? 'bg-slate-50 font-bold' : ''}>
                  <td className="py-3 px-4 text-slate-800">{row.label}</td>
                  {row.values.map((val, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-slate-900">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="bg-slate-100">
                <td colSpan={5} className="py-2.5 px-4 text-xs font-extrabold text-[#0F2337]">
                  {JATINANGOR_DATA.financialTable.operationalHeader}
                </td>
              </tr>
              {JATINANGOR_DATA.financialTable.operationalRows.map((row) => (
                <tr key={row.label}>
                  <td className="py-3 px-4 text-slate-800">{row.label}</td>
                  {row.values.map((val, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-slate-900">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={5} className="py-3 px-4 bg-slate-50/70">
                  <p className="text-xs font-bold text-slate-800 mb-1">INCLUDE:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 text-xs text-slate-600">
                    {JATINANGOR_DATA.financialTable.includeItems.map((inc) => (
                      <li key={inc}>- {inc}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className="bg-slate-50 font-bold">
                <td className="py-3 px-4 text-slate-900">
                  {JATINANGOR_DATA.financialTable.totalOperationalRow.label}
                </td>
                {JATINANGOR_DATA.financialTable.totalOperationalRow.values.map((val, idx) => (
                  <td key={idx} className="py-3 px-4 text-center text-slate-900">
                    {val}
                  </td>
                ))}
              </tr>

              <tr className="bg-slate-100">
                <td colSpan={5} className="py-2.5 px-4 text-xs font-extrabold text-[#0F2337]">
                  {JATINANGOR_DATA.financialTable.profitHeader}
                </td>
              </tr>
              {JATINANGOR_DATA.financialTable.profitRows.map((row) => (
                <tr key={row.label} className="bg-[#EEF4DB]/60 font-bold">
                  <td className="py-3 px-4 text-[#3F6212] whitespace-pre-line">{row.label}</td>
                  {row.values.map((val, idx) => (
                    <td key={idx} className="py-3 px-4 text-center text-[#3F6212]">
                      {val}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="bg-[#1F2730] text-white">
                <td className="py-3 px-4 text-xs font-bold">URAIAN OPRASIONAL</td>
                {JATINANGOR_DATA.financialTable.columns.map((col) => (
                  <td key={col.subtitle} className="py-3 px-4 text-center">
                    <div className="text-xs font-extrabold">{col.title}</div>
                    <div className="text-[11px] text-slate-300">{col.subtitle}</div>
                  </td>
                ))}
              </tr>
              <tr className="bg-slate-100">
                <td colSpan={5} className="py-2.5 px-4 text-xs font-extrabold text-[#0F2337]">
                  {JATINANGOR_DATA.financialTable.roiSectionHeader}
                </td>
              </tr>
              {JATINANGOR_DATA.financialTable.roiRows.map((row) => (
                <tr
                  key={row.label}
                  className={row.highlight ? 'bg-[#EEF4DB] font-extrabold' : 'bg-white'}
                >
                  <td
                    className={`py-3 px-4 whitespace-pre-line ${
                      row.highlight ? 'text-[#3F6212]' : 'text-slate-800'
                    }`}
                  >
                    {row.label}
                  </td>
                  {row.values.map((val, idx) => (
                    <td
                      key={idx}
                      className={`py-3 px-4 text-center ${
                        row.highlight ? 'text-[#3F6212]' : 'text-slate-900 font-semibold'
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SITEPLAN HARMONIA */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-300 bg-[#232D38]">
          <div className="px-6 py-4 flex items-center justify-between text-white border-b border-white/10">
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-wide">
              SITEPLAN HARMONIA
            </h4>
            <button
              type="button"
              onClick={() =>
                onZoomImage(
                  '/images/harmonia/jatinangor-siteplan.jpg',
                  'Siteplan Harmonia Student House Jatinangor'
                )
              }
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4D078] hover:underline cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Perbesar Siteplan</span>
            </button>
          </div>
          <button
            type="button"
            onClick={() =>
              onZoomImage(
                '/images/harmonia/jatinangor-siteplan.jpg',
                'Siteplan Harmonia Student House Jatinangor'
              )
            }
            className="w-full bg-white cursor-zoom-in"
          >
            <img
              src="/images/harmonia/jatinangor-siteplan.jpg"
              alt="Siteplan Harmonia Student House Jatinangor"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </button>
        </div>
      </div>

      {/* Page 16: Spesifikasi Bangunan, Spesifikasi Interior, Jaminan Okupansi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Spesifikasi Bangunan Harmonia */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#C49A3D]">
                <Building2 className="w-4 h-4" />
                <span>SPESIFIKASI TEKNIS</span>
              </div>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                {JATINANGOR_DATA.buildingSpecs.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {JATINANGOR_DATA.buildingSpecs.subtitle}
              </p>
            </div>

            <div className="space-y-5">
              {JATINANGOR_DATA.buildingSpecs.categories.map((cat) => (
                <div key={cat.name} className="border-t border-slate-200 pt-4">
                  <h4 className="text-base font-bold text-[#0F2337]">{cat.name}</h4>
                  <ol className="mt-2 space-y-1 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                    {cat.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Spesifikasi Interior + Collage + Jaminan Okupansi */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2337]">
                {JATINANGOR_DATA.interiorSpecs.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {JATINANGOR_DATA.interiorSpecs.subtitle}
              </p>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm tabular-nums">
                  <thead>
                    <tr className="bg-slate-100 text-[#0F2337] border-b border-slate-200">
                      <th className="py-2.5 px-3 font-bold">Item</th>
                      <th className="py-2.5 px-3 font-bold">Dimensi</th>
                      <th className="py-2.5 px-3 font-bold">Spesifikasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {JATINANGOR_DATA.interiorSpecs.rows.map((row) => (
                      <tr key={row.no}>
                        <td className="py-2 px-3 font-medium text-slate-800">
                          {row.no}. {row.item}
                        </td>
                        <td className="py-2 px-3 text-slate-600">{row.dim}</td>
                        <td className="py-2 px-3 text-slate-600">{row.spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/images/harmonia/jatinangor-spec-collage.jpg"
                  alt="Kolase bangunan Harmonia Student House Jatinangor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-6 space-y-4">
                <h3 className="text-2xl font-extrabold text-[#0F2337]">
                  {JATINANGOR_DATA.occupancy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {JATINANGOR_DATA.occupancy.desc}
                </p>
                <p className="text-xs font-bold text-[#0F2337]">
                  {JATINANGOR_DATA.occupancy.label}
                </p>
                <div className="space-y-3">
                  {JATINANGOR_DATA.occupancy.items.map((item) => (
                    <div key={item.title} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="text-xs font-bold text-[#0F2337]">{item.title}</p>
                      <p className="mt-0.5 text-xs text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6">
                <img
                  src="/images/harmonia/jatinangor-okupansi-photos.jpg"
                  alt="Area gerbang one gate system dan interior kamar Harmonia Jatinangor"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl border border-slate-200 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 17: Transition Narrative */}
      <div className="bg-gradient-to-b from-[#172330] to-[#0E1720] text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <p className="text-lg sm:text-xl font-bold text-[#E6C16E] leading-relaxed">
            {JATINANGOR_DATA.closingNarrative}
          </p>
          <div className="inline-block bg-white/95 rounded-xl px-8 py-6">
            <img
              src="/images/harmonia/logo-hsh-jatinangor.png"
              alt="Harmonia Student House Jatinangor"
              referrerPolicy="no-referrer"
              className="w-44 mx-auto h-auto object-contain"
            />
          </div>
          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-bold text-[#E6C16E]">
              {JATINANGOR_DATA.closingQuote}
            </p>
            <p className="text-base sm:text-lg font-semibold text-white">
              {JATINANGOR_DATA.closingNext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
