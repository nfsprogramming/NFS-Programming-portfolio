import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Noteshare",
    category: "HTML Project",
    description: "A note-sharing project focused on simple collaboration and clean content presentation.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000",
    demo: "https://github.com/nfsprogramming/Noteshare",
    repo: "https://github.com/nfsprogramming/Noteshare"
  },
  {
    title: "Smart Resume Analyzer",
    category: "AI / NLP",
    description: "AI-powered resume analysis tool that gives feedback on skills, relevance, formatting, and keyword optimization.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
    demo: "https://smartresumeanlyzer.streamlit.app/",
    repo: "https://github.com/nfsprogramming/smartresumeanlyzer"
  },
  {
    title: "NFS Programming Website",
    category: "Python / Web",
    description: "Personal brand site showcasing projects, learning path, and development work as NFS Programming.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000",
    demo: "https://nfs-programming.vercel.app",
    repo: "https://github.com/nfsprogramming/nfs-programming"
  },
  {
    title: "QR & Business Card Generator",
    category: "TypeScript Utility",
    description: "Utility app that converts links into QR codes and supports quick business card style sharing.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1000",
    demo: "https://link-to-qr-and-business-card.vercel.app",
    repo: "https://github.com/nfsprogramming/link-to-qr-and-business-card"
  },
  {
    title: "Surprise Portfolio",
    category: "JavaScript Portfolio",
    description: "A creative personal portfolio project built with interactive visuals and modern frontend tooling.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    demo: "https://surprise-portfolio.vercel.app",
    repo: "https://github.com/nfsprogramming/surprise-portfolio"
  },
  {
    title: "Browser",
    category: "TypeScript App",
    description: "An experimental browser-focused project exploring features and interface behavior with TypeScript.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1000",
    demo: "https://github.com/nfsprogramming/Browser",
    repo: "https://github.com/nfsprogramming/Browser"
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
