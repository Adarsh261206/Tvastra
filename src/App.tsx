import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Layout from './components/layout/Layout';
import PageLoader from './components/ui/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ClassesPage = lazy(() => import('./pages/Classes'));
const ClassDetail = lazy(() => import('./pages/ClassDetail'));
const ProgramsPage = lazy(() => import('./pages/Programs'));
const GalleryPage = lazy(() => import('./pages/Gallery'));

const ContactPage = lazy(() => import('./pages/Contact'));


const CareerPage = lazy(() => import('./pages/Career'));
const GiftCardPage = lazy(() => import('./pages/GiftCard'));
const EventsWorkshopsPage = lazy(() => import('./pages/EventsWorkshops'));
const KidsCoursesPage = lazy(() => import('./pages/KidsCourses'));
const TeensCoursesPage = lazy(() => import('./pages/TeensCourses'));
const AdultsCoursesPage = lazy(() => import('./pages/AdultsCourses'));
const CalligraphyCoursesPage = lazy(() => import('./pages/CalligraphyCourses'));
const HandwritingCoursesPage = lazy(() => import('./pages/HandwritingCourses'));

/* ── Splash loader ───────────────────────────────────────────── */
function SplashLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'animating' | 'exiting'>('animating');

  useEffect(() => {
    sessionStorage.removeItem('splash-done');
    const t1 = setTimeout(() => setPhase('exiting'), 3000);
    const t2 = setTimeout(() => {
      sessionStorage.setItem('splash-done', '1');
      onComplete();
    }, 3700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden bg-[#FAF8F3]"
      style={{
        opacity: phase === 'exiting' ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-28"
        style={{
          backgroundImage: 'radial-gradient(rgba(32,35,33,.12) .6px, transparent .6px)',
          backgroundSize: '8px 8px',
        }}
      />

      {/* Floating blobs */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '42vw', height: '42vw', left: '-24vw', top: '-24vw',
          background: '#159f9b', opacity: 0.07, filter: 'blur(2px)',
          animation: 'b1 9s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '35vw', height: '35vw', right: '-19vw', bottom: '-20vw',
          background: '#f02d8b', opacity: 0.06, filter: 'blur(2px)',
          animation: 'b2 11s ease-in-out infinite',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: 'min(900px, 92vw)', height: 330 }}>
          {/* SVG strokes */}
          <svg viewBox="0 0 900 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
            <path className="path" d="M20 90 C130 35 215 115 330 70 S520 35 645 88 S785 110 880 55" />
            <path className="path2" d="M30 93 C145 45 220 108 340 74 S525 42 650 92 S790 105 875 59" />
            <path className="path3" d="M45 96 C155 55 230 112 350 78 S530 50 655 97 S795 110 865 65" />
          </svg>

          {/* Paintbrush — realistic 3D */}
          <div
            className="absolute"
            style={{
              left: '-3%', top: '53%', width: 150, height: 34,
              transform: 'rotate(-11deg)',
              animation: 'brush 2.5s .1s cubic-bezier(.12,.82,.18,1) forwards',
              filter: 'drop-shadow(0 10px 12px rgba(0,0,0,.25))',
            }}
          >
            <svg viewBox="0 0 150 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <defs>
                {/* Wood grain gradient */}
                <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a0673c" />
                  <stop offset="18%" stopColor="#7a4a25" />
                  <stop offset="35%" stopColor="#9b6338" />
                  <stop offset="50%" stopColor="#6d3f1c" />
                  <stop offset="65%" stopColor="#8c5830" />
                  <stop offset="82%" stopColor="#6b3d1a" />
                  <stop offset="100%" stopColor="#4e2c12" />
                </linearGradient>

                {/* Wood highlight */}
                <linearGradient id="woodSheen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                  <stop offset="30%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="70%" stopColor="rgba(0,0,0,0.08)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
                </linearGradient>

                {/* Metal ferrule gradient */}
                <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d4d4d4" />
                  <stop offset="15%" stopColor="#f5f5f5" />
                  <stop offset="30%" stopColor="#e8e8e8" />
                  <stop offset="50%" stopColor="#b0b0b0" />
                  <stop offset="70%" stopColor="#c8c8c8" />
                  <stop offset="85%" stopColor="#999" />
                  <stop offset="100%" stopColor="#888" />
                </linearGradient>

                {/* Metal rim highlight */}
                <linearGradient id="metalRim" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
                </linearGradient>

                {/* Bristle gradient */}
                <linearGradient id="bristleGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B6914" />
                  <stop offset="40%" stopColor="#a07828" />
                  <stop offset="100%" stopColor="#f02d8b" />
                </linearGradient>

                {/* Paint drip */}
                <radialGradient id="paintDrip" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#ff5ca8" />
                  <stop offset="100%" stopColor="#f02d8b" />
                </radialGradient>

                {/* Wood grain pattern lines */}
                <pattern id="grainLines" patternUnits="userSpaceOnUse" width="150" height="4">
                  <line x1="0" y1="1" x2="150" y2="1.5" stroke="rgba(0,0,0,0.12)" strokeWidth="0.4" />
                  <line x1="0" y1="3" x2="150" y2="2.8" stroke="rgba(0,0,0,0.08)" strokeWidth="0.3" />
                </pattern>
              </defs>

              {/* === HANDLE === */}
              {/* Handle base */}
              <rect x="62" y="9" width="86" height="16" rx="8" fill="url(#wood)" />

              {/* Wood grain overlay */}
              <rect x="62" y="9" width="86" height="16" rx="8" fill="url(#grainLines)" opacity="0.6" />

              {/* Handle 3D sheen */}
              <rect x="62" y="9" width="86" height="16" rx="8" fill="url(#woodSheen)" />

              {/* Handle top highlight line */}
              <line x1="70" y1="10" x2="144" y2="10" stroke="rgba(255,220,180,0.3)" strokeWidth="0.8" />

              {/* Handle end cap */}
              <ellipse cx="148" cy="17" rx="4" ry="8" fill="#5a3418" />
              <ellipse cx="148" cy="17" rx="4" ry="8" fill="url(#woodSheen)" />
              <ellipse cx="148" cy="15.5" rx="2.5" ry="1" fill="rgba(255,220,180,0.25)" />

              {/* === FERRULE === */}
              {/* Ferrule body — tapered cylinder */}
              <path d="M50 8 L64 9 L64 25 L50 26 Z" fill="url(#metal)" />

              {/* Ferrule rim rings */}
              <line x1="50" y1="8" x2="50" y2="26" stroke="#aaa" strokeWidth="1.2" />
              <line x1="52" y1="7.5" x2="52" y2="26.5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
              <line x1="64" y1="9" x2="64" y2="25" stroke="#999" strokeWidth="0.8" />

              {/* Ferrule highlight stripe */}
              <rect x="51" y="10" width="12" height="2" rx="1" fill="rgba(255,255,255,0.35)" />
              <rect x="51" y="14" width="12" height="0.8" rx="0.4" fill="rgba(255,255,255,0.15)" />

              {/* Ferrule crimp lines */}
              <line x1="55" y1="8" x2="55" y2="26" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
              <line x1="59" y1="8.5" x2="59" y2="25.5" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />

              {/* === BRISTLES === */}
              {/* Bristle base shape */}
              <path d="M8 12 L52 8.5 L52 25.5 L8 22 Q2 17 8 12 Z" fill="url(#bristleGrad)" opacity="0.9" />

              {/* Individual bristle strands */}
              <g stroke="#c49520" strokeWidth="0.7" strokeLinecap="round" opacity="0.8">
                <line x1="10" y1="13" x2="52" y2="9.5" />
                <line x1="9" y1="14.5" x2="52" y2="11" />
                <line x1="8.5" y1="16" x2="52" y2="13" />
                <line x1="8" y1="17.5" x2="52" y2="15" />
                <line x1="8" y1="19" x2="52" y2="17" />
                <line x1="8.5" y1="20.5" x2="52" y2="19" />
                <line x1="9" y1="21.5" x2="52" y2="21" />
                <line x1="10" y1="22.5" x2="52" y2="23" />
              </g>

              {/* Paint-tipped bristles — pink paint at the tip */}
              <g opacity="0.95">
                <ellipse cx="6" cy="16" rx="5" ry="6" fill="#f02d8b" />
                <ellipse cx="5" cy="15.5" rx="3.5" ry="4" fill="#ff5ca8" opacity="0.7" />
                {/* Paint highlight */}
                <ellipse cx="4" cy="14.5" rx="1.5" ry="2" fill="rgba(255,255,255,0.35)" />
              </g>

              {/* Paint drip hanging from bristles */}
              <g style={{ animation: 'paintDrip 2.5s 0.8s ease-in forwards', opacity: 0 }}>
                <path d="M4 22 Q3 26 4 29 Q4.5 31 5 29 Q6 26 5 22" fill="url(#paintDrip)" />
                <ellipse cx="4.5" cy="30" rx="2" ry="1.5" fill="#f02d8b" style={{ animation: 'paintDrop 2.5s 2.2s ease-in forwards', opacity: 0 }} />
              </g>
            </svg>
          </div>

          {/* Color dots */}
          <div className="absolute rounded-full" style={{ width: 10, height: 10, background: '#f02d8b', left: '20%', top: '31%', animation: 'pop .4s 1.3s forwards', opacity: 0 }} />
          <div className="absolute rounded-full" style={{ width: 7, height: 7, background: '#f5c518', right: '18%', top: '60%', animation: 'pop .4s 1.55s forwards', opacity: 0 }} />
          <div className="absolute rounded-full" style={{ width: 6, height: 6, background: '#159f9b', right: '11%', top: '29%', animation: 'pop .4s 1.8s forwards', opacity: 0 }} />

          {/* Loading text */}
          <div
            className="absolute flex items-center"
            style={{
              left: '50%', top: '80%', transform: 'translateX(-50%)',
              gap: 10, color: '#555', font: '600 10px Arial',
              letterSpacing: 4, textTransform: 'uppercase', whiteSpace: 'nowrap',
              animation: 'fade .7s 1s both',
            }}
          >
            Loading{' '}
            <span className="flex gap-[3px]">
              <i className="inline-block rounded-full" style={{ width: 4, height: 4, background: '#159f9b', animation: 'blink 1s infinite' }} />
              <i className="inline-block rounded-full" style={{ width: 4, height: 4, background: '#159f9b', animation: 'blink 1s infinite 0.16s' }} />
              <i className="inline-block rounded-full" style={{ width: 4, height: 4, background: '#159f9b', animation: 'blink 1s infinite 0.32s' }} />
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="absolute overflow-hidden rounded-full"
            style={{
              left: '50%', top: '95%', transform: 'translateX(-50%)',
              width: 260, height: 3, background: 'rgba(32,35,33,.09)',
              animation: 'fade .5s .9s both',
            }}
          >
            <div style={{ height: '100%', width: 0, background: 'linear-gradient(90deg,#159f9b,#f5c518,#f02d8b)', animation: 'progress 2.85s .25s cubic-bezier(.65,0,.35,1) forwards' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0 } }
        @keyframes brush { 0% { left: -3% } 88% { left: 91% } 100% { left: 104% } }
        @keyframes pop { 0% { opacity:0; transform:scale(.1) } 70% { opacity:1; transform:scale(1.45) } 100% { opacity:1; transform:scale(1) } }
        @keyframes fade { from { opacity:0 } to { opacity:1 } }
        @keyframes progress { to { width:100% } }
        @keyframes blink { 0%,100% { opacity:.2; transform:translateY(0) } 50% { opacity:1; transform:translateY(-3px) } }

        @keyframes b1 { 50% { transform:translate(40px,30px) } }
        @keyframes b2 { 50% { transform:translate(-35px,-25px) } }
        @keyframes paintDrip { 0% { opacity:0 } 30% { opacity:0.8 } 100% { opacity:0.9 } }
        @keyframes paintDrop { 0% { opacity:0; transform:translateY(0) scale(0.5) } 50% { opacity:1; transform:translateY(4px) scale(1) } 100% { opacity:0; transform:translateY(12px) scale(0.3) } }
        .path { fill:none; stroke:#159f9b; stroke-width:14; stroke-linecap:round; stroke-dasharray:1100; stroke-dashoffset:1100; animation:draw 2.15s .25s cubic-bezier(.65,0,.35,1) forwards }
        .path2 { fill:none; stroke:#f02d8b; stroke-width:4; stroke-linecap:round; stroke-dasharray:900; stroke-dashoffset:900; animation:draw 1.65s .65s ease-out forwards }
        .path3 { fill:none; stroke:#f5c518; stroke-width:3; stroke-linecap:round; stroke-dasharray:650; stroke-dashoffset:650; animation:draw 1.25s 1s ease-out forwards }
      `}</style>
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────────── */
export default function App() {
  const handleOpenEnquiry = () => {};
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}

      <MotionConfig reducedMotion="user">
      <Layout>
        <div
          style={{
            opacity: showSplash ? 0 : 1,
            transform: showSplash ? 'scale(0.98)' : 'none',
            transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/courses" element={<ClassesPage />} />
                  <Route path="/courses/kids" element={<KidsCoursesPage />} />
                  <Route path="/courses/teens" element={<TeensCoursesPage />} />
                  <Route path="/courses/adults" element={<AdultsCoursesPage />} />
                  <Route path="/courses/calligraphy" element={<CalligraphyCoursesPage />} />
                  <Route path="/courses/handwriting" element={<HandwritingCoursesPage />} />
                  <Route path="/courses/:slug" element={<ClassDetail />} />
                  <Route path="/programs" element={<ProgramsPage onOpenEnquiry={handleOpenEnquiry} />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/career" element={<CareerPage />} />
                  <Route path="/gift-card" element={<GiftCardPage />} />
                  <Route path="/events-workshops" element={<EventsWorkshopsPage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </div>
      </Layout>
      </MotionConfig>
    </>
  );
}
