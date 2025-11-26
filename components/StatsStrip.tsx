import React from 'react';

export const StatsStrip: React.FC = () => {
    return (
        <section id="coverage" className="py-20 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-river-orange font-bold uppercase tracking-widest text-sm mb-3">Coverage</h2>
                        <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">Nationwide Reach</h3>
                        <p className="text-slate-600">
                            Our strategic network allows us to cover lanes across the continental US efficiently. From coast to coast, we have the capacity you need.
                        </p>
                    </div>
                    
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-river-orange/30 transition-colors">
                            <div className="text-4xl font-black text-river-navy mb-2">48</div>
                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">States Covered</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-river-orange/30 transition-colors">
                            <div className="text-4xl font-black text-river-navy mb-2">500+</div>
                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Loads Monthly</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-river-orange/30 transition-colors">
                            <div className="text-4xl font-black text-river-navy mb-2">24/7</div>
                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Dispatch Ops</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}