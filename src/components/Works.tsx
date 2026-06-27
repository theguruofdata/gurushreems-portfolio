import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface WorksProps {
  onProjectClick: (project: Project) => void;
}

export default function Works({ onProjectClick }: WorksProps) {
  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Grid header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-24 gap-6">
        <div className="max-w-xl text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Technical <span className="italic text-cyan-400 font-light">Initiatives</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed"
          >
            A curation of metadata-driven orchestration architectures, automated data quality engines, and GenAI-powered discovery layers.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase bg-cyan-400/5 border border-cyan-400/20 px-4 py-2 rounded-full"
        >
          EXPLORE INTERACTIVE LABS / 01-04
        </motion.div>
      </div>

      {/* 2x2 Grid with Stagger Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-0 md:pb-24">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onProjectClick(project)}
              className={`group flex flex-col cursor-pointer text-left ${
                isEven ? 'md:translate-y-24' : ''
              }`}
            >
              {/* Image and Hover Overlay Container */}
              <div className="glass-card rounded-2xl overflow-hidden aspect-[16/10] relative shadow-lg transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-40"
                />
                
                {/* Overlay details that appear on hover */}
                <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                      Interactive Simulation Active
                    </span>
                    <span className="font-mono text-xs text-white/50">{project.year}</span>
                  </div>
                  
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-semibold block mb-1">
                      Launch data lab
                    </span>
                    <h3 className="font-sans text-2xl font-extrabold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-white/70 line-clamp-2 max-w-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text footer block under card */}
              <div className="pt-5 flex justify-between items-center px-2">
                <div>
                  <h3 className="font-sans text-xl font-bold text-on-surface group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider border border-white/10 bg-white/3 px-3 py-1 rounded-full text-on-surface-variant group-hover:border-cyan-400/30 transition-colors">
                  {project.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Spacer helper to balance Translate-y-24 grid offset in bottom scroll */}
      <div className="h-0 md:h-24" />
    </section>
  );
}
