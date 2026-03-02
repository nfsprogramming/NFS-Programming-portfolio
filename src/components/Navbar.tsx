import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <div className="text-xl font-bold tracking-tighter uppercase">Aura.</div>
      <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
        <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
        <a href="#projects" className="hover:text-brand-accent transition-colors">Projects</a>
        <a href="#skills" className="hover:text-brand-accent transition-colors">Skills</a>
        <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
      </div>
      <div className="md:hidden">
        {/* Mobile menu could go here */}
      </div>
    </motion.nav>
  );
};
