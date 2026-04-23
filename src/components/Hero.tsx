import { CircleRevealButton } from './ui/circle-reveal-button';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden bg-background flex items-center justify-center">
      {/* Premium Organic Hub Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-teal/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-brand-emerald/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Background Mesh Overlay */}
      <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />

      {/* Background Decorative Lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0,100 Q400,150 800,50 T1600,100" stroke="#2dd4bf" strokeWidth="0.5" fill="none" 
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          d="M0,300 Q600,250 1200,350 T2000,300" stroke="#10b981" strokeWidth="0.5" fill="none" 
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-hero-clean font-medium leading-[1.05] mb-12 tracking-tight text-white/90"
          >
            The Future of <br className="hidden md:block" />
            <span className="italic font-light opacity-80">Health Tech Infrastructure</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-hero-clean tracking-tight"
          >
            Medcy Health Tech provides clinic owners and doctors with a one-stop digital front office. Increase revenue and reduce costs through seamless automation.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <CircleRevealButton
                bg="#2ee0c7"
                fg="#080d0f"
                spotColor="#ffffff"
                spotFg="#2ee0c7"
                className="shadow-neon group"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </CircleRevealButton>
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }} 
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-4 glass-card font-bold text-white transition-all flex items-center gap-2 group"
            >
              Watch Demo
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-70"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white">40%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cost Reduction</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white">2.5x</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue Growth</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white">99%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Automation Rate</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
