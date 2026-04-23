import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 1200); // Reduced drastically from 2200
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#E6F4F1] pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            filter: ["drop-shadow(0px 0px 0px rgba(15,61,50,0))", "drop-shadow(0px 10px 20px rgba(15,61,50,0.2))", "drop-shadow(0px 0px 0px rgba(15,61,50,0))"]
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeInOut" 
          }}
          className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center"
        >
          <img 
            src="/.png/health tech logo (1).svg" 
            alt="Medcy Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Sleek loading bar */}
        <div className="w-[180px] h-[2px] bg-[#0f3d32]/10 mt-8 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
            className="h-full w-1/2 bg-[#0f3d32] rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
