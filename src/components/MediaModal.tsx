import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageZoomModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export function ImageZoomModal({ src, alt, onClose }: ImageZoomModalProps) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between mb-3 text-white">
          <p className="text-sm font-medium truncate pr-4">{alt}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau gambar"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-[80vh] flex items-center justify-center p-2">
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            className="max-h-[76vh] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

interface PdfReferenceModalProps {
  page: number | null;
  onChangePage: (page: number | null) => void;
}

const PDF_CHAPTERS = [
  { label: 'Sampul (Hal. 1)', pdfPage: 1 },
  { label: 'Daftar Isi', pdfPage: 3 },
  { label: 'Selayang Pandang', pdfPage: 4 },
  { label: 'HSH Jatinangor', pdfPage: 6 },
  { label: 'HSH Dramaga', pdfPage: 18 },
  { label: 'GRV Citarik', pdfPage: 27 },
  { label: 'HMG Lebak', pdfPage: 33 },
  { label: 'Penutup', pdfPage: 37 },
];

export function PdfReferenceModal({ page, onChangePage }: PdfReferenceModalProps) {
  useEffect(() => {
    if (page === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChangePage(null);
      if (e.key === 'ArrowLeft' && page > 1) onChangePage(page - 1);
      if (e.key === 'ArrowRight' && page < 38) onChangePage(page + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [page, onChangePage]);

  if (page === null) return null;

  const padded = String(page).padStart(2, '0');

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Referensi Dokumen PDF Asli"
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-900 text-white">
        <div className="flex items-center gap-3 overflow-x-auto">
          <span className="text-sm font-semibold whitespace-nowrap shrink-0">
            Dokumen Asli PDF · Halaman {page} dari 38
          </span>
          <div className="hidden lg:flex items-center gap-1.5">
            {PDF_CHAPTERS.map((chap) => (
              <button
                key={chap.pdfPage}
                type="button"
                onClick={() => onChangePage(chap.pdfPage)}
                className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  page === chap.pdfPage
                    ? 'bg-[#C49A3D] text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {chap.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onChangePage(page - 1)}
            aria-label="Halaman sebelumnya"
            className="inline-flex items-center justify-center w-9 h-9 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <select
            value={page}
            onChange={(e) => onChangePage(Number(e.target.value))}
            aria-label="Pilih halaman PDF"
            className="bg-slate-800 border border-slate-700 text-xs text-white rounded px-2 py-1.5 tabular-nums"
          >
            {Array.from({ length: 38 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                PDF Hal. {num}
              </option>
            ))}
          </select>
          <button
            type="button"
            disabled={page >= 38}
            onClick={() => onChangePage(page + 1)}
            aria-label="Halaman berikutnya"
            className="inline-flex items-center justify-center w-9 h-9 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onChangePage(null)}
            aria-label="Tutup penampil dokumen"
            className="inline-flex items-center justify-center w-9 h-9 rounded bg-slate-800 hover:bg-slate-700 ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-auto flex items-start justify-center p-4 sm:p-6"
        onClick={() => onChangePage(null)}
      >
        <img
          src={`/pdf-pages/page-${padded}.jpg`}
          alt={`Halaman ${page} dokumen asli Harmonia Group`}
          referrerPolicy="no-referrer"
          onClick={(e) => e.stopPropagation()}
          className="max-w-3xl w-full rounded shadow-2xl bg-white"
        />
      </div>
    </div>
  );
}
