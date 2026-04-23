"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X, CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "../../services/leadService";

import InteractiveBackground from "./InteractiveBackground";

export default function MedcyIvfHero() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", reason: "", message: "" });

    const staggerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const handleInviteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { error } = await submitLead({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `Reason: ${formData.reason} | Message: ${formData.message}`,
            role: 'Clinic Owner',
            organization: 'Individual Practice'
        });

        setIsSubmitting(false);
        if (!error) {
            setIsSuccess(true);
            setTimeout(() => {
                setIsModalOpen(false);
                setIsSuccess(false);
                setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
            }, 3000);
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <InteractiveBackground
            className="min-h-[100dvh]"
            exclusionArea={{ width: '900px', height: '450px' }}
        >
            {/* Hero Centered Stack */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full pt-32 pb-8 md:pt-40 md:pb-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="flex flex-col items-center"
                >
                    <motion.h1
                        variants={staggerVariants}
                        className="text-[42px] md:text-[64px] lg:text-[76px] leading-[1.1] md:leading-[1.15] mb-6 text-[#38423f] tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
                    >
                        The Digital Heart of Your Practice. <br className="hidden md:block" /> The Human Touch for Your Patients.
                    </motion.h1>

                    <motion.p variants={staggerVariants} className="text-[#5b6e68] text-base md:text-lg lg:text-[19px] max-w-[800px] font-normal leading-[1.7] mb-10 tracking-wide text-center">
                        Medcy Health Tech is a Digital Front Office (DFO) service that offloads the weight of Sales, Services, and Marketing from your clinic. We replace administrative burden with Digital Twins—intelligent support that handles calls and communication so your team can focus entirely on patient care. Operating exclusively in the Pro-Active safe space, we help you grow your practice across the journey of Parenthood, Transformation, and Longevity without ever touching the complexity of backend operations.
                    </motion.p>

                    {/* Primary CTA */}
                    <motion.button
                        variants={staggerVariants}
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: "0 30px 60px rgba(15, 61, 50, 0.45)"
                        }}
                        onClick={() => navigate('/contact')}
                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#0f3d32] text-white font-medium text-lg shadow-[0_20px_40px_rgba(15,61,50,0.35)] transition-all duration-300"
                    >
                        Partner with us? <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-[8px]"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 60 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 40 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row pointer-events-auto my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left Column: Vision & Branding */}
                            <div className="flex-1 p-8 md:p-16 lg:p-20 bg-[#f0f9f8] relative overflow-hidden flex flex-col justify-center">
                                {/* Large Subtle Logo Pattern Background */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                                    backgroundImage: 'url("/lotus_icon_transparent.png")',
                                    backgroundSize: '400px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'left center'
                                }} />

                                <div className="relative z-10 max-w-md">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#2f8f83]/20 text-[#2f8f83] text-sm font-semibold mb-8">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#2f8f83]" />
                                        Contact us
                                    </div>

                                    <h2 className="text-5xl md:text-7xl font-light text-[#13443e] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                        Book Appointment
                                    </h2>

                                    <p className="text-[#5b6e68] text-lg md:text-xl leading-relaxed font-light">
                                        Submit the form to schedule a call with our medical experts. We'll respond within a few hours.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Interaction Form Card Section */}
                            <div className="flex-1 bg-[#13443e] relative flex items-center justify-center overflow-hidden">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="w-full h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 relative"
                                    style={{
                                        background: 'linear-gradient(180deg, #2f8f83, #13443e)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)'
                                    }}
                                >
                                    {/* Decorative Pattern Layer */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                                        backgroundImage: 'url("/lotus_icon_transparent.png")',
                                        backgroundPosition: 'center',
                                        backgroundSize: '200px',
                                        backgroundRepeat: 'no-repeat'
                                    }} />

                                    <div className="relative z-10">
                                        {!isSuccess ? (
                                            <form onSubmit={handleInviteSubmit} className="space-y-5">
                                                <div>
                                                    <label className="block text-xs font-bold text-white/70 mb-1.5 px-1 uppercase tracking-widest">Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Your Full Name"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full px-6 py-3.5 rounded-2xl bg-white/20 border border-white/10 focus:border-[#44dbc9] focus:ring-4 focus:ring-[#44dbc9]/20 outline-none transition-all text-white placeholder:text-white/30 shadow-inner"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-white/70 mb-1.5 px-1 uppercase tracking-widest">Phone</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="Your Contact Number"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full px-6 py-3.5 rounded-2xl bg-white/20 border border-white/10 focus:border-[#44dbc9] focus:ring-4 focus:ring-[#44dbc9]/20 outline-none transition-all text-white placeholder:text-white/30 shadow-inner"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-white/70 mb-1.5 px-1 uppercase tracking-widest">Reason For Contact</label>
                                                    <div className="relative">
                                                        <select
                                                            required
                                                            value={formData.reason}
                                                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                                            className="w-full px-6 py-3.5 rounded-2xl bg-white/20 border border-white/10 focus:border-[#44dbc9] focus:ring-4 focus:ring-[#44dbc9]/20 outline-none transition-all text-white appearance-none cursor-pointer text-sm"
                                                        >
                                                            <option className="bg-[#13443e] text-white" value="">Select...</option>
                                                            <option className="bg-[#13443e] text-white" value="consultation">Consultation Request</option>
                                                            <option className="bg-[#13443e] text-white" value="partnership">Partnership Inquiry</option>
                                                            <option className="bg-[#13443e] text-white" value="other">Other</option>
                                                        </select>
                                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                                            <ArrowRight className="w-4 h-4 rotate-90" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-white/70 mb-1.5 px-1 uppercase tracking-widest">Message</label>
                                                    <textarea
                                                        rows={3}
                                                        placeholder="Message here..."
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                        className="w-full px-6 py-3.5 rounded-2xl bg-white/20 border border-white/10 focus:border-[#44dbc9] focus:ring-4 focus:ring-[#44dbc9]/20 outline-none transition-all text-white placeholder:text-white/30 resize-none shadow-inner text-sm"
                                                    />
                                                </div>

                                                <motion.button
                                                    whileHover={{ scale: 1.02, backgroundColor: '#08241e' }}
                                                    whileTap={{ scale: 0.98 }}
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    className="w-full py-5 rounded-full bg-[#0f3d32] text-white font-bold text-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-[0_15px_30px_rgba(15, 61, 50, 0.35)] mt-2 border border-white/10"
                                                >
                                                    {isSubmitting ? (
                                                        <Loader2 className="animate-spin" />
                                                    ) : (
                                                        "Request Callback"
                                                    )}
                                                </motion.button>
                                            </form>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="py-20 text-center"
                                            >
                                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#44dbc9] shadow-[0_0_30px_rgba(68,219,201,0.3)]">
                                                    <CheckCircle2 size={40} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    Request Sent
                                                </h3>
                                                <p className="text-white/70 font-light text-base mx-auto">
                                                    We'll be in touch shortly.
                                                </p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>

                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white z-30"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </InteractiveBackground>
    );
}
