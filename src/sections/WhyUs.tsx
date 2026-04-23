import { motion } from 'framer-motion';
import { Target, Users, Shield, Zap } from 'lucide-react';

const whyUsPoints = [
    {
        title: "Designed for your specialty",
        description: "We don’t use one approach for all clinics. Each solution is tailored to your treatment area, patient behavior, and growth goals.",
        icon: <Target className="w-6 h-6 text-[#4ABFB0]" />
    },
    {
        title: "We manage execution, not just provide tools",
        description: "This is not just software. We actively handle bookings, follow-ups, and patient interactions — so your team doesn’t have to.",
        icon: <Users className="w-6 h-6 text-[#4ABFB0]" />
    },
    {
        title: "Built around real clinic workflows",
        description: "Everything is designed around how clinics actually operate — reducing manual work instead of adding complexity.",
        icon: <Shield className="w-6 h-6 text-[#4ABFB0]" />
    },
    {
        title: "Focused on outcomes, not features",
        description: "We measure success by what matters to you — more confirmed patients, better conversion, and reduced operational load.",
        icon: <Zap className="w-6 h-6 text-[#4ABFB0]" />
    }
];

const WhyUs = () => {
    return (
        <section id="why-us" className="pt-12 pb-12 bg-[#CFE8E5] relative overflow-hidden">
            {/* Subtle background flair similar to other sections */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0f3d32]/60 mb-5 bg-[#0f3d32]/5 border border-[#0f3d32]/10 px-4 py-1.5 rounded-full"
                    >
                        Why Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-[#0f3d32] tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Built for your clinic — not a generic system
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#2a6a5a] max-w-2xl mx-auto text-lg font-light leading-relaxed"
                    >
                        Every clinic operates differently. Your patients, your specialty, and your workflows are unique — so your front office system should be too.
                    </motion.p>
                </div>

                {/* Grid Layout (2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {whyUsPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 }, boxShadow: "0 15px 35px rgba(15, 61, 50, 0.1)" }}
                            className="group p-8 rounded-[28px] bg-white/60 border border-[#0f3d32]/5 transition-all duration-500 flex flex-col gap-5 shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0f3d32]/5 flex items-center justify-center text-[#0f3d32] group-hover:bg-[#0f3d32] group-hover:text-white transition-all duration-500">
                                {point.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-[#0f3d32] tracking-tight">
                                    {point.title}
                                </h3>
                                <p className="text-[#2a6a5a] leading-relaxed font-light text-base">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-xl text-[#0f3d32]/60 font-light italic">
                        “A system that works with your clinic — not something your clinic has to adjust to.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
