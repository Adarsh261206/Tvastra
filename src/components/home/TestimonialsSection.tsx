import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/* =========================================================
   SociableKIT Google Reviews Widget
   ========================================================= */

const GOOGLE_REVIEWS_WIDGET_URL =
  "https://widgets.sociablekit.com/google-reviews/iframe/25715169";

/* =========================================================
   Google Icon
   ========================================================= */

const GOOGLE_G = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-label="Google"
  >
    <path
      fill="#4285F4"
      d="M21.35 12.2c0-.72-.06-1.41-.18-2.08H12v3.94h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.15c1.84-1.69 2.91-4.18 2.91-7.25Z"
    />

    <path
      fill="#34A853"
      d="M12 21.6c2.63 0 4.84-.87 6.45-2.35l-3.15-2.45c-.87.58-1.98.92-3.3.92-2.54 0-4.7-1.72-5.47-4.03H3.27v2.53A9.74 9.74 0 0 0 12 21.6Z"
    />

    <path
      fill="#FBBC05"
      d="M6.53 13.69a5.86 5.86 0 0 1 0-3.38V7.78H3.27a9.75 9.75 0 0 0 0 8.44l3.26-2.53Z"
    />

    <path
      fill="#EA4335"
      d="M12 6.28c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.33 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.73 5.38l3.26 2.53C7.3 8 9.46 6.28 12 6.28Z"
    />
  </svg>
);

/* =========================================================
   Main Testimonials Section
   ========================================================= */

export default function TestimonialsSection() {
  const { ref: scrollRef, style: scrollStyle } = useScrollReveal();

  return (
    <section
      className="relative overflow-x-clip"
      style={{
        backgroundImage: "url('/testimonial.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#159F9B]/[0.045] blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D62D78]/[0.035] blur-3xl" />

        <motion.div
          animate={{
            rotate: [-7, -3, -7],
            x: [0, 20, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-28 top-[42%] h-10 w-72 rounded-full bg-[#E2A91A]/20"
        />

        <motion.div
          animate={{
            rotate: [5, 9, 5],
            x: [0, -20, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-[18%] h-12 w-80 rounded-full bg-[#D62D78]/15"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        ref={scrollRef}
        style={scrollStyle}
        className="relative z-10 mx-auto max-w-[1450px] px-6 py-20 md:px-10 md:py-28 lg:px-14"
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid items-end gap-10 lg:grid-cols-[1fr_auto]"
        >
          {/* LEFT */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#159F9B]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-black">
                Real Stories
              </span>
            </div>

            <h2 className="font-display text-[2.2rem] leading-[0.95] tracking-[-0.055em] text-[#202321] sm:text-[3.4rem] md:text-[4.5rem] lg:text-[5rem]">
              What Our
              <br />

              <span className="font-serif italic text-[#159F9B]">
                Learners Say
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5 border-l border-black/15 pl-7 md:pl-9 lg:max-w-[430px]">
            <p className="font-serif text-[1.25rem] leading-[1.2] tracking-[-0.02em] text-black md:text-[1.5rem]">
              Every session brings something new.
              <br />
              Every learner leaves with a story.
            </p>

            <p className="text-[14px] leading-relaxed text-black">
              Hear directly from the people who have explored, experimented
              and created with us at TVASTRA.
            </p>

            {/* Google Rating Badge */}
            <div className="mt-2 flex w-fit items-center gap-4 rounded-2xl border border-black/[0.06] bg-white/75 px-5 py-3 shadow-sm backdrop-blur-sm">
              <GOOGLE_G />

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#202321]">
                    Google
                  </span>

                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-[#FBBC04] text-[#FBBC04]"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-black">
                  Customer Reviews
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            REAL GOOGLE REVIEWS WIDGET
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 md:mt-20"
        >
          <div className="google-reviews-widget-wrapper">
            <iframe
              src={GOOGLE_REVIEWS_WIDGET_URL}
              title="Google Customer Reviews"
              loading="lazy"
              scrolling="no"
              frameBorder="0"
              allow="clipboard-write"
              className="google-reviews-widget-iframe"
            />
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM MESSAGE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 rounded-[20px] border border-[#159F9B]/10 bg-[#E9F5F2] px-6 py-6 md:px-10"
        >
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <GOOGLE_G />

            <p className="flex-1 font-serif text-lg italic text-black md:text-xl">
              Your experience inspires us to keep creating, teaching and
              building a space where creativity belongs to everyone.
            </p>

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black sm:whitespace-nowrap">
              Create · Connect · Belong
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          WIDGET STYLES
      ===================================================== */}

      <style>{`
        .google-reviews-widget-wrapper {
          position: relative;
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 22px;
          background: transparent;
        }

        .google-reviews-widget-iframe {
          display: block;
          width: 100%;
          min-height: 650px;
          border: 0;
          background: transparent;
        }

        /* Desktop */
        @media (min-width: 1280px) {
          .google-reviews-widget-iframe {
            min-height: 620px;
          }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .google-reviews-widget-wrapper {
            border-radius: 18px;
          }

          .google-reviews-widget-iframe {
            min-height: 720px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .google-reviews-widget-wrapper {
            border-radius: 16px;
          }

          .google-reviews-widget-iframe {
            min-height: 850px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .google-reviews-widget-iframe {
            min-height: 950px;
          }
        }
      `}</style>
    </section>
  );
}