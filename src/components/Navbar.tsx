import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "Our Brands", "Challenges", "Offerings", "Why Us", "Founders"];

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
        style={{ top: "20px" }}
      >
        <motion.nav
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={false}
          animate={{
            width: isScrolled && !isHovered ? "min(750px, 90vw)" : "min(1200px, 95vw)",
            maxWidth: "1200px",
            padding: isScrolled && !isHovered ? "8px 8px 8px 16px" : "10px 10px 10px 20px",
            backgroundColor: isScrolled ? "rgba(240, 250, 249, 0.45)" : "rgba(240, 250, 249, 0.3)",
            backdropFilter: isScrolled ? "blur(16px)" : "blur(12px)",
            boxShadow: isScrolled ? "0 10px 40px rgba(15, 61, 50, 0.08)" : "0 4px 20px rgba(0,0,0,0.05)",
            border: isScrolled ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between rounded-[50px] pointer-events-auto shadow-sm"
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <motion.div
              animate={{ scale: (!isScrolled || isHovered) ? 1 : 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center p-1"
            >
              <img src="/.png/health tech logo (1).svg" alt="Medcy Logo" className="h-10 w-auto object-contain" />
            </motion.div>
          </div>

          {/* Center: Links (Desktop) */}
          <AnimatePresence>
            {(!isScrolled || isHovered) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, pointerEvents: "none" }}
                transition={{ duration: 0.2 }}
                className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-[28px] pointer-events-auto"
              >
                {navLinks.map(link => {
                  const path = link === "Home" ? "/" : `/${link.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <Link key={link} to={path} className="relative text-[#334b46] font-medium text-sm hover:text-[#0f3d32] transition-colors group pointer-events-auto">
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0f3d32] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Area: CTA & Hamburger */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              animate={{
                boxShadow: (!isScrolled || isHovered) ? "0 4px 10px rgba(15,61,50,0.1)" : "0 8px 20px rgba(15,61,50,0.2)",
              }}
              transition={{ duration: 0.4 }}
              className="group hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#13443e] text-white text-sm font-semibold hover:bg-[#0f2822] transition-all shadow-lg whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-full hover:bg-black/5 transition-colors text-[#13443e]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[40] bg-white pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => {
                const path = link === "Home" ? "/" : `/${link.toLowerCase().replace(/ /g, '-')}`;
                return (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-light text-[#0f3d32] hover:text-[#4ABFB0] transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {link}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-8 flex items-center justify-between p-6 rounded-3xl bg-[#0f3d32] text-white text-xl font-medium group"
              >
                Contact Us
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
