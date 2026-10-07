import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Upload, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { Field, SelectField } from '../components/forms/ContactFormComponents';

const roles = [
  'Art Teachers / Art Facilitators',
  'Sales & Business Development',
  'Community & Customer Support',
  'Creative / Workshop Facilitators',
  'Operations',
  'Other creative or relevant roles',
];

export default function Career() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    areaOfInterest: '',
    qualification: '',
    skills: '',
    portfolio: '',
    resume: null as File | null,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Career at TVASTRA Art Studio | Join Our Team"
        description="Join TVASTRA Art Studio — explore career opportunities in art teaching, sales, operations and creative facilitation."
        canonical="/career"
        keywords="TVASTRA career, art studio jobs, art teacher jobs Thane, creative facilitator"
      />

      {/* =========================================================
          SECTION 01 — HERO + WHO CAN APPLY
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F3]">

        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#159F9B]/[0.06]" />
          <div className="absolute -left-24 bottom-20 h-[300px] w-[300px] rounded-full bg-[#D62D78]/[0.05]" />

          <div className="absolute right-[8%] top-[18%] h-24 w-24 rotate-12 rounded-[22px] border border-[#D62D78]/20" />

          <div className="absolute left-[6%] top-[38%] h-16 w-16 -rotate-12 rounded-full border border-[#159F9B]/20" />
        </div>

        <div className="relative z-10 container-main pb-20 pt-32 md:pb-28 md:pt-40">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-5xl"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#159F9B]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                Career
              </span>
            </div>

            <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.82] tracking-[-0.065em] text-[#202321]">
              Grow With
              <br />
              <span className="text-[#D62D78]">TVASTRA.</span>
              <br />
              <span className="text-[#159F9B]">Join Our Team.</span>
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">

              <p className="max-w-md font-display text-[clamp(1.5rem,2.5vw,2.3rem)] leading-[1.05] tracking-[-0.035em] text-[#159F9B]">
                Your skills can help someone discover their creativity.
              </p>

              <p className="max-w-xl text-[15px] leading-[1.85] text-[#202321]/70">
                TVASTRA is growing, and we are always interested in meeting
                passionate people who want to contribute to a creative
                ecosystem.
              </p>

            </div>
          </motion.div>


          {/* Divider */}
          <div className="my-16 h-px w-full bg-[#202321]/10 md:my-20" />


          {/* Who Can Apply */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div className="flex flex-wrap items-center gap-4">
                <span className="h-[2px] w-12 bg-[#159F9B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                  Who Can Apply?
                </span>
              </div>

              <p className="max-w-sm text-[13px] leading-[1.8] text-[#202321]/60 md:pb-1">
                We welcome people from different backgrounds who bring
                creativity, curiosity and a genuine desire to contribute.
              </p>

            </div>


            {/* Role Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {roles.map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.07,
                  }}
                  className="
                    group
                    relative
                    min-h-[145px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#202321]/[0.07]
                    bg-white/70
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#159F9B]/30
                    hover:shadow-[0_18px_45px_rgba(32,35,33,0.07)]
                  "
                >

                  {/* Number */}
                  <div className="flex items-start justify-between">

                    <span className="font-display text-[2rem] leading-none text-[#159F9B]/30 transition-colors duration-300 group-hover:text-[#159F9B]">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <ArrowUpRight
                      className="
                        h-4 w-4
                        text-[#202321]/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#D62D78]
                      "
                    />

                  </div>

                  <h3 className="mt-7 max-w-[240px] text-[14px] font-semibold leading-[1.35] text-[#202321]">
                    {role}
                  </h3>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D62D78] transition-all duration-500 group-hover:w-full" />

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>


      {/* =========================================================
          SECTION 02 — CAREER FORM
      ========================================================== */}
      <section
        id="enquiry"
        className="relative overflow-hidden bg-[#F7F3EA]"
      >

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-[#159F9B]/[0.06]" />

          <div className="absolute -left-24 bottom-10 h-[320px] w-[320px] rounded-full bg-[#D62D78]/[0.05]" />

          <div className="absolute right-[10%] bottom-[12%] h-20 w-20 rotate-12 rounded-[20px] border border-[#159F9B]/20" />

        </div>


        <div className="relative z-10 container-main py-20 md:py-28">

          <div className="mx-auto max-w-5xl">

            {/* Form Header */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="mb-12 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end"
            >

              <div className="flex flex-wrap items-center gap-4">
                <span className="h-[2px] w-12 bg-[#159F9B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                  Join Our Team
                </span>
              </div>

              <p className="max-w-xl text-[14px] leading-[1.85] text-[#202321]/70 md:pb-1">
                Even if you do not see a current opening that matches your
                profile, you can share your details with us. Tell us what you
                do, what you are passionate about and how you would like to
                contribute.
              </p>

            </motion.div>


            {/* Form / Success */}
            {submitted ? (

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                  rounded-[30px]
                  border
                  border-[#202321]/[0.07]
                  bg-white/75
                  px-6
                  py-20
                  text-center
                  shadow-[0_25px_70px_rgba(32,35,33,0.07)]
                  backdrop-blur-sm
                  md:px-12
                "
              >

                <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#159F9B]/10 text-[#159F9B]">
                  <Check className="h-7 w-7" />
                </div>

                <h3 className="font-display text-4xl tracking-[-0.04em] text-[#202321]">
                  Thank you.
                </h3>

                <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-[#202321]/65">
                  We have received your profile. We will get back to you soon.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="
                    mt-8
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#159F9B]
                    transition
                    hover:text-[#D62D78]
                  "
                >
                  Submit another profile →
                </button>

              </motion.div>

            ) : (

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7 }}
                className="
                  rounded-[30px]
                  border
                  border-[#202321]/[0.07]
                  bg-white/80
                  p-6
                  shadow-[0_25px_70px_rgba(32,35,33,0.06)]
                  backdrop-blur-sm
                  md:p-10
                  lg:p-12
                "
              >

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >

                  {/* Personal Details */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    <Field
                      label="Full Name"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
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


                  <div className="grid gap-6 sm:grid-cols-2">

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />

                    <Field
                      label="City"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      required
                    />

                  </div>


                  {/* Professional Details */}
                  <div className="border-t border-[#202321]/[0.07] pt-8">

                    <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.3em] text-[#159F9B]">
                      Professional Details
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">

                      <SelectField
                        label="Area of Interest / Role"
                        name="areaOfInterest"
                        value={form.areaOfInterest}
                        onChange={handleChange}
                        options={roles}
                      />

                      <Field
                        label="Qualification / Experience"
                        name="qualification"
                        value={form.qualification}
                        onChange={handleChange}
                        placeholder="Your qualification or experience"
                      />

                    </div>

                  </div>


                  <Field
                    label="Relevant Skills"
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    placeholder="Your relevant skills"
                  />


                  <Field
                    label="Portfolio / LinkedIn / Instagram link (optional)"
                    name="portfolio"
                    value={form.portfolio}
                    onChange={handleChange}
                    placeholder="https://..."
                  />


                  {/* Resume */}
                  <div>

                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#202321]">
                      Resume upload
                    </label>

                    <div className="relative">

                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                      />

                      <div className="
                        flex
                        items-center
                        gap-3
                        border-b
                        border-[#202321]/15
                        py-4
                        transition
                      ">

                        <Upload className="h-4 w-4 text-[#159F9B]" />

                        <span className="text-[14px] text-[#202321]/45">
                          {form.resume
                            ? form.resume.name
                            : 'Upload your resume (PDF, DOC)'}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* Message */}
                  <div>

                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#202321]">
                      Message / Why would you like to join TVASTRA?
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about yourself and why you'd like to join..."
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


                  {/* Submit */}
                  <div className="flex flex-col gap-5 border-t border-[#202321]/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <p className="hidden max-w-xs text-[11px] leading-relaxed text-[#202321]/45 sm:block">
                      Share your profile and tell us how you would like to
                      contribute to the TVASTRA creative community.
                    </p>

                    <button
                      type="submit"
                      disabled={sending}
                      className="
                        group
                        inline-flex
                        w-full
                        shrink-0
                        items-center
                        justify-center
                        sm:w-auto
                        gap-4
                        rounded-full
                        bg-[#159F9B]
                        px-8
                        py-4
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white
                        shadow-[0_10px_30px_rgba(21,159,155,0.2)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#118E8A]
                        hover:shadow-[0_15px_35px_rgba(21,159,155,0.25)]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >

                      {sending
                        ? 'Submitting...'
                        : 'Submit Your Profile'}

                      {!sending && (
                        <ArrowUpRight
                          className="
                            h-4 w-4
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                          "
                        />
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