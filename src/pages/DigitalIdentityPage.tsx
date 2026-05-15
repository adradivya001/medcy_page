import { motion } from 'framer-motion';
import { Shield, Globe, Zap, Users, BarChart, ArrowRight } from 'lucide-react';

const DigitalIdentityPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-teal mb-5 bg-brand-teal/5 border border-brand-teal/10 px-4 py-1.5 rounded-full"
          >
            Professional Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-[#0f3d32] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Digital Identity, <br />
            <span className="text-brand-teal">Defined by Medcy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#5b6e68] max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-10"
          >
            In the modern clinical landscape, your digital presence is your strongest referral tool. We build high-performance digital identities that reflect your clinical expertise and build patient trust.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#0f3d32] text-white rounded-full font-bold text-lg hover:bg-brand-teal transition-all shadow-xl shadow-[#0f3d32]/20">
              Claim Your Profile
            </button>
            <button className="px-8 py-4 bg-white text-[#0f3d32] border border-[#0f3d32]/10 rounded-full font-bold text-lg hover:bg-[#f8faf9] transition-all">
              View Demo
            </button>
          </motion.div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-mesh pointer-events-none opacity-40" />
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#CFE8E5]/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe className="w-10 h-10 text-brand-teal" />,
                title: "SEO-Optimized Presence",
                description: "Be found by patients when they need you most. Our profiles are built with search-first architecture."
              },
              {
                icon: <Shield className="w-10 h-10 text-brand-teal" />,
                title: "Trust & Credibility",
                description: "Showcase your credentials, patient reviews, and clinical outcomes in a verified professional environment."
              },
              {
                icon: <Zap className="w-10 h-10 text-brand-teal" />,
                title: "Seamless Booking",
                description: "Convert visitors into patients with integrated appointment scheduling and WhatsApp automation."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[32px] bg-white border border-[#0f3d32]/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-[#0f3d32] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#5b6e68] font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f3d32] mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Patient Experience <br />
              <span className="text-brand-teal">Designed for Trust.</span>
            </h2>
            <p className="text-[#5b6e68] text-lg font-medium leading-relaxed mb-10">
              We don't just build websites; we design patient journeys. Every pixel is optimized to convey professionalism and facilitate the first step towards care.
            </p>
            
            <ul className="space-y-6">
              {[
                "Mobile-first responsive design",
                "High-speed performance & accessibility",
                "Integrated patient testimonials",
                "Direct clinical outcome showcases"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[#0f3d32] font-bold">
                  <div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Digital Identity Preview" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating UI Element */}
            <div className="absolute -bottom-10 -left-10 p-6 bg-white rounded-3xl shadow-xl border border-[#0f3d32]/5 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-[#0f3d32]/40 uppercase tracking-widest">Live Profile</span>
              </div>
              <p className="text-sm font-bold text-[#0f3d32]">Dr. Sarah Mitchell</p>
              <p className="text-[10px] text-brand-teal font-bold">Senior Fertility Specialist</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0f3d32] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to secure your clinical legacy?
          </h2>
          <p className="text-white/60 text-lg font-medium mb-12 max-w-2xl mx-auto">
            Join the elite network of specialists who are redefining healthcare delivery through a premium digital identity.
          </p>
          <button className="px-10 py-5 bg-brand-teal text-white rounded-full font-bold text-xl hover:bg-white hover:text-[#0f3d32] transition-all shadow-2xl shadow-black/20">
            Start Your Journey
          </button>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 blur-[100px] rounded-full" />
      </section>
    </main>
  );
};

export default DigitalIdentityPage;
