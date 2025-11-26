import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-river-navy text-white' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
                <Truck className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-tight leading-none ${isScrolled ? 'text-river-navy' : 'text-white'}`}>
                RIVERWAY
              </span>
              <span className={`text-xs font-semibold tracking-widest uppercase ${isScrolled ? 'text-river-orange' : 'text-white/80'}`}>
                Logistics Inc.
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-river-orange ${
                    isScrolled ? 'text-slate-600' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="tel:2816159606"
              className="flex items-center gap-2 bg-river-orange hover:bg-river-orangeHover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
            >
              <Phone className="h-4 w-4" />
              <span>281-615-9606</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-river-orange"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-700 hover:text-river-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-slate-100 my-2" />
            <a
              href="tel:2816159606"
              className="flex justify-center items-center gap-2 bg-river-navy text-white px-5 py-4 rounded-lg font-semibold"
            >
              <Phone className="h-5 w-5" />
              Call Dispatch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};