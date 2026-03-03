import { motion } from 'motion/react';
import { Mail, Github, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-brand-muted mb-4 block">Get in touch</span>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-8">
            Let's <span className="text-editorial italic font-normal text-brand-accent lowercase">Talk.</span>
          </h2>
          <a
            href="mailto:nifrasempire25@gmail.com"
            className="text-2xl md:text-4xl font-light hover:text-brand-accent transition-colors flex items-center justify-center gap-4 group"
          >
            nifrasempire25@gmail.com
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-20 border-t border-white/10 gap-8">
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/nfsprogramming"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a href="mailto:nifrasempire25@gmail.com" className="text-brand-muted hover:text-white transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-brand-muted">
            Copyright 2026 NFS Programming. All rights reserved.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] uppercase tracking-[0.3em] text-brand-muted hover:text-white transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </section>
  );
};
