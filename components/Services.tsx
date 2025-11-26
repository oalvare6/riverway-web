import React from 'react';
import { 
  Construction, 
  Package, 
  Truck, 
  Box, 
  Anvil, 
  Ruler 
} from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'steel',
    title: 'Steel & Metal',
    description: 'Expert securing of coils, pipes, beams, and sheets. We understand the specific tie-down requirements for heavy metal loads.',
    icon: Anvil,
  },
  {
    id: 'machinery',
    title: 'Heavy Machinery',
    description: 'Construction equipment, industrial generators, and manufacturing units delivered safely to job sites.',
    icon: Construction,
  },
  {
    id: 'materials',
    title: 'Building Materials',
    description: 'Lumber, concrete products, and palletized goods handled with care and efficiency direct to the job site.',
    icon: Package,
  },
  {
    id: 'oversized',
    title: 'Oversized Loads',
    description: 'Specialized handling for over-dimensional freight including permitting, pilot cars, and route planning.',
    icon: Truck,
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    description: 'Transformers, HVAC units, and specialized components for the energy and manufacturing sectors.',
    icon: Box,
  },
  {
    id: 'structural',
    title: 'Structural Components',
    description: 'Delivery of pre-fabricated structures, bridge components, and architectural elements.',
    icon: Ruler,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-2 mb-3">
             <span className="w-8 h-0.5 bg-river-orange"></span>
             <h2 className="text-river-orange font-bold uppercase tracking-widest text-sm">Capabilities</h2>
             <span className="w-8 h-0.5 bg-river-orange"></span>
          </div>
          <h3 className="font-display font-black text-4xl md:text-5xl text-river-navy mb-6">FLATBED SPECIALISTS</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just drive trucks; we engineer solutions for complex freight. 
            From standard flatbed loads to specialized heavy haul projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-slate-50 hover:bg-white rounded-lg p-8 transition-all duration-300 border border-slate-100 hover:border-river-orange hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center group-hover:bg-river-orange group-hover:border-river-orange transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-river-navy group-hover:text-white transition-colors" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 text-river-orange font-bold text-sm transition-opacity">0{services.indexOf(service) + 1}</div>
              </div>
              
              <h4 className="font-display font-bold text-xl text-river-navy mb-3">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};