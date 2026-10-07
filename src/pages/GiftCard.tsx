import { motion } from 'framer-motion';
import { ArrowUpRight, Gift, Heart, Sparkles, Star, Wallet } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';
import SEO from '../components/SEO';

const giftCards = [
  {
    value: '₹1,555',
    label: 'TVASTRA Gift Card ₹1,555',
    image: '/1555rs.png',
    alt: 'TVASTRA gift card worth Rs 1555',
  },
  {
    value: '₹2,555',
    label: 'TVASTRA Gift Card ₹2,555',
    image: '/2555rs.png',
    alt: 'TVASTRA gift card worth Rs 2555',
  },
  {
    value: '₹3,555',
    label: 'TVASTRA Gift Card ₹3,555',
    image: '/3555rs.png',
    alt: 'TVASTRA gift card worth Rs 3555',
  },
];

const whyGift = [
  {
    icon: Sparkles,
    title: 'Encourages creativity and learning',
  },
  {
    icon: Gift,
    title: 'A memorable experience instead of a conventional gift',
  },
  {
    icon: Heart,
    title: 'Suitable for art lovers and creative beginners',
  },
  {
    icon: Wallet,
    title: 'Multiple gift card values available',
  },
  {
    icon: Star,
    title: 'Ideal for birthdays, celebrations and special occasions',
  },
];

const occasions = [
  'Birthday',
  'Anniversary',
  'Festive Celebration',
  "Mother's Day",
  'Friendship Gift',
  'Thoughtful Surprise',
];

export default function GiftCard() {
  return (
    <>
      <SEO
        title="Art Workshop Gift Cards in Thane | Gift an Art Experience – TVASTRA"
        description="Gift your loved ones the joy of creativity with Tvastra Art Workshop Gift Cards in Thane. Available in Rs 1555, 2555 and 3555 — usable towards art classes, creative workshops and art experiences."
        canonical="/gift-card"
        keywords="Art Workshop Gift Card, Art Experience Gift Voucher, Creative Gift Ideas, Art Classes Gift Voucher, Art Workshop Gift Voucher in Thane, Gifts for Art Lovers, Experience Gifts in Thane, Creative Gifts for Women, Art Classes in Thane, Tvastra Art Workshop"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FAF8F3]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-36 -top-36 h-[430px] w-[430px] rounded-full bg-[#D62D78]/[0.055]" />
          <div className="absolute -left-24 bottom-[-170px] h-[340px] w-[340px] rounded-full bg-[#159F9B]/[0.045]" />
          <div className="absolute right-[10%] top-[24%] h-20 w-20 rotate-12 rounded-[22px] border border-[#D62D78]/20" />
          <div className="absolute left-[7%] bottom-[18%] h-12 w-12 -rotate-12 rounded-full border border-[#159F9B]/20" />
        </div>

        <div className="relative z-10 container-main pb-14 pt-28 md:pb-20 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#D62D78]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#D62D78]">
                Gift Cards
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h1 className="font-display text-[clamp(2.5rem,7vw,6.8rem)] leading-[0.82] tracking-[-0.065em] text-[#202321]">
                  Gift an Art
                  <br />
                  <span className="text-[#D62D78]">
                    Experience.
                  </span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-1">
                <div className="mb-5 h-[2px] w-14 bg-[#159F9B]" />
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D62D78]">
                  ₹1,555 · ₹2,555 · ₹3,555
                </p>
                <p className="text-[15px] leading-[1.85] text-[#202321]/70">
                  Give your loved ones something more meaningful than a
                  traditional gift — the joy of creativity!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GIFT CARD VALUES */}
      <section className="relative overflow-hidden bg-[#F7F3EA] py-16 md:py-24">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-wrap items-center gap-4"
          >
            <span className="h-[2px] w-10 bg-[#D62D78]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#D62D78]">
              Choose A Value
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {giftCards.map((card, i) => (
              <motion.div
                key={card.value}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15, margin: '-30px' }}
                transition={{ duration: 0.55, delay: Math.min(i * 0.08, 0.3) }}
                className="group relative overflow-hidden rounded-[28px] border border-[#202321]/[0.07] bg-[#FAF8F3] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D62D78]/30 hover:shadow-[0_20px_55px_rgba(32,35,33,0.08)]"
              >
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={600}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-5">
                  <p className="font-display text-[1.9rem] leading-none tracking-[-0.03em] text-[#202321]">
                    {card.value}
                  </p>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(card.label)}
                    className="group/btn inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-[#D62D78] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(214,45,120,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8256A]"
                  >
                    Gift This Card
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-3xl text-center text-[14px] leading-[1.85] text-[#202321]/70"
          >
            These gift cards can be used towards eligible art classes,
            creative workshops and art experiences at Tvastra. Let them
            choose an experience that inspires them.
          </motion.p>
        </div>
      </section>

      {/* WHY GIFT */}
      <section className="relative overflow-hidden bg-[#FAF8F3] py-16 md:py-24">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#159F9B]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.38em] text-[#159F9B]">
                Why Gift Tvastra
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.9] tracking-[-0.055em] text-[#202321]">
              Why Gift a<br />
              <span className="text-[#D62D78]">Tvastra Experience?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyGift.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                  className="flex items-start gap-4 rounded-[22px] border border-[#202321]/[0.07] bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#159F9B]/30 hover:shadow-[0_20px_55px_rgba(32,35,33,0.07)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D62D78]/10 text-[#D62D78]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-1 text-[14px] font-semibold leading-[1.6] text-[#202321]">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Occasions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {occasions.map((occasion) => (
              <span
                key={occasion}
                className="rounded-full border border-[#159F9B]/25 bg-white/60 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#159F9B]"
              >
                {occasion}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#202321]">
        <div className="container-main py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[1.5rem] leading-tight text-[#FAF8F3]">
              Gift creativity. Gift an experience. Gift Tvastra.
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp('TVASTRA Gift Card')}
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#D62D78] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B8256A]"
            >
              Gift Now
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
