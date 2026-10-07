export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#FAF8F3]">
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-28"
        style={{
          backgroundImage:
            'radial-gradient(rgba(32,35,33,.12) .6px, transparent .6px)',
          backgroundSize: '8px 8px',
        }}
      />

      {/* Floating blobs */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '42vw',
          height: '42vw',
          left: '-24vw',
          top: '-24vw',
          background: '#159f9b',
          opacity: 0.07,
          filter: 'blur(2px)',
          animation: 'b1 9s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '35vw',
          height: '35vw',
          right: '-19vw',
          bottom: '-20vw',
          background: '#f02d8b',
          opacity: 0.06,
          filter: 'blur(2px)',
          animation: 'b2 11s ease-in-out infinite',
        }}
      />

      <div className="relative" style={{ width: 'min(900px, 92vw)', height: 330 }}>
        {/* Rotating ring */}
        <div
          className="absolute"
          style={{
            left: '50%',
            top: '38%',
            width: 175,
            height: 175,
            border: '1px solid rgba(21,159,155,.18)',
            borderRadius: '50%',
            transform: 'translate(-50%,-50%)',
            animation: 'ring 8s linear infinite',
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              inset: 18,
              border: '1px dashed rgba(240,45,139,.16)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              inset: -18,
              border: '1px solid rgba(245,197,24,.10)',
            }}
          />
        </div>

        {/* Satellite dot */}
        <div
          className="absolute"
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#f02d8b',
            left: '50%',
            top: '38%',
            transformOrigin: '0 0',
            animation: 'orbit 7s linear infinite',
          }}
        />

        {/* SVG paint strokes */}
        <svg
          viewBox="0 0 900 180"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            className="path"
            d="M20 90 C130 35 215 115 330 70 S520 35 645 88 S785 110 880 55"
          />
          <path
            className="path2"
            d="M30 93 C145 45 220 108 340 74 S525 42 650 92 S790 105 875 59"
          />
          <path
            className="path3"
            d="M45 96 C155 55 230 112 350 78 S530 50 655 97 S795 110 865 65"
          />
        </svg>

        {/* Paintbrush */}
        <div
          className="absolute"
          style={{
            left: '-3%',
            top: '43%',
            width: 132,
            height: 27,
            transform: 'rotate(-11deg)',
            animation: 'brush 2.5s .1s cubic-bezier(.12,.82,.18,1) forwards',
            filter: 'drop-shadow(0 8px 7px rgba(0,0,0,.15))',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 1,
              width: 50,
              height: 25,
              background: 'linear-gradient(135deg,#f02d8b,#ff93c4)',
              clipPath: 'polygon(0 50%,100% 0,100% 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 45,
              top: 3,
              width: 25,
              height: 21,
              borderRadius: 4,
              background: 'linear-gradient(90deg,#888,#fff,#999)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 68,
              top: 7,
              width: 64,
              height: 13,
              borderRadius: 10,
              background: 'linear-gradient(90deg,#713511,#c27b35,#713511)',
            }}
          />
        </div>

        {/* Color dots */}
        <div
          className="absolute rounded-full"
          style={{
            width: 10,
            height: 10,
            background: '#f02d8b',
            left: '20%',
            top: '31%',
            animation: 'pop .4s 1.3s forwards',
            opacity: 0,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 7,
            height: 7,
            background: '#f5c518',
            right: '18%',
            top: '60%',
            animation: 'pop .4s 1.55s forwards',
            opacity: 0,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            background: '#159f9b',
            right: '11%',
            top: '29%',
            animation: 'pop .4s 1.8s forwards',
            opacity: 0,
          }}
        />

        {/* Loading text */}
        <div
          className="absolute flex items-center"
          style={{
            left: '50%',
            top: '76%',
            transform: 'translateX(-50%)',
            gap: 10,
            color: '#555',
            font: '600 10px Arial',
            letterSpacing: 4,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            animation: 'fade .7s 1s both',
          }}
        >
          Loading{' '}
          <span className="flex gap-[3px]">
            <i
              className="inline-block rounded-full"
              style={{
                width: 4,
                height: 4,
                background: '#159f9b',
                animation: 'blink 1s infinite',
              }}
            />
            <i
              className="inline-block rounded-full"
              style={{
                width: 4,
                height: 4,
                background: '#159f9b',
                animation: 'blink 1s infinite 0.16s',
              }}
            />
            <i
              className="inline-block rounded-full"
              style={{
                width: 4,
                height: 4,
                background: '#159f9b',
                animation: 'blink 1s infinite 0.32s',
              }}
            />
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="absolute overflow-hidden rounded-full"
          style={{
            left: '50%',
            top: '87%',
            transform: 'translateX(-50%)',
            width: 260,
            height: 3,
            background: 'rgba(32,35,33,.09)',
            animation: 'fade .5s .9s both',
          }}
        >
          <div
            style={{
              height: '100%',
              width: 0,
              background: 'linear-gradient(90deg,#159f9b,#f5c518,#f02d8b)',
              animation: 'progress 2.55s .25s cubic-bezier(.65,0,.35,1) forwards',
            }}
          />
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0 } }
        @keyframes brush { 0% { left: -3% } 88% { left: 91% } 100% { left: 104% } }
        @keyframes pop { 0% { opacity:0; transform:scale(.1) } 70% { opacity:1; transform:scale(1.45) } 100% { opacity:1; transform:scale(1) } }
        @keyframes fade { from { opacity:0 } to { opacity:1 } }
        @keyframes progress { to { width:100% } }
        @keyframes blink { 0%,100% { opacity:.2; transform:translateY(0) } 50% { opacity:1; transform:translateY(-3px) } }
        @keyframes ring { to { transform:translate(-50%,-50%) rotate(360deg) } }
        @keyframes orbit { from { transform:rotate(0deg) translateX(112px) } to { transform:rotate(360deg) translateX(112px) } }
        @keyframes b1 { 50% { transform:translate(40px,30px) } }
        @keyframes b2 { 50% { transform:translate(-35px,-25px) } }
        .path { fill:none; stroke:#159f9b; stroke-width:14; stroke-linecap:round; stroke-dasharray:1100; stroke-dashoffset:1100; animation:draw 2.15s .25s cubic-bezier(.65,0,.35,1) forwards }
        .path2 { fill:none; stroke:#f02d8b; stroke-width:4; stroke-linecap:round; stroke-dasharray:900; stroke-dashoffset:900; animation:draw 1.65s .65s ease-out forwards }
        .path3 { fill:none; stroke:#f5c518; stroke-width:3; stroke-linecap:round; stroke-dasharray:650; stroke-dashoffset:650; animation:draw 1.25s 1s ease-out forwards }
        @media(max-width:600px) {
          .path { stroke-width:10 }
          .path2 { stroke-width:3 }
          .path3 { stroke-width:2 }
        }
      `}</style>
    </div>
  );
}
