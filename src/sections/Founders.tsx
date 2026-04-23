import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface Founder {
    id: string;
    name: string;
    role: string;
    specialization?: string;
    subtitle?: string;
    image: string;
    bio: string;
    detailedBio: string;
    leadershipVision?: string;
    positionsAwards?: string[];
    research?: string[];
    specializationList?: string[];
    whyConsult?: string;
    expertise: string[];
    education?: { degree: string; institution: string }[];
    certifications?: string[];
    languages?: string[];
    availableDays?: string;
    timings?: string;
    contactInfo?: string[];
    email?: string;
    address?: string;
    modalImage?: string;
    imagePosition?: string;
}

const founders: Founder[] = [
    {
        id: 'founder-sireesha',
        name: "Dr. B. Sireesha Rani",
        role: "Founder & Managing Director",
        specialization: "Infertility Specialist and Obstetrician & Gynecologist",
        subtitle: "MBBS, DNB, DRM (Germany)",
        image: "/.png/founder1.png",
        bio: "Infertility Specialist | Obstetrician & Gynecologist. 16+ years specializing in reproductive medicine and advanced gynecological care.",
        detailedBio: "Dr. B. Sireesha Rani is the Founder and Managing Director of Medcy Hospitals, as well as the Founder of Vizag IVF Centre and Lancet Laparoscopy Centre. With over 16+ years of experience in fertility management, she is widely recognized for her expertise in reproductive medicine and advanced gynecological care.\n\nShe completed her MBBS from Andhra Medical College, Visakhapatnam, and pursued her DNB in Obstetrics & Gynecology from the National Board of Examinations, New Delhi. Further strengthening her specialization, she obtained a Diploma in Reproductive Medicine and Embryology from Kiel University, Germany.\n\nDr. Sireesha Rani is actively involved in both government and private medical bodies across Andhra Pradesh and continues to contribute significantly to advancing fertility care standards.",
        leadershipVision: "Built upon the strong clinical excellence and ethical foundation established by Dr. Sireesha Rani through Medcy IVF, Medcy Hospitals extends this commitment into a comprehensive multi-specialty healthcare ecosystem.\n\nLocated in Arilova, Visakhapatnam, the hospital spans over 1,00,000+ sq. ft. of advanced medical infrastructure and is designed as a 108-bed tertiary care facility, focused on patient-centered care, innovation, and clinical precision.",
        positionsAwards: [
            "Founder & Managing Director — Medcy Hospitals",
            "Founder & Managing Director — Vizag IVF Centre & Lancet Laparoscopy Centre",
            "Vice President — AP ISAR Chapter",
            "Joint Organizing Secretary — Andhra Medical College Century Celebrations",
            "Vice President — OGSV (2024–2025)",
            "Secretary — AP Nursing Homes & Hospitals Association (APNA), Visakhapatnam",
            "Secretary — OGSV (Obstetrics & Gynecological Society of Visakhapatnam) (2022–2023)",
            "Secretary — IMA Women’s Wing, Visakhapatnam",
            "Joint Organizing Secretary — YUVA, FOGSI South Zone",
            "Recipient of the prestigious “Most Preferred IVF Doctor in Andhra Pradesh” award",
            "Award presented by Dr. M. Venkaiah Naidu (Former Vice President of India) on September 3rd, 2023"
        ],
        research: [
            "Published research on CASA-derived human sperm abnormalities, focusing on chromatin packing and DNA fragmentation",
            "Actively contributes to academic conferences and medical advancements in reproductive health"
        ],
        specializationList: [
            "Infertility & Fertility Management",
            "IVF & Assisted Reproductive Technologies (ART)",
            "High-risk Obstetrics",
            "Advanced Gynecological Treatments",
            "Laparoscopic Procedures"
        ],
        whyConsult: "At Medcy Hospitals, Dr. Sireesha Rani leads with a patient-first philosophy, combining clinical expertise with compassionate care. Her approach integrates advanced reproductive technologies, evidence-based treatments, and personalized care plans, ensuring the best outcomes for every patient.",
        expertise: [
            "Infertility & Fertility Management",
            "IVF & Assisted Reproductive Technologies (ART)",
            "High-risk Obstetrics",
            "Advanced Gynecological Treatments",
            "Laparoscopic Procedures"
        ],
        languages: ["Telugu", "English", "Hindi"],
        availableDays: "Mon - Sat",
        timings: "10:00 AM - 07:00 PM",
        contactInfo: ["+91 70707 60909", "+91 70709 60909", "+91 77799 40909"],
        email: "contact@medcyhospitals.com",
        address: "Medcy Hospitals, Arilova, Visakhapatnam, Andhra Pradesh",
        modalImage: "/.png/profile1.png"
    },
    {
        id: 'founder2',
        name: "Bhanu Prasad",
        role: "Enterprise Architect & Technology Leader",
        specialization: "Enterprise Architect and Digital Strategist",
        subtitle: "Enterprise Architect & Technology Leader",
        image: "/.png/bhanu_sir.png",
        bio: "Enterprise Architect & Technology Leader with over 20 years of experience in building scalable digital platforms and enterprise ecosystems.",
        detailedBio: "Bhanu Prasad is a seasoned enterprise architect and technology leader with over 20 years of experience in building scalable digital platforms, enterprise integrations, and end-to-end business solutions. With deep expertise in B2B commerce, CRM, and cloud-based ecosystems, he has consistently driven innovation and revenue growth across global organizations.\n\nCurrently serving as the Founder of Ottobon Inc, he focuses on building next-generation digital solutions that bridge business and technology seamlessly.",
        expertise: [
            "Enterprise Architecture & Solution Design",
            "B2B Commerce & Lead-to-Cash Platforms",
            "CRM & ERP Integrations (Oracle, Salesforce)",
            "Cloud & Middleware Solutions",
            "Business Process Automation (BPM, SOA)",
            "Digital Transformation & Application Modernization",
            "Cross-functional Team Leadership & Delivery"
        ],
        positionsAwards: [
            "Founder — Ottobon Inc (Oct 2024 – Present): Driving innovation in digital platforms and enterprise solutions with a focus on scalable, future-ready architectures.",
            "Principal Architect — Keste (Jan 2018 – Aug 2024): Led presales and architecture for lead-to-cash solutions, enabling enterprise modernization and integration. Played a key role in increasing business revenue through innovative solution design.",
            "Senior Solution Architect — Keste (Sep 2014 – Jan 2018): Delivered end-to-end B2B eCommerce solutions, managing multi-project teams and focusing on Oracle and Salesforce ecosystems.",
            "Solution Architect — ROLTA | Americas (Jun 2013 – Sep 2014): Designed and implemented integration solutions using Oracle Fusion stack, primarily for the utilities sector.",
            "Senior Consultant — Deloitte Consulting (Apr 2007 – Jun 2013): Architected CRM and SCM solutions while leading delivery teams to ensure high-quality enterprise implementations.",
            "Software Engineer — Oracle Corporation (Apr 2006 – Apr 2007): Worked on Fusion Integration Services within JD Edwards, focusing on service enablement frameworks.",
            "Software Engineer — Cordys R&D (Aug 2004 – Apr 2006): Contributed to product development in BPM and SOA-based process engines."
        ],
        research: [
            "Technical Expertise: Java, HTML, JavaScript",
            "BPM (Business Process Management)",
            "SOA (Service-Oriented Architecture)",
            "X-Forms & Integration Frameworks",
            "Oracle & Salesforce Ecosystems"
        ],
        whyConsult: "At Ottobon, Bhanu Prasad brings strategic vision and deep technical expertise to build scalable healthcare and enterprise platforms. His approach combines business-first thinking with robust technology architecture, ensuring impactful, efficient, and future-ready solutions.",
        languages: ["English", "Telugu", "Hindi"],
        availableDays: "Mon - Fri",
        timings: "09:00 AM - 06:00 PM",
        contactInfo: ["+91 90000 00000"],
        email: "bhanu@ottobon.com",
        address: "Hyderabad Center, Telangana, India",
        modalImage: "/.png/profile2.png",
        imagePosition: "center 5%"
    }
];

const Founders = () => {
    const [selectedFounder, setSelectedFounder] = useState<typeof founders[0] | null>(null);

    return (
        <section id="our-founders" className="pt-0 pb-10 relative overflow-hidden bg-[#CFE8E5]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0f3d32]/60 mb-4 bg-[#0f3d32]/5 border border-[#0f3d32]/10 px-4 py-1.5 rounded-full"
                    >
                        The Visionaries
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-[#0f3d32]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our Founders
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#2a6a5a] max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        A perfect synergy of clinical expertise and engineering excellence, dedicated to building the future of healthcare infrastructure.
                    </motion.p>
                </div>

                <div className="flex justify-center gap-6 md:gap-10 flex-col md:flex-row perspective-1000">
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(15, 61, 50, 0.4)" }}
                        src="/.png/Enterprise Architect & Technology Leader (1) (2).png"
                        alt="Enterprise Architect & Technology Leader"
                        className="max-w-sm md:max-w-md lg:max-w-lg rounded-[24px] shadow-lg cursor-pointer"
                        onClick={() => setSelectedFounder(founders[0])}
                    />
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(15, 61, 50, 0.4)" }}
                        src="/.png/Enterprise Architect & Technology Leader (3).png"
                        alt="Enterprise Architect & Technology Leader"
                        className="max-w-sm md:max-w-md lg:max-w-lg rounded-[24px] shadow-lg cursor-pointer"
                        onClick={() => setSelectedFounder(founders[1])}
                    />
                </div>


            </div>

            {/* Profile Modal */}
            <AnimatePresence>
                {selectedFounder && (
                    <div className="fixed inset-0 z-[100] flex justify-center overflow-y-auto pointer-events-auto bg-white custom-scrollbar">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFounder(null)}
                            className="fixed inset-0 bg-white"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-5xl pointer-events-auto mb-24 mt-4 md:mt-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header: High-Fidelity Centered Layout */}
                            <div className="pt-0 pb-12 text-center relative px-12">
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1, 0.98] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="mb-8 flex justify-center"
                                >
                                    <img src="/.png/Group 97.png" alt="Medcy Logo" className="h-10 w-auto opacity-70" />
                                </motion.div>

                                <button
                                    onClick={() => setSelectedFounder(null)}
                                    className="absolute top-10 right-10 p-3 rounded-full hover:bg-slate-50 transition-colors z-20 group"
                                >
                                    <X className="w-6 h-6 text-slate-300 group-hover:text-brand-emerald" />
                                </button>

                                <h1 className="text-5xl md:text-7xl font-light text-[#0f3d32] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {selectedFounder.name}
                                </h1>
                                <p className="text-[#0f3d32]/60 text-sm font-medium tracking-wide mb-10">
                                    {selectedFounder.subtitle}
                                </p>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto text-[#0f3d32]/50 text-xs font-bold uppercase tracking-widest px-8">
                                    <div className="flex items-center gap-2">
                                        <span>Available Days :</span>
                                        <span className="text-brand-emerald">{selectedFounder.availableDays || "Mon-Sat"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>Timings :</span>
                                        <span className="text-brand-emerald">{selectedFounder.timings}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Center-aligned Profile Portrait */}
                            <div className="px-10 md:px-20 mb-16 flex justify-center">
                                <div className="relative w-full max-w-4xl aspect-video rounded-[40px] overflow-hidden shadow-xl border border-slate-100">
                                    <img
                                        src={selectedFounder.modalImage || selectedFounder.image}
                                        alt={selectedFounder.name}
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: selectedFounder.imagePosition || 'center' }}
                                    />
                                </div>
                            </div>

                            {/* Modal Content Column Area */}
                            <div className="px-10 md:px-20 pb-24">
                                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                                    {/* Left Column: Reach Out Card */}
                                    <div className="lg:w-[320px] shrink-0">
                                        <div className="p-10 rounded-[32px] border border-[#0f3d32]/10 space-y-10 lg:sticky lg:top-12">
                                            <h4 className="text-[#0f3d32] font-extrabold text-xl tracking-tight">
                                                Reach out to us
                                            </h4>

                                            <div className="space-y-8">
                                                <div className="flex items-start gap-4">
                                                    <Phone className="w-4 h-4 text-brand-emerald mt-1.5 shrink-0" />
                                                    <div className="space-y-1.5">
                                                        {selectedFounder.contactInfo?.map((phone, i) => (
                                                            <div key={i} className="text-[#0f3d32] text-sm font-bold border-b border-[#0f3d32]/10 pb-0.5 w-max">
                                                                {phone}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                    <Mail className="w-4 h-4 text-brand-emerald mt-1.5 shrink-0" />
                                                    <div className="text-[#0f3d32] text-sm font-bold border-b border-[#0f3d32]/10 pb-0.5 break-all">
                                                        {selectedFounder.email}
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                    <MapPin className="w-4 h-4 text-brand-emerald mt-1.5 shrink-0" />
                                                    <div className="text-[#0f3d32]/70 text-sm font-medium leading-relaxed border-b border-[#0f3d32]/10 pb-0.5">
                                                        {selectedFounder.address}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Main Content area */}
                                    <div className="flex-1 space-y-20">
                                        {/* Bio / About */}
                                        <div className="space-y-8">
                                            <div className="text-[#5b6e68] text-lg leading-relaxed font-light whitespace-pre-wrap">
                                                {selectedFounder.detailedBio}
                                            </div>
                                        </div>

                                        {/* Leadership & Vision */}
                                        {selectedFounder.leadershipVision && (
                                            <div className="space-y-8">
                                                <h3 className="text-3xl font-normal text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    Leadership & Vision
                                                </h3>
                                                <div className="text-[#5b6e68] text-md leading-relaxed font-light whitespace-pre-wrap">
                                                    {selectedFounder.leadershipVision}
                                                </div>
                                            </div>
                                        )}

                                        {/* Areas of Expertise / Specialization */}
                                        {(selectedFounder.specializationList || selectedFounder.expertise) && (
                                            <div className="space-y-8">
                                                <h3 className="text-3xl font-normal text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    Areas of Expertise
                                                </h3>
                                                <ul className="space-y-4">
                                                    {(selectedFounder.specializationList || selectedFounder.expertise).map((item, i) => (
                                                        <li key={i} className="flex gap-4 text-[#5b6e68] text-base font-medium">
                                                            <span className="text-brand-emerald font-black mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Positions, Awards & Recognitions */}
                                        {selectedFounder.positionsAwards && (
                                            <div className="space-y-8">
                                                <h3 className="text-3xl font-normal text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {selectedFounder.id === 'founder2' ? 'Professional Experience' : 'Training & Recognition'}
                                                </h3>
                                                <ul className="space-y-4 text-xs md:text-sm">
                                                    {selectedFounder.positionsAwards.map((item, i) => (
                                                        <li key={i} className="flex gap-4 text-[#5b6e68] font-medium leading-relaxed">
                                                            <span className="text-brand-emerald font-black mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Research & Contributions */}
                                        {selectedFounder.research && (
                                            <div className="space-y-8">
                                                <h3 className="text-3xl font-normal text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {selectedFounder.id === 'founder2' ? 'Technical Expertise' : 'Research & Publications'}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {selectedFounder.research.map((res, i) => (
                                                        <li key={i} className="flex gap-4 text-[#5b6e68] text-sm font-medium leading-relaxed italic">
                                                            <span className="text-brand-emerald font-black shrink-0 mt-1">•</span>
                                                            {res}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Why Consult / Closing */}
                                        {selectedFounder.whyConsult && (
                                            <div className="space-y-8">
                                                <h3 className="text-3xl font-normal text-[#0f3d32]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {selectedFounder.id === 'founder2' ? 'Leadership at Ottobon' : `Dr. Sireesha Rani at Medcy`}
                                                </h3>
                                                <div className="text-[#5b6e68] text-md leading-relaxed font-light italic bg-slate-50 p-10 rounded-[32px] border border-[#0f3d32]/5">
                                                    {selectedFounder.whyConsult}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Founders;
