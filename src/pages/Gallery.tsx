import { useState } from 'react';
import GalleryFilter from '../components/gallery/GalleryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import Lightbox from '../components/gallery/Lightbox';
import { galleryItems } from '../data/gallery';
import type { GalleryCategory, GalleryItem } from '../data/gallery';
import SEO from '../components/SEO';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(i => i.category === activeFilter);
  const handlePrev = () => { if (!selectedItem) return; const idx = filtered.findIndex(i => i.id === selectedItem.id); setSelectedItem(filtered[idx > 0 ? idx - 1 : filtered.length - 1]); };
  const handleNext = () => { if (!selectedItem) return; const idx = filtered.findIndex(i => i.id === selectedItem.id); setSelectedItem(filtered[idx < filtered.length - 1 ? idx + 1 : 0]); };

  return (
    <>
      <SEO
        title="Student Art Gallery | TVASTRA Art Studio Thane"
        description="Browse creative artwork by students of TVASTRA Art Studio. Drawings, paintings, calligraphy and more from our talented artists."
        canonical="/gallery"
        keywords="student art gallery, art exhibition Thane, student artwork, art gallery"
      />
      {/* Hero with background */}
      <section className="relative min-h-[42vh] flex items-end overflow-hidden sm:min-h-[50vh]">
  <div
    className="absolute inset-0 bg-cover bg-top sm:bg-center"
    style={{
      backgroundImage: "url('/carrer.png')",
    }}
  />

  <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />

  <div className="absolute inset-0 bg-cream/50 sm:hidden" />

  <div className="relative z-10 container-main pb-6 md:pb-16 pt-20 md:pt-40 text-center">
    <div className="flex items-center justify-center gap-3 mb-5">
      <span className="h-px w-10 bg-[#159F9B]" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]">
        Gallery
      </span>
    </div>

    <h1 className="font-display text-[2.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-[#202321] leading-[0.95] tracking-[-0.02em] sm:leading-[0.85] sm:tracking-[-0.04em] mb-3">
      Made By Our Students.
    </h1>

    <p className="text-black text-[14px] max-w-lg mx-auto leading-relaxed">
      A digital exhibition of creative work from our talented students.
    </p>
  </div>
</section>

      <section className="section-gap bg-cream">
        <div className="container-main">
          <GalleryFilter active={activeFilter} onChange={setActiveFilter} />
          <GalleryGrid items={filtered} onImageClick={setSelectedItem} />
          {filtered.length === 0 && <div className="text-center py-16"><p className="text-charcoal-warm">No artwork found.</p></div>}
        </div>
        <Lightbox item={selectedItem} items={filtered} onClose={() => setSelectedItem(null)} onPrev={handlePrev} onNext={handleNext} />
      </section>
    </>
  );
}
