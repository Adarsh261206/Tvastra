import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const adultCourses: { count: number; name: string; slug: string; image?: string }[] = [
  { count: 1, name: 'Painting & Fine Art', slug: 'adult-painting-fine-art', image: '/Painting & Fine Art.png' },
  { count: 2, name: 'Drawing, Sketching & Illustration', slug: 'adult-drawing-sketching', image: '/Drawing, Sketching & Illustration.png' },
  { count: 3, name: 'Mandala Art', slug: 'adult-mandala-art', image: '/Mandala Art.png' },
  { count: 4, name: 'Traditional Indian Art Forms', slug: 'adult-traditional-indian-art', image: '/Traditional Indian Art Forms.png' },
  { count: 5, name: 'Contemporary, Texture & Mixed-Media Art', slug: 'adult-contemporary-texture', image: '/Contemporary, Texture & Mixed-Media Art.png' },
  { count: 6, name: 'Decorative & Creative Arts', slug: 'adult-decorative-creative-arts', image: '/Decorative & Creative Arts.png' },
];

const highlights = [
  {
    title: 'Small Batches',
    text: 'Personal guidance and attention in every single session.',
    accent: '#159F9B',
  },
  {
    title: 'All Materials Included',
    text: 'Canvas, colours and art kits are provided at the studio.',
    accent: '#D62D78',
  },
  {
    title: 'Beginner Friendly',
    text: 'No prior experience needed — start exactly where you are.',
    accent: '#F5B82E',
  },
  {
    title: 'Flexible Timings',
    text: 'Weekday and weekend batches that fit around your routine.',
    accent: '#159F9B',
  },
];

export default function AdultsCoursesPage() {
  return (
    <>
      <SEO
        title="Adults Art Courses in Thane | TVASTRA Art Studio"
        description="Art forms and structured learning for adults at TVASTRA Art Studio Thane. Painting, drawing, Mandala, Indian artforms, resin art and more."
        canonical="/courses/adults"
        keywords="adults art courses Thane, adult art classes, painting courses, resin art, Indian artforms"
      />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F3]">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-36 -top-36 h-[430px] w-[430px] rounded-full bg-[#D62D78]/[0.055]" />

          <div className="absolute -left-24 bottom-[-170px] h-[340px] w-[340px] rounded-full bg-[#159F9B]/[0.045]" />

          <div className="absolute right-[10%] top-[24%] h-20 w-20 rotate-12 rounded-[22px] border border-[#D62D78]/20" />

          <div className="absolute left-[7%] bottom-[18%] h-12 w-12 -rotate-12 rounded-full border border-[#159F9B]/20" />

        </div>


        <div className="relative z-10 container-main pb-14 pt-28 md:pb-20 md:pt-36">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">

              <span className="h-[2px] w-12 bg-[#F5B82E]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                Adults Courses
              </span>

            </div>


            {/* Hero Content */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

              <div>

                <h1 className="font-display text-[clamp(2.5rem,7vw,6.8rem)] leading-[0.82] tracking-[-0.065em] text-[#202321]">
                  Create.
                  <br />
                  <span className="text-[#D62D78]">
                    Explore.
                  </span>
                  <br />
                  <span className="text-[#159F9B]">
                    Learn.
                  </span>
                </h1>

              </div>


              <div className="max-w-md lg:pb-1">

                <div className="mb-5 h-[2px] w-14 bg-[#159F9B]" />

                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D62D78]">
                  18 years +
                </p>

                <p className="text-[15px] leading-[1.85] text-[#202321]/70">
                  Art forms and structured learning for adults.
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="bg-[#FAF8F3]">
        <div className="container-main py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#D62D78]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#D62D78]">
                Art For Grown-Ups
              </span>
            </div>
            <div className="space-y-5 text-[15px] leading-[1.85] text-[#202321]/80">
              <p>
                At Tvastra – Wings to Your Creativity, we offer a wide range
                of art and painting classes for adults in Thane West, from
                beginner-friendly creative experiences to advanced and
                traditional Indian art forms.
              </p>
              <p>
                Whether you want to learn art as a hobby, explore a new
                creative skill, experience mindful relaxation, or develop
                your artistic abilities professionally, our structured
                courses provide step-by-step guidance across painting,
                sketching, mixed media, traditional art, resin, sculpture,
                texture and contemporary art techniques.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-[#202321]/[0.07] bg-white/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(32,35,33,0.06)]"
                >
                  <span className="mb-4 block h-[2px] w-8" style={{ backgroundColor: item.accent }} />
                  <h3 className="mb-2 font-display text-[1.05rem] leading-tight tracking-[-0.02em] text-[#202321]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-[1.7] text-[#202321]/60">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          COURSES SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F7F3EA] py-16 md:py-24">

        <div className="container-main">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >

            <div className="flex flex-wrap items-center gap-4">

              <span className="h-[2px] w-10 bg-[#D62D78]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#D62D78]">
                Learning Journey
              </span>

            </div>

          </motion.div>


          {/* =====================================================
              COURSE GRID
          ====================================================== */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {adultCourses.map((course, i) => (

              <motion.div
                key={course.count}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.15,
                  margin: '-30px',
                }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i * 0.06, 0.3),
                }}
                className="group"
              >

                {/* =================================================
                    COURSE CARD
                ================================================== */}
                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-[#202321]/[0.07]
                    bg-[#FAF8F3]
                    transition-all
                    duration-400
                    hover:-translate-y-1
                    hover:border-[#D62D78]/30
                    hover:shadow-[0_20px_55px_rgba(32,35,33,0.07)]
                  "
                >

                  {/* Visual */}
                  <Link
                    to={`/courses/${course.slug}`}
                    aria-label={course.name}
                    className="
                      relative
                      block
                      aspect-[4/3]
                      overflow-hidden
                      bg-[#F2EDE2]
                    "
                  >

                  {/* Course artwork image */}
                  {course.image && (
                    <img
                      src={course.image}
                      alt=""
                      loading="lazy"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  )}

                  {/* Top Right Shape */}
                  {!course.image && (
                    <>
                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-44
                      w-44
                      rounded-full
                      bg-[#D62D78]/10
                      transition-transform
                      duration-700
                      group-hover:scale-125
                    "
                  />


                    {/* Bottom Left Shape */}
                    <div
                      className="
                        absolute
                        -bottom-12
                        -left-12
                        h-36
                        w-36
                        rotate-12
                        rounded-[35px]
                        bg-[#159F9B]/10
                        transition-transform
                        duration-700
                        group-hover:rotate-45
                      "
                    />


                    {/* Number */}
                    <div
                      className="
                        absolute
                        left-6
                        top-6
                        font-display
                        text-[5.5rem]
                        leading-none
                        tracking-[-0.07em]
                        text-[#202321]/[0.08]
                        transition-all
                        duration-500
                        group-hover:text-[#D62D78]/20
                      "
                    >
                      {String(course.count).padStart(2, '0')}
                    </div>
                    </>
                  )}


                    {/* Adults Pill */}
                    <div className="absolute right-5 top-5">

                      <span
                        className="
                          rounded-full
                          border
                          border-[#D62D78]/20
                          bg-white/70
                          px-4
                          py-2
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.25em]
                          text-[#D62D78]
                          backdrop-blur-md
                        "
                      >
                        Adults
                      </span>

                    </div>


                    {/* Center Icon */}
                    {!course.image && (
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div
                        className="
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D62D78]/20
                          bg-white/30
                          backdrop-blur-sm
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:border-[#D62D78]/40
                        "
                      >

                        <ArrowUpRight
                          className="
                            h-6
                            w-6
                            text-[#D62D78]
                            transition-all
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />

                      </div>

                    </div>
                    )}


                    {/* Bottom Accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        bg-[#D62D78]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                  </Link>


                  {/* Content */}
                  <div className="p-6 md:p-7">

                    <div className="mb-5 flex items-start justify-between gap-5">

                      <Link to={`/courses/${course.slug}`} aria-label={course.name}>
                        <h3
                          className="
                            max-w-[280px]
                            font-display
                            text-[1.45rem]
                            leading-[1.1]
                            tracking-[-0.035em]
                            text-[#202321]
                            transition-colors
                            duration-300
                            group-hover:text-[#D62D78]
                          "
                        >
                          {course.name}
                        </h3>
                      </Link>


                      <span
                        className="
                          mt-1
                          shrink-0
                          text-[#202321]/20
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-[#D62D78]
                        "
                      >
                        ↗
                      </span>

                    </div>


                    {/* Bottom Meta */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        border-t
                        border-[#202321]/10
                        pt-4
                      "
                    >

                      <span
                        className="
                          max-w-[130px]
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#202321]/40
                        "
                      >
                        18 years +
                      </span>


                      <button
                        onClick={() => openWhatsApp(course.name)}
                        className="
                        group/enquire
                        inline-flex
                        shrink-0
                        items-center
                        gap-2
                        px-3
                        py-3
                        -m-3
                        text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#202321]/65
                          transition-colors
                          duration-300
                          hover:text-[#D62D78]
                        "
                      >
                        Enquire

                        <ArrowUpRight
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover/enquire:-translate-y-0.5
                            group-hover/enquire:translate-x-0.5
                          "
                        />

                      </button>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CLOSING STRIP
      ========================================================== */}
      <section className="bg-[#202321]">
        <div className="container-main py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-display text-[1.5rem] leading-tight text-[#FAF8F3]">
              Discover your creative side — no experience needed to begin.
            </p>
            <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5B82E]">
              TVASTRA · Adults
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
