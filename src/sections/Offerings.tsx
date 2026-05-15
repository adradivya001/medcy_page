import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    id: "starter",
    name: "Starter Pack",
    tagline: "Perfect for clinics getting started online",
    priceRange: "₹2,999",
    features: [
      "Landing page for digital identity",
      "Google Business Profile management",
      "Review reply & rating improvement",
      "WhatsApp appointment + reminders",
      "Monthly visibility report",
      "Basic social content (2–4 posts)"
    ],
    color: "from-indigo-100/40 to-indigo-50/20",
    accent: "bg-indigo-400",
    btn: "bg-[#ede9fe] text-[#6366f1] hover:bg-[#6366f1] hover:text-white"
  },
  {
    id: "growth",
    name: "Growth Pack",
    tagline: "For clinics ready to scale patient inflow",
    priceRange: "₹12,000",
    features: [
      "Landing page for digital identity (SEO Optimized)",
      "Everything in Starter",
      "Lead capture across channels",
      "Missed call recovery",
      "WhatsApp automation (flows + follow-ups)",
      "Simple CRM view",
      "Review & reputation management"
    ],
    color: "from-rose-100/40 to-rose-50/20",
    accent: "bg-rose-400",
    btn: "bg-[#ffe4e6] text-[#e11d48] hover:bg-[#e11d48] hover:text-white"
  },
  {
    id: "orchestration",
    name: "Orchestration Pack",
    tagline: "End-to-end patient journey management",
    priceRange: "₹40,000",
    features: [
      "Landing page for digital identity (Premium Suite)",
      "Multi-channel orchestration",
      "Call center scripts + knowledge base",
      "Journey design (pre + post OPD)",
      "Reporting dashboards",
      "Multi-location support (add-on)",
      "Specialist clinical workflows"
    ],
    color: "from-sky-100/40 to-sky-50/20",
    accent: "bg-sky-400",
    btn: "bg-[#e0f2fe] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white"
  }
];

const PricingCard = ({ tier }: { tier: typeof pricingTiers[0] }) => {
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-[480px] group rounded-[24px] overflow-hidden shadow-lg border border-[#0f3d32]/10 bg-white"
      >
        {/* Front State: Initial Visibility */}
        <div className="absolute inset-0 z-0 p-8 flex flex-col justify-between bg-white">
          <div className="space-y-4">
            <div className={`w-12 h-1.5 rounded-full ${tier.accent} opacity-40 mb-6`} />
            <h3
              className="text-3xl font-bold text-[#0f3d32] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {tier.name}
            </h3>
            <p className="text-[#5b6e68] text-sm font-semibold max-w-[80%] leading-relaxed italic">
              {tier.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-[#0f3d32] tracking-tighter">
                {tier.priceRange}
              </span>
              <div className="flex flex-col">
                <span className="text-[#5b6e68]/40 font-bold leading-none text-xl">|</span>
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-none mt-1">Month</span>
              </div>
            </div>
            <p className="text-[11px] text-[#5b6e68]/60 font-bold uppercase tracking-widest mt-4 flex items-center gap-2">
              <span className="w-4 h-px bg-[#5b6e68]/20" /> Hover to explore features
            </p>
          </div>
        </div>

        {/* Revealed State: Features Panel */}
        <motion.div
          className={`absolute inset-0 z-20 bg-white flex flex-col p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpandedMobile ? 'translate-y-0' : 'translate-y-full md:group-hover:translate-y-0'}`}
        >
          {/* Mobile Close Button */}
          <button
            className="md:hidden absolute top-6 right-6 p-2 bg-[#CFE8E5] rounded-full text-[#0f3d32] z-30 shadow-sm border border-[#0f3d32]/10"
            onClick={() => setIsExpandedMobile(false)}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex flex-col flex-1 mt-4 md:mt-0 overflow-hidden">
            <h4 className="text-sm font-bold text-[#0f3d32] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <span className={`w-8 h-px ${tier.accent} opacity-30`} /> Included features
            </h4>

            <ul className="space-y-5 flex-1 overflow-y-auto custom-scrollbar pr-2 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-100 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#0f3d32]/20" strokeWidth={3} />
                  </div>
                  <span className="text-[14px] text-[#5b6e68] font-bold leading-tight">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link 
              to="/digital-identity" 
              className="text-center text-[11px] font-bold text-[#0f3d32]/50 hover:text-brand-teal transition-all mb-4 flex items-center justify-center gap-1.5 group/link"
            >
              Explore Digital Identity <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>

            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${tier.btn}`}>
              Purchase Plan
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Decorative Subtle Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} pointer-events-none`} />
        </motion.div>

        {/* Mobile Floating '+' Button */}
        {!isExpandedMobile && (
          <button
            onClick={() => setIsExpandedMobile(true)}
            className="md:hidden absolute bottom-8 right-8 w-12 h-12 bg-[#0f3d32] text-white rounded-full flex items-center justify-center shadow-lg z-10 active:scale-95 transition-transform"
          >
            <span className="text-2xl font-light">+</span>
          </button>
        )}
      </motion.div>
    </div>
  );
};

const Offerings = () => {
  return (
    <section id="offerings" className="py-24 relative overflow-hidden bg-[#CFE8E5]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0f3d32]/60 mb-5 bg-[#0f3d32]/5 border border-[#0f3d32]/10 px-4 py-1.5 rounded-full"
          >
            Pricing & Strategy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#0f3d32] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Choose the Perfect Pricing Plan
          </motion.h2>
          <p className="text-[#0f3d32]/60 max-w-xl mx-auto font-medium text-sm md:text-base italic">
            "Your digital identity is your clinical legacy. Professional journey orchestration designed for superior outcomes."
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto place-items-center">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-20 text-center">
          <p className="text-[#0f3d32]/60 text-sm font-bold">
            Not sure which plan fits? <button className="text-[#0f3d32] underline hover:text-[#4ABFB0] transition-colors">Talk to our clinical experts.</button>
          </p>
        </div>

      </div>

      {/* Background radial glow matching Brands section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Offerings;
