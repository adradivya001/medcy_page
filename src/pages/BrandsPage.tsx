import { motion } from 'framer-motion';
import Brands from '../sections/Brands';

const BrandsPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-[#CFE8E5] overflow-hidden">
      {/* Massive Hero Section for Brands */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#0f3d32]/60 mb-6 bg-white/50 border border-[#0f3d32]/10 px-6 py-2 rounded-full shadow-sm">
            The Medcy Ecosystem
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0f3d32] mb-8 leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unifying Care Across <br className="hidden md:block"/> Every Specialty
          </h1>
          <p className="text-lg md:text-xl text-[#2a6a5a] font-light leading-relaxed max-w-3xl mx-auto">
            Discover our comprehensive suite of specialized clinical environments. Each brand is meticulously designed to bridge the gap between advanced medical technology and compassionate patient care, ensuring seamless workflows and enhanced outcomes.
          </p>
        </motion.div>
      </div>
      
      {/* The core Brands section */}
      <div className="mb-24">
        <Brands />
      </div>
      
      {/* HUGE CONTENT: Deep Dive Sections */}
      <div className="bg-white/40 py-24 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Janma Sethu Deep Dive */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Janma Sethu
              </h2>
              <h3 className="text-xl text-[#0f3d32] font-medium tracking-wide">The Path to Parenthood, Perfected.</h3>
              <p className="text-[#2a6a5a] leading-relaxed text-lg font-light">
                Fertility journeys are deeply personal and medically complex. Janma Sethu is engineered specifically for IVF clinics and maternity hospitals to provide absolute clarity across the entire patient lifecycle.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Automated cycle tracking and stimulation protocols.",
                  "Embryology lab management and cryopreservation tracking.",
                  "Integrated patient portals for real-time updates and anxiety reduction.",
                  "Seamless handover from fertility success to neonatal care."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0f3d32]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[#0f3d32]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Medical professional with mother" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          </div>

          {/* Kalpa Sethu Deep Dive */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kalpa Sethu
              </h2>
              <h3 className="text-xl text-[#0f3d32] font-medium tracking-wide">Data-Backed Transformation.</h3>
              <p className="text-[#2a6a5a] leading-relaxed text-lg font-light">
                In dermatology, aesthetics, and wellness, results are visual and longitudinal. Kalpa Sethu empowers clinics with advanced imaging integration, lifestyle tracking, and highly personalized treatment roadmaps.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "High-resolution before/after progression timelines.",
                  "Integrated inventory management for clinical products.",
                  "Smart appointment scheduling for multi-session treatments.",
                  "Dietary and lifestyle adherence monitoring algorithms."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0f3d32]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f3d32] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[#0f3d32]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Wellness and aesthetics" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          </div>

          {/* Akshaya Sethu Deep Dive */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Akshaya Sethu
              </h2>
              <h3 className="text-xl text-[#0f3d32] font-medium tracking-wide">Proactive Care for Longevity.</h3>
              <p className="text-[#2a6a5a] leading-relaxed text-lg font-light">
                Chronic care and geriatric management require vigilance. Akshaya Sethu shifts the clinical paradigm from reactive treatments to proactive health maintenance through continuous monitoring and predictive alerts.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Remote patient monitoring (RPM) dashboard integration.",
                  "Automated flag alerts for critical biometric changes.",
                  "Caregiver access portals for family coordination.",
                  "Medication adherence tracking and refill automation."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#0f3d32]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[#0f3d32]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Elder care professional" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      


    </main>
  );
};

export default BrandsPage;
