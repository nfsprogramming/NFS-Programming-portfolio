import { motion } from 'motion/react';

const skills = [
  { name: "React / Next.js", level: "95%" },
  { name: "TypeScript", level: "90%" },
  { name: "Tailwind CSS", level: "98%" },
  { name: "Node.js", level: "85%" },
  { name: "UI / UX Design", level: "92%" },
  { name: "Three.js", level: "75%" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-brand-muted mb-2 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">Skills & <br /><span className="text-editorial italic font-normal text-brand-accent lowercase">Expertise.</span></h2>
          <p className="text-brand-muted leading-relaxed max-w-md">
            I specialize in building high-performance, accessible, and visually stunning web applications. 
            My toolkit is constantly evolving to stay at the forefront of digital innovation.
          </p>
        </div>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium uppercase tracking-widest">{skill.name}</span>
                <span className="text-xs font-mono text-brand-muted">{skill.level}</span>
              </div>
              <div className="h-px w-full bg-white/10 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-brand-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
