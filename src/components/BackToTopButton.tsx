import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById('beranda');
    if (!heroEl) return;

    const checkScroll = () => {
      const rect = heroEl.getBoundingClientRect();
      setVisible(rect.bottom <= 64);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#0F2337] text-white border border-[#C49A3D]/60 shadow-lg flex items-center justify-center hover:bg-[#193858] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A3D] cursor-pointer transition-all duration-200 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 text-[#F4D078]" aria-hidden="true" />
    </button>
  );
}
