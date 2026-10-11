import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About TVASTRA Art Studio | Our Story"
        description="Learn about TVASTRA Art Studio — a creative learning space in Thane for kids, teens and adults to explore drawing, painting, calligraphy and more."
        canonical="/about"
        keywords="about TVASTRA, art studio Thane, creative learning, art education"
      />

      {/* HERO */}
      <section className="relative flex items-end overflow-hidden bg-[#FAF8F3] sm:min-h-[70vh]">
        <div className="pointer-events-none absolute inset-0 z-0 hidden sm:block">
          {/* BACKGROUND IMAGE */}
          <img
            src="/ourfounder.png"
            alt=""
            aria-hidden="true"
            width={1200}
            height={1200}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />

          {/* Existing gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/65 via-[#FAF8F3]/20 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/35 to-transparent" />
        </div>

        <div className="relative z-10 container-main pb-8 pt-[88px] md:pb-24 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
          <div className="mb-4 flex items-center gap-4 sm:mb-6">
            <span className="h-[2px] w-12 bg-[#159F9B]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
              About TVASTRA
            </span>
          </div>

            <h1 className="max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] text-[#202321] sm:leading-[0.86] sm:tracking-[-0.06em]">
              The Story Behind
              <br />
              <span className="text-[#D62D78]">TVASTRA.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-[#202321]/80 sm:mt-8 md:text-[17px]">
              From a love for art to a mission to help people stay connected
              with creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="section-gap bg-[#FAF8F3]">
        <div className="container-main">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-24">

            {/* FOUNDER IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#F7F3EA]">
                <img
                  src="/ourfoundercard.png"
                  alt="TVASTRA Founder"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-[28px] bg-[#159F9B]/10" />

              <div className="absolute -left-5 -top-5 -z-10 h-20 w-20 rounded-full bg-[#D62D78]/10" />
            </motion.div>

            {/* FOUNDER TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#159F9B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                  Founder's Note
                </span>
              </div>

              <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.86] tracking-[-0.055em] text-[#202321]">
                A Note from
                <br />
                <span className="text-[#159F9B]">
                  Suvija Sreenivas
                </span>
              </h2>

              <div className="my-8 h-[2px] w-16 bg-[#D62D78]" />

              <div className="space-y-6 text-[15px] leading-[1.85] text-[#202321]/85 md:text-[16px]">
                <p>
                  Art has always been close to my heart. Over the years, it
                  has evolved from a passion into a purpose—a purpose to help
                  people of different ages discover, explore and stay
                  connected with creativity.
                </p>

                <p>
                  My journey has taken me from more than 16 years in the
                  corporate world to becoming an artist and entrepreneur. In
                  2019, I was diagnosed with cancer, and during one of the most
                  challenging phases of my life, art became my safe space.
                  Throughout my six-month journey of treatment and healing,
                  art gave me a way to express myself, pause, reconnect with
                  who I was and find inner strength. As I immersed myself in
                  art during this period, I discovered how deeply it could
                  support my emotional healing. What started as a source of
                  comfort during my cancer journey gradually became the
                  beginning of my own artistic journey—and eventually led me
                  to start TVASTRA in 2020.
                </p>

                <p>
                  Art became more than a passion. It became a part of my
                  healing, my identity and eventually my purpose.
                </p>

                <p>
                  Today, as a cancer survivor, artist and entrepreneur, I want
                  to help more people stay connected with art and experience
                  the joy, strength and possibilities that creativity can
                  bring into their lives.
                </p>

                <p>
                  That experience changed the way I looked at art. I began to
                  see creativity not simply as something we learn, but as
                  something that can become a meaningful part of our lives.
                </p>

                <p>
                  In 2020, I started TVASTRA with the belief that everyone
                  deserves a creative space—a space where a child can explore
                  imagination, an adult can rediscover a passion, and anyone
                  can experience the joy of creating.
                </p>

                <p>
                  Today, Tvastra is a part of that larger journey. Through our
                  studio, we want to make art learning joyful, accessible and
                  inspiring, while creating a community of people who choose
                  to stay connected with art.
                </p>
              </div>

              <p className="mt-10 font-handwritten text-[1.8rem] text-[#D62D78]">
                Explore. Learn. Create. Grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PEOPLE BEHIND TVASTRA */}
      <section className="section-gap bg-[#FAF8F3]">
        <div className="container-main">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#159F9B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                  The People Behind Tvastra
                </span>
              </div>

              <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.86] tracking-[-0.055em] text-[#202321]">
                One Vision. Many
                <br />
                Creative Hands.
                <br />
                <span className="italic text-[#D62D78]">
                  One Beautiful Journey.
                </span>
              </h2>

              <div className="my-8 h-[2px] w-16 bg-[#F5B82E]" />

              <div className="space-y-6 text-[15px] leading-[1.85] text-[#202321]/85 md:text-[16px]">
                <p>
                  At Tvastra, we believe that creativity has the power to
                  inspire, connect and transform lives. Behind every artwork,
                  every workshop, every learning experience and every
                  thoughtfully curated gift is a team driven by passion,
                  dedication and a shared love for creativity.
                </p>

                <p>
                  We are a team of creative minds who bring ideas to life,
                  nurture artistic talent and create meaningful experiences
                  for people of all ages. From inspiring individuals to
                  explore their creativity to helping artists grow and
                  crafting memorable gifts, we work together to make every
                  Tvastra experience special.
                </p>

                <p>
                  Led by our founder,{' '}
                  <strong className="font-semibold text-[#202321]">
                    Suvija Sreenivas
                  </strong>
                  , our journey is built on the belief that everyone has a
                  creative spark waiting to be discovered.
                </p>

                <p>
                  Together, we are building more than a brand. We are
                  nurturing a community where creativity flourishes, artists
                  find their wings, and meaningful connections are created
                  through art.
                </p>

                <p className="font-semibold text-[#202321]">
                  We are Tvastra — a team united by creativity, inspired by
                  purpose, and committed to helping every creative spirit
                  shine.
                </p>
              </div>

              <p className="mt-8 font-handwritten text-[1.8rem] italic text-[#D62D78]">
                Create. Learn. Gift. Grow together.
              </p>
            </motion.div>

            {/* TEAM IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-[#F7F3EA]">
                <img
                  src="/founder team.jpeg"
                  alt="The TVASTRA team led by founder Suvija Sreenivas"
                  width={2560}
                  height={1706}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-[28px] bg-[#D62D78]/10" />

              <div className="absolute -right-5 -top-5 -z-10 h-20 w-20 rounded-full bg-[#159F9B]/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-gap bg-[#F7F3EA]">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[28px] border border-[#202321]/[0.07] bg-white/75 p-6 shadow-[0_15px_45px_rgba(32,35,33,0.05)] backdrop-blur-sm md:p-10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[60px] bg-[#159F9B]/10" />

              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[#159F9B]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                    Vision
                  </span>
                </div>

                <h3 className="mb-6 font-display text-[2rem] leading-[0.95] tracking-[-0.045em] text-[#202321] md:text-[3rem]">
                  A Creative
                  <br />
                  <span className="text-[#159F9B]">
                    Community.
                  </span>
                </h3>

                <p className="max-w-xl text-[15px] leading-[1.85] text-[#202321]/80">
                  To spread TVASTRA across the globe and create a community
                  of like-minded people who connect, learn, grow and inspire
                  one another through art and creativity.
                </p>
              </div>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-[#202321]/[0.07] bg-white/75 p-6 shadow-[0_15px_45px_rgba(32,35,33,0.05)] backdrop-blur-sm md:p-10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[60px] bg-[#D62D78]/10" />

              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[#159F9B]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                    Mission
                  </span>
                </div>

                <h3 className="mb-6 font-display text-[2rem] leading-[0.95] tracking-[-0.045em] text-[#202321] md:text-[3rem]">
                  Make Creativity
                  <br />
                  <span className="text-[#D62D78]">
                    Part of Life.
                  </span>
                </h3>

                <p className="max-w-xl text-[15px] leading-[1.85] text-[#202321]/80">
                  To help people stay connected with art, discover their
                  creative potential, build meaningful skills and make
                  creativity a part of their lives.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}