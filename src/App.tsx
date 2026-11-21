import { useRef, useState } from 'react';
import BackToTopButton from './components/BackToTopButton';
import HeroAndOverview from './components/HeroAndOverview';
import { ImageZoomModal, PdfReferenceModal } from './components/MediaModal';
import Navbar from './components/Navbar';
import ProjectMapSection from './components/ProjectMapSection';
import SectionClosingFooter from './components/SectionClosingFooter';
import SectionDramaga from './components/SectionDramaga';
import SectionGranada from './components/SectionGranada';
import SectionJatinangor from './components/SectionJatinangor';
import SectionMemorial from './components/SectionMemorial';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [pdfPage, setPdfPage] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const inquiryRef = useRef<HTMLDivElement | null>(null);

  const handleOpenInquiry = () => {
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="pt-16">
        <HeroAndOverview
          onOpenPdfPage={setPdfPage}
          onZoomImage={(src, alt) => setZoomedImage({ src, alt })}
        />

        <ProjectMapSection
          onZoomImage={(src, alt) => setZoomedImage({ src, alt })}
        />

        <SectionJatinangor
          onOpenPdfPage={setPdfPage}
          onZoomImage={(src, alt) => setZoomedImage({ src, alt })}
        />

        <SectionDramaga
          onOpenPdfPage={setPdfPage}
          onZoomImage={(src, alt) => setZoomedImage({ src, alt })}
        />

        <SectionGranada
          onOpenPdfPage={setPdfPage}
          onZoomImage={(src, alt) => setZoomedImage({ src, alt })}
        />

        <SectionMemorial
          onOpenPdfPage={setPdfPage}
          onZoomImage={(src, alt) => setZoomedImage({ src, alt })}
        />

        <SectionClosingFooter
          onOpenPdfPage={setPdfPage}
          inquirySectionRef={inquiryRef}
        />
      </main>

      <ImageZoomModal
        src={zoomedImage?.src ?? null}
        alt={zoomedImage?.alt ?? ''}
        onClose={() => setZoomedImage(null)}
      />

      <PdfReferenceModal page={pdfPage} onChangePage={setPdfPage} />

      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
}
