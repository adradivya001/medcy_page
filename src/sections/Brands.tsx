import { motion } from 'framer-motion';
import { Baby, Activity, Hourglass, X } from 'lucide-react';
import { useState } from 'react';

const brands = [
  {
    name: "Janma Sethu",
    tagline: "Precision tech for the path to parenthood",
    content: "Empowering fertility and maternal care with precision-driven technology. Janmasethu supports clinics across IVF, gynecology, and neonatal care by streamlining patient journeys, improving treatment outcomes, and enabling better clinical decisions.\n\nFrom first consultation to postnatal care, we ensure every step is connected, data-informed, and patient-centric.",
    highlights: [
      "End-to-end IVF cycle tracking",
      "Smart patient journey management",
      "Integrated neonatal and maternal records",
      "Outcome-focused clinical insights"
    ],
    icon: <Baby className="w-8 h-8 text-[#0f3d32]" />,
    color: "from-brand-teal/20 to-brand-teal/5",
    frontImage: "/.png/janmasethu.png"
  },
  {
    name: "Kalpa Sethu",
    tagline: "Data-backed transformation and aesthetics",
    content: "Kalpasethu brings precision and personalization to dermatology, nutrition, and weight management. By combining data insights with lifestyle tracking, it enables providers to deliver measurable and sustainable transformations.\n\nFrom aesthetic treatments to wellness journeys, everything is tracked, optimized, and results-driven.",
    highlights: [
      "Personalized treatment and nutrition plans",
      "Progress tracking with measurable outcomes",
      "AI-driven insights for better recommendations",
      "Integrated wellness and aesthetic workflows"
    ],
    icon: <Hourglass className="w-8 h-8 text-[#0f3d32]" />,
    color: "from-[#4ABFB0]/20 to-[#4ABFB0]/5",
    frontImage: "/.png/kalpasethu.png"
  },
  {
    name: "Akshaya Sethu",
    tagline: "Proactive care coordination for longevity",
    content: "Designed for continuous and long-term care, Akshayasethu enables providers to manage geriatric and chronic conditions with proactive monitoring and coordinated care.\n\nIt helps clinicians stay ahead of complications, improve patient adherence, and deliver consistent, personalized care experiences over time.",
    highlights: [
      "Chronic disease management workflows",
      "Remote monitoring and follow-ups",
      "Longitudinal patient health records",
      "Care coordination across providers"
    ],
    icon: <Activity className="w-8 h-8 text-[#0f3d32]" />,
    color: "from-brand-emerald/20 to-brand-emerald/5",
    frontImage: "/.png/Akshayasethu.png"
  }
];

const BrandCard = ({ brand }: { brand: typeof brands[0] }) => {
  const [isFlippedMobile, setIsFlippedMobile] = useState(false);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(15, 61, 50, 0.15)" }}
        className="relative w-full h-[450px] lg:h-[480px] group outline-none select-none overflow-hidden rounded-[24px] shadow-sm border border-[#0f3d32]/10 bg-white will-change-transform transition-shadow duration-400"
      >
        {/* Soft Hover Glow / Sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none z-30" />

        {/* Front Face */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-[#CFE8E5] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isFlippedMobile ? 'opacity-0 pointer-events-none' : 'group-hover:opacity-0 group-hover:scale-95'} z-10 ${brand.frontImage ? 'p-0' : 'p-6'}`}
        >
          {brand.frontImage ? (
            <>
              <img
                src={brand.frontImage}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlippedMobile(true);
                }}
                className="md:hidden absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-[#0f3d32] shadow-xl z-20 flex items-center gap-1.5 border border-[#0f3d32]/10"
              >
                More info <span className="text-[14px] leading-none">&rarr;</span>
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center relative w-full h-full justify-center">
              <div className="mb-6 p-4 rounded-2xl bg-[#0f3d32]/5 border border-[#0f3d32]/10">
                {brand.icon}
              </div>
              <h3
                className="text-2xl font-semibold text-[#0f3d32] tracking-wider text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {brand.name}
              </h3>
              <p className="text-[#0f3d32]/60 text-xs mt-6 uppercase tracking-widest font-semibold italic hidden md:block">Hover to explore</p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlippedMobile(true);
                }}
                className="md:hidden absolute bottom-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-[#0f3d32] shadow-xl z-20 flex items-center gap-1.5 border border-[#0f3d32]/10"
              >
                More info <span className="text-[14px] leading-none">&rarr;</span>
              </button>
            </div>
          )}
        </div>

        {/* Back Face (Content Overlay) */}
        <div
          className={`absolute inset-0 p-6 lg:p-8 bg-white flex flex-col z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isFlippedMobile ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-6 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto'}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-5`} />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFlippedMobile(false);
            }}
            className="md:hidden absolute top-4 right-4 p-2 bg-[#CFE8E5]/50 backdrop-blur-md rounded-full text-[#0f3d32] z-30 shadow-sm border border-[#0f3d32]/10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10 flex flex-col flex-1 h-full">
            <h3
              className="text-[1.5rem] font-semibold mb-1 text-[#0f3d32] tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {brand.name}
            </h3>
            <p className="text-[#0f3d32] text-[1.05rem] font-medium mb-5 italic tracking-tight">{brand.tagline}</p>

            <div className="text-[#0f3d32] text-[1.05rem] leading-relaxed mb-6 space-y-4 font-normal overflow-y-auto custom-scrollbar pr-3">
              {brand.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <ul className="space-y-3 mt-auto pt-5 border-t border-[#0f3d32]/10">
              {brand.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-[1rem] text-[#0f3d32] font-medium leading-snug">
                  <span className="text-[#4ABFB0] text-[12px] mt-[0.3rem]">●</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
  </div>
  );
};

const Brands = () => {
  return (
    <section id="our-brands" className="pt-4 pb-24 relative overflow-hidden bg-[#CFE8E5]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0f3d32]/60 mb-4 bg-[#0f3d32]/5 border border-[#0f3d32]/10 px-4 py-1.5 rounded-full">
            The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Brands
          </h2>
          <p className="text-[#0f3d32]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Specialized clinical environments designed to bridge the gap between technology and patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto items-center">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Brands;
