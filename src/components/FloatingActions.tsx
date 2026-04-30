import React from 'react';
import { MessageCircle, FileText, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingActions = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setActivePage('quote')}
        className="bg-charcoal text-gold p-4 shadow-2xl flex items-center gap-3 border border-gold/30 hover:bg-charcoal/95"
      >
        <FileText size={24} />
        <span className="font-bold text-sm pr-2">QUICK QUOTE</span>
      </motion.button>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/27820000000"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 shadow-2xl rounded-full flex items-center justify-center animate-bounce"
      >
        <MessageCircle size={28} />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+27110000000"
        className="bg-gold text-charcoal p-4 shadow-2xl rounded-full flex items-center justify-center md:hidden"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};