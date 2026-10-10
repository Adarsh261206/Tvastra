import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/company logo.png',
  '/company logo (1).png',
  '/company logo (2).png',
  '/company logo (3).png',
  '/company logo (4).png',
  '/company logo (5).png',
  '/company logo (6).png',
  '/company logo (7).png',
  '/company logo (8).png',
  '/company logo (9).png',
  '/company logo (10).png',
];

const stats = [
  { value: '1000+', label: 'Happy Students' },
  { value: '100+', label: 'Art Workshops' },
  { value: '1000+', label: 'Artworks Created' },
  { value: '4.9★', label: 'Google Rating' },
];

function LogoRow({ reverse = false, duration = '45s' }: { reverse?: boolean; duration?: string }) {
  const items = [...logos, ...logos];

  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div
        className={`marquee-track flex w-max ${reverse ? 'marquee-track--right' : ''}`}
        style={{ '--marquee-duration': duration } as CSSProperties}
      >
        {items.map((src, i) => (
          <div
            key={i}
            className="mr-4 flex h-[72px] w-[140px] shrink-0 items-center justify-center rounded-2xl border border-[#202321]/[0.08] bg-white px-5 shadow-[0_1px_2px_rgba(32,35,33,0.04)] sm:mr-5 sm:h-24 sm:w-[190px] sm:px-7"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FAF8F3] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FAF8F3] to-transparent sm:w-24" />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F3] py-14 md:py-20">
      <div className="container-main">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-4"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] text-[#202321]/40">01</span>
          <span className="h-[2px] w-10 bg-[#D62D78]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#D62D78]">
            Our Clients
          </span>
        </motion.div>

        {/* Heading + side note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
        >
          <h2 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.86] tracking-[-0.055em] text-[#202321]">
            Trusted by artists
            <br />
            <span className="italic text-[#D62D78]">who choose TVASTRA.</span>
          </h2>

          <p className="max-w-sm text-[13px] leading-[1.8] text-[#202321]/60 lg:pb-2">
            From first-time learners to working professionals — the students,
            parents and organisations who trust us with their creative journey.
          </p>
        </motion.div>

      </div>

      {/* Moving logo marquee (full bleed) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="space-y-4"
      >
        <LogoRow duration="45s" />
        <LogoRow reverse duration="55s" />
      </motion.div>

      {/* Stats strip */}
      <div className="container-main mt-14 border-t border-[#202321]/10 pt-10 md:mt-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display text-[2rem] leading-none tracking-[-0.03em] text-[#202321] sm:text-[2.6rem]">
                {stat.value}
              </p>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#202321]/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
