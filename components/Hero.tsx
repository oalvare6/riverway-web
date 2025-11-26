import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-river-dark">
      {/* Background Image with Technical Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop"
          alt="Industrial Freight Logistics"
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-river-dark via-river-navy/90 to-river-navy/70" />
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-river-orange/10 border border-river-orange/20 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-river-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-river-orange"></span>
              </span>
              <span className="text-river-orange text-xs font-bold tracking-widest uppercase">
                MC# 1473682 • DOT# 3955747
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 tracking-tight">
              FREIGHT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-river-orange to-orange-200">
                TRANSPORTATION
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light border-l-2 border-river-orange pl-6">
              Specializing in <strong className="text-white">flatbed logistics</strong>, heavy machinery, and oversized loads. 
              We provide the reliability and safety your supply chain demands.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a
                href="tel:2816159606"
                className="inline-flex justify-center items-center gap-3 bg-river-orange hover:bg-river-orangeHover text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/40 uppercase tracking-wide"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-3 bg-transparent hover:bg-white/5 border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all uppercase tracking-wide"
              >
                View Capabilities
              </a>
            </div>
          </motion.div>

          {/* Industrial Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col">
              <div className="text-3xl font-black text-white font-display">15+</div>
              <div className="text-xs font-bold text-river-orange uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-black text-white font-display">98%</div>
              <div className="text-xs font-bold text-river-orange uppercase tracking-wider">On-Time Delivery</div>
            </div>
            <div className="flex flex-col">
              <div className="text-3xl font-black text-white font-display">48</div>
              <div className="text-xs font-bold text-river-orange uppercase tracking-wider">States Covered</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};