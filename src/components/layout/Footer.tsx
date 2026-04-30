import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGOS } from "@/constants/logos";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <img 
              src={LOGOS.FOOTER_LOGO} 
              alt="Rigney Enterprises" 
              className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            A premier South African construction and civil engineering firm dedicated to building excellence and delivering trust across every project.
          </p>
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-gold hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-gold hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-gold hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-gold hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-serif text-xl font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-white/60 hover:text-gold transition-colors">About Our Company</Link></li>
            <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors">Our Specializations</Link></li>
            <li><Link to="/portfolio" className="text-white/60 hover:text-gold transition-colors">Project Portfolio</Link></li>
            <li><Link to="/tenders" className="text-white/60 hover:text-gold transition-colors">Tender Center</Link></li>
            <li><Link to="/contact" className="text-white/60 hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-gold font-serif text-xl font-bold mb-6">Services</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-white/60">Building Construction</li>
            <li className="text-white/60">Civil Engineering</li>
            <li className="text-white/60">Infrastructure Maintenance</li>
            <li className="text-white/60">Property Renovations</li>
            <li className="text-white/60">Project Management</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gold font-serif text-xl font-bold mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4">
              <MapPin className="h-6 w-6 text-gold shrink-0" />
              <span className="text-white/60 text-sm">Sandton, Johannesburg,<br />South Africa</span>
            </li>
            <li className="flex gap-4">
              <Phone className="h-6 w-6 text-gold shrink-0" />
              <span className="text-white/60 text-sm">+27 (0) 11 123 4567</span>
            </li>
            <li className="flex gap-4">
              <Mail className="h-6 w-6 text-gold shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="mailto:info@rigneyenterprises.co.za" className="text-white/60 text-sm hover:text-gold transition-colors">info@rigneyenterprises.co.za</a>
                <a href="mailto:quotes@rigneyenterprises.co.za" className="text-white/60 text-sm hover:text-gold transition-colors">quotes@rigneyenterprises.co.za</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-xs">
          &copy; {currentYear} Rigney Enterprises. All Rights Reserved. Built with Excellence.
        </p>
        <div className="flex gap-6">
          <Link to="#" className="text-white/40 text-xs hover:text-white">Privacy Policy</Link>
          <Link to="#" className="text-white/40 text-xs hover:text-white">Terms of Service</Link>
          <Link to="#" className="text-white/40 text-xs hover:text-white">PAIA Manual</Link>
        </div>
      </div>
    </footer>
  );
}