import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '6+', label: 'AGE GROUPS' },
  { value: 'Small', label: 'BATCH SIZES' },
  { value: 'All', label: 'LEVELS WELCOME' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomeAbout() {
  const { ref: scrollRef, style: scrollStyle } = useScrollReveal();
  const [playing, setPlaying] = useState(false);
  const videoId = 'ceFs4Ik7oNY';
  const videoWrapRef = useRef<HTMLDivElement>(null);

  // Auto-pause: video screen se hat te hi stop, wapas Play dabane par chale
  useEffect(() => {
    if (!playing) return;
    const el = videoWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setPlaying(false);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [playing]);
  return (
    <section className="relative overflow-x-clip bg-[#F7F3EA] py-6 md:py-10 lg:py-14">
      <motion.div ref={scrollRef} style={scrollStyle} className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-14">

        <Card className="relative grid overflow-hidden rounded-3xl border border-black/[0.07] bg-card shadow-sm lg:grid-cols-2">

          {/* LEFT — VIDEO (replaces about image) */}
          <motion.div
            ref={videoWrapRef}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: '-100px', amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-black"
          >
            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play TVASTRA story video"
                className="group relative block aspect-[4/3] h-full w-full text-left sm:aspect-[16/10] lg:aspect-auto lg:min-h-[580px]"
              >
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Watch TVASTRA story video"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D62D78] text-white shadow-[0_12px_30px_rgba(214,45,120,0.4)] transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </span>
                  <span className="rounded-full bg-white/90 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#202120]">
                    Watch Our Story
                  </span>
                </span>
              </button>
            ) : (
              <div className="relative aspect-[4/3] h-full w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[580px]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="TVASTRA story video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            )}
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: '-100px', amount: 0.15 }}
            className="flex flex-col justify-center p-6 md:p-12 lg:p-14"
          >

            {/* Label */}
            <motion.p variants={item} className="text-xs font-bold tracking-[0.25em] text-[#159F9B]">
              ABOUT TVASTRA
            </motion.p>

            {/* Handwritten quote */}
            <motion.p
              variants={{
                hidden: { opacity: 0, rotate: -8, y: 12, scale: 0.96 },
                show: {
                  opacity: 1,
                  rotate: -3,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-3 font-handwritten text-xl italic text-[#D62D78] md:text-2xl"
            >
              Art begins in curiosity.
            </motion.p>

            {/* Heading */}
            <motion.h2 variants={item} className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-[#202120] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
              More Than
              <br />
              An Art Class.
            </motion.h2>

            {/* Decorative squiggle */}
            <motion.svg
              variants={item}
              viewBox="0 0 120 12"
              className="mt-2 w-20 text-[#159F9B]"
              fill="none"
            >
              <path
                d="M2 8 C15 2, 30 10, 45 4 S75 10, 90 4 S105 8, 118 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Description */}
            <motion.p variants={item} className="mt-6 max-w-md text-[14px] leading-relaxed text-black">
              At TVASTRA, art is not only about learning techniques. It&apos;s about
              slowing down, experimenting, discovering your own visual language
              and having the confidence to create something that feels yours.
            </motion.p>

            {/* Stats */}
            <motion.div variants={item} className="mt-8 grid grid-cols-3 gap-2 border-y border-black/[0.08] py-6 sm:gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className={index !== 0 ? 'border-l border-black/[0.08] pl-2 sm:pl-4' : ''}>
                  <p className="font-display text-2xl font-semibold leading-none text-[#159F9B] md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em] text-black sm:text-[11px] sm:tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={item}>
              <Link
                to="/about"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#202120] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#159F9B]"
              >
                KNOW US BETTER
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

        </Card>

      </motion.div>
    </section>
  );
}
