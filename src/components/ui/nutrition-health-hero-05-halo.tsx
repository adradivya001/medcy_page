"use client";


import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function NutritionHealthHero05Halo({ className }: { className?: string }) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <section className={"w-full " + (className || "")}>
            <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://pub-2df60d97ace544a68c00aa294c98f8e5.r2.dev/Halo/image/hero%2005.png"
                        alt="Happy family in backyard"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/[0.18] to-transparent z-10" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-0 left-0 z-20 px-6 md:px-14 pb-16 flex flex-col max-w-[600px]"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="w-full max-w-[520px] text-white text-[56px] font-medium leading-[64px] tracking-[-1.5px] mb-8"
                    >
                        The Future of <br />
                        Health Tech <br />
                        Infrastructure
                    </motion.h1>

                    <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-10">
                        {
                            [
                                "40% reduction in operating costs",
                                "2.5x growth in clinic revenue",
                                "99% front-office automation rate",
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                        <path d="M12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM10.8036 16.8L19.2876 8.3148L17.5908 6.618L10.8036 13.4064L7.4088 10.0116L5.712 11.7084L10.8036 16.8Z" fill="#1FC16B" />
                                    </svg>
                                    <span className="text-[#FDFDFD] text-[18px] font-normal leading-[24px]">{text}</span>
                                </div>
                            ))
                        }
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex p-[4px_24px_4px_4px] justify-center items-center gap-[12px] rounded-full bg-[#E5F0C6] backdrop-blur-[50px] text-[#0F1E1A] text-[16px] font-normal leading-[24px] hover:opacity-90 transition-opacity"
                        >
                            <div className="w-[44px] h-[44px] aspect-square rounded-full flex items-center justify-center bg-[#034F46]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <rect width="44" height="44" rx="22" fill="#034F46" />
                                    <path d="M17 27.5L26.5 18M26.5 18V26M26.5 18H18.5" stroke="#E5F0C6" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span className="font-medium">Watch Demo</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, border: "1px solid rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            className="flex p-[14px_28px] justify-center items-center gap-[10px] rounded-full bg-white/10 backdrop-blur-[50px] border border-white/5 text-[#FDFDFD] text-[16px] font-normal leading-[24px] transition-colors hover:bg-white/20"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
