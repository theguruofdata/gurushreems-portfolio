import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Link as LinkIcon, Check, ArrowRight, MessageSquare, Send, Linkedin } from 'lucide-react';

export default function Connect() {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyMail = () => {
    navigator.clipboard.writeText('gurushreems@gmail.com');
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.linkedin.com/in/gurushree');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailText || !messageText) return;
    
    // Simulate API request
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setEmailText('');
      setMessageText('');
    }, 4000);
  };

  return (
    <section id="connect" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Immersive Glassmorphic Card */}
      <div className="glass-card rounded-[32px] md:rounded-[48px] p-8 md:p-20 overflow-hidden relative group border border-white/5 shadow-2xl">
        
        {/* Background glow orb overlay inside card */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-on-surface">
              Let's Build Your <br />
              <span className="italic font-light text-cyan-400">Next Data Engine.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-md">
              I am currently available for senior data engineering roles, complex cloud migration initiatives, or system optimization consultations. Let's connect!
            </p>

            {/* Direct buttons block */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:gurushreems@gmail.com"
                className="group bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all duration-300 flex items-center gap-2 font-bold"
              >
                Start a Conversation
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>

              <div className="flex gap-3">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/gurushree"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300 text-white cursor-pointer"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyMail}
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300 relative cursor-pointer text-white"
                  title="Copy email to clipboard"
                >
                  {copiedMail ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Mail size={16} />
                  )}
                  {copiedMail && (
                    <span className="absolute -top-10 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>

                {/* Copy LinkedIn Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300 relative cursor-pointer text-white"
                  title="Copy LinkedIn URL to clipboard"
                >
                  {copiedLink ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <LinkIcon size={16} />
                  )}
                  {copiedLink && (
                    <span className="absolute -top-10 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right embedded custom messaging card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white/2 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/5 relative">
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <MessageSquare size={16} className="text-cyan-400" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-medium">
                  Direct Line to Gurushree
                </span>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Check size={20} />
                    </div>
                    <h3 className="font-sans text-xl font-bold text-white">Signal Dispatched</h3>
                    <p className="font-sans text-xs text-on-surface-variant max-w-xs">
                      Your coordinates have been registered. I will establish communication shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="text-left">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-white/40 block mb-2">
                        Your Coordinates / Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. engineering@partner.com"
                        value={emailText}
                        onChange={(e) => setEmailText(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/8 transition-colors text-white"
                      />
                    </div>

                    <div className="text-left">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-white/40 block mb-2">
                        System Scope / Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your GCP platform requirements, timelines, or system scope..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/8 transition-colors text-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-[10px] uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-bold"
                    >
                      <Send size={12} />
                      Transmit Coordinates
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
