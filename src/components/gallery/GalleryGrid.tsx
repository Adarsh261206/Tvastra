import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryItem } from '../../data/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (item: GalleryItem) => void;
}

export default function GalleryGrid({ items, onImageClick }: GalleryGridProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
      <AnimatePresence mode="popLayout">
        {items.map(item => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="group relative break-inside-avoid mb-4 md:mb-5 cursor-pointer"
            onClick={() => onImageClick(item)}
          >
            <div className="relative overflow-hidden bg-parchment">
              <img
                src={item.image}
                alt={item.title}
                width={400}
                height={item.aspect === 'portrait' ? 520 : item.aspect === 'landscape' ? 280 : 400}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ aspectRatio: item.aspect === 'portrait' ? '10/13' : item.aspect === 'landscape' ? '10/7' : '1/1' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <div className="space-y-1">
                  <p className="text-cream/50 text-[9px] tracking-[0.2em] uppercase font-body">
                    {item.studentName === '[Student Name]' ? 'Student Work' : item.studentName}
                  </p>
                  <p className="text-cream/70 text-[10px] tracking-[0.15em] uppercase font-body">
                    {item.category?.replace(/-/g, ' ') ?? 'Artwork'}
                  </p>
                  {item.studentName === '[Student Name]' && (
                    <p className="text-cream/40 text-[9px] tracking-[0.15em] uppercase font-body">
                      Age 14 · 2026
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
