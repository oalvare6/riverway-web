import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Card */}
        <div className="bg-gradient-to-br from-river-navy to-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-200 mb-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-river-orange opacity-10 rounded-full blur-[80px] -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-[80px] -ml-16 -mb-16" />
            
            <div className="relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Let's Get Your Freight Moving</h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                    Get competitive rates and reliable service for your next shipment. 
                    Contact our dispatch team today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:2816159606" className="inline-flex justify-center items-center gap-2 bg-river-orange hover:bg-river-orangeHover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-900/30">
                        <Phone className="w-5 h-5" />
                        Call 281-615-9606
                    </a>
                    <a href="mailto:malena@riverwaylogistics.com" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/10">
                        <Mail className="w-5 h-5" />
                        Email Quote Request
                    </a>
                </div>
            </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-100 pb-12">
            <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-river-navy p-2 rounded-lg text-white">
                         <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-xl text-slate-900">RIVERWAY LOGISTICS</span>
                </div>
                <p className="text-slate-500 leading-relaxed max-w-sm mb-6">
                    Professional flatbed transportation services with a commitment to safety, reliability, and customer success across the continental US.
                </p>
                 <div className="flex gap-4 text-sm font-semibold text-slate-400">
                    <span>MC# 1473682</span>
                    <span>•</span>
                    <span>DOT# 3955747</span>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
                <ul className="space-y-4">
                    <li><a href="#services" className="text-slate-500 hover:text-river-orange transition-colors">Services</a></li>
                    <li><a href="#coverage" className="text-slate-500 hover:text-river-orange transition-colors">Coverage</a></li>
                    <li><a href="#why-us" className="text-slate-500 hover:text-river-orange transition-colors">Why Choose Us</a></li>
                    <li><a href="#contact" className="text-slate-500 hover:text-river-orange transition-colors">Get A Quote</a></li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-500">
                        <Phone className="w-5 h-5 text-river-orange shrink-0" />
                        <a href="tel:2816159606" className="hover:text-slate-900">281-615-9606</a>
                    </li>
                    <li className="flex items-start gap-3 text-slate-500">
                        <Mail className="w-5 h-5 text-river-orange shrink-0" />
                        <a href="mailto:malena@riverwaylogistics.com" className="hover:text-slate-900 break-all">malena@riverwaylogistics.com</a>
                    </li>
                    <li className="flex items-start gap-3 text-slate-500">
                        <MapPin className="w-5 h-5 text-river-orange shrink-0" />
                        <span>Houston, TX HQ<br/>Serving 48 States</span>
                    </li>
                 </ul>
            </div>
        </div>

        <div className="pt-8 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Riverway Logistics Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};