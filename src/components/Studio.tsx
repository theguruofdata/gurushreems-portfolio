import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, CheckCircle, Database, ShieldCheck, Terminal, Award as CertificateIcon, Users } from 'lucide-react';

export default function Studio() {
  // Animated Stats Counter hook simulation
  const [experience, setExperience] = useState(0);
  const [records, setRecords] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Basic counting logic trigger
    const expInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev >= 5) {
          clearInterval(expInterval);
          return 5;
        }
        return prev + 1;
      });
    }, 150);

    const recordsInterval = setInterval(() => {
      setRecords((prev) => {
        if (prev >= 200) {
          clearInterval(recordsInterval);
          return 200;
        }
        return prev + 10;
      });
    }, 45);

    const savingsInterval = setInterval(() => {
      setSavings((prev) => {
        if (prev >= 10) {
          clearInterval(savingsInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(expInterval);
      clearInterval(recordsInterval);
      clearInterval(savingsInterval);
    };
  }, []);

  const technicalSkills = [
    { category: 'Programming & Orchestration', skills: ['Python', 'SQL', 'Apache Airflow', 'Control-M'] },
    { category: 'Cloud & Warehousing', skills: ['Google Cloud (GCP)', 'BigQuery', 'Snowflake', 'Oracle', 'Dataflow'] },
    { category: 'Data Integration (ETL/ELT)', skills: ['Informatica Cloud (IDMC)', 'DBT', 'Data Pipelines'] },
    { category: 'Governance & Security', skills: ['Data Quality Frameworks', 'RBAC', 'Data Masking', 'GDPR/SOC 2'] }
  ];

  const certifications = [
    'Google Cloud Associate Certificate',
    'DBT Fundamentals and Advanced',
    'Databricks Fundamentals',
    'Certificate in Basic Python [9B473DA99A4C]'
  ];

  return (
    <section id="studio" className="py-32 px-6 md:px-12 bg-slate-950/60 backdrop-blur-md relative overflow-hidden">
      {/* Subtle glowing mesh backgrounds */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-fuchsia-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Descriptive bio & skills */}
        <div className="lg:col-span-7 text-left space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-cyan-400 tracking-[0.3em] block font-semibold">
              Profile & Core Competence
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface"
            >
              Enterprise Data <span className="text-cyan-400 italic font-light">Craftsmanship</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 font-sans text-base text-on-surface-variant leading-relaxed"
          >
            <p>
              I design and build enterprise-scale data platforms on Google Cloud Platform. My engineering approach balances robust orchestration logic, meticulous metadata tracking, and active governance constraints to convert vast data lakes into highly responsive, performant pipelines.
            </p>
            <p>
              With strong competence in Informatica IDMC, BigQuery performance tuning, and Airflow workflow systems, I specialize in automating complex data pipelines, accelerating discovery from hours to seconds, and implementing automated security constraints.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
            {technicalSkills.map((cat, i) => (
              <div key={i} className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
                  {cat.category === 'Programming & Orchestration' && <Terminal size={12} className="text-cyan-400" />}
                  {cat.category === 'Cloud & Warehousing' && <Database size={12} className="text-fuchsia-400" />}
                  {cat.category === 'Data Integration (ETL/ELT)' && <Activity size={12} className="text-emerald-400" />}
                  {cat.category === 'Governance & Security' && <ShieldCheck size={12} className="text-cyan-400" />}
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] text-on-surface bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Counters Row */}
          <div id="stats-container" className="mt-12 flex flex-wrap gap-10 border-t border-white/5 pt-8">
            <div>
              <span className="font-sans text-4xl font-extrabold text-white block">
                {String(experience).padStart(2, '0')}+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">
                Years Experience
              </span>
            </div>
            <div>
              <span className="font-sans text-4xl font-extrabold text-white block">
                {records}B+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">
                Records Orchestrated
              </span>
            </div>
            <div>
              <span className="font-sans text-4xl font-extrabold text-white block">
                ${(savings / 10).toFixed(1)}M+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant">
                Annual Savings
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Certifications & Leadership */}
        <div className="lg:col-span-5 space-y-8 text-left">
          {/* Certifications Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <CertificateIcon className="text-cyan-400" size={18} />
              Professional Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="font-sans text-xs text-on-surface-variant leading-tight">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Impact Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-sans text-lg font-bold text-white flex items-center gap-2">
              <Users className="text-fuchsia-400" size={18} />
              Leadership Impact
            </h3>
            <div className="space-y-4 text-xs font-sans text-on-surface-variant leading-relaxed">
              <p>
                &bull; <strong className="text-white">Migration Leadership:</strong> Led cross-functional engineering squads to migrate complex legacy ETL jobs to serverless GCP pipelines ahead of schedules.
              </p>
              <p>
                &bull; <strong className="text-white">Cloud Cost Optimization:</strong> Coordinated with architects to implement resource pruning, scaling back storage and server costs by 20-30%.
              </p>
              <p>
                &bull; <strong className="text-white">Stakeholder Alignment:</strong> Partnered directly with business leaders and technical stakeholders to integrate advanced pipelines aligned with key business objects.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
