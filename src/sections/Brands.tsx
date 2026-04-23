import { motion } from 'framer-motion';
import { Baby, Activity, Hourglass } from 'lucide-react';
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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-[450px] [perspective:1200px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-[28px] overflow-hidden shadow-xl border border-[#0f3d32]/10 bg-[#CFE8E5]">
          {brand.frontImage ? (
            <img
              src={brand.frontImage}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
               <div className="p-6 rounded-3xl bg-white shadow-sm border border-[#0f3d32]/5">
                {brand.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#0f3d32] tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                {brand.name}
              </h3>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{brand.name}</h3>
            <p className="text-white/90 text-sm font-medium tracking-wide">{brand.tagline}</p>
          </div>
          
          {/* Mobile Flip Indicator */}
          <div className="md:hidden absolute top-6 right-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
            <span className="text-xl">+</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[28px] overflow-hidden shadow-2xl border border-[#0f3d32]/20 bg-white p-8 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-[#0f3d32]/5">
              {brand.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>{brand.name}</h3>
              <p className="text-[#4ABFB0] text-xs font-bold uppercase tracking-widest">{brand.tagline}</p>
            </div>
          </div>

          <div className="text-[#08241e] text-[15px] leading-relaxed mb-6 space-y-4 font-medium overflow-y-auto custom-scrollbar pr-2 flex-1">
            {brand.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="pt-6 border-t border-[#0f3d32]/10">
            <h4 className="text-[13px] font-bold text-[#0f3d32]/60 uppercase tracking-widest mb-4">Key Advantages</h4>
            <ul className="grid grid-cols-1 gap-3">
              {brand.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-[#08241e] font-bold leading-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ABFB0] mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-[0.03] pointer-events-none`} />
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
