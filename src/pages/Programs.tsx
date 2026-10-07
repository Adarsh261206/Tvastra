import { useState } from 'react';
import { motion } from 'framer-motion';
import ProgramCard from '../components/cards/ProgramCard';
import { programs } from '../data/programs';
import SEO from '../components/SEO';

interface ProgramsPageProps {
  onOpenEnquiry: (program?: string) => void;
}

export default function ProgramsPage({ onOpenEnquiry }: ProgramsPageProps) {
  const [activeTab, setActiveTab] = useState<'kids' | 'teens' | 'adults'>('kids');
  const tabs = [
    { id: 'kids' as const, label: 'Kids' },
    { id: 'teens' as const, label: 'Teens' },
    { id: 'adults' as const, label: 'Adults' },
  ];

  const active = programs.find(p => p.ageGroup === activeTab);

  return (
    <>
      <SEO
        title="Creative Programs for Kids, Teens & Adults | TVASTRA"
        description="TVASTRA Art Studio offers creative learning programs for every age group — kids, teens and adults. Art classes, drawing, painting and more in Thane."
        canonical="/programs"
        keywords="art programs Thane, kids art programs, teen art classes, adult creative programs, art education"
      />
      {/* Hero with background */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581335167515-6c5f4b67ad8b?w=1600&h=900&fit=crop&q=90)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />
        <div className="relative z-10 container-main pb-12 md:pb-16 pt-32 md:pt-40 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#159F9B]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]">
              Programs
            </span>
          </div>
          <h1 className="font-display text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-[#202321] leading-[0.85] tracking-[-0.04em] mb-3">Creative Learning For Every Age.</h1>
          <p className="text-black text-[14px] max-w-lg mx-auto leading-relaxed">Programs thoughtfully designed for every stage of your creative journey.</p>
        </div>
      </section>

      <section className="section-gap bg-cream">
        <div className="container-main">
          <div className="flex justify-center gap-3 mb-12">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-espresso text-cream' : 'bg-ivory text-charcoal-warm border border-espresso/[0.08] hover:border-espresso/15'}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {active && (
            <motion.div key={active.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto">
              <ProgramCard program={active} onEnquire={(t) => onOpenEnquiry(t)} />
            </motion.div>
          )}

          <div className="mt-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#159F9B]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]">
                All Programs
              </span>
            </div>
            <h2 className="font-display text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.85] tracking-[-0.045em] text-[#202321] mb-10">Explore programs across all age groups.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((p, i) => (
                <ProgramCard key={p.id} program={p} delay={i * 0.1} onEnquire={(t) => onOpenEnquiry(t)} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
