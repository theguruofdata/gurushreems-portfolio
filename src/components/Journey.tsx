import { motion } from 'motion/react';
import { JOURNEY } from '../data';

export default function Journey() {
  return (
    <section id="journey" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            The Career Journey
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-cyan-400 mx-auto rounded-full origin-center"
          />
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical central connection line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Timeline steps */}
          <div className="space-y-36 relative">
            {JOURNEY.map((milestone, idx) => {
              const isLeft = milestone.align === 'left';
              const isPresent = milestone.period.toLowerCase().includes('present');

              return (
                <div
                  key={milestone.id}
                  className="relative flex flex-col md:flex-row items-center justify-between w-full"
                >
                  {/* Left Side element */}
                  <div className={`w-full md:w-[45%] flex flex-col justify-center ${
                    isLeft ? 'text-center md:text-right md:items-end' : 'hidden md:block'
                  }`}>
                    {isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-3 text-left md:text-right"
                      >
                        <span className="font-mono text-xs text-cyan-400 tracking-widest font-semibold block uppercase">
                          {milestone.period}
                        </span>
                        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-on-surface leading-snug">
                          {milestone.title}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-md md:ml-auto leading-relaxed">
                          {milestone.description}
                        </p>
                      </motion.div>
                    ) : (
                      /* Image block for right-aligned items shown on left column */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-4 rounded-2xl rotate-2 hover:rotate-0 transition-all duration-500 max-w-sm ml-auto border border-white/5"
                      >
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          referrerPolicy="no-referrer"
                          className="rounded-xl h-48 w-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Central Node point */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    {isPresent ? (
                      /* Animated cyan pulsing glow for present/active milestone */
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-6 h-6 bg-cyan-400/30 rounded-full animate-ping" />
                        <div className="w-4.5 h-4.5 bg-cyan-400 rounded-full border border-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                      </div>
                    ) : (
                      /* Standard milestone connector dot */
                      <div className="w-4 h-4 bg-slate-900 rounded-full border-2 border-cyan-400/50 shadow-lg" />
                    )}
                  </div>

                  {/* Right Side element */}
                  <div className={`w-full md:w-[45%] mt-6 md:mt-0 flex flex-col justify-center ${
                    !isLeft ? 'text-center md:text-left md:items-start' : 'hidden md:block'
                  }`}>
                    {!isLeft ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-3 text-left"
                      >
                        <span className="font-mono text-xs text-fuchsia-400 tracking-widest font-semibold block uppercase">
                          {milestone.period}
                        </span>
                        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-on-surface leading-snug">
                          {milestone.title}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
                          {milestone.description}
                        </p>
                      </motion.div>
                    ) : (
                      /* Image block for left-aligned items shown on right column */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-4 rounded-2xl -rotate-2 hover:rotate-0 transition-all duration-500 max-w-sm mr-auto border border-white/5"
                      >
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          referrerPolicy="no-referrer"
                          className="rounded-xl h-48 w-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
