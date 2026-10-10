import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Check, ChevronLeft, Clock, Minus, Plus } from 'lucide-react';
import { classes } from '../data/classes';
import { openWhatsApp } from '../lib/whatsapp';
import SEO from '../components/SEO';

export default function ClassDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cls = classes.find(c => c.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!cls) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F3] pt-28">
      <div className="text-center px-6">
        <h1 className="font-display text-[2.5rem] tracking-[-0.04em] text-[#202321] mb-4">Class Not Found</h1>
        <p className="text-[14px] text-[#202321]/60 mb-8">The class you are looking for does not exist.</p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 rounded-full bg-[#159F9B] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#128B88]"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Courses
        </Link>
      </div>
    </div>
  );

  const heroImage = cls.image;
  const showDuration = cls.duration !== '[Class Schedule]';

  return (
    <>
      <SEO
        title={`${cls.name} | TVASTRA Art Studio`}
        description={cls.shortDescription}
        canonical={`/courses/${cls.slug}`}
        keywords={`${cls.name} Thane, ${cls.name} class, art class`}
      />
      {/* Hero with class image */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden sm:min-h-[60vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3]/95 via-[#FAF8F3]/65 to-[#FAF8F3]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3]/80 via-[#FAF8F3]/20 to-transparent sm:from-[#FAF8F3]/70 sm:via-transparent" />
        <div className="relative z-10 container-main w-full pb-12 md:pb-16 pt-28 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/courses" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#202321]/60 mb-5 hover:text-[#D62D78] transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" /> All Courses
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {cls.ageGroups.map(g => (
                <span key={g} className="rounded-full border border-[#D62D78]/25 bg-white/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D62D78] backdrop-blur-sm">{g}</span>
              ))}
            </div>
            <h1 className="font-display text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-[#202321] leading-[0.9] tracking-[-0.04em] mb-4 max-w-4xl">{cls.name}</h1>
            <p className="max-w-2xl text-[14px] md:text-[15px] leading-[1.8] text-[#202321]/70 mb-5">{cls.shortDescription}</p>
            <div className="flex flex-wrap gap-2.5">
              {showDuration && (
                <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#202321]/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#202321]/70">
                  <Clock className="w-4 h-4 text-[#159F9B]" />{cls.duration}
                </span>
              )}
              <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#202321]/[0.05] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#202321]/70">
                <Award className="w-4 h-4 text-[#159F9B]" />{cls.level}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-[#F7F3EA]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[2px] w-10 bg-[#159F9B]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#159F9B]">
                    About the Class
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-[26px] border border-[#202321]/[0.07]">
                  {cls.image && (
                    <img
                      src={cls.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3]/95 via-[#FAF8F3]/92 to-[#FAF8F3]/78 sm:bg-gradient-to-r sm:from-[#FAF8F3]/96 sm:via-[#FAF8F3]/90 sm:to-[#FAF8F3]/55" />
                  <p className="relative p-6 text-[#202321]/85 text-[15px] leading-[1.85] whitespace-pre-line md:p-8">{cls.fullDescription}</p>
                </div>
              </motion.div>

              {cls.skills.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[2px] w-10 bg-[#D62D78]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#D62D78]">
                    Skills & Techniques
                  </span>
                </div>
                <h2 className="font-display text-[1.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.045em] text-[#202321] mb-6">What You Will Explore</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cls.skills.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl border border-[#202321]/[0.07] bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#159F9B]/30 hover:shadow-[0_12px_30px_rgba(32,35,33,0.07)]">
                      <span className="font-display text-[1.1rem] leading-none text-[#159F9B]/40">{String(i + 1).padStart(2, '0')}</span>
                      <Check className="w-4 h-4 text-[#159F9B] flex-shrink-0" />
                      <span className="text-[14px] font-medium text-[#202321]">{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              )}

              {cls.projects.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[2px] w-10 bg-[#F5B82E]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#159F9B]">
                    Take Home
                  </span>
                </div>
                <h2 className="font-display text-[1.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.045em] text-[#202321] mb-5">What Students Create</h2>
                <div className="flex flex-wrap gap-2">
                  {cls.projects.map((p, i) => (
                    <span key={i} className="rounded-full border border-[#202321]/10 bg-[#FAF8F3] px-4 py-2.5 text-[12px] font-semibold text-[#202321]/70">{p}</span>
                  ))}
                </div>
              </motion.div>
              )}

              {cls.faqs.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[2px] w-10 bg-[#159F9B]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#159F9B]">
                    Good To Know
                  </span>
                </div>
                <h2 className="font-display text-[1.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.045em] text-[#202321] mb-5">Common Questions</h2>
                <div className="space-y-3">
                  {cls.faqs.map((faq, i) => {
                    const open = openFaq === i;
                    return (
                      <div
                        key={i}
                        className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${open ? 'border-[#159F9B]/30 bg-white/80' : 'border-[#202321]/[0.07] bg-white/60'}`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(open ? null : i)}
                          aria-expanded={open}
                          className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span className="text-[14px] font-bold text-[#202321]">{faq.question}</span>
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${open ? 'bg-[#159F9B] text-white' : 'bg-[#202321]/[0.06] text-[#202321]/60'}`}>
                            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <p className="px-5 pb-5 text-[14px] leading-[1.8] text-[#202321]/70">{faq.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }}
                  className="rounded-[28px] border border-[#202321]/[0.07] bg-white/75 p-7 shadow-[0_20px_60px_rgba(32,35,33,0.08)] backdrop-blur-sm md:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[#D62D78]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D62D78]">
                      Enquire
                    </span>
                  </div>
                  <h3 className="font-display text-[1.75rem] leading-[1] tracking-[-0.03em] text-[#202321] mb-3">Interested in this class?</h3>
                  <p className="text-[#202321]/65 text-[14px] leading-[1.75] mb-6">Send us an enquiry and we will get back to you with batch details.</p>
                  <button onClick={() => openWhatsApp(cls.name)}
                    className="group inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-full bg-[#D62D78] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(214,45,120,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#159F9B]">
                    Send an Enquiry
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
