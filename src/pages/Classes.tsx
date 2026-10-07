import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const categories = [
  {
    title: 'Kids Courses',
    age: 'Age 4 – 12 years',
    count: '8 courses',
    description: 'Age-appropriate courses for children.',
    link: '/courses/kids',
    tag: 'Kids',
    number: '01',
    accent: '#159F9B',
  },
  {
    title: 'Teens Courses',
    age: '12 to 17 years',
    count: '4 courses',
    description: 'Art learning and skill development for teenagers.',
    link: '/courses/teens',
    tag: 'Teens',
    number: '02',
    accent: '#D62D78',
  },
  {
    title: 'Adults Courses',
    age: '18 years +',
    count: '42 courses',
    description: 'Art forms and structured learning for adults.',
    link: '/courses/adults',
    tag: 'Adults',
    number: '03',
    accent: '#E2A91A',
  },
];

export default function ClassesPage() {
  return (
    <>
      <SEO
        title="Art Courses in Thane | Drawing, Painting, Calligraphy"
        description="Explore art courses at TVASTRA Art Studio Thane — drawing, painting, calligraphy, handwriting, traditional and modern art courses for kids, teens and adults."
        canonical="/courses"
        keywords="art courses Thane, drawing courses, painting courses, calligraphy Thane, kids art courses, adult art courses"
      />

      {/* =========================================================
          HERO / INTRO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F3]">

        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#159F9B]/[0.055]" />

          <div className="absolute -left-24 bottom-[-180px] h-[350px] w-[350px] rounded-full bg-[#D62D78]/[0.045]" />

          <div className="absolute right-[10%] top-[25%] h-20 w-20 rotate-12 rounded-[22px] border border-[#159F9B]/20" />

          <div className="absolute left-[7%] bottom-[15%] h-12 w-12 -rotate-12 rounded-full border border-[#D62D78]/20" />

        </div>


        <div className="relative z-10 container-main pb-14 pt-28 md:pb-20 md:pt-36">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl"
          >

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">

              <span className="h-[2px] w-12 bg-[#159F9B]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#159F9B]">
                Explore TVASTRA
              </span>

            </div>


            {/* Heading */}
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

              <h1 className="font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.82] tracking-[-0.065em] text-[#202321]">

                Find Your
                <br />

                <span className="text-[#D62D78]">
                  Creative Space.
                </span>

              </h1>


              <div className="max-w-md lg:pb-2">

                <div className="mb-6 h-[2px] w-14 bg-[#F5B82E]" />

                <p className="text-[15px] leading-[1.85] text-[#202321]/70">
                  Whether you are a child discovering art for the first time,
                  a teenager developing your skills, or an adult returning to
                  a creative passion, TVASTRA has a learning journey for you.
                </p>

              </div>

            </div>


            {/* Bottom meta */}
            <div className="mt-12 flex items-center gap-4">

              <span className="h-px w-16 bg-[#202321]/15" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#202321]/40">
                Learn · Explore · Create
              </span>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          COURSE CATEGORIES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F7F3EA] py-16 md:py-24">

        <div className="container-main">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="h-[2px] w-10 bg-[#159F9B]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#159F9B]">
                  Choose Your Journey
                </span>

              </div>

              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.85] tracking-[-0.055em] text-[#202321]">
                Something for
                <br />
                <span className="text-[#159F9B]">
                  Everyone.
                </span>
              </h2>

            </div>


            <p className="max-w-sm text-[13px] leading-[1.8] text-[#202321]/55 md:pb-1">
              Explore structured creative learning designed around different
              stages of life and artistic discovery.
            </p>

          </motion.div>


          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {categories.map((cat, i) => (

              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="group"
              >

                <Link
                  to={cat.link}
                  className="block"
                >

                  {/* Visual */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#FAF8F3]">

                    {/* Decorative composition */}
                    <div
                      className="absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-125"
                      style={{
                        backgroundColor: cat.accent,
                      }}
                    />

                    <div
                      className="absolute bottom-[-35px] left-[-35px] h-32 w-32 rounded-[35px] rotate-12 opacity-10 transition-transform duration-700 group-hover:rotate-45"
                      style={{
                        backgroundColor: cat.accent,
                      }}
                    />

                    {/* Large number */}
                    <div className="absolute left-7 top-7">

                      <span
                        className="font-display text-[5rem] leading-none tracking-[-0.06em] opacity-20 transition-all duration-500 group-hover:opacity-40"
                        style={{
                          color: cat.accent,
                        }}
                      >
                        {cat.number}
                      </span>

                    </div>


                    {/* Category tag */}
                    <div className="absolute right-6 top-6">

                      <span
                        className="rounded-full border bg-white/70 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.25em] backdrop-blur-md"
                        style={{
                          color: cat.accent,
                          borderColor: `${cat.accent}30`,
                        }}
                      >
                        {cat.tag}
                      </span>

                    </div>


                    {/* Center */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div
                        className="flex h-24 w-24 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110"
                        style={{
                          borderColor: `${cat.accent}35`,
                        }}
                      >
                        <ArrowUpRight
                          className="h-7 w-7 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                          style={{
                            color: cat.accent,
                          }}
                        />
                      </div>

                    </div>


                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                      style={{
                        backgroundColor: cat.accent,
                      }}
                    />

                  </div>


                  {/* Content */}
                  <div className="px-2 pb-2 pt-7">

                    <div className="mb-3 flex items-start justify-between gap-4">

                      <h3 className="font-display text-[1.65rem] leading-[0.95] tracking-[-0.04em] text-[#202321] transition-colors duration-300 group-hover:text-[#159F9B]">
                        {cat.title}
                      </h3>

                      <ArrowUpRight
                        className="mt-1 h-5 w-5 shrink-0 text-[#202321]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D62D78]"
                      />

                    </div>


                    <p className="max-w-sm text-[13px] leading-[1.75] text-[#202321]/65">
                      {cat.description}
                    </p>


                    {/* Metadata */}
                    <div className="mt-6 flex items-center justify-between border-t border-[#202321]/10 pt-4">

                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#202321]/40">
                        {cat.age}
                      </span>

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: cat.accent,
                        }}
                      >
                        {cat.count}
                      </span>

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          SMALL CLOSING STRIP
      ========================================================== */}
      <section className="bg-[#202321]">

        <div className="container-main py-10 md:py-12">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-display text-[1.5rem] leading-tight text-[#FAF8F3]">
              Your creative journey starts here.
            </p>

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F5B82E]">
              TVASTRA Art Studio
            </span>

          </div>

        </div>

      </section>
    </>
  );
}