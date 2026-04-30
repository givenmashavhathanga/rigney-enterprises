import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Facebook, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LOGOS } from '@/constants/logos';

export const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <footer className="bg-charcoal text-cream border-t-4 border-gold pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <img 
              src={LOGOS.SECONDARY} 
              alt="Rigney Enterprises Logo" 
              className="h-16 w-auto object-contain bg-white/10 p-2 rounded"
            />
            <div>
              <span className="text-2xl font-bold block leading-tight">RIGNEY</span>
              <span className="text-xs tracking-[0.3em] text-gold font-semibold uppercase">Enterprises</span>
            </div>
          </div>
          <p className="text-cream/60 leading-relaxed">
            Professional construction and civil engineering firm dedicated to building South Africa's future through excellence and trust.
          </p>
          <div className="flex gap-4">
            {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="text-cream/40 hover:text-gold transition-colors">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
          <ul className="space-y-4 text-cream/60">
            {['Home', 'About', 'Services', 'Portfolio', 'Tender Portal', 'Client Tracking'].map((link) => (
              <li key={link}>
                <button 
                  onClick={() => setActivePage(link.toLowerCase().replace(' ', ''))}
                  className="hover:text-gold transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-8">Official Contacts</h4>
          <ul className="space-y-6 text-cream/60">
            <li className="flex gap-4">
              <Phone className="text-gold w-5 h-5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-gold uppercase mb-1">Office Line</p>
                <p className="text-cream font-medium">+27 11 000 0000</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="text-gold w-5 h-5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-gold uppercase mb-1">Email Inquiry</p>
                <p className="text-cream font-medium">info@rigneyenterprises.co.za</p>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="text-gold w-5 h-5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-gold uppercase mb-1">Location</p>
                <p className="text-cream font-medium">Sandton, Johannesburg</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
          <p className="text-cream/60 mb-6 text-sm">Stay updated with our latest project developments and tender opportunities.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm flex-grow focus:outline-none focus:border-gold"
            />
            <Button className="bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-none">Join</Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-xs text-cream/40">
            <ShieldCheck size={14} className="text-gold" />
            <span>POPIA Compliant Secure Portal</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-cream/40 text-sm">
          © {new Date().getFullYear()} Rigney Enterprises. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-cream/40">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms of Service</a>
          <a href="#" className="hover:text-gold">Site Map</a>
        </div>
      </div>
    </footer>
  );
};