import { motion } from 'motion/react';
import { ArrowDown, Database, Server, Terminal } from 'lucide-react';

interface HeroProps {
  onTalkClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onTalkClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          id="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 z-10 text-left"
        >
          {/* Label */}
          <span
            id="hero-label"
            className="font-mono text-xs uppercase text-cyan-400 tracking-[0.3em] block mb-4 md:mb-6 font-semibold"
          >
            Senior Data Engineer & Cloud Architect
          </span>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 tracking-tight"
          >
            Engineering <br />
            <span className="text-cyan-400">Enterprise-Scale</span> <br />
            <span className="text-white">Data Platforms on GCP.</span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-description"
            className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 md:mb-12 leading-relaxed"
          >
            Specialized in BigQuery, Informatica IDMC, Airflow, and Python. Proven track record delivering robust server-side architectures supporting <span className="text-white font-semibold">200B+ records</span> and generating over <span className="text-cyan-400 font-semibold">$1M+ in annual business savings</span>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="bg-cyan-500 text-slate-950 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer active:scale-98 font-bold"
            >
              Explore Initiatives
            </button>
            <button
              id="hero-talk-btn"
              onClick={onTalkClick}
              className="border border-white/20 hover:border-cyan-accent/50 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-300 cursor-pointer active:scale-98 text-white"
            >
              Connect Now
            </button>
          </div>
        </motion.div>

        {/* Right Side Glassmorphic Art */}
        <motion.div
          id="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative h-[450px] sm:h-[550px] hidden sm:flex items-center justify-center"
        >
          {/* Main Floating Glass Panel with Image */}
          <motion.div
            id="hero-floating-card-1"
            animate={{
              y: [0, -12, 0],
              rotate: [1, 2.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass-card absolute top-10 right-4 w-64 h-80 rounded-2xl p-6 shadow-2xl flex flex-col justify-between text-left"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-cyan-400/10 rounded-xl border border-cyan-400/20 text-cyan-400">
                <Database size={24} />
              </div>
              <span className="font-mono text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded uppercase font-bold animate-pulse">
                Live Engine
              </span>
            </div>

            <div>
              <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">PROFILING METADATA</span>
              <h4 className="font-sans text-xl font-bold text-white mb-2">Google Cloud Platform</h4>
              <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed">
                Seamless migration of legacy ETL workflows to high-performance Serverless architectures.
              </p>
            </div>
          </motion.div>

          {/* Subordinate Floating Card - Info */}
          <motion.div
            id="hero-floating-card-2"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -1.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="glass-card absolute bottom-12 left-2 w-72 rounded-2xl p-6 shadow-2xl border border-white/10 text-left"
          >
            <div className="h-1.5 w-10 bg-cyan-400 rounded-full mb-4" />
            <div className="flex gap-2.5 items-center mb-1">
              <Server size={12} className="text-fuchsia-400" />
              <p className="font-mono text-[10px] uppercase tracking-wider text-fuchsia-400 font-bold">
                Enterprise AI Gate
              </p>
            </div>
            <h3 className="font-sans text-base font-extrabold text-on-surface">
              Gemini & Google ADK Data Discovery
            </h3>
          </motion.div>

          {/* Decorative spinning background orbit */}
          <div
            id="hero-orbit"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full pointer-events-none animate-[spin_40s_linear_infinite]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-fuchsia-500 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Bounce scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-on-surface-variant flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
