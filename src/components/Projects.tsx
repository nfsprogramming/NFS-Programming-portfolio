import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Lumina Dashboard",
    category: "Web Application",
    description: "A high-performance analytics dashboard featuring real-time data visualization and complex filtering systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    demo: "#",
    repo: "#"
  },
  {
    title: "Ethereal Brand",
    category: "Identity Design",
    description: "Complete visual identity system for a luxury fashion brand, including logo, typography, and digital assets.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    demo: "#",
    repo: "#"
  },
  {
    title: "Nexus Platform",
    category: "Product Design",
    description: "A collaborative workspace platform designed to streamline remote team workflows and communication.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    demo: "#",
    repo: "#"
  },
  {
    title: "Aura Mobile",
    category: "iOS App",
    description: "A minimalist meditation and wellness app built with React Native, focusing on immersive audio experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    demo: "#",
    repo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-muted mb-2 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Portfolio.</h2>
          </div>
          <p className="text-brand-muted max-w-xs text-sm">
            A collection of projects where I've pushed the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                    title="Live Demo"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                    title="Code Repository"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                  </div>
                  <span className="text-xs font-mono opacity-20">0{index + 1}</span>
                </div>
                <p className="text-brand-muted leading-relaxed text-sm max-w-md">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-2">
                  <a href={project.demo} className="text-xs uppercase tracking-widest font-bold border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">Live Demo</a>
                  <a href={project.repo} className="text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-white transition-colors">Source Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
