import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // Appear when scrolled halfway down
            if (scrolled > height / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        // Initial check
        toggleVisibility();
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[90] p-4 rounded-full bg-[#0f3d32] text-white shadow-[0_20px_45px_rgba(15,61,50,0.45)] border border-white/10 hover:bg-[#4ABFB0] transition-colors group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
