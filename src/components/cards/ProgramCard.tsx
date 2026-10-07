import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { openWhatsApp } from '../../lib/whatsapp';
import type { Program } from '../../data/programs';

interface ProgramCardProps {
  program: Program;
  delay?: number;
  onEnquire?: (title: string) => void;
}

export default function ProgramCard({ program, delay = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay }}
      className="bg-ivory rounded-3xl overflow-hidden border border-sand/20"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[10px] tracking-[0.2em] uppercase text-terracotta-light font-medium">{program.subtitle}</span>
          <h3 className="font-display text-2xl md:text-3xl text-cream mt-1">{program.title}</h3>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <p className="text-sm text-charcoal-warm leading-relaxed mb-6">{program.description}</p>
        <div className="mb-6">
          <span className="text-[10px] tracking-[0.15em] uppercase text-espresso font-medium block mb-3">Focus Areas</span>
          <div className="space-y-2">
            {program.focusAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-charcoal-warm">
                <Check className="w-3.5 h-3.5 text-sage flex-shrink-0" />{area}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <span className="text-[10px] tracking-[0.15em] uppercase text-espresso font-medium block mb-3">Art Forms</span>
          <div className="flex flex-wrap gap-2">
            {program.artForms.map((form, i) => (
              <span key={i} className="px-3 py-1 text-xs bg-parchment rounded-full text-charcoal-warm">{form}</span>
            ))}
          </div>
        </div>
        <button onClick={() => openWhatsApp(`${program.title} Programs`, program.ageGroup === 'kids' ? 'Kids (5-12 years)' : program.ageGroup === 'teens' ? 'Teens (13-17 years)' : 'Adults (18+ years)')} className="w-full py-3 rounded-full bg-espresso text-cream text-sm font-medium hover:bg-espresso-light transition-colors">
          Enquire About {program.ageGroup === 'kids' ? 'Kids' : program.ageGroup === 'teens' ? 'Teen' : 'Adult'} Programs
        </button>
      </div>
    </motion.div>
  );
}
