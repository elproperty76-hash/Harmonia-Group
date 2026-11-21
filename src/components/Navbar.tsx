import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

const NAV_LINKS = [
  { id: 'selayang-pandang', label: 'Selayang Pandang', href: '#selayang-pandang' },
  { id: 'hsh-jatinangor', label: 'Harmonia Student House Jatinangor', href: '#hsh-jatinangor' },
  { id: 'hsh-dramaga', label: 'Harmonia Student House Dramaga Bogor', href: '#hsh-dramaga' },
  { id: 'grv-citarik', label: 'Granada Riverview', href: '#grv-citarik' },
  { id: 'hmg-rangkasbitung', label: 'Memorial Garden', href: '#hmg-rangkasbitung' },
];

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollOffset = window.scrollY + 120;
      let current = '';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollOffset) {
          current = link.id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-md border-b transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 border-slate-200 shadow-sm'
          : 'bg-white/90 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 lg:gap-8">
        <a
          href="#beranda"
          className="text-base sm:text-lg font-bold tracking-tight text-[#0F2337] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2337] rounded"
        >
          Harmonia Group
        </a>

        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs 2xl:text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`transition-colors duration-150 whitespace-nowrap shrink-0 underline-offset-4 ${
                  isActive
                    ? 'text-[#0F2337] font-semibold underline'
                    : 'hover:text-[#0F2337] hover:underline'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#0F2337] rounded-md hover:bg-[#193858] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A3D]"
          >
            Hubungi Kami
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-3 text-sm rounded-md ${
                  isActive
                    ? 'bg-slate-100 text-[#0F2337] font-semibold'
                    : 'font-medium text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
