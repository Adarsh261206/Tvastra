import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { easeOut } from '../motion/motion';

const lines = ['EXPLORE.', 'LEARN.', 'CREATE.', 'GROW.'];

export default function Hero() {
  const [ready, setReady] = useState(() => sessionStorage.getItem('splash-done') === '1');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    if (!ready) {
      const t = setTimeout(() => setReady(true), 3800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(t);
    }
  }, [ready]);

  useEffect(() => {
    if (!inView) setAnimate(false);
    else if (ready) {
      const t = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(t);
    }
  }, [inView, ready]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-x-clip bg-[#FAF8F3]">

      {/* Hero background image — Ken Burns */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/homepage image.png"
          alt=""
          aria-hidden="true"
          width={1200}
          height={600}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center will-change-transform"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/50 via-transparent to-transparent" />
      </div>

      {/* Floating paint blobs — hidden on mobile */}
      <div className="hidden sm:contents" aria-hidden="true">
      <motion.div
        animate={{
          x: [0, 25, -10, 0],
          y: [0, -15, 10, 0],
          rotate: [-10, -4, -8, -10],
          scale: [1, 1.04, 0.98, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] right-[8%] top-[12%] h-[70px] w-[350px] rounded-full bg-[#159F9B]/40 blur-0 will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -20, 12, 0],
          y: [0, 15, -8, 0],
          rotate: [8, 14, 5, 8],
          scale: [1, 0.97, 1.04, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] bottom-[22%] left-[5%] h-[60px] w-[280px] rounded-full bg-[#D62D78]/35 blur-0 will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 15, -8, 0],
          y: [0, -10, 12, 0],
          rotate: [-6, 2, -8, -6],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] right-[15%] top-[45%] h-[55px] w-[320px] rounded-full bg-[#E2A91A]/30 blur-0 will-change-transform"
      />
      </div>

      {/* Floating art particles */}
      <motion.div
        animate={{
          x: [0, 30, -15, 20, 0],
          y: [0, -25, 10, -18, 0],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.30, 0.50, 0.28, 0.42, 0.30],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[12%] top-[18%] h-3.5 w-3.5 rounded-full bg-[#159F9B] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -18, 22, -10, 0],
          y: [0, 20, -12, 15, 0],
          rotate: [0, -120, -240, -360],
          opacity: [0.25, 0.45, 0.22, 0.38, 0.25],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] right-[20%] top-[55%] h-2.5 w-2.5 rounded-full bg-[#D62D78] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 15, -20, 8, 0],
          y: [0, -12, 18, -8, 0],
          rotate: [0, 60, 150, 300, 360],
          opacity: [0.25, 0.40, 0.22, 0.35, 0.25],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[45%] bottom-[15%] h-4 w-4 rounded-full bg-[#E2A91A] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -12, 18, -8, 0],
          y: [0, 14, -20, 10, 0],
          rotate: [0, 45, 135, 225, 360],
          scale: [1, 1.1, 0.9, 1.05, 1],
          opacity: [0.22, 0.38, 0.20, 0.32, 0.22],
        }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[55%] top-[10%] h-3 w-3 rounded-sm bg-[#159F9B] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 22, -14, 16, 0],
          y: [0, -18, 8, -22, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.15, 0.88, 1],
          opacity: [0.20, 0.35, 0.18, 0.30, 0.20],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[3%] top-[50%] h-5 w-5 rounded-full bg-[#D62D78] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -16, 10, -20, 0],
          y: [0, 12, -16, 8, 0],
          rotate: [15, -30, 60, -15, 15],
          opacity: [0.18, 0.32, 0.16, 0.28, 0.18],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] right-[10%] top-[30%] h-2 w-2 rounded-sm bg-[#E2A91A] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 20, -12, 14, 0],
          y: [0, -10, 20, -14, 0],
          rotate: [0, 90, 200, 360],
          scale: [1, 0.9, 1.12, 0.95, 1],
          opacity: [0.25, 0.42, 0.22, 0.36, 0.25],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] right-[6%] bottom-[25%] h-4 w-4 rounded-full bg-[#159F9B] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 14, -22, 10, 0],
          y: [0, -20, 6, -12, 0],
          rotate: [-10, 25, -5, 15, -10],
          opacity: [0.20, 0.36, 0.18, 0.30, 0.20],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[8%] top-[70%] h-1.5 w-5 rounded-full bg-[#D62D78] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -10, 16, -14, 0],
          y: [0, 16, -8, 12, 0],
          rotate: [0, -60, -180, -300, -360],
          scale: [1, 1.08, 0.92, 1.04, 1],
          opacity: [0.22, 0.38, 0.20, 0.34, 0.22],
        }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[38%] top-[8%] h-3 w-3 rounded-full bg-[#E2A91A] will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, 18, -8, 12, 0],
          y: [0, -14, 10, -16, 0],
          rotate: [5, -20, 10, -15, 5],
          opacity: [0.18, 0.30, 0.16, 0.26, 0.18],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute z-[1] left-[60%] bottom-[8%] h-1.5 w-6 rounded-full bg-[#159F9B] will-change-transform"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[96rem] items-end px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="grid w-full items-end gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-8 xl:col-span-7"
            initial="hidden"
            animate={animate ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2, delayChildren: 0.35 } },
            }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
              }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]"
            >
              TVASTRA Wings to Your Creativity
            </motion.p>

            {/* Headline */}
            <h1 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[#202321]" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
              {lines.map((line) => (
                <motion.span
                  key={line}
                  variants={{
                    hidden: { opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' },
                    show: {
                      opacity: 1,
                      y: 0,
                      clipPath: 'inset(0% 0 0 0)',
                      transition: { duration: 2.2, ease: easeOut },
                    },
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
              }}
              className="mt-6 font-display text-[1.3rem] leading-[1.3] text-[#202321] md:text-[1.6rem]"
            >
              A creative space where every age can discover the joy of art.
            </motion.p>

            {/* Body */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
              }}
              className="mt-5 max-w-lg text-[14px] leading-relaxed text-black"
            >
              At TVASTRA Wings to Your Creativity, we believe creativity has no age. From little artists taking their first steps to adults rediscovering a forgotten passion, our studio is a space to learn, experiment, express and grow through art.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 1.8, ease: easeOut } },
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/courses"
                className="group inline-flex items-center gap-3 rounded-full bg-[#159F9B] px-6 py-3.5 text-[15px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(21,159,155,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#128B88]"
              >
                Explore Our Courses
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[#202321]/20 bg-white/35 px-6 py-3.5 text-[15px] font-bold uppercase tracking-[0.18em] text-[#202321] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D62D78]/50 hover:bg-white/70"
              >
                Enquire Now
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>

            {/* Supporting line */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
              }}
              className="mt-10 font-handwritten text-[1.5rem] text-[#159F9B]/60 md:text-[1.8rem]"
            >
              Where creativity takes flight.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: animate ? 2.2 : 0, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-black">Scroll</span>
          <motion.span
            className="h-8 w-px origin-top bg-gradient-to-b from-[#159F9B]/60 to-transparent"
            animate={{ scaleY: [0.55, 1, 0.55] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
