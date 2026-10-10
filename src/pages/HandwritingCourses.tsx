import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';
import SEO from '../components/SEO';

const cardImages = [
  '/handwriring 1 (1).png',
  '/handwriring 1 (2).png',
];

const learnings = [
  'Correct letter formation and writing patterns',
  'Proper spacing between letters and words',
  'Consistent letter size and proportion',
  'Better alignment and presentation',
  'Improved writing flow and speed',
  'Guided handwriting practice',
  'Techniques for neat and legible writing',
  'Developing better everyday writing habits',
];

export default function HandwritingCoursesPage() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % cardImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <SEO
        title="Handwriting Improvement Course for Kids in Thane | TVASTRA Art Studio"
        description="Structured handwriting improvement course at TVASTRA Art Studio Thane — letter formation, spacing, alignment, speed and neat presentation for children."
        canonical="/courses/handwriting"
        keywords="handwriting improvement course Thane, handwriting classes for kids, neat handwriting Thane, kids handwriting course"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FAF8F3]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-36 -top-36 h-[430px] w-[430px] rounded-full bg-[#159F9B]/[0.055]" />
          <div className="absolute -left-24 bottom-[-170px] h-[340px] w-[340px] rounded-full bg-[#D62D78]/[0.045]" />
          <div className="absolute right-[10%] top-[24%] h-20 w-20 rotate-12 rounded-[22px] border border-[#159F9B]/20" />
          <div className="absolute left-[7%] bottom-[18%] h-12 w-12 -rotate-12 rounded-full border border-[#D62D78]/20" />
        </div>

        <div className="relative z-10 container-main pb-14 pt-28 md:pb-20 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#159F9B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#159F9B]">
                Handwriting Improvement Course
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h1 className="font-display text-[clamp(2.5rem,6.5vw,6.2rem)] leading-[0.85] tracking-[-0.065em] text-[#202321]">
                  Better Handwriting.
                  <br />
                  <span className="text-[#D62D78]">
                    Better Confidence.
                  </span>
                  <br />
                  Better Presentation.
                </h1>
              </div>

              <div className="max-w-md lg:pb-1">
                <div className="mb-5 h-[2px] w-14 bg-[#F5B82E]" />
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#159F9B]">
                  From 6 years + · Guided Practice
                </p>
                <p className="text-[15px] leading-[1.85] text-[#202321]/70">
                  A structured program that helps children develop neat, clear
                  and consistent handwriting through guided practice and
                  easy-to-follow techniques.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT + WHAT STUDENTS LEARN */}
      <section className="relative overflow-hidden bg-[#F7F3EA] py-16 md:py-24">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#159F9B]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#159F9B]">
                About The Course
              </span>
            </div>
            <div className="space-y-5 text-[15px] leading-[1.85] text-[#202321]/80">
              <p>
                The Handwriting Improvement Course at Tvastra is a structured
                program designed to help children develop neat, clear and
                consistent handwriting through guided practice and
                easy-to-follow techniques.
              </p>
              <p>
                The course focuses on improving letter formation, size and
                proportion, spacing between letters and words, alignment,
                writing patterns, speed and overall presentation. Students
                also work on developing the correct writing habits that can
                make everyday schoolwork more organised and legible.
              </p>
            </div>
          </motion.div>

          {/* Image slideshow card — both images cycle every 3s */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[#202321]/[0.07] bg-[#F2EDE2] shadow-[0_20px_60px_rgba(32,35,33,0.1)]">
              {cardImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === imgIdx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {cardImages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${i === imgIdx ? 'w-6 bg-white shadow' : 'w-2 bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.9] tracking-[-0.055em] text-[#202321]">
              What Students
              <br />
              <span className="text-[#159F9B]">Will Learn.</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {learnings.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                  className="rounded-[22px] border border-[#202321]/[0.07] bg-[#FAF8F3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#159F9B]/30 hover:shadow-[0_20px_55px_rgba(32,35,33,0.07)]"
                >
                  <span className="font-display text-[2rem] leading-none text-[#159F9B]/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 text-[14px] font-semibold leading-[1.6] text-[#202321]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-3xl"
          >
            <p className="text-[15px] leading-[1.85] text-[#202321]/80">
              With regular practice and individual guidance, the course aims
              to help students become more comfortable and confident with
              their handwriting.
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-[#202321]/80">
              Give your child the foundation for neat, confident and beautiful
              handwriting with Tvastra.
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp('Handwriting Improvement Course')}
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#159F9B] px-8 py-4 text-center text-[12px] font-bold uppercase tracking-[0.17em] text-white shadow-[0_12px_30px_rgba(21,159,155,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#128B88] sm:w-auto"
            >
              Enquire About This Course
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CLOSING STRIP */}
      <section className="bg-[#202321]">
        <div className="container-main py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[1.5rem] leading-tight text-[#FAF8F3]">
              Neat today. Confident tomorrow.
            </p>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5B82E]">
              TVASTRA · Handwriting
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
