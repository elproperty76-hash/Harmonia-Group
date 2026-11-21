import { COMPANY_INFO } from '../data/harmoniaData';

const DEFAULT_WHATSAPP_MESSAGE =
  'Halo Tim Sales Harmonia Group, saya tertarik mengetahui informasi lebih lanjut mengenai ketersediaan unit, skema investasi, dan jadwal kunjungan lokasi proyek Harmonia Group.';

function toWhatsAppInternationalNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) {
    return `62${digits.slice(1)}`;
  }
  return digits;
}

export default function WhatsAppButton() {
  const waNumber = toWhatsAppInternationalNumber(COMPANY_INFO.phone);
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Hubungi Tim Sales Harmonia Group via WhatsApp (${COMPANY_INFO.phone})`}
      title={`Chat WhatsApp Sales (${COMPANY_INFO.phone})`}
      className="fixed bottom-6 right-6 z-30 inline-flex items-center justify-center gap-2.5 h-12 w-12 sm:w-auto sm:px-4 rounded-full bg-[#15803D] text-white border border-white/25 shadow-lg hover:bg-[#166534] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A3D] focus-visible:ring-offset-2"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.78 14.12c-.24.68-1.42 1.3-1.95 1.38-.5.07-1.13.1-1.82-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.26-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.02.9 2.16.07.15.12.32.02.51-.1.19-.14.31-.29.48-.14.17-.31.38-.44.51-.14.14-.3.3-.13.59.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.69-.17 1.37z" />
      </svg>
      <span className="hidden sm:inline text-xs font-bold tracking-wide whitespace-nowrap">
        WhatsApp Sales
      </span>
    </a>
  );
}
