import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getActiveDoctorProfileCards } from '../services/doctorProfileService';
import type { DoctorProfileCard } from '../services/doctorProfileService';

export const DoctorProfileCards: React.FC = () => {
  const [cards, setCards] = useState<DoctorProfileCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getActiveDoctorProfileCards();
        setCards(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching doctor profiles.');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-[#CFE8E5]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0f3d32]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 bg-[#CFE8E5]">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (cards.length === 0) {
    return null; // Don't show anything if no cards
  }

  return (
    <section id="consultants" className="py-24 px-6 relative overflow-hidden bg-[#CFE8E5]">
      {/* Background flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0f3d32]/60 mb-5 bg-[#0f3d32]/5 border border-[#0f3d32]/10 px-4 py-1.5 rounded-full"
          >
            Our Experts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#0f3d32] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Caring Consultants
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#2a6a5a] max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Dedicated professionals committed to providing the highest standard of personalized care.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div 
            className="flex gap-8 w-max animate-marquee will-change-transform"
          >
            {/* First set of cards */}
            {cards.concat(cards).map((card, i) => (
              <div
                key={`${card.id}-${i}`}
                className="marquee-card flex-none w-[280px] sm:w-[320px] bg-white/70 backdrop-blur-sm rounded-[32px] border border-[#0f3d32]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-gray-100/50 overflow-hidden">
                  {card.image_url ? (
                    <img
                      src={card.image_url}
                      alt={`Profile of ${card.doctor_name}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-[#0f3d32]/20">
                      <span className="text-4xl">⚕️</span>
                    </div>
                  )}
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d32]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
