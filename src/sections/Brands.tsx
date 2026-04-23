import { motion } from 'framer-motion';
import { Baby, Activity, Hourglass } from 'lucide-react';

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
    frontImage: "/janmasethu.png"
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
    frontImage: "/kalpasethu.png"
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
    frontImage: "/akshaya.png"
  }
];

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
          <p className="text-[#2a6a5a] max-w-2xl mx-auto font-light leading-relaxed">
            Specialized clinical environments designed to bridge the gap between technology and patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto items-stretch">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="perspective-1000 h-[400px] sm:h-[450px] md:h-[500px] w-full group cursor-pointer outline-none select-none"
              style={{ WebkitTapHighlightColor: 'rgba(255, 182, 193, 0.3)' }}
            >
              <motion.div
                initial={false}
                animate={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Face */}
                <div className={`absolute inset-0 backface-hidden rounded-[24px] overflow-hidden bg-[#CFE8E5] border border-[#0f3d32]/5 flex flex-col items-center justify-center ${brand.frontImage ? 'p-0' : 'p-6 shadow-lg'}`}>
                  {brand.frontImage ? (
                    <img
                      src={brand.frontImage}
                      alt={brand.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="mb-6 p-4 rounded-2xl bg-[#0f3d32]/5 border border-[#0f3d32]/10">
                        {brand.icon}
                      </div>
                      <h3
                        className="text-2xl font-medium text-[#0f3d32] tracking-wider text-center"
                        style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 10px rgba(15, 61, 50, 0.05)' }}
                      >
                        {brand.name}
                      </h3>
                      <p className="text-[#2a6a5a]/60 text-xs mt-6 uppercase tracking-widest font-semibold italic">Hover to explore</p>
                    </div>
                  )}
                </div>

                {/* Back Face */}
                <div
                  className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-[24px] p-6 bg-white border border-[#0f3d32]/5 overflow-hidden shadow-2xl`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-10`} />

                  <div className="relative z-10 h-full flex flex-col">
                    <h3
                      className="text-2xl font-medium mb-1 text-[#0f3d32] tracking-wider"
                      style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 10px rgba(15, 61, 50, 0.05)' }}
                    >
                      {brand.name}
                    </h3>
                    <p className="text-[#2a6a5a]/70 text-sm font-medium mb-6 italic tracking-tight">{brand.tagline}</p>

                    <div className="text-[#2a6a5a] text-[13px] leading-relaxed mb-6 space-y-4 font-light">
                      {brand.content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                    </div>

                    <ul className="space-y-2.5 mb-8">
                      {brand.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#0f3d32]/80 font-medium leading-tight">
                          <span className="text-[#4ABFB0] text-[10px] mt-0.5">●</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative corner glow */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-teal/20 blur-2xl rounded-full opacity-50" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Brands;
