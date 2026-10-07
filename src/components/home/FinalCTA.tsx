import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const ctas = [
  { label: 'Enquire About Courses', link: '/contact' },
  { label: 'Plan an Event', link: '/events-workshops' },
  { label: 'Buy a Gift Card', link: '/gift-card' },
  { label: 'Join Our Team', link: '/career' },
];

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* =========================================
     SCROLL ANIMATION
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  /* Heading movement */
  const headingY = useTransform(
    progress,
    [0, 0.5, 1],
    [70, 0, -70]
  );

  const headingScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.88, 1, 0.88]
  );

  const headingRotate = useTransform(
    progress,
    [0, 0.5, 1],
    [-1.5, 0, 1.5]
  );

  /* Paragraph movement */
  const paragraphY = useTransform(
    progress,
    [0, 0.5, 1],
    [45, 0, -45]
  );

  /* Buttons movement */
  const buttonsY = useTransform(
    progress,
    [0, 0.5, 1],
    [55, 0, -55]
  );

  /* Decorative movement */
  const decorationY = useTransform(
    progress,
    [0, 0.5, 1],
    [90, 0, -90]
  );

  const decorationRotate = useTransform(
    progress,
    [0, 0.5, 1],
    [-8, 0, 8]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-x-clip
        py-24
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundImage: "url('/finalcta.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* =========================================
          SOFT BACKGROUND LAYER
          Keeps artwork visible while improving
          text readability.
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[#FFFDF8]/20
          pointer-events-none
        "
      />


      {/* =========================================
          DECORATIVE FLOATING ELEMENTS
      ========================================= */}

      <motion.div
        style={{
          y: decorationY,
          rotate: decorationRotate,
        }}
        className="
          absolute
          top-10
          left-[8%]
          w-20
          h-20
          rounded-full
          border-[3px]
          border-[#D62D78]/30
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
          right-[7%]
          w-24
          h-24
          rounded-[28px]
          border-[3px]
          border-[#159F9B]/25
          pointer-events-none
        "
      />


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="container-main relative z-10">

        <div className="mx-auto max-w-6xl text-center">

          {/* =====================================
              CONTENT GLASS PANEL
          ====================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/70
              bg-white/80
              px-5
              py-10
              shadow-[0_30px_100px_rgba(32,35,33,0.10)]
              backdrop-blur-[8px]
              sm:px-10
              sm:py-16
              lg:px-16
              lg:py-20
            "
          >

            {/* Pink glow */}

            <div
              className="
                absolute
                -top-24
                left-1/2
                h-48
                w-48
                -translate-x-1/2
                rounded-full
                bg-[#D62D78]/15
                blur-3xl
                pointer-events-none
              "
            />

            {/* Teal glow */}

            <div
              className="
                absolute
                -bottom-24
                right-10
                h-44
                w-44
                rounded-full
                bg-[#159F9B]/10
                blur-3xl
                pointer-events-none
              "
            />


            {/* =====================================
                HEADING
            ====================================== */}

            <motion.h2
              style={{
                y: headingY,
                scale: headingScale,
                rotate: headingRotate,
              }}
              className="
                relative
                z-10
                mx-auto
                max-w-5xl
                font-display
                text-[2.25rem]
                leading-[0.95]
                tracking-[-0.055em]
                text-[#202321]
                sm:text-[4rem]
                md:text-[5rem]
                lg:text-[5.8rem]
                xl:text-[6.5rem]
              "
            >
              Let's Create Something
              <br />

              <span className="text-[#D62D78]">
                Beautiful Together.
              </span>
            </motion.h2>


            {/* =====================================
                SMALL DECORATIVE LINE
            ====================================== */}

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{
                width: 70,
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                mx-auto
                mt-7
                h-[3px]
                rounded-full
                bg-[#159F9B]
              "
            />


            {/* =====================================
                DESCRIPTION
            ====================================== */}

            <motion.p
              style={{
                y: paragraphY,
              }}
              className="
                relative
                z-10
                mx-auto
                mt-7
                max-w-2xl
                text-[15px]
                leading-[1.8]
                text-[#202321]/80
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              Whether you want to learn art, plan a creative event, gift an
              art experience or join our team, connect with TVASTRA today.
            </motion.p>


            {/* =====================================
                CTA BUTTONS
            ====================================== */}

            <motion.div
              style={{
                y: buttonsY,
              }}
              className="
                relative
                z-10
                mt-10
                flex
                flex-wrap
                justify-center
                gap-3
                sm:gap-4
              "
            >
              {ctas.map((cta, index) => (
                <motion.div
                  key={cta.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={cta.link}
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      gap-3
                      overflow-hidden
                      rounded-full
                      border
                      border-[#202321]/15
                      bg-[#202321]
                      px-6
                      py-3.5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      shadow-[0_10px_25px_rgba(32,35,33,0.12)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:bg-[#D62D78]
                      hover:border-[#D62D78]
                      hover:shadow-[0_15px_35px_rgba(214,45,120,0.25)]
                      sm:px-7
                      sm:text-[12px]
                    "
                  >

                    {/* Animated hover sweep */}

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
                      {cta.label}
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
              ))}
            </motion.div>


            {/* =====================================
                BOTTOM DECORATIVE ACCENT
            ====================================== */}

            <motion.div
              style={{
                y: decorationY,
              }}
              className="
                relative
                z-10
                mx-auto
                mt-12
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span className="h-[3px] w-3 rounded-full bg-[#F5B82E]" />
              <span className="h-[3px] w-7 rounded-full bg-[#D62D78]" />
              <span className="h-[3px] w-3 rounded-full bg-[#159F9B]" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}