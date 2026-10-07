import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';
import SEO from '../components/SEO';

const calligraphyCourses = [
  { count: 1, name: 'Faux Calligraphy' },
  { count: 2, name: 'Brushpen Calligraphy' },
  { count: 3, name: 'Cut Nib Calligraphy' },
  { count: 4, name: 'Copperplate Calligraphy' },
];

export default function CalligraphyCoursesPage() {
  const [search, setSearch] = useState('');

  const filtered = calligraphyCourses.filter(
    (course) =>
      search === '' ||
      course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Calligraphy Courses in Thane | TVASTRA Art Studio"
        description="Learn various types of calligraphy at TVASTRA Art Studio Thane — Faux, Brushpen, Cut Nib and Copperplate calligraphy."
        canonical="/courses/calligraphy"
        keywords="calligraphy courses Thane, faux calligraphy, brushpen calligraphy, cut nib calligraphy, copperplate calligraphy"
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

              <span className="h-[2px] w-12 bg-[#D62D78]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                Calligraphy Courses
              </span>

            </div>


            {/* Hero Content */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

              <div>

                <h1 className="font-display text-[clamp(2.5rem,7vw,6.8rem)] leading-[0.82] tracking-[-0.065em] text-[#202321]">
                  Write.
                  <br />
                  <span className="text-[#D62D78]">
                    Create.
                  </span>
                  <br />
                  <span className="text-[#159F9B]">
                    Inspire.
                  </span>
                </h1>

              </div>


              <div className="max-w-md lg:pb-1">

                <div className="mb-5 h-[2px] w-14 bg-[#159F9B]" />

                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D62D78]">
                  Age 10 + years
                </p>

                <p className="text-[15px] leading-[1.85] text-[#202321]/70">
                  We teach various types of Calligraphy — Faux, Brushpen,
                  Cut Nib and Copperplate calligraphy.
                </p>

              </div>

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
              SEARCH BAR
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >

            <div className="mx-auto max-w-2xl">

              <div className="relative">

                <Search
                  size={20}
                  strokeWidth={1.8}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[#D62D78]/65
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search calligraphy courses..."
                  aria-label="Search calligraphy courses"
                  className="
                    h-14
                    w-full
                    rounded-full
                    border
                    border-[#202321]/10
                    bg-[#FAF8F3]
                    pl-14
                    pr-14
                    text-[14px]
                    text-[#202321]
                    outline-none
                    placeholder:text-[#202321]/40
                    shadow-[0_8px_30px_rgba(32,35,33,0.05)]
                    transition-all
                    duration-300
                    focus:border-[#D62D78]/45
                    focus:bg-white
                    focus:shadow-[0_12px_35px_rgba(214,45,120,0.10)]
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    aria-label="Clear search"
                    className="
                      absolute
                      right-1.5
                      top-1/2
                      flex
                      h-11
                      w-11
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[#202321]/[0.06]
                      text-lg
                      text-[#202321]/50
                      transition-all
                      duration-300
                      hover:bg-[#D62D78]/10
                      hover:text-[#D62D78]
                    "
                  >
                    ×
                  </button>
                )}

              </div>


              {/* Result Count */}
              <div className="mt-4 flex items-center justify-center gap-3">

                <span className="h-px w-6 bg-[#202321]/10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#202321]/40">
                  {filtered.length} of {calligraphyCourses.length} courses
                </span>

                <span className="h-px w-6 bg-[#202321]/10" />

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              COURSE GRID
          ====================================================== */}
          {filtered.length > 0 ? (

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {filtered.map((course, i) => (

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

                    {/* Visual Area */}
                    <div
                      className="
                        relative
                        aspect-[4/3]
                        overflow-hidden
                        bg-[#F2EDE2]
                      "
                    >

                      {/* Top Right Shape */}
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


                      {/* Course Number */}
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


                      {/* Category Pill */}
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
                          Calligraphy
                        </span>

                      </div>


                      {/* Center Arrow */}
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

                    </div>


                    {/* Card Content */}
                    <div className="p-6 md:p-7">

                      <div className="mb-5 flex items-start justify-between gap-5">

                        <h3
                          className="
                            max-w-[280px]
                            font-display
                            text-[1.45rem]
                            leading-[1]
                            tracking-[-0.035em]
                            text-[#202321]
                            transition-colors
                            duration-300
                            group-hover:text-[#D62D78]
                          "
                        >
                          {course.name}
                        </h3>


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


                      {/* Metadata */}
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
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#202321]/40
                          "
                        >
                          Age 10 + years
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

          ) : (

            /* =====================================================
               EMPTY STATE
            ====================================================== */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                rounded-[28px]
                border
                border-[#202321]/[0.07]
                bg-[#FAF8F3]
                px-6
                py-20
                text-center
              "
            >

              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D62D78]/10
                "
              >
                <Search className="h-6 w-6 text-[#D62D78]" />
              </div>


              <h3 className="font-display text-3xl tracking-[-0.04em] text-[#202321]">
                No courses found.
              </h3>


              <p className="mt-3 text-[13px] text-[#202321]/50">
                Try searching with a different course name.
              </p>

            </motion.div>

          )}

        </div>

      </section>
    </>
  );
}