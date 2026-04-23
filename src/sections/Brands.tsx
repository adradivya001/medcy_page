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
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-[420px] group rounded-[24px] overflow-hidden shadow-lg border border-[#0f3d32]/10 bg-white"
      >
        {/* Main Image Background */}
        <div className="absolute inset-0 z-0 bg-[#CFE8E5]">
          {brand.frontImage ? (
            <img
              src={brand.frontImage}
              alt={brand.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
               <div className="p-6 rounded-2xl bg-[#0f3d32]/5 border border-[#0f3d32]/10">
                {brand.icon}
              </div>
            </div>
          )}
          {/* Overlay to ensure title visibility if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        {/* Title Overlay (Visible when not hovered) */}
        {!brand.frontImage && (
           <div className="absolute inset-0 flex flex-col items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-500">
             <h3 className="text-2xl font-bold text-[#0f3d32] tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
               {brand.name}
             </h3>
           </div>
        )}

        {/* Content Panel (Slides up on hover) */}
        <motion.div
          className={`absolute inset-0 z-20 bg-white flex flex-col p-6 lg:p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpandedMobile ? 'translate-y-0' : 'translate-y-[calc(100%-80px)] md:translate-y-full group-hover:translate-y-0'}`}
        >
          {/* Mobile Tab/Handle */}
          <div 
            className="md:hidden absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-6 cursor-pointer"
            onClick={() => setIsExpandedMobile(!isExpandedMobile)}
          >
            <h3 className="text-xl font-bold text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>{brand.name}</h3>
            <div className="w-8 h-8 rounded-full bg-[#CFE8E5] flex items-center justify-center">
              {isExpandedMobile ? <X className="w-4 h-4 text-[#0f3d32]" /> : <span className="text-[#0f3d32] text-xl">+</span>}
            </div>
          </div>

          <div className="relative z-10 flex flex-col flex-1 mt-12 md:mt-0 overflow-hidden">
            <h3
              className="text-2xl font-bold mb-1 text-[#0f3d32] tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {brand.name}
            </h3>
            <p className="text-[#0f3d32] text-[16px] font-semibold mb-5 italic tracking-tight">{brand.tagline}</p>

            <div className="text-[#08241e] text-[15px] leading-relaxed mb-6 space-y-4 font-medium overflow-y-auto custom-scrollbar pr-2 flex-1">
              {brand.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <ul className="space-y-3 pt-4 border-t border-[#0f3d32]/20">
              {brand.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#08241e] font-semibold leading-snug">
                  <span className="text-[#4ABFB0] text-[12px] mt-0.5">●</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Decorative Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-5 pointer-events-none`} />
        </motion.div>
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
