import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Google',
    href: 'https://www.google.com',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@tvastra8046',
  },
];

function GoogleIcon() {
  return (
    <span
      className="inline-block text-[38px] font-bold leading-none sm:text-[28px]"
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'conic-gradient(from -45deg, #4285f4 0deg 90deg, #34a853 90deg 180deg, #fbbc05 180deg 270deg, #ea4335 270deg 360deg)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      G
    </span>
  );
}

function YouTubeIcon() {
  return (
    <div className="relative h-[24px] w-[34px] scale-[1.35] rounded-[7px] bg-[#ff0000] sm:scale-100">
      <span
        className="absolute left-[13px] top-[7px]"
        style={{
          width: 0,
          height: 0,
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: '8px solid white',
        }}
      />
    </div>
  );
}

export default function SocialFloatingLinks() {
  return (
    <div className="fixed right-3 top-[18%] z-50 flex flex-nowrap items-center gap-2.5 sm:right-6 sm:top-[18%] sm:gap-3 md:right-6 md:top-[calc(33.33%-150px)] lg:right-8 xl:right-10">
      {/* Explore more text */}
      <motion.span
        animate={{
          opacity: [1, 0.55, 1],
          scale: [1, 1.07, 1],
          rotate: [-4, -1, -4],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden items-center gap-1.5 -translate-y-[10px] text-[28px] font-extrabold tracking-[0.02em] text-[#202321] md:flex"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        Explore more
        <motion.span
          animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[30px] leading-none"
        >
          ↗
        </motion.span>
      </motion.span>

      {/* Social icons — stacked vertically */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.name}`}
            className="social-bubble group relative grid h-[60px] w-[60px] place-items-center rounded-full border border-black/[0.08] bg-white/90 shadow-[0_12px_30px_rgba(0,0,0,0.12),0_3px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:h-[50px] sm:w-[50px] md:h-[54px] md:w-[54px]"
            animate={{
              y: social.name === 'Google' ? [0, -12, 0] : [0, 12, 0],
              rotate: social.name === 'Google' ? [2, -2, 2] : [-2, 3, -2],
            }}
            transition={{
              duration: social.name === 'Google' ? 3.2 : 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: social.name === 'YouTube' ? 0.35 : 0,
            }}
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            {social.name === 'Google' ? <GoogleIcon /> : <YouTubeIcon />}

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 whitespace-nowrap rounded-full bg-[#111] px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-white opacity-0 shadow-lg transition-all duration-250 -translate-y-1/2 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
              {social.name} ↗
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
