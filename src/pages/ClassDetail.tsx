import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Clock, Award, ChevronLeft } from 'lucide-react';
import { classes } from '../data/classes';
import { openWhatsApp } from '../lib/whatsapp';
import SEO from '../components/SEO';

export default function ClassDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cls = classes.find(c => c.slug === slug);

  if (!cls) return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-32">
      <div className="text-center">
        <h1 className="font-display text-3xl text-espresso mb-4">Class Not Found</h1>
        <Link to="/courses" className="text-terracotta text-sm hover:underline">Back to Courses</Link>
      </div>
    </div>
  );

  const heroImage = cls.image;

  return (
    <>
      <SEO
        title={`${cls.name} | TVASTRA Art Studio`}
        description={cls.shortDescription}
        canonical={`/courses/${cls.slug}`}
        keywords={`${cls.name} Thane, ${cls.name} class, art class`}
      />
      {/* Hero with class image */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/20" />
        <div className="relative z-10 container-main pb-12 md:pb-16 pt-32 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/courses" className="inline-flex items-center gap-1.5 text-xs text-charcoal-warm mb-4 hover:text-terracotta transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" /> All Courses
            </Link>
            <div className="flex flex-wrap gap-2 mb-3">
              {cls.ageGroups.map(g => (
                <span key={g} className="text-[10px] tracking-wider uppercase text-terracotta bg-cream/80 backdrop-blur-sm px-2.5 py-1 rounded-full">{g}</span>
              ))}
            </div>
            <h1 className="font-display text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-[#202321] leading-[0.85] tracking-[-0.04em] mb-3">{cls.name}</h1>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1.5 text-xs text-charcoal-warm"><Clock className="w-3.5 h-3.5 text-terracotta" />{cls.duration}</span>
              <span className="flex items-center gap-1.5 text-xs text-charcoal-warm"><Award className="w-3.5 h-3.5 text-terracotta" />{cls.level}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-[#159F9B]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]">
                    About the Class
                  </span>
                </div>
                <p className="text-black text-[14px] leading-relaxed">{cls.fullDescription}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <h2 className="font-display text-[1.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.045em] text-[#202321] mb-5">What You Will Explore</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cls.skills.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-ivory rounded-xl border border-espresso/[0.06]">
                      <Check className="w-4 h-4 text-sage flex-shrink-0" /><span className="text-sm text-espresso">{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <h2 className="font-display text-[1.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.045em] text-[#202321] mb-4">What Students Create</h2>
                <div className="flex flex-wrap gap-2">
                  {cls.projects.map((p, i) => (
                    <span key={i} className="px-3 py-1.5 bg-parchment rounded-full text-xs text-charcoal-warm">{p}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }}>
                <h2 className="font-display text-[1.9rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.9] tracking-[-0.045em] text-[#202321] mb-5">Common Questions</h2>
                <div className="space-y-3">
                  {cls.faqs.map((faq, i) => (
                    <div key={i} className="bg-ivory p-5 rounded-xl border border-espresso/[0.06]">
                      <h4 className="text-sm font-medium text-espresso mb-2">{faq.question}</h4>
                      <p className="text-sm text-charcoal-warm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.15 }}
                  className="bg-ivory p-6 rounded-2xl border border-espresso/[0.06]">
                  <h3 className="font-display text-xl text-espresso mb-2">Interested in this class?</h3>
                  <p className="text-charcoal-warm text-sm mb-5">Send us an enquiry and we will get back to you with details.</p>
                  <button onClick={() => openWhatsApp(cls.name)}
                    className="w-full py-3 rounded-full bg-espresso text-cream text-sm font-medium hover:bg-espresso-light transition-colors">
                    Send an Enquiry
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
