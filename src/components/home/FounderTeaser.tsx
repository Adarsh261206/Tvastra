import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function FounderTeaser() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* =========================================
     SCROLL TRACKING
     Works in BOTH directions
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 18,
    mass: 0.8,
  });

  /* =========================================
     FOUNDER CARD — FLOATING PARALLAX
  ========================================= */

  const cardY = useTransform(
    progress,
    [0, 0.2, 0.5, 0.8, 1],
    [130, 45, 0, -45, -130]
  );

  const cardScale = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.82, 0.94, 1, 0.94, 0.82]
  );

  const cardRotate = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    [-5, -2, 0, 2, 5]
  );

  const cardOpacity = useTransform(
    progress,
    [0, 0.15, 0.3, 0.7, 0.85, 1],
    [0.15, 0.7, 1, 1, 0.7, 0.15]
  );

  /* =========================================
     CARD INNER MOVEMENT
  ========================================= */

  const innerY = useTransform(
    progress,
    [0, 0.5, 1],
    [80, 0, -80]
  );

  const innerScale = useTransform(
    progress,
    [0, 0.5, 1],
    [1.15, 1, 1.15]
  );

  /* =========================================
     TEXT BLOCK — OPPOSITE MOVEMENT
  ========================================= */

  const textY = useTransform(
    progress,
    [0, 0.2, 0.5, 0.8, 1],
    [100, 35, 0, -35, -100]
  );

  const textScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.9, 1, 0.9]
  );

  const textOpacity = useTransform(
    progress,
    [0, 0.18, 0.3, 0.7, 0.82, 1],
    [0.05, 0.5, 1, 1, 0.5, 0.05]
  );

  /* =========================================
     EYEBROW — HORIZONTAL MOVEMENT
  ========================================= */

  const eyebrowX = useTransform(
    progress,
    [0, 0.5, 1],
    [-60, 0, 60]
  );

  /* =========================================
     HEADING — DRAMATIC MOVEMENT
  ========================================= */

  const headingY = useTransform(
    progress,
    [0, 0.5, 1],
    [75, 0, -75]
  );

  const headingRotate = useTransform(
    progress,
    [0, 0.5, 1],
    [-2.5, 0, 2.5]
  );

  /* =========================================
     DESCRIPTION
  ========================================= */

  const paragraphY = useTransform(
    progress,
    [0, 0.5, 1],
    [45, 0, -45]
  );

  /* =========================================
     CTA
  ========================================= */

  const buttonY = useTransform(
    progress,
    [0, 0.5, 1],
    [35, 0, -35]
  );

  const buttonScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  /* =========================================
     DECORATIVE ELEMENTS
  ========================================= */

  const decorationY = useTransform(
    progress,
    [0, 0.5, 1],
    [80, 0, -80]
  );

  const decorationRotate = useTransform(
    progress,
    [0, 0.5, 1],
    [-15, 0, 15]
  );

  const yellowX = useTransform(
    progress,
    [0, 0.5, 1],
    [30, 0, -30]
  );

  return (
    <section
      ref={sectionRef}
      className="
        section-gap
        relative
        overflow-x-clip
      "
      style={{
        backgroundColor: '#FFFDF8',
        backgroundImage: "url('/ourfounder.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* =====================================
          BACKGROUND DECORATIONS
      ====================================== */}

      <motion.div
        style={{
          y: decorationY,
          rotate: decorationRotate,
        }}
        className="
          absolute
          -top-10
          right-[8%]
          w-32
          h-32
          rounded-full
          bg-[#159F9B]/10
          pointer-events-none
        "
      />

      <motion.div
        style={{
          y: decorationY,
          rotate: decorationRotate,
        }}
        className="
          absolute
          bottom-5
          left-[5%]
          w-28
          h-28
          rounded-[30px]
          bg-[#D62D78]/10
          pointer-events-none
        "
      />

      <div className="container-main relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* =====================================
              LEFT — FOUNDER CARD
          ====================================== */}

          <motion.div
            style={{
              y: cardY,
              scale: cardScale,
              rotate: cardRotate,
              opacity: cardOpacity,
            }}
            className="
              relative
              will-change-transform
            "
          >

            {/* Main Card */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[30px]
                bg-white/40
                border
                border-[#D62D78]/20
                shadow-[0_30px_90px_rgba(32,35,33,0.14)]
              "
            >

              {/* Founder image */}
              <motion.div
                style={{
                  y: innerY,
                  scale: innerScale,
                }}
                className="
                  absolute
                  inset-0
                  will-change-transform
                "
              >
                <img
                  src="/ourfoundercard.png"
                  alt="TVASTRA Founder painting in the studio"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top sm:object-center"
                />
              </motion.div>

            </div>


            {/* =================================
                YELLOW 3 LINES
            ================================== */}

            <motion.div
              style={{
                y: decorationY,
                x: yellowX,
                rotate: decorationRotate,
              }}
              className="
                absolute
                -top-9
                -right-8
                flex
                flex-col
                gap-2
                will-change-transform
              "
            >
              <span className="h-[4px] w-12 rounded-full bg-[#F5B82E]" />

              <span className="h-[4px] w-9 rounded-full bg-[#F5B82E] translate-x-2" />

              <span className="h-[4px] w-6 rounded-full bg-[#F5B82E] translate-x-4" />
            </motion.div>


            {/* Pink Decoration */}

            <motion.div
              style={{
                y: decorationY,
                rotate: decorationRotate,
              }}
              className="
                absolute
                -bottom-7
                -right-7
                w-32
                h-32
                rounded-[30px]
                bg-[#D62D78]/10
                -z-10
              "
            />


            {/* Teal Decoration */}

            <motion.div
              style={{
                y: decorationY,
              }}
              className="
                absolute
                -top-7
                -left-7
                w-20
                h-20
                rounded-full
                bg-[#159F9B]/15
                -z-10
              "
            />

          </motion.div>


          {/* =====================================
              RIGHT — FOUNDER TEXT
          ====================================== */}

          <motion.div
            style={{
              y: textY,
              scale: textScale,
              opacity: textOpacity,
            }}
            className="
              relative
              will-change-transform
            "
          >

            {/* Eyebrow */}

            <motion.div
              style={{
                x: eyebrowX,
              }}
              className="
                flex
                items-center
                gap-4
                mb-7
                will-change-transform
              "
            >

              <span className="h-[2px] w-12 bg-[#159F9B]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.42em]
                  text-[#D62D78]
                "
              >
                Our Founder
              </span>

            </motion.div>


            {/* =================================
                LARGE HEADING
            ================================== */}

            <motion.h2
              style={{
                y: headingY,
                rotate: headingRotate,
              }}
              className="
                font-display
                text-[2.5rem]
                sm:text-[4.2rem]
                md:text-[4.8rem]
                lg:text-[5.3rem]
                xl:text-[5.8rem]
                leading-[0.83]
                tracking-[-0.06em]
                text-[#202321]
                mb-8
                will-change-transform
              "
            >
              A Creative Journey
              <br />

              That Began{' '}

              <span className="relative text-[#D62D78]">
                With Art

                {/* Small underline */}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[3px]
                    w-[70%]
                    rounded-full
                    bg-[#F5B82E]
                  "
                />
              </span>
            </motion.h2>


            {/* =================================
                DESCRIPTION
            ================================== */}

            <motion.p
              style={{
                y: paragraphY,
              }}
              className="
                max-w-xl
                mb-10
                text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[1.85]
                font-normal
                text-[#202321]
                will-change-transform
              "
            >
              TVASTRA was born from a deeply personal journey and a belief
              that art can help us reconnect with ourselves. Today, that
              belief continues to inspire a creative space where people can
              learn, express themselves and grow.
            </motion.p>


            {/* =================================
                CTA
            ================================== */}

            <motion.div
              style={{
                y: buttonY,
                scale: buttonScale,
              }}
              className="
                inline-block
                will-change-transform
              "
            >
              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#D62D78]
                  px-6
                  py-4
                  sm:px-8
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-white
                  shadow-[0_12px_30px_rgba(214,45,120,0.22)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#159F9B]
                  hover:shadow-[0_18px_40px_rgba(21,159,155,0.25)]
                "
              >
                <span>
                  Read Founder's Note
                </span>

                <ArrowUpRight
                  className="
                    h-5
                    w-5
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>


            {/* =================================
                TAGLINE
            ================================== */}

            <motion.div
              style={{
                y: decorationY,
              }}
              className="
                mt-14
                hidden
                sm:block
                will-change-transform
              "
            >

              <p
                className="
                  font-display
                  italic
                  text-[1.5rem]
                  lg:text-[1.75rem]
                  leading-[1.1]
                  text-[#202321]/75
                "
              >
                Art is a journey
                <br />
                back to yourself.
              </p>

              <span
                className="
                  block
                  mt-5
                  h-[2px]
                  w-14
                  bg-[#159F9B]
                "
              />

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}