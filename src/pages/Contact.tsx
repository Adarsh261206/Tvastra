import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Phone,
  Globe,
  Mail,
} from 'lucide-react';

import { sendEnquiryEmail } from '../lib/email';
import SEO from '../components/SEO';
import { Field, SelectField } from '../components/forms/ContactFormComponents';

const enquiryTypes = [
  'Courses',
  'Admissions',
  'Corporate Events',
  'Paint Parties',
  'Gift Cards',
  'Career',
  'General',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const success = await sendEnquiryEmail(form);
    setSending(false);
    if (success) {
      setSubmitted(true);
    } else {
      alert('Failed to send enquiry. Please try again.');
    }
  };

  return (
    <main className="bg-[#FAF8F3] text-[#202321] overflow-hidden">
      <SEO
        title="Contact TVASTRA Art Studio | Enquire & Visit Us"
        description="Get in touch with TVASTRA Art Studio Thane. Enquire about art classes, workshops and creative programs. Visit our studio or send a message."
        canonical="/contact"
        keywords="contact TVASTRA, art studio Thane contact, art class enquiry, visit art studio"
      />

      {/* Contact Info + Form */}
      <section className="container-main pb-20 pt-28 md:pb-28 md:pt-36 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT — Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-[#159F9B]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]">
                  Contact Information
                </span>
              </div>

              <div className="space-y-8">
                {/* Studio */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#159F9B] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-black">Studio</span>
                    <p className="text-[14px] text-black mt-2 leading-relaxed">
                      TVASTRA, A Wing-104, Vardhaman Vatika, Opp. Kolshet Dmart, Kailash Nagar, Thane West – 400607
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-[#159F9B] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-black">Phone</span>
                    <p className="text-[14px] text-black mt-2">
                      +91 82914 18107
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-[#159F9B] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-black">Email</span>
                    <a
                      href="mailto:Suvija@tvastra.info"
                      className="mt-2 block text-[14px] text-black transition-colors hover:text-[#159F9B]"
                    >
                      Suvija@tvastra.info
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <Globe className="w-5 h-5 text-[#159F9B] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-black">Website</span>
                    <p className="text-[14px] text-black mt-2">
                      tvastra.info
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock3 className="w-5 h-5 text-[#159F9B] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-black">Studio Hours</span>
                    <p className="text-[14px] text-black mt-2">Monday – Saturday</p>
                    <p className="text-[14px] text-black">10:30 AM – 6:30 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-10"
            >
              <div className="bg-[#FCFAF5] rounded-[2rem] p-7 md:p-10 lg:p-12 shadow-[0_25px_80px_rgba(32,35,33,0.08)] border border-black/[0.07]">
                {submitted ? (
                  <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#159F9B]/10 flex items-center justify-center text-[#159F9B] mb-7">
                      <Check className="w-8 h-8" />
                    </div>
                    <h2 className="font-display text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[0.9] tracking-[-0.04em] text-[#202321]">
                      Thank you.
                    </h2>
                    <p className="text-[14px] text-black leading-relaxed max-w-sm mt-5">
                      We have received your enquiry. We will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[11px] uppercase tracking-[0.18em] text-[#159F9B] hover:text-[#118E8A] transition"
                    >
                      Send another enquiry →
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="h-px w-10 bg-[#159F9B]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#159F9B]">
                          General Enquiry
                        </span>
                      </div>
                      <h2 className="font-display text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[0.9] tracking-[-0.045em] text-[#202321]">
                        Send us a
                        <br />
                        <span className="italic text-[#D62D78]">message.</span>
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-7">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                        <SelectField label="Enquiry Type" name="enquiryType" value={form.enquiryType} onChange={handleChange} options={enquiryTypes} />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-[0.2em] text-black mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full bg-transparent border-0 border-b border-black/15 px-0 py-3 text-[14px] text-black outline-none resize-none placeholder:text-black/40 focus:border-[#159F9B] transition"
                        />
                      </div>

                      <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-5">
                        <button
                          type="submit"
                          disabled={sending}
                          className="group inline-flex items-center justify-center gap-4 bg-[#159F9B] text-white rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.16em] hover:bg-[#118E8A] transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {sending ? 'Sending...' : 'Send Enquiry'}
                          <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </button>
                        <span className="text-[12px] text-black">
                          We will respond within 24 hours.
                        </span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
