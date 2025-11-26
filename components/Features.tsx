import React from 'react';
import { Target, Shield, Clock, Zap, FileCheck, Truck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-river-dark relative overflow-hidden">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-river-orange"></div>
              <h2 className="text-river-orange font-bold uppercase tracking-widest text-sm">Why Riverway</h2>
            </div>
            
            <h3 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              BUILT FOR <br />
              <span className="text-slate-400">BROKER SUCCESS.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed border-l border-white/10 pl-6">
              In an industry full of uncertainty, we are the constant. We combine old-school work ethic with modern technology to keep your supply chain moving without interruption.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-white/5 group-hover:bg-river-orange/20 transition-colors">
                        <Target className="text-river-orange w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-lg">Tech Driven</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-12">Real-time tracking and digital documentation for total visibility of your freight.</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-white/5 group-hover:bg-river-orange/20 transition-colors">
                        <Clock className="text-river-orange w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-lg">98% On-Time</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-12">We respect appointment windows and communicate proactively with all stakeholders.</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-white/5 group-hover:bg-river-orange/20 transition-colors">
                        <Shield className="text-river-orange w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-lg">Fully Insured</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-12">Comprehensive cargo ($250k+) and liability coverage for complete peace of mind.</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-white/5 group-hover:bg-river-orange/20 transition-colors">
                        <Zap className="text-river-orange w-6 h-6" />
                    </div>
                    <h4 className="text-white font-bold text-lg">Fast Response</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-12">Quotes in minutes. 24/7 dispatch support that actually answers the phone.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-river-navy">
                <img 
                    src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2788&auto=format&fit=crop" 
                    alt="Truck Loading" 
                    className="w-full h-auto object-cover opacity-90 mix-blend-overlay"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-river-dark via-transparent to-transparent"></div>
                 
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <Truck className="text-river-orange h-8 w-8" />
                            <div>
                                <div className="text-white font-bold uppercase tracking-wider text-sm">Active Fleet</div>
                                <div className="text-slate-300 text-xs">Positioned nationwide</div>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-river-orange w-3/4"></div>
                        </div>
                    </div>
                 </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-river-orange opacity-50"></div>
             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-river-orange opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};