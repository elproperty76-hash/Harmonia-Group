import { useState } from 'react';
import { ArrowDownRight, Compass, MapPin, Navigation, ZoomIn } from 'lucide-react';

interface ProjectMapSectionProps {
  onZoomImage: (src: string, alt: string) => void;
}

interface ProjectPin {
  id: 'jatinangor' | 'dramaga' | 'citarik' | 'rangkasbitung';
  shortName: string;
  projectName: string;
  category: string;
  regionLabel: string;
  address: string;
  targetId: string;
  accentBg: string;
  accentText: string;
  pinX: number;
  pinY: number;
  coordsLabel: string;
  previewImage: string;
  previewAlt: string;
  pdfMapImage: string;
  pdfMapAlt: string;
  highlights: { label: string; value: string }[];
}

const PROJECT_PINS: ProjectPin[] = [
  {
    id: 'jatinangor',
    shortName: 'Jatinangor',
    projectName: 'Harmonia Student House Jatinangor',
    category: 'Kost Premium & Rukost Mahasiswa',
    regionLabel: 'Sumedang · Jawa Barat',
    address: 'Jl. Cikuda No.37, Cileles, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
    targetId: 'hsh-jatinangor',
    accentBg: 'bg-[#0F2337]',
    accentText: 'text-[#F4D078]',
    pinX: 78,
    pinY: 56,
    coordsLabel: '6.93° LS · 107.77° BT',
    previewImage: '/images/harmonia/jatinangor-facade-hero.jpg',
    previewAlt: 'Fasad Harmonia Student House Jatinangor',
    pdfMapImage: '/images/harmonia/jatinangor-map-vector.png',
    pdfMapAlt: 'Peta Lokasi Harmonia Student House Jatinangor - Jl. Cikuda',
    highlights: [
      { label: 'Kampus UNPAD', value: '± 5 Menit' },
      { label: 'Kampus ITB & IKOPIN', value: '± 6–7 Menit' },
      { label: 'Gerbang Tol', value: '± 10 Menit' },
    ],
  },
  {
    id: 'dramaga',
    shortName: 'Dramaga',
    projectName: 'Harmonia Student House Dramaga Bogor',
    category: 'Kost Tropical Contemporary',
    regionLabel: 'Bogor · Jawa Barat',
    address: 'Kawasan Kampus IPB Dramaga, Kabupaten Bogor, Jawa Barat',
    targetId: 'hsh-dramaga',
    accentBg: 'bg-[#235743]',
    accentText: 'text-[#F4D078]',
    pinX: 43,
    pinY: 42,
    coordsLabel: '6.56° LS · 106.73° BT',
    previewImage: '/images/harmonia/dramaga-twilight-hero.jpg',
    previewAlt: 'Harmonia Student House Dramaga Bogor saat senja',
    pdfMapImage: '/images/harmonia/dramaga-map-ipb.jpg',
    pdfMapAlt: 'Peta Lokasi Harmonia Student House Dramaga - 4 Menit ke IPB',
    highlights: [
      { label: 'IPB – Dramaga', value: '± 4 Menit' },
      { label: 'Pusat Perbelanjaan & Wisata', value: '± 3 Menit' },
      { label: 'Stasiun Kereta', value: '± 18 Menit' },
    ],
  },
  {
    id: 'citarik',
    shortName: 'Citarik',
    projectName: 'Granada Riverview',
    category: 'Ekowisata & Kavling Cabin Villa',
    regionLabel: 'Sukabumi · Jawa Barat',
    address: 'Jl. Gunung Paok-Pajagan, Cikiray, Kec. Cikidang, Kab. Sukabumi, Jawa Barat 43367',
    targetId: 'grv-citarik',
    accentBg: 'bg-[#073524]',
    accentText: 'text-[#E8CD73]',
    pinX: 35,
    pinY: 73,
    coordsLabel: '6.98° LS · 106.60° BT',
    previewImage: '/images/harmonia/grv-sunset-cabins.jpg',
    previewAlt: 'Kawasan kavling vila Granada Riverview Citarik',
    pdfMapImage: '/images/harmonia/grv-strategic-map.jpg',
    pdfMapAlt: 'Peta Lokasi Strategis Granada Riverview Citarik',
    highlights: [
      { label: 'Wisata Rafting Citarik', value: '05 Menit' },
      { label: 'Pantai Pelabuhan Ratu', value: '35 Menit' },
      { label: 'Exit Tol Bocimi Parungkuda', value: '50 Menit' },
    ],
  },
  {
    id: 'rangkasbitung',
    shortName: 'Rangkasbitung',
    projectName: 'Memorial Garden',
    category: 'Pemakaman Muslim Eksklusif',
    regionLabel: 'Lebak · Banten',
    address: 'Desa Pasir Pogor, Kecamatan Warunggunung, Kabupaten Lebak, Banten, 42352',
    targetId: 'hmg-rangkasbitung',
    accentBg: 'bg-[#12263A]',
    accentText: 'text-[#F4D078]',
    pinX: 17,
    pinY: 46,
    coordsLabel: '6.36° LS · 106.25° BT',
    previewImage: '/images/harmonia/hmg-hero-landscape.jpg',
    previewAlt: 'Kawasan Harmonia Memorial Garden Rangkasbitung Lebak',
    pdfMapImage: '/images/harmonia/hmg-strategic-map.jpg',
    pdfMapAlt: 'Peta Lokasi Strategis Harmonia Memorial Garden Rangkasbitung',
    highlights: [
      { label: 'Exit Tol Rangkasbitung', value: '±4 KM · 10 Menit' },
      { label: 'Terminal Rangkasbitung', value: '±7 KM · 15 Menit' },
      { label: 'Stasiun Rangkasbitung', value: '±8 KM · 20 Menit' },
    ],
  },
];

export default function ProjectMapSection({ onZoomImage }: ProjectMapSectionProps) {
  const [selectedId, setSelectedId] = useState<ProjectPin['id']>('jatinangor');
  const activeProject = PROJECT_PINS.find((p) => p.id === selectedId) ?? PROJECT_PINS[0];

  const handleNavigateToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="peta-proyek"
      aria-labelledby="peta-proyek-heading"
      className="bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#C49A3D]">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>PETA SEBARAN KAWASAN HARMONIA GROUP</span>
            </div>
            <h2
              id="peta-proyek-heading"
              className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2337]"
            >
              Peta Interaktif Lokasi Proyek
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Jelajahi empat titik pengembangan properti Harmonia Group di koridor Banten dan Jawa Barat. Pilih pin lokasi untuk melihat detail akses dan portofolio kawasan.
            </p>
          </div>

          {/* Quick Location Selector */}
          <div
            role="tablist"
            aria-label="Pilih lokasi proyek"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg self-start lg:self-auto"
          >
            {PROJECT_PINS.map((pin) => {
              const isSelected = pin.id === activeProject.id;
              return (
                <button
                  key={pin.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(pin.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F2337] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0F2337] hover:bg-slate-50'
                  }`}
                >
                  {pin.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Map Canvas + Detail Panel */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Stylized Interactive Regional Map Placeholder */}
          <div className="lg:col-span-7 bg-[#0E2235] rounded-2xl border border-slate-300 overflow-hidden shadow-sm">
            {/* Map Top Toolbar */}
            <div className="px-5 py-3.5 bg-[#0A1927] border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <Navigation className="w-3.5 h-3.5 text-[#F4D078]" aria-hidden="true" />
                <span>Koridor Banten – Jawa Barat</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 tabular-nums">
                4 Titik Lokasi Aktif · Klik pin untuk detail
              </span>
            </div>

            {/* Interactive SVG + Overlay Pins */}
            <div className="relative w-full aspect-[16/10] bg-[#10283E] overflow-hidden select-none">
              <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <linearGradient id="landmass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1B3B54" />
                    <stop offset="100%" stopColor="#132E45" />
                  </linearGradient>
                </defs>

                {/* Ocean & Grid */}
                <rect width="800" height="500" fill="#0B1E30" />
                <rect width="800" height="500" fill="url(#map-grid)" />

                {/* Stylized West Java & Banten Landmass Silhouette */}
                <path
                  d="M 45,215 C 65,155 120,115 190,120 C 260,125 320,105 395,125 C 470,140 560,130 650,155 C 725,175 770,210 778,285 C 782,355 745,425 655,432 C 555,438 455,420 355,418 C 275,416 190,400 120,355 C 65,320 32,270 45,215 Z"
                  fill="url(#landmass)"
                  stroke="rgba(244,208,120,0.28)"
                  strokeWidth="1.5"
                />

                {/* Topographic contour rings */}
                <path
                  d="M 110,235 C 165,195 255,185 335,215 C 425,248 535,205 635,245 C 690,268 710,335 645,368 C 565,405 425,365 315,362 C 215,358 115,310 110,235 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Highway Corridor Connecting Rangkasbitung - Dramaga - Citarik - Jatinangor */}
                <path
                  d="M 136,230 Q 255,205 344,210 T 624,280"
                  fill="none"
                  stroke="rgba(244,208,120,0.45)"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                />
                <path
                  d="M 344,210 Q 320,290 280,365"
                  fill="none"
                  stroke="rgba(110,231,183,0.45)"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                />

                {/* Subtle Region Labels */}
                <text x="120" y="165" fill="rgba(255,255,255,0.28)" fontSize="11" fontWeight="700" letterSpacing="3">
                  BANTEN
                </text>
                <text x="330" y="162" fill="rgba(255,255,255,0.28)" fontSize="11" fontWeight="700" letterSpacing="3">
                  BOGOR
                </text>
                <text x="200" y="400" fill="rgba(255,255,255,0.24)" fontSize="11" fontWeight="700" letterSpacing="3">
                  SUKABUMI
                </text>
                <text x="580" y="210" fill="rgba(255,255,255,0.28)" fontSize="11" fontWeight="700" letterSpacing="3">
                  BANDUNG – SUMEDANG
                </text>

                {/* Compass Indicator */}
                <g transform="translate(745, 58)">
                  <circle cx="0" cy="0" r="18" fill="rgba(10,25,39,0.7)" stroke="rgba(244,208,120,0.35)" strokeWidth="1" />
                  <path d="M 0,-11 L 4,2 L 0,-1 L -4,2 Z" fill="#F4D078" />
                  <text x="-3.5" y="12" fill="rgba(255,255,255,0.65)" fontSize="8" fontWeight="700">
                    U
                  </text>
                </g>
              </svg>

              {/* Interactive Project Pins */}
              {PROJECT_PINS.map((pin) => {
                const isSelected = pin.id === activeProject.id;
                return (
                  <button
                    key={pin.id}
                    type="button"
                    onClick={() => setSelectedId(pin.id)}
                    aria-label={`Pilih lokasi ${pin.projectName}`}
                    aria-pressed={isSelected}
                    style={{ left: `${pin.pinX}%`, top: `${pin.pinY}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus-visible:outline-none"
                  >
                    {isSelected && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -m-2 rounded-full bg-[#F4D078]/35 animate-ping"
                      />
                    )}
                    <span
                      className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold shadow-lg border transition-all duration-150 ${
                        isSelected
                          ? 'bg-[#F4D078] text-[#0F2337] border-white scale-105'
                          : 'bg-[#0F2337]/95 text-white border-white/30 hover:bg-[#193858] hover:border-[#F4D078]'
                      }`}
                    >
                      <MapPin
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isSelected ? 'text-[#0F2337]' : 'text-[#F4D078]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="whitespace-nowrap">{pin.shortName}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend Bar */}
            <div className="px-5 py-3 bg-[#0A1927] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-300">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4D078]" />
                  <span>Lokasi Dipilih ({activeProject.shortName})</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#193858] border border-white/40" />
                  <span>Koridor Proyek Harmonia</span>
                </span>
              </div>
              <span className="font-mono text-slate-400 tabular-nums">
                {activeProject.coordsLabel}
              </span>
            </div>
          </div>

          {/* Right: Active Location Highlight Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="relative bg-slate-100 border-b border-slate-200">
              <img
                src={activeProject.previewImage}
                alt={activeProject.previewAlt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="p-6 space-y-5">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold tracking-wider text-[#C49A3D]">
                  <span>{activeProject.regionLabel.toUpperCase()}</span>
                  <span className="text-slate-500 font-semibold">{activeProject.category}</span>
                </div>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-[#0F2337]">
                  {activeProject.projectName}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0F2337] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{activeProject.address}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 pt-4 border-t border-slate-200">
                {activeProject.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs"
                  >
                    <span className="font-medium text-slate-600">{h.label}</span>
                    <span className="font-bold text-[#0F2337] tabular-nums whitespace-nowrap">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigateToSection(activeProject.targetId)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2337] rounded-md hover:bg-[#193858] transition-colors cursor-pointer"
                >
                  <span>Lihat Detail Proyek</span>
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onZoomImage(activeProject.pdfMapImage, activeProject.pdfMapAlt)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0F2337] bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" aria-hidden="true" />
                  <span>Lihat Peta Asli PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
