import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function CareerTeaser() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* =========================================
     SCROLL PROGRESS
     Works in BOTH directions
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /*
   * Smooth the raw scroll value so animations
   * feel premium instead of jumping.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });

  /* =========================================
     IMAGE / CARD PARALLAX
  ========================================= */

  const imageY = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [120, 45, 0, -45, -120]
  );

  const imageScale = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.82, 0.94, 1, 0.94, 0.82]
  );

  const imageRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-4, 0, 4]
  );

  const imageOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.25, 0.75, 0.85, 1],
    [0.15, 0.7, 1, 1, 0.7, 0.15]
  );

  /* =========================================
     IMAGE INNER PARALLAX
  ========================================= */

  const innerImageY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [70, 0, -70]
  );

  const innerImageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1.12, 1, 1.12]
  );

  /* =========================================
     TEXT PARALLAX
  ========================================= */

  const textY = useTransform(
    smoothProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [100, 40, 0, -40, -100]
  );

  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.3, 0.7, 0.82, 1],
    [0.05, 0.45, 1, 1, 0.45, 0.05]
  );

  const textScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.9, 1, 0.9]
  );

  /* =========================================
     HEADING MOVEMENT
  ========================================= */

  const headingY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [65, 0, -65]
  );

  const headingRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-2, 0, 2]
  );

  /* =========================================
     EYEBROW
  ========================================= */

  const eyebrowX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-45, 0, 45]
  );

  /* =========================================
     PARAGRAPH
  ========================================= */

  const paragraphY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [40, 0, -40]
  );

  /* =========================================
     CTA
  ========================================= */

  const buttonY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [35, 0, -35]
  );

  const buttonScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.88, 1, 0.88]
  );

  /* =========================================
     DECORATIVE SHAPE
  ========================================= */

  const decorationY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [70, 0, -70]
  );

  const decorationRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-12, 0, 12]
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
        backgroundImage: "url('/carrer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* =====================================
          BACKGROUND DECORATION
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
          blur-[2px]
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
          bottom-10
          left-[5%]
          w-24
          h-24
          rounded-[28px]
          bg-[#D62D78]/10
          pointer-events-none
        "
      />


      <div className="container-main relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">


          {/* =====================================
              LEFT — CAREER IMAGE CARD
          ====================================== */}

          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
              rotate: imageRotate,
              opacity: imageOpacity,
            }}
            className="
              relative
              will-change-transform
            "
          >

            {/* Main Image Card */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[28px]
                bg-white
                border
                border-[#D62D78]/20
                shadow-[0_30px_90px_rgba(32,35,33,0.14)]
              "
            >

              {/* Career Image */}

              <motion.img
                src="/carrer.png"
                alt="TVASTRA Career"
                style={{
                  y: innerImageY,
                  scale: innerImageScale,
                }}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  will-change-transform
                "
              />

              {/* Soft glass layer */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#202321]/10
                  via-transparent
                  to-white/10
                  pointer-events-none
                "
              />

            </div>


            {/* =================================
                YELLOW THREE LINES
            ================================== */}

            <motion.div
              style={{
                y: decorationY,
                rotate: decorationRotate,
              }}
              className="
                absolute
                -top-8
                -right-8
                flex
                flex-col
                gap-2
                pointer-events-none
              "
            >
              <span className="h-[4px] w-12 rounded-full bg-[#F5B82E]" />

              <span className="h-[4px] w-9 rounded-full bg-[#F5B82E] translate-x-2" />

              <span className="h-[4px] w-6 rounded-full bg-[#F5B82E] translate-x-4" />
            </motion.div>


            {/* Pink floating shape */}

            <motion.div
              style={{
                y: decorationY,
                rotate: decorationRotate,
              }}
              className="
                absolute
                -bottom-6
                -right-6
                w-32
                h-32
                rounded-[28px]
                bg-[#D62D78]/10
                -z-10
              "
            />


            {/* Teal circle */}

            <motion.div
              style={{
                y: decorationY,
              }}
              className="
                absolute
                -top-6
                -left-6
                w-20
                h-20
                rounded-full
                bg-[#159F9B]/15
                -z-10
              "
            />

          </motion.div>


          {/* =====================================
              RIGHT — CAREER CONTENT
          ====================================== */}

          <motion.div
            style={{
              y: textY,
              opacity: textOpacity,
              scale: textScale,
            }}
            className="
              relative
              will-change-transform
            "
          >

            {/* =================================
                EYEBROW
            ================================== */}

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

              <span
                className="
                  h-[2px]
                  w-12
                  bg-[#159F9B]
                "
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.42em]
                  text-[#D62D78]
                "
              >
                Careers
              </span>

            </motion.div>


            {/* =================================
                MAIN HEADING
            ================================== */}

            <motion.h2
              style={{
                y: headingY,
                rotate: headingRotate,
              }}
              className="
                font-display
                text-[2.5rem]
                sm:text-[4rem]
                md:text-[4.8rem]
                lg:text-[5.3rem]
                xl:text-[5.8rem]
                leading-[0.84]
                tracking-[-0.06em]
                text-[#202321]
                mb-8
                will-change-transform
              "
            >
              Want to Be Part
              <br />
              of{' '}
              <span className="text-[#D62D78]">
                TVASTRA?
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
                leading-[1.8]
                font-normal
                text-[#202321]
                will-change-transform
              "
            >
              We are always open to meeting passionate people who believe
              in the power of creativity. Whether you are an art teacher,
              sales professional, creative enthusiast or someone who would
              love to contribute to our journey, we would love to hear from you.
            </motion.p>


            {/* =================================
                CTA
            ================================== */}

            <motion.div
              style={{
                y: buttonY,
                scale: buttonScale,
              }}
              className="inline-block will-change-transform"
            >
              <Link
                to="/career"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-full
                  bg-[#159F9B]
                  px-6
                  py-4
                  sm:px-8
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-white
                  shadow-[0_12px_30px_rgba(21,159,155,0.22)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#D62D78]
                  hover:shadow-[0_18px_40px_rgba(214,45,120,0.25)]
                "
              >

                {/* Animated background */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/10
                    transition-transform
                    duration-500
                    group-hover:translate-x-0
                  "
                />

                <span className="relative z-10">
                  Join TVASTRA
                </span>

                <ArrowUpRight
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />

              </Link>
            </motion.div>


            {/* =================================
                DECORATIVE TAGLINE
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
                  text-[1.45rem]
                  lg:text-[1.7rem]
                  leading-[1.1]
                  text-[#202321]/75
                "
              >
                Good people
                <br />
                create great things.
              </p>

              <span
                className="
                  block
                  mt-5
                  h-[2px]
                  w-12
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