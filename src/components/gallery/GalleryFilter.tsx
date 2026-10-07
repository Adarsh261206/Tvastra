import { motion } from 'framer-motion';
import { galleryCategories, type GalleryCategory } from '../../data/gallery';

interface GalleryFilterProps {
  active: GalleryCategory | 'all';
  onChange: (cat: GalleryCategory | 'all') => void;
}

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
      {galleryCategories.map(filter => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={`relative min-h-[44px] px-5 py-2.5 text-[11px] tracking-[0.08em] uppercase font-medium font-body transition-all duration-300 ${
            active === filter.id
              ? 'text-cream'
              : 'text-charcoal/80 border border-charcoal/10 hover:border-charcoal/25 hover:text-charcoal'
          }`}
        >
          {active === filter.id && (
            <motion.div
              layoutId="galleryFilter"
              className="absolute inset-0 bg-charcoal"
              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
