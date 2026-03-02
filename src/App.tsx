import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { GeminiAssistant } from './components/GeminiAssistant';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative selection:bg-brand-accent selection:text-white">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-accent pointer-events-none z-[100] hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-accent pointer-events-none z-[100] hidden md:block"
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28, mass: 0.2 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section (Inline) */}
        <section id="about" className="py-32 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-muted block">The Story</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                About <br /><span className="text-editorial italic font-normal text-brand-accent lowercase">Myself.</span>
              </h2>
              <p className="text-xl text-brand-muted leading-relaxed">
                I am a multidisciplinary developer focused on building digital products that bridge the gap between aesthetics and functionality. 
                With over 5 years of experience, I've collaborated with global brands to create memorable digital experiences.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-muted mb-2">Location</h4>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-muted mb-2">Experience</h4>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>

      <GeminiAssistant />
    </div>
  );
}
