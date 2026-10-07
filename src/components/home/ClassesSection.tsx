import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const categories = [
  {
    title: 'Adults Courses',
    copy: 'Explore a wide range of art forms, techniques and creative practices designed for adult learners.',
    cta: 'Explore Adults Courses',
    link: '/courses/adults',
    tag: 'adults',
    image: '/adultssection.png',
  },
  {
    title: 'Teens Courses',
    copy: 'Build artistic skills, confidence and creative expression through guided learning.',
    cta: 'Explore Teens Courses',
    link: '/courses/teens',
    tag: 'teens',
    image: '/teenssection.png',
  },
  {
    title: 'Kids Courses',
    copy: 'Age-appropriate art learning that encourages imagination, observation, creativity and confidence.',
    cta: 'Explore Kids Courses',
    link: '/courses/kids',
    tag: 'kids',
    image: '/kidssections.png',
  },
];

export default function ClassesSection() {
  const { ref: scrollRef, style: scrollStyle } = useScrollReveal();

  return (
    <section
      className="relative overflow-x-clip py-3 md:py-4"
      style={{
        backgroundImage: "url('/classessection.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div
        className="
          pointer-events-none
          absolute -left-8 top-16
          h-20 w-36
          rotate-[-18deg]
          rounded-[50%]
          bg-[#159F9B]/10
          blur-xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute right-[-50px] top-[45%]
          h-28 w-56
          rotate-[25deg]
          rounded-[50%]
          bg-[#D62D78]/10
          blur-2xl
        "
      />

      <motion.div
        ref={scrollRef}
        style={scrollStyle}
        className="mx-auto max-w-[1450px] px-6 md:px-10 lg:px-14"
      >

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px', amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mb-12
            flex
            items-end
            justify-between
            gap-10
            md:mb-16
          "
        >

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#159F9B]" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]
                  text-black
                "
              >
                Our Courses
              </span>
            </div>

            <h2
              className="
                max-w-[700px]
                font-display
                text-[2rem]
                leading-[1.0]
                tracking-[-0.045em]
                text-[#202120]
                sm:text-[3rem]
                md:text-[3.5rem]
                lg:text-[4rem]
              "
            >
              Art for Every Age.
              <br />

              <span className="text-[#159F9B]">
                Creativity for Every Journey.
              </span>
            </h2>
          </div>

          <div className="hidden shrink-0 items-start justify-between gap-6 md:flex">

            <div className="flex shrink-0 flex-col items-start gap-3">

              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -10,
                  y: 20,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  rotate: -3,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  delay: 0.25,
                  duration: 0.6,
                }}
                className="relative"
              >
                <p
                  className="
                    font-handwritten
                    text-[1.8rem]
                    leading-[0.9]
                    text-[#C52A76]/80
                    md:text-[2.1rem]
                  "
                >
                  Same Hands
                  <br />
                  Brighter
                  <br />
                  Tomorrows
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
              >
                <svg
                  viewBox="0 0 160 50"
                  className="w-36 rotate-[-2deg]"
                  fill="none"
                >
                  <path
                    d="M8 30 C40 18 90 15 140 22"
                    stroke="#E2A91A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M130 15 L145 22 L131 30"
                    stroke="#E2A91A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

            </div>

            <Link
              to="/courses"
              className="
                group
                flex
                items-center
                justify-end
                gap-2
                self-end
                pt-14
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black
                transition-colors
                hover:text-[#159F9B]
              "
            >
              View All Courses

              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

        </motion.div>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >

          {categories.map((cat, index) => {
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 65,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.15,
                  margin: '-70px',
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >

                <Link
                  to={cat.link}
                  className="
                    group
                    block
                    h-full
                  "
                >

                  <Card
                    className="
                      h-full
                      rounded-3xl
                      border
                      border-black/[0.07]
                      bg-card
                      shadow-sm
                      transition-transform
                      duration-300
                      hover:-translate-y-1
                    "
                  >

                    <div
                      className="
                        relative
                        aspect-[1.1]
                        overflow-hidden
                        rounded-t-3xl
                        bg-parchment
                      "
                    >
                      <img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/20
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      <div className="absolute top-4 left-4 flex gap-1.5">
                        <span
                          className="
                            text-[8px]
                            tracking-[0.2em]
                            uppercase
                            text-cream/80
                            bg-charcoal/50
                            backdrop-blur-sm
                            px-2
                            py-1
                            font-body
                          "
                        >
                          {cat.tag}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="p-6 pb-0">
                      <CardTitle
                        className="
                          font-display
                          text-2xl
                          font-semibold
                          leading-tight
                          text-[#202120]
                        "
                      >
                        {cat.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 pt-3">
                      <p className="mb-4 text-[14px] leading-relaxed text-black">
                        {cat.copy}
                      </p>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#159F9B]
                          transition-colors
                          group-hover:text-[#118E8A]
                        "
                      >
                        {cat.cta}

                        <ArrowUpRight
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
                      </div>
                    </CardContent>

                  </Card>

                </Link>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-10 md:hidden">

          <Link
            to="/courses"
            className="
              inline-flex
              items-center
              gap-2
              border-b
              border-[#159F9B]
              px-5
              py-3
              text-[12px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#159F9B]
            "
          >
            View All Courses

            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

        </div>

      </motion.div>
    </section>
  );
}