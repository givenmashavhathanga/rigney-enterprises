import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LOGOS } from "@/constants/logos";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/portfolio" },
  { name: "Tenders", path: "/tenders" },
  { name: "Client Portal", path: "/client-portal" },
  { name: "Contact", path: "/contact" },
];

/**
 * Navbar component - Synced with layout version to ensure consistency
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-xl py-3"
          : isHome
          ? "bg-transparent py-5"
          : "bg-charcoal py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center group relative z-10">
          <img 
            src={LOGOS.MENU_LOGO} 
            alt="Rigney Enterprises Logo" 
            className="h-10 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 xl:gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group",
                  location.pathname === link.path ? "text-gold" : "text-white/90 hover:text-gold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-1 left-3 right-3 h-[2px] bg-gold transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
                  location.pathname === link.path ? "scale-x-100" : ""
                )} />
              </Link>
            ))}
          </div>
          <div className="ml-6">
            <Button
              asChild
              size="sm"
              className="bg-gold hover:bg-white hover:text-charcoal text-white font-bold border-none px-6 py-5 rounded-full shadow-lg shadow-gold/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link to="/request-quote" className="tracking-widest uppercase text-[10px] flex items-center gap-2">
                Quote <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden relative z-10">
          <Button asChild size="sm" className="bg-gold text-white font-bold h-9 px-4 text-[10px] rounded-full">
            <Link to="/request-quote">Quote</Link>
          </Button>
          <button
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-charcoal z-[90] md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={LOGOS.MENU_LOGO} alt="Logo" className="h-10 w-auto" />
              </Link>
              <button className="text-white p-2" onClick={() => setIsOpen(false)}>
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center p-8 gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-serif font-bold block transition-colors",
                    location.pathname === link.path ? "text-gold" : "text-white hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Button asChild size="lg" className="bg-gold text-white font-bold w-full h-16 rounded-xl" onClick={() => setIsOpen(false)}>
                  <Link to="/request-quote">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;