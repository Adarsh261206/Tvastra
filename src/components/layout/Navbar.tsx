import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  Gift,
  Home,
  Image,
  Mail,
  Menu,
  Palette,
  UserRound,
  UsersRound,
  X,
  type LucideIcon,
} from 'lucide-react';

import { openWhatsApp } from '../../lib/whatsapp';
import TvasthraLogo from '../ui/TvasthraLogo';

type NavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  children?: Array<{ label: string; to: string }>;
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: UserRound },
  {
    label: 'Courses',
    to: '/courses',
    icon: BookOpen,
    children: [
      { label: 'Kids Courses', to: '/courses/kids' },
      { label: 'Teens Courses', to: '/courses/teens' },
      { label: 'Adults Courses', to: '/courses/adults' },
      { label: 'Calligraphy Courses', to: '/courses/calligraphy' },
      { label: 'Handwriting Improvement Course', to: '/courses/handwriting' },
    ],
  },
  { label: 'Events and Workshops', to: '/events-workshops', icon: Palette },
  { label: 'Gallery', to: '/gallery', icon: Image },
  { label: 'Contact', to: '/contact', icon: Mail },
  { label: 'Career', to: '/career', icon: Briefcase },
  { label: 'Gift Card', to: '/gift-card', icon: Gift },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSub(null);
    setHovered(null);
  }, [location.pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSub(null);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP NAVBAR
      ========================================================= */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <nav
          className="
            relative mx-auto
            flex w-full max-w-[94rem]
            items-center
            rounded-full
            border border-white/30
            bg-white/50
            px-3
            py-1.5
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            backdrop-blur-md
            transition-all duration-500
            md:px-5
            md:py-[7px]
            lg:px-6
          "
        >
          <div className="flex w-full items-center">

            {/* =====================================================
                LOGO
            ===================================================== */}
            <NavLink
              to="/"
              className="
                z-20
                flex
                min-w-fit
                flex-shrink-0
                items-center
                gap-2.5
                px-1.5
              "
              aria-label="TVASTRA home"
            >
              <TvasthraLogo size={52} className="h-11 w-11 md:h-[52px] md:w-[52px]" />

              <div className="flex flex-col">
                <span
                  className="
                    text-[17px]
                    font-black
                    text-[#159F9B]
                    leading-tight
                    md:text-[19px]
                  "
                  style={{
                    fontFamily: "'Times New Roman', Georgia, serif",
                  }}
                >
                  TVASTRA
                </span>
                <span
                  className="
                    text-[7px]
                    font-semibold
                    tracking-[0.06em]
                    text-[#000000]
                    leading-tight
                    md:text-[8px]
                  "
                >
                  Wings to your Creativity
                </span>
              </div>
            </NavLink>

            {/* =====================================================
                CENTER NAVIGATION
            ===================================================== */}
            <ul
              className="
                mx-auto
                hidden
                items-center
                justify-center
                gap-0.5
                lg:flex
                xl:gap-1
              "
            >
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                      item.children && setHovered(item.label)
                    }
                    onMouseLeave={() =>
                      item.children && setHovered(null)
                    }
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setHovered(null)}
                      className={({ isActive }) =>
                        `
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        px-3
                        py-2.5
                        text-[13px]
                        font-extrabold
                        text-[#000000]
                        transition-all
                        duration-300
                        xl:px-4
                        xl:text-[14px]

                        ${
                          isActive
                            ? 'bg-[#FDE7F0] text-[#D62D78]'
                            : 'hover:bg-[#FDE7F0] hover:text-[#D62D78]'
                        }
                        `
                      }
                    >
                      <Icon
                        className="
                          h-[19px]
                          w-[19px]
                          flex-none
                          text-current
                          transition-colors
                          duration-300
                        "
                        strokeWidth={2.7}
                        aria-hidden="true"
                      />

                      <span>{item.label}</span>

                      {item.children && (
                        <ChevronDown
                          className={`
                            h-3.5
                            w-3.5
                            flex-none
                            text-current
                            transition-transform
                            duration-300
                            ${
                              hovered === item.label
                                ? 'rotate-180'
                                : ''
                            }
                          `}
                          strokeWidth={2.7}
                          aria-hidden="true"
                        />
                      )}
                    </NavLink>

                    {/* =================================================
                        CLASSES DROPDOWN
                    ================================================= */}
                    {item.children && (
                      <div
                        className={`
                          absolute
                          left-1/2
                          top-full
                          -translate-x-1/2
                          pt-3
                          transition-all
                          duration-200
                          ${
                            hovered === item.label
                              ? 'visible translate-y-0 opacity-100'
                              : 'pointer-events-none invisible translate-y-2 opacity-0'
                          }
                        `}
                      >
                        <div
                          className="
                            min-w-[15rem]
                            rounded-2xl
                            border
                            border-black/[0.08]
                            bg-white/95
                            p-2
                            shadow-[0_22px_55px_rgba(37,37,34,0.16)]
                            backdrop-blur-xl
                          "
                        >
                          {item.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              onClick={() => setHovered(null)}
                              className={({ isActive }) =>
                                `
                                block
                                rounded-xl
                                px-4
                                py-2.5
                                text-[13px]
                                font-bold
                                transition-colors
                                duration-200
                                ${
                                  isActive
                                    ? 'bg-[#FDE7F0] text-[#D62D78]'
                                    : 'text-[#000000] hover:bg-[#FDE7F0] hover:text-[#D62D78]'
                                }
                                `
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* =====================================================
                JOIN A CLASS
            ===================================================== */}
            <div className="z-20 ml-auto hidden flex-shrink-0 items-center gap-4 lg:flex">
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-[#159F9B]
                  px-5
                  text-[13px]
                  font-extrabold
                  text-white
                  shadow-[0_8px_24px_rgba(21,159,155,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#128F8B]
                  hover:shadow-[0_12px_30px_rgba(21,159,155,0.35)]
                  xl:px-7
                  xl:text-[14px]
                "
              >
                <UsersRound
                  className="h-[19px] w-[19px]"
                  strokeWidth={2.6}
                  aria-hidden="true"
                />

                <span>Join a Class</span>

                <span
                  className="
                    text-lg
                    leading-none
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>

            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="
                ml-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                text-[#000000]
                transition-colors
                hover:bg-[#FDE7F0]
                hover:text-[#D62D78]
                lg:hidden
              "
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu
                size={24}
                strokeWidth={2.5}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="
              fixed
              inset-0
              z-[60]
              flex
              flex-col
              bg-[#FCFAF5]
            "
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.38,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* MOBILE HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-black/[0.08]
                px-5
                py-4
              "
            >
              <NavLink
                to="/"
                onClick={closeMobile}
                className="flex items-center gap-2.5"
              >
                <TvasthraLogo size={44} />

                <div className="flex flex-col">
                  <span
                    className="
                      text-[18px]
                      font-black
                      text-[#159F9B]
                      leading-tight
                    "
                    style={{
                      fontFamily: "'Times New Roman', Georgia, serif",
                    }}
                  >
                    TVASTRA
                  </span>
                  <span
                    className="
                      text-[7px]
                      font-semibold
                      tracking-[0.06em]
                      text-[#000000]
                      leading-tight
                    "
                  >
                    Wings to your Creativity
                  </span>
                </div>
              </NavLink>

              <button
                type="button"
                onClick={closeMobile}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  text-[#000000]
                  transition-colors
                  hover:bg-[#FDE7F0]
                  hover:text-[#D62D78]
                "
                aria-label="Close menu"
              >
                <X
                  size={24}
                  strokeWidth={2.5}
                />
              </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const subMenuOpen =
                    mobileSub === item.label;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.05 * index,
                        duration: 0.28,
                      }}
                    >
                      {item.children ? (
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              setMobileSub(
                                subMenuOpen
                                  ? null
                                  : item.label
                              )
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              gap-3
                              rounded-2xl
                              px-4
                              py-3.5
                              text-left
                              text-[17px]
                              font-extrabold
                              transition-colors
                              ${
                                subMenuOpen
                                  ? 'bg-[#FDE7F0] text-[#D62D78]'
                                  : 'text-[#000000] hover:bg-[#FDE7F0] hover:text-[#D62D78]'
                              }
                            `}
                            aria-expanded={subMenuOpen}
                          >
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={2.7}
                              aria-hidden="true"
                            />

                            <span>{item.label}</span>

                            <ChevronDown
                              className={`
                                ml-auto
                                h-4
                                w-4
                                transition-transform
                                duration-300
                                ${
                                  subMenuOpen
                                    ? 'rotate-180'
                                    : ''
                                }
                              `}
                              strokeWidth={2.7}
                              aria-hidden="true"
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {subMenuOpen && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: 'auto',
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.22,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-1 py-2 pl-8">
                                  {item.children.map(
                                    (child) => (
                                      <NavLink
                                        key={child.to}
                                        to={child.to}
                                        onClick={closeMobile}
                                        className={({ isActive }) =>
                                          `
                                          block
                                          rounded-xl
                                          px-4
                                          py-3
                                          text-[14px]
                                          font-bold
                                          transition-colors
                                          ${
                                            isActive
                                              ? 'bg-[#FDE7F0] text-[#D62D78]'
                                              : 'text-[#000000] hover:bg-[#FDE7F0] hover:text-[#D62D78]'
                                          }
                                          `
                                        }
                                      >
                                        {child.label}
                                      </NavLink>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <NavLink
                          to={item.to}
                          end={item.to === '/'}
                          onClick={closeMobile}
                          className={({ isActive }) =>
                            `
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            px-4
                            py-3.5
                            text-[17px]
                            font-extrabold
                            transition-colors
                            ${
                              isActive
                                ? 'bg-[#FDE7F0] text-[#D62D78]'
                                : 'text-[#000000] hover:bg-[#FDE7F0] hover:text-[#D62D78]'
                            }
                            `
                          }
                        >
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={2.7}
                            aria-hidden="true"
                          />

                          <span>{item.label}</span>
                        </NavLink>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* MOBILE CTA */}
            <motion.div
              className="
                border-t
                border-black/[0.08]
                px-5
                pb-[calc(2rem+env(safe-area-inset-bottom))]
                pt-5
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
            >
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  openWhatsApp();
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-[#159F9B]
                  py-4
                  text-[14px]
                  font-extrabold
                  text-white
                  shadow-[0_8px_24px_rgba(21,159,155,0.25)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#128F8B]
                  hover:shadow-[0_12px_30px_rgba(21,159,155,0.35)]
                "
              >
                <UsersRound
                  className="h-5 w-5"
                  strokeWidth={2.6}
                  aria-hidden="true"
                />

                <span>Join a Class</span>

                <span
                  className="
                    text-lg
                    leading-none
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}