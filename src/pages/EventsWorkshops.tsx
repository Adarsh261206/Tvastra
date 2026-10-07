import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { Field, SelectField } from '../components/forms/ContactFormComponents';
import { sendEnquiryEmail } from '../lib/email';

const eventTypes = [
  'Corporate Event',
  'Paint Party',
  'Birthday Celebration',
  'Team Building',
  'Other',
];

export default function EventsWorkshops() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    preferredDate: '',
    participants: '',
    location: '',
    theme: '',
    budget: '',
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
    <>
      <SEO
        title="Events & Workshops | Corporate Events & Paint Parties at TVASTRA"
        description="Create, connect and celebrate with TVASTRA. Corporate events, paint parties and creative experiences for teams and special occasions in Thane."
        canonical="/events-workshops"
        keywords="corporate events Thane, paint party, team building art, creative events"
      />

      {/* =========================================================
          SECTION 01 — HERO
      ========================================================== */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#FAF8F3]">

        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#159F9B]/[0.055]" />

          <div className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#D62D78]/[0.045]" />

          <div className="absolute right-[12%] top-[25%] h-28 w-28 rotate-12 rounded-[28px] border border-[#D62D78]/20" />

          <div className="absolute left-[7%] top-[35%] h-16 w-16 -rotate-12 rounded-full border border-[#159F9B]/20" />

          <div className="absolute right-[22%] bottom-[14%] h-3 w-3 rounded-full bg-[#F5B82E]" />
        </div>

        <div className="relative z-10 container-main flex min-h-[72vh] items-end pb-16 pt-32 md:pb-24 md:pt-40">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >

            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#159F9B]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                Events & Workshops
              </span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

              <h1 className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.8] tracking-[-0.065em] text-[#202321]">
                Create.
                <br />
                <span className="text-[#159F9B]">Connect.</span>
                <br />
                <span className="text-[#D62D78]">Celebrate.</span>
              </h1>

              <div className="max-w-md lg:pb-2">

                <div className="mb-6 h-[2px] w-16 bg-[#F5B82E]" />

                <p className="font-display text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.05] tracking-[-0.035em] text-[#202321]">
                  Turn an event into a creative experience with TVASTRA.
                </p>

              </div>

            </div>

            <div className="mt-14 flex items-center gap-4">
              <span className="h-px w-20 bg-[#202321]/15" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#202321]/45">
                Creative experiences for teams & celebrations
              </span>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          SECTION 02 — CORPORATE + PAINT PARTIES
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F7F3EA] py-20 md:py-28">

        <div className="container-main">

          {/* Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center"
          >

            {/* Visual */}
            <div className="relative">

              <div className="relative aspect-[5/4] overflow-hidden rounded-[30px] bg-[#FAF8F3]">

                <img
                  src="/corporateworkshop.png"
                  alt="Corporate art workshop team holding their artworks"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-white/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#159F9B] backdrop-blur-sm">
                    01 / Corporate
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full border border-[#D62D78]/25" />

              </div>

              <div className="absolute -bottom-5 -left-5 -z-0 h-24 w-24 rounded-[25px] bg-[#159F9B]/10" />

            </div>


            {/* Content */}
            <div className="relative z-10">

              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#159F9B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#159F9B]">
                  Corporate Events
                </span>
              </div>

              <h2 className="max-w-xl font-display text-[clamp(2.8rem,5vw,5rem)] leading-[0.83] tracking-[-0.055em] text-[#202321]">
                Bring Creativity
                <br />
                <span className="text-[#159F9B]">
                  to Your Team
                </span>
              </h2>

              <div className="my-8 h-[2px] w-16 bg-[#D62D78]" />

              <p className="max-w-xl text-[15px] leading-[1.85] text-[#202321]/75">
                Give your team an opportunity to step away from routine and
                connect through creativity. TVASTRA can curate engaging art
                experiences for corporate teams, employee engagement
                programmes, celebrations and special events.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="#enquiry"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#159F9B] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(21,159,155,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#118E8A]"
                >
                  Plan a Corporate Event

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-3 rounded-full border border-[#202321]/15 bg-white/50 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#202321] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D62D78]/40 hover:bg-white"
                >
                  Send an Enquiry
                </a>

              </div>

            </div>

          </motion.div>


          {/* Divider */}
          <div className="my-20 h-px bg-[#202321]/10 md:my-28" />


          {/* Paint Party */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center"
          >

            {/* Content */}
            <div className="order-2 lg:order-1">

              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#D62D78]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                  Paint Parties
                </span>
              </div>

              <h2 className="max-w-xl font-display text-[clamp(2.8rem,5vw,5rem)] leading-[0.83] tracking-[-0.055em] text-[#202321]">
                Paint.
                <br />
                <span className="text-[#D62D78]">
                  Laugh. Celebrate.
                </span>
              </h2>

              <div className="my-8 h-[2px] w-16 bg-[#159F9B]" />

              <p className="max-w-xl text-[15px] leading-[1.85] text-[#202321]/75">
                Make your celebration colourful with a TVASTRA Paint Party.
                Whether it is a birthday, milestone, get-together or simply a
                reason to have fun, we bring art, creativity and celebration
                together.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <a
                  href="#enquiry"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#D62D78] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(214,45,120,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B8256A]"
                >
                  Plan a Paint Party

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-3 rounded-full border border-[#202321]/15 bg-white/50 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#202321] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D62D78]/40 hover:bg-white"
                >
                  Enquire Now
                </a>

              </div>

            </div>


            {/* Visual */}
            <div className="relative order-1 lg:order-2">

              <div className="relative aspect-[5/4] overflow-hidden rounded-[30px] bg-[#FAF8F3]">

                <img
                  src="/paintpartyworkshop.png"
                  alt="TVASTRA paint party with easels and canvases"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute right-6 top-6">
                  <span className="rounded-full bg-white/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#D62D78] backdrop-blur-sm">
                    02 / Paint Party
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 h-20 w-20 rotate-12 rounded-[22px] border border-[#159F9B]/25" />

              </div>

              <div className="absolute -bottom-5 -right-5 -z-0 h-24 w-24 rounded-[25px] bg-[#D62D78]/10" />

            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          SECTION 03 — EVENT ENQUIRY
      ========================================================== */}
      <section
        id="enquiry"
        className="relative overflow-hidden bg-[#FAF8F3] py-20 md:py-28"
      >

        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#159F9B]/[0.045]" />

          <div className="absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#D62D78]/[0.04]" />

        </div>


        <div className="relative z-10 container-main">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-5xl"
          >

            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">

              <div>

                <div className="mb-6 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[#159F9B]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                    Event Enquiry
                  </span>
                </div>

                <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.82] tracking-[-0.06em] text-[#202321]">
                  Plan Your
                  <br />
                  <span className="text-[#159F9B]">
                    Event.
                  </span>
                </h2>

              </div>

              <p className="max-w-md text-[14px] leading-[1.85] text-[#202321]/65 md:pb-1">
                Tell us about your event and we will help you create a
                memorable creative experience.
              </p>

            </div>

          </motion.div>


          {/* Form */}
          <div className="mx-auto max-w-5xl">

            {submitted ? (

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[32px] border border-[#202321]/[0.07] bg-white/80 px-6 py-20 text-center shadow-[0_25px_70px_rgba(32,35,33,0.06)] backdrop-blur-sm md:px-12"
              >

                <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#159F9B]/10 text-[#159F9B]">
                  <Check className="h-7 w-7" />
                </div>

                <h3 className="font-display text-4xl tracking-[-0.04em] text-[#202321]">
                  Thank you.
                </h3>

                <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-[#202321]/65">
                  We have received your enquiry. We will get back to you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#159F9B] transition hover:text-[#D62D78]"
                >
                  Send another enquiry →
                </button>

              </motion.div>

            ) : (

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7 }}
                className="rounded-[32px] border border-[#202321]/[0.07] bg-white/80 p-6 shadow-[0_25px_70px_rgba(32,35,33,0.06)] backdrop-blur-sm md:p-10 lg:p-12"
              >

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >

                  {/* BASIC DETAILS */}
                  <div>

                    <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.3em] text-[#159F9B]">
                      Your Details
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">

                      <Field
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />

                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />

                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">

                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />

                      <SelectField
                        label="Event type"
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        options={eventTypes}
                      />

                    </div>

                  </div>


                  {/* EVENT DETAILS */}
                  <div className="border-t border-[#202321]/[0.07] pt-8">

                    <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.3em] text-[#D62D78]">
                      Event Details
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">

                      <Field
                        label="Preferred date"
                        name="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={handleChange}
                        placeholder=""
                      />

                      <Field
                        label="Number of participants"
                        name="participants"
                        value={form.participants}
                        onChange={handleChange}
                        placeholder="e.g. 20"
                      />

                    </div>

                    <div className="mt-6">

                      <Field
                        label="Location / venue"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Venue or location"
                      />

                    </div>

                    <div className="mt-6">

                      <Field
                        label="Theme or requirement"
                        name="theme"
                        value={form.theme}
                        onChange={handleChange}
                        placeholder="Any specific theme or requirement"
                      />

                    </div>

                    <div className="mt-6">

                      <Field
                        label="Budget range (optional)"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        placeholder="Your budget range"
                      />

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="border-t border-[#202321]/[0.07] pt-8">

                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#202321]">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your event..."
                      className="
                        w-full
                        resize-none
                        border-0
                        border-b
                        border-[#202321]/15
                        bg-transparent
                        px-0
                        py-4
                        text-[14px]
                        text-[#202321]
                        outline-none
                        placeholder:text-[#202321]/35
                        transition
                        focus:border-[#159F9B]
                      "
                    />

                  </div>


                  {/* SUBMIT */}
                  <div className="flex flex-col gap-5 border-t border-[#202321]/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <p className="max-w-sm text-[11px] leading-[1.7] text-[#202321]/45">
                      Share your event details and we'll get in touch to
                      discuss your creative experience.
                    </p>

                    <button
                      type="submit"
                      disabled={sending}
                      className="
                        group
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-4
                        rounded-full
                        bg-[#159F9B]
                        px-8
                        py-4
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white
                        shadow-[0_12px_30px_rgba(21,159,155,0.18)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#118E8A]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >

                      {sending ? 'Sending...' : 'Send Enquiry'}

                      {!sending && (
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      )}

                    </button>

                  </div>

                </form>

              </motion.div>

            )}

          </div>

        </div>
      </section>
    </>
  );
}