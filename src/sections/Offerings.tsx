import { motion } from 'framer-motion';
import { CalendarCheck, Inbox, Magnet, Bot, TrendingUp, BarChart3 } from 'lucide-react';

const offerings = [
  {
    headline: "Complete Front Office Support",
    description: "We handle your sales, services, and marketing as one system, so your clinic runs smoothly without extra effort.",
    icon: <CalendarCheck className="w-5 h-5 text-[#0f3d32]" />,
  },
  {
    headline: "Smart Patient Management",
    description: "Calls, follow-ups, and patient communication are managed automatically, reducing manual work.",
    icon: <Inbox className="w-5 h-5 text-[#0f3d32]" />,
  },
  {
    headline: "Focus on Patient Care",
    description: "Your team can stop chasing leads and spend more time treating patients.",
    icon: <Magnet className="w-5 h-5 text-[#0f3d32]" />,
  },
  {
    headline: "Authority-Based Growth",
    description: "We create trusted medical content that builds your clinic’s reputation and attracts the right patients.",
    icon: <Bot className="w-5 h-5 text-[#0f3d32]" />,
  },
  {
    headline: "Flexible Growth Models",
    description: "Choose between revenue-sharing or fixed-cost plans based on how you want to scale your clinic.",
    icon: <TrendingUp className="w-5 h-5 text-[#0f3d32]" />,
  },
  {
    headline: "True Growth Partnership",
    description: "We work as part of your team, focused on long-term success—not just as a service provider.",
    icon: <BarChart3 className="w-5 h-5 text-[#0f3d32]" />,
  }
];



const Offerings = () => {
  return (
    <section id="offerings" className="py-28 relative overflow-hidden bg-[#CFE8E5]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0f3d32]/60 mb-5 bg-[#0f3d32]/5 border border-[#0f3d32]/10 px-4 py-1.5 rounded-full">
            Offerings
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-[#0f3d32]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Offerings
          </h2>
        </motion.div>
 
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(15, 61, 50, 0.15)",
                borderColor: "rgba(15, 61, 50, 0.1)",
              }}
              className="group flex flex-col gap-5 p-8 rounded-[24px] bg-white border border-[#0f3d32]/5 transition-all duration-200 cursor-default shadow-[0_4px_20px_rgba(15,61,50,0.04)]"
            >
              {/* Icon container */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(15, 61, 50, 0.04)',
                  border: '1px solid rgba(15, 61, 50, 0.08)',
                }}
              >
                {offering.icon}
              </div>
 
              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[#0f3d32] leading-snug tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {offering.headline}
                </h3>
                <p className="text-base text-[#1a3d36] leading-relaxed font-medium opacity-90">
                  {offering.description}
                </p>
              </div>
 
              {/* Bottom accent line */}
              <div className="mt-auto h-0.5 w-0 group-hover:w-16 bg-[#0f3d32]/40 transition-all duration-500 ease-out rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
