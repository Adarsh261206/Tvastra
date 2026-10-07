import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../data/gallery';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ item, items, onClose, onPrev, onNext }: LightboxProps) {
  if (!item) return null;
  const idx = items.findIndex(i => i.id === item.id);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 h-11 w-11 border border-cream/15 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream/30 transition-all z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          {idx > 0 && (
            <button
              onClick={e => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 md:left-6 h-11 w-11 border border-cream/15 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream/30 transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next */}
          {idx < items.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 md:right-6 h-11 w-11 border border-cream/15 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream/30 transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Content */}
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            className="relative max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="pt-5 flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg md:text-xl text-cream">{item.title}</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/40 font-body mt-1">{item.category}</p>
              </div>
              <p className="text-sm text-cream/40 max-w-sm text-right hidden md:block">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
