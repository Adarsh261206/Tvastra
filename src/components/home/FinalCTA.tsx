import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ctas = [
  { label: 'Enquire About Courses', link: '/contact' },
  { label: 'Plan an Event', link: '/events-workshops' },
  { label: 'Buy a Gift Card', link: '/gift-card' },
  { label: 'Join Our Team', link: '/career' },
];

export default function FinalCTA() {
  return (
    <section
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

      {/* Soft background layer for text readability */}
      <div
        className="
          absolute
          inset-0
          bg-[#FFFDF8]/20
          pointer-events-none
        "
      />


      {/* Decorative floating elements (static) */}
      <div
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

      <div
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


      {/* Main content */}
      <div className="container-main relative z-10">

        <div className="mx-auto max-w-6xl text-center">

          {/* Content glass panel */}
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


            {/* Heading */}
            <h2
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
            </h2>


            {/* Small decorative line */}
            <div
              className="
                relative
                z-10
                mx-auto
                mt-7
                h-[3px]
                w-[70px]
                rounded-full
                bg-[#159F9B]
              "
            />


            {/* Description */}
            <p
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
            </p>


            {/* CTA buttons */}
            <div
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
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
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
              ))}
            </div>


            {/* Bottom decorative accent */}
            <div
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
