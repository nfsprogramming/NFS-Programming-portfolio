import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, X, Loader2 } from 'lucide-react';
import { generatePortfolioContent } from '../services/gemini';
import Markdown from 'react-markdown';

export const GeminiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    const result = await generatePortfolioContent(prompt);
    setResponse(result || '');
    setIsLoading(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-2xl shadow-brand-accent/20"
      >
        <Sparkles size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 z-50 w-[350px] md:w-[400px] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-bottom border-white/5 flex items-center justify-between bg-zinc-800/50">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-brand-accent" />
                <span className="font-bold tracking-tight">Portfolio Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-brand-muted hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 h-[400px] overflow-y-auto space-y-4">
              {response ? (
                <div className="prose prose-invert prose-sm max-w-none">
                  <div className="markdown-body text-zinc-300 text-sm leading-relaxed">
                    <Markdown>{response}</Markdown>
                  </div>
                  <button 
                    onClick={() => setResponse('')}
                    className="mt-4 text-[10px] uppercase tracking-widest text-brand-accent font-bold"
                  >
                    Clear & Start Again
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Sparkles size={24} className="text-white/20" />
                  </div>
                  <p className="text-sm text-brand-muted">
                    Ask me to write a bio, project description, or even suggest skills for your portfolio.
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-zinc-800/30 border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  placeholder="e.g. Write a bio for a React developer..."
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
                />
                <button
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-accent text-white flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
