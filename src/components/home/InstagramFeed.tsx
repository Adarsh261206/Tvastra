import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  INSTAGRAM_PROFILE_URL,
  INSTAGRAM_USERNAME,
  SOCIABLEKIT_WIDGET_URL,
} from '../../data/instagram';

/* ===== Instagram SVG Icon ===== */
const InstagramIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function InstagramFeed() {
  const { ref: scrollRef, style: scrollStyle } = useScrollReveal();

  return (
    <section className="relative overflow-x-clip bg-white py-16 md:py-20 lg:py-24">
      <motion.div
        ref={scrollRef}
        style={scrollStyle}
        className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8"
      >
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 text-center md:mb-14"
        >
          {/* Follow Us Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#159F9B]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#D62D78]">
              Follow Us
            </span>

            <span className="h-px w-8 bg-[#159F9B]" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-[2.2rem] leading-[0.9] tracking-[-0.05em] text-[#202321] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]">
            Follow Us on{' '}
            <span className="text-[#D62D78]">Instagram</span>
          </h2>

          {/* Instagram Profile Link */}
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-[#159F9B] transition-colors duration-300 hover:text-[#D62D78] sm:text-[15px]"
          >
            <InstagramIcon className="h-4 w-4" />
            @{INSTAGRAM_USERNAME}
          </a>
        </motion.div>

        {/* ================= SOCIABLEKIT WIDGET ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full max-w-[1100px]"
        >
          <div className="instagram-widget-wrapper">
            <iframe
              src={SOCIABLEKIT_WIDGET_URL}
              title={`Instagram Feed - @${INSTAGRAM_USERNAME}`}
              loading="lazy"
              allow="fullscreen"
              scrolling="no"
              frameBorder="0"
              className="instagram-widget-iframe"
            />
          </div>
        </motion.div>

        {/* ================= FOLLOW CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-8 flex justify-center"
        >
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#0095F6] px-7 py-3.5 text-[13px] font-semibold text-white shadow-[0_8px_25px_rgba(0,149,246,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1877F2] hover:shadow-[0_12px_30px_rgba(0,149,246,0.25)]"
          >
            <InstagramIcon className="h-4 w-4" />

            <span>Follow @{INSTAGRAM_USERNAME}</span>
          </a>
        </motion.div>
      </motion.div>

      {/* ================= WIDGET STYLES ================= */}
      <style>{`
        .instagram-widget-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          border-radius: 14px;
        }

        .instagram-widget-iframe {
          display: block;
          width: 100%;
          min-height: 850px;
          border: 0;
          background: #ffffff;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .instagram-widget-iframe {
            min-height: 800px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .instagram-widget-wrapper {
            border-radius: 10px;
          }

          .instagram-widget-iframe {
            min-height: 1050px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .instagram-widget-iframe {
            min-height: 1150px;
          }
        }
      `}</style>
    </section>
  );
}