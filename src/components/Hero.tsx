import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-brand-muted mb-4 block">Creative Developer & Designer</span>
        <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase mb-8">
          Crafting <br />
          <span className="text-editorial font-normal lowercase italic text-brand-accent">Digital</span> <br />
          Aura.
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="max-w-md text-lg text-brand-muted leading-relaxed">
            Building immersive experiences at the intersection of design and technology. 
            Focused on creating interfaces that feel as good as they look.
          </p>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-widest vertical-rl rotate-180">Scroll to explore</span>
            <div className="w-px h-12 bg-white/20" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
