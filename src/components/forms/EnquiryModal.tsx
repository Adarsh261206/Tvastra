import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { sendEnquiryEmail } from '../../lib/email';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultProgram = '' }: EnquiryModalProps) {
  const [form, setForm] = useState({
    fullName: '', email: '', ageGroup: '', program: defaultProgram
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm(f => ({ ...f, program: defaultProgram }));
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, defaultProgram]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.ageGroup) e.ageGroup = 'Required';
    if (!form.program) e.program = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSending(true);
      const success = await sendEnquiryEmail({
        name: form.fullName,
        email: form.email,
        ageGroup: form.ageGroup,
        program: form.program,
      });
      setSending(false);
      if (success) {
        handleClose();
      } else {
        alert('Failed to send enquiry. Please try again.');
      }
    }
  };

  const handleClose = () => {
    setErrors({});
    setForm({ fullName: '', email: '', ageGroup: '', program: defaultProgram });
    setSending(false);
    onClose();
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-sand bg-ivory text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all placeholder:text-sand-warm';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose}>
          <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" />
          <motion.div
            className="relative bg-cream rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={handleClose} className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-parchment transition-colors" aria-label="Close">
              <X size={20} className="text-espresso" />
            </button>

            <div className="p-8">
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-terracotta font-medium mb-2">Quick Enquiry</p>
                <h3 className="font-display text-2xl text-espresso">Get In Touch</h3>
                <p className="text-charcoal-warm text-sm mt-2">Fill in the details and we'll get back to you via email.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-charcoal-warm mb-1 block">Your Name *</label>
                  <input type="text" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} className={inputClass} placeholder="Your name" />
                  {errors.fullName && <p className="text-xs text-terracotta mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="text-xs text-charcoal-warm mb-1 block">Email *</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-terracotta mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs text-charcoal-warm mb-1 block">Age Group *</label>
                  <select value={form.ageGroup} onChange={e => setForm({ ...form, ageGroup: e.target.value })} className={inputClass}>
                    <option value="">Select age group</option>
                    <option value="Kids (5-12 years)">Kids (5-12 years)</option>
                    <option value="Teens (13-17 years)">Teens (13-17 years)</option>
                    <option value="Adults (18+ years)">Adults (18+ years)</option>
                  </select>
                  {errors.ageGroup && <p className="text-xs text-terracotta mt-1">{errors.ageGroup}</p>}
                </div>
                <div>
                  <label className="text-xs text-charcoal-warm mb-1 block">Interested Program *</label>
                  <select value={form.program} onChange={e => setForm({ ...form, program: e.target.value })} className={inputClass}>
                    <option value="">Select program</option>
                    <option value="Drawing & Sketching">Drawing & Sketching</option>
                    <option value="Painting">Painting</option>
                    <option value="Calligraphy">Calligraphy</option>
                    <option value="Handwriting">Handwriting</option>
                    <option value="Traditional Art">Traditional Art</option>
                    <option value="Modern Art">Modern Art</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.program && <p className="text-xs text-terracotta mt-1">{errors.program}</p>}
                </div>
                <button type="submit" disabled={sending} className="w-full py-3.5 rounded-full bg-[#159F9B] text-white text-sm font-medium shadow-[0_4px_16px_rgba(21,159,155,0.25)] hover:shadow-[0_6px_24px_rgba(21,159,155,0.35)] transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
