import { motion } from 'framer-motion';
import Challenges from '../sections/Challenges';

const ChallengesPage = () => {
  return (
    <main className="pt-24 min-h-screen bg-[#CFE8E5]">
      {/* Extra informative content header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-[#0f3d32] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Overcoming Clinical Hurdles
          </h1>
          <p className="text-lg text-[#2a6a5a] font-light leading-relaxed">
            Independent clinics face immense pressure from large corporate hospital chains, disconnected technological systems, and overwhelmed administrative staff. We have identified these exact pain points through years of hands-on experience and have engineered Medcy Tech to solve them at their core.
          </p>
        </motion.div>
      </div>
      
      {/* The core Challenges section */}
      <Challenges />
      
      {/* Extra informative content footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white/60 backdrop-blur-md rounded-[32px] p-10 md:p-16 border border-[#0f3d32]/5 shadow-sm text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0f3d32] mb-6" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Overwhelmed to Optimized
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#2a6a5a] leading-relaxed max-w-3xl mx-auto text-lg font-light mb-8"
          >
            By consolidating your digital front office, we eliminate the friction of managing multiple fragmented tools. This allows your clinical staff to transition from administrative firefighters to patient care specialists.
          </motion.p>
          <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Medical professional smiling" className="w-full max-w-4xl mx-auto h-[400px] object-cover rounded-[24px] shadow-lg" />
        </div>
      </div>
    </main>
  );
};

export default ChallengesPage;
