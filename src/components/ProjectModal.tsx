import { useState, useEffect } from 'react';
import { 
  X, Play, Pause, RotateCcw, Sparkles, SlidersHorizontal, Cpu, Eye, Check, 
  Terminal, Database, Search, Bell, Network, Activity, HelpCircle, ShieldAlert 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Preset configurations for AI-Powered Data Discovery Assistant
const DISCOVERY_PRESETS = [
  {
    query: "Find customer engagement tables",
    response: {
      table: "lumen_dw.customer_engagement_v2",
      description: "Centralized warehouse table tracking digital and interactive customer touchpoints, coupled with Afiniti AI score parameters.",
      columns: [
        { name: "interaction_id", type: "STRING", note: "Primary Key, UUID" },
        { name: "customer_id", type: "STRING", note: "Foreign Key to customer_dim" },
        { name: "afiniti_score", type: "FLOAT64", note: "AI routing optimization factor" },
        { name: "session_duration", type: "INT64", note: "In seconds" },
        { name: "timestamp", type: "TIMESTAMP", note: "Event record time (UTC)" }
      ],
      relationships: "1-to-Many relation with customer_profiles; joins on customer_id."
    }
  },
  {
    query: "List all columns for email tracking",
    response: {
      table: "governance.email_gcr_notification_registry",
      description: "Central audit trail for metadata-driven operational alerts and ownership-mapped notification mappings.",
      columns: [
        { name: "notification_id", type: "INT64", note: "Primary Key, Auto-gen" },
        { name: "gcr_domain_id", type: "STRING", note: "GCR boundary reference" },
        { name: "recipient_dl", type: "STRING", note: "Automated ownership list" },
        { name: "incident_severity", type: "STRING", note: "CRITICAL | WARNING | INFO" },
        { name: "savings_hours", type: "FLOAT64", note: "Computed manual hours eliminated" }
      ],
      relationships: "Linked with gcr_ownership_mapping on gcr_domain_id."
    }
  },
  {
    query: "Identify GDPR-masked customer data",
    response: {
      table: "lumen_secured.customer_pii_masked",
      description: "Masked data platform catalog subjected to strict Role-Based Access Control (RBAC) & GDPR/SOC 2 requirements.",
      columns: [
        { name: "user_hash_id", type: "STRING", note: "SHA-256 Hashed Identifier" },
        { name: "masked_email", type: "STRING", note: "Irreversible domain-only mask" },
        { name: "phone_encrypted", type: "BYTES", note: "Encrypted via KMS key ring" },
        { name: "consent_status", type: "BOOLEAN", note: "Active GDPR compliance state" }
      ],
      relationships: "Restricted secure join allowed with analytics views via approved workflows."
    }
  }
];

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Generic state
  const [copied, setCopied] = useState(false);

  // --- 1. MINIMALIST: AI-Powered Data Discovery Assistant ---
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [discoveryResult, setDiscoveryResult] = useState<any>(null);

  const handleDiscoverySearch = (query: string) => {
    setSearchQuery(query);
    setIsAnalyzing(true);
    setDiscoveryResult(null);

    // Simulate model analysis timing
    setTimeout(() => {
      const matchedPreset = DISCOVERY_PRESETS.find(
        (p) => p.query.toLowerCase() === query.toLowerCase() || query.toLowerCase().includes(p.query.split(' ')[1])
      );
      
      if (matchedPreset) {
        setDiscoveryResult(matchedPreset.response);
      } else {
        // Fallback custom generated schema on user input
        setDiscoveryResult({
          table: `custom_dw.${query.toLowerCase().replace(/[^a-z0-9]/g, '_')}_metrics`,
          description: `Custom generated query results for requested context: "${query}". Subject to Google Cloud metadata policies.`,
          columns: [
            { name: "row_id", type: "INT64", note: "Auto-generated UUID index" },
            { name: "evaluated_score", type: "FLOAT64", note: "Gemini-matched relevance" },
            { name: "record_payload", type: "JSON", note: "GCP BigQuery nested fields" }
          ],
          relationships: "Discovered matching references with warehouse dimensions."
        });
      }
      setIsAnalyzing(false);
    }, 1200);
  };

  // --- 2. DASHBOARD: Enterprise Data Profiling & Quality ---
  const [selectedDataset, setSelectedDataset] = useState('Customer Contracts');
  const [completenessLimit, setCompletenessLimit] = useState(98);
  const [uniquenessLimit, setUniquenessLimit] = useState(92);
  const [detectSchemaDrift, setDetectSchemaDrift] = useState(true);
  const [nullabilityCheck, setNullabilityCheck] = useState(true);
  const [isProfiling, setIsProfiling] = useState(false);
  const [profilingResult, setProfilingResult] = useState<{
    status: 'PASSED' | 'WARNING' | 'FAILED';
    completeness: number;
    uniqueness: number;
    driftDetected: boolean;
    anomaliesCount: number;
  } | null>({
    status: 'PASSED',
    completeness: 99.4,
    uniqueness: 98.2,
    driftDetected: false,
    anomaliesCount: 0
  });

  const runDataProfiling = () => {
    setIsProfiling(true);
    setTimeout(() => {
      // Simulate quality evaluation logic based on slider thresholds
      const actualCompleteness = selectedDataset === 'Customer Contracts' ? 99.4 : selectedDataset === 'Daily Transformed Telemetry' ? 94.8 : 91.2;
      const actualUniqueness = selectedDataset === 'Customer Contracts' ? 98.2 : selectedDataset === 'Daily Transformed Telemetry' ? 88.5 : 95.1;
      
      const compFailed = actualCompleteness < completenessLimit;
      const uniqFailed = actualUniqueness < uniquenessLimit;
      
      let finalStatus: 'PASSED' | 'WARNING' | 'FAILED' = 'PASSED';
      if (compFailed || uniqFailed) {
        finalStatus = (completenessLimit - actualCompleteness > 5 || uniquenessLimit - actualUniqueness > 5) ? 'FAILED' : 'WARNING';
      }

      setProfilingResult({
        status: finalStatus,
        completeness: actualCompleteness,
        uniqueness: actualUniqueness,
        driftDetected: detectSchemaDrift && Math.random() > 0.7,
        anomaliesCount: nullabilityCheck ? (compFailed ? Math.floor(Math.random() * 12 + 1) : 0) : 0
      });
      setIsProfiling(false);
    }, 1000);
  };

  // --- 3. CANVAS: Informatica Metadata & Observability ---
  const [dagStatus, setDagStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [nodeStates, setNodeStates] = useState<('idle' | 'running' | 'success')[]>([
    'idle', 'idle', 'idle', 'idle'
  ]);

  const triggerAirflowDag = () => {
    setDagStatus('running');
    setNodeStates(['running', 'idle', 'idle', 'idle']);

    // Step 1: Informatica IDMC Extract
    setTimeout(() => {
      setNodeStates(['success', 'running', 'idle', 'idle']);
      
      // Step 2: GCS Staging Loader
      setTimeout(() => {
        setNodeStates(['success', 'success', 'running', 'idle']);
        
        // Step 3: BigQuery Centralizer
        setTimeout(() => {
          setNodeStates(['success', 'success', 'success', 'running']);
          
          // Step 4: JIRA Alert Monitor & Complete
          setTimeout(() => {
            setNodeStates(['success', 'success', 'success', 'success']);
            setDagStatus('success');
          }, 1000);
        }, 1200);
      }, 1000);
    }, 1000);
  };

  const resetDag = () => {
    setDagStatus('idle');
    setNodeStates(['idle', 'idle', 'idle', 'idle']);
  };

  // --- 4. SPATIAL: Governance & GCR Notification Framework ---
  const [alertSeverity, setAlertSeverity] = useState<'Critical' | 'Warning' | 'Info'>('Critical');
  const [gcrTeam, setGcrTeam] = useState('Cloud Ops');
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchedLog, setDispatchedLog] = useState<string[]>([]);
  const [savedHours, setSavedHours] = useState(0);

  const handleDispatchNotification = () => {
    setIsDispatching(true);
    setDispatchedLog([]);
    
    setTimeout(() => {
      const logs = [
        `Fetching target DL for GCR domain: [${gcrTeam}]`,
        `Analyzing ownership mapping & downstream ETL schemas...`,
        `ServiceNow API connected. Ticket created: INC-2026-${Math.floor(Math.random() * 8999 + 1000)}`,
        `Automated notification dispatched successfully.`,
        `Status: SUCCESS | Checked 15 workflows.`
      ];
      setDispatchedLog(logs);
      setSavedHours((prev) => prev + (alertSeverity === 'Critical' ? 12 : alertSeverity === 'Warning' ? 5 : 2));
      setIsDispatching(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="w-full max-w-5xl h-[85vh] md:h-[80vh] glass-card rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row z-10 border border-white/10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-surface/80 border border-white/10 flex items-center justify-center hover:bg-white hover:text-surface transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          {/* Left Column: Visual Showcase & Interactive Engine */}
          <div className="w-full md:w-1/2 h-2/5 md:h-full bg-slate-950 border-b md:border-b-0 md:border-r border-white/10 relative flex flex-col justify-between overflow-hidden">
            
            {/* Top Interactive Banner */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Sparkles size={12} className="text-cyan-accent animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant font-medium">
                Live Interactive Lab
              </span>
            </div>

            {/* Interactive Module container */}
            <div className="flex-1 w-full flex items-center justify-center p-4 md:p-6 relative overflow-y-auto">
              
              {/* --- 1. MINIMALIST INTERACTIVE (AI-Powered Data Discovery Assistant) --- */}
              {project.interactiveType === 'minimalist' && (
                <div className="w-full h-full flex flex-col justify-between py-2 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                      <Cpu size={16} className="text-cyan-accent" />
                      <div className="text-left">
                        <span className="font-mono text-[9px] text-white/40 block uppercase">Engine State</span>
                        <span className="font-sans text-xs text-on-surface font-medium">Gemini 1.5 Pro Metadata Model Connected</span>
                      </div>
                    </div>

                    {/* Pre-set prompt cards */}
                    <div>
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider block mb-2">Try Suggested Prompts</span>
                      <div className="flex flex-col gap-2">
                        {DISCOVERY_PRESETS.map((preset) => (
                          <button
                            key={preset.query}
                            onClick={() => handleDiscoverySearch(preset.query)}
                            disabled={isAnalyzing}
                            className="text-left px-3.5 py-2.5 rounded-xl bg-white/2 hover:bg-white/5 border border-white/10 hover:border-cyan-accent/30 text-xs font-sans text-on-surface-variant hover:text-on-surface cursor-pointer transition-all flex items-center justify-between"
                          >
                            <span>"{preset.query}"</span>
                            <Search size={12} className="text-white/30" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom query input */}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Search another database table context..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && searchQuery && handleDiscoverySearch(searchQuery)}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white/2 border border-white/10 text-xs font-sans text-on-surface focus:outline-none focus:border-cyan-accent"
                      />
                      <button
                        onClick={() => searchQuery && handleDiscoverySearch(searchQuery)}
                        disabled={isAnalyzing || !searchQuery}
                        className="px-4 rounded-xl bg-cyan-accent/20 hover:bg-cyan-accent/30 text-cyan-accent border border-cyan-accent/40 font-mono text-xs uppercase cursor-pointer"
                      >
                        Ask
                      </button>
                    </div>
                  </div>

                  {/* AI Response Display */}
                  <div className="mt-4 flex-1 min-h-[140px] rounded-xl bg-black/45 border border-white/10 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-[11px] leading-relaxed">
                    <div className="absolute top-2 right-2 text-[9px] text-cyan-accent uppercase tracking-wider flex items-center gap-1">
                      <Terminal size={10} />
                      AI Shell
                    </div>

                    {isAnalyzing ? (
                      <div className="flex flex-col items-center justify-center h-full space-y-2">
                        <div className="w-5 h-5 border-2 border-cyan-accent border-t-transparent rounded-full animate-spin" />
                        <span className="text-white/40 animate-pulse text-[10px]">Processing NL Metadata Vector Embeddings...</span>
                      </div>
                    ) : discoveryResult ? (
                      <div className="space-y-2 overflow-y-auto max-h-[160px] pr-1 scrollbar-thin">
                        <div>
                          <span className="text-cyan-accent">Matched Table:</span>{' '}
                          <span className="text-white font-medium">{discoveryResult.table}</span>
                        </div>
                        <div>
                          <span className="text-white/40">Description:</span>{' '}
                          <span className="text-on-surface-variant font-sans">{discoveryResult.description}</span>
                        </div>
                        <div>
                          <span className="text-emerald-400">Columns Detected:</span>
                          <div className="ml-3 mt-1 space-y-1">
                            {discoveryResult.columns.map((col: any) => (
                              <div key={col.name} className="flex justify-between border-b border-white/5 pb-0.5">
                                <span className="text-white font-semibold">{col.name}</span>
                                <span className="text-white/50 text-[10px]">{col.type} — {col.note}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-fuchsia-400">Relationships:</span>{' '}
                          <span className="text-on-surface-variant font-sans">{discoveryResult.relationships}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-white/30 text-center flex-col p-2">
                        <HelpCircle size={20} className="mb-2 text-white/10" />
                        <span>Select a metadata query template or enter keywords to retrieve schema lineage & relationship mapping.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* --- 2. TELEMETRY DASHBOARD INTERACTIVE (Enterprise Data Profiling & Quality) --- */}
              {project.interactiveType === 'dashboard' && (
                <div className="w-full h-full flex flex-col justify-between py-2 text-left">
                  <div className="space-y-4">
                    {/* Dataset Selector */}
                    <div>
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider block mb-2">Select Warehouse Dataset</span>
                      <div className="grid grid-cols-3 gap-2">
                        {['Customer Contracts', 'Daily Transformed Telemetry', 'Afiniti Active Leads'].map((dataset) => (
                          <button
                            key={dataset}
                            onClick={() => setSelectedDataset(dataset)}
                            className={`px-2.5 py-2 rounded-xl text-left font-sans text-xs border transition-all cursor-pointer ${
                              selectedDataset === dataset
                                ? 'bg-cyan-accent/10 border-cyan-accent/50 text-cyan-accent font-semibold'
                                : 'bg-white/2 border-white/10 text-on-surface-variant hover:border-white/20'
                            }`}
                          >
                            {dataset}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quality Rules Controls */}
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-3">
                      <span className="font-mono text-[9px] text-cyan-accent uppercase tracking-wider block">Set Data Quality (DQ) Threshold Rules</span>
                      
                      {/* Completeness slider */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[10px] text-white/60 w-24">Completeness</span>
                        <input
                          type="range"
                          min="85"
                          max="100"
                          value={completenessLimit}
                          onChange={(e) => setCompletenessLimit(Number(e.target.value))}
                          className="flex-1 accent-cyan-accent h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                        />
                        <span className="font-mono text-[10px] w-8 text-right text-cyan-accent">{completenessLimit}%</span>
                      </div>

                      {/* Uniqueness slider */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[10px] text-white/60 w-24">Uniqueness</span>
                        <input
                          type="range"
                          min="80"
                          max="100"
                          value={uniquenessLimit}
                          onChange={(e) => setUniquenessLimit(Number(e.target.value))}
                          className="flex-1 accent-fuchsia-400 h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                        />
                        <span className="font-mono text-[10px] w-8 text-right text-fuchsia-400">{uniquenessLimit}%</span>
                      </div>

                      {/* Toggles */}
                      <div className="flex justify-between items-center pt-2 border-t border-white/5">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={detectSchemaDrift}
                            onChange={(e) => setDetectSchemaDrift(e.target.checked)}
                            className="rounded bg-black/40 border-white/20 accent-cyan-accent"
                          />
                          <span className="font-sans text-[11px] text-on-surface-variant">Check Schema Drift</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={nullabilityCheck}
                            onChange={(e) => setNullabilityCheck(e.target.checked)}
                            className="rounded bg-black/40 border-white/20 accent-cyan-accent"
                          />
                          <span className="font-sans text-[11px] text-on-surface-variant">Enforce Nullability</span>
                        </label>
                      </div>
                    </div>

                    {/* Action trigger button */}
                    <button
                      onClick={runDataProfiling}
                      disabled={isProfiling}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-accent text-slate-950 font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-cyan-accent/90 transition-all cursor-pointer shadow-lg"
                    >
                      {isProfiling ? (
                        <>
                          <Activity className="animate-spin" size={14} />
                          Analyzing Dataset Profiles...
                        </>
                      ) : (
                        <>
                          <Activity size={14} />
                          Evaluate Pipeline Data Quality
                        </>
                      )}
                    </button>
                  </div>

                  {/* Profiling Result Display card */}
                  <div className="mt-4 p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                      <span className="font-mono text-[9px] text-white/40 uppercase">DATA QUALITY AUDIT RECORD</span>
                      {profilingResult && (
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                          profilingResult.status === 'PASSED' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' :
                          profilingResult.status === 'WARNING' ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400' :
                          'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                        }`}>
                          {profilingResult.status}
                        </span>
                      )}
                    </div>

                    {profilingResult ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-white/40 block">COMPLETENESS INDEX</span>
                          <span className="font-sans text-lg font-bold text-on-surface">
                            {profilingResult.completeness.toFixed(1)}%
                          </span>
                          <span className="text-[10px] text-white/50 block">Target: &ge;{completenessLimit}%</span>
                        </div>
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-white/40 block">UNIQUENESS SCORE</span>
                          <span className="font-sans text-lg font-bold text-on-surface">
                            {profilingResult.uniqueness.toFixed(1)}%
                          </span>
                          <span className="text-[10px] text-white/50 block">Target: &ge;{uniquenessLimit}%</span>
                        </div>
                        <div className="space-y-1 col-span-2 pt-2 border-t border-white/5 grid grid-cols-2 gap-2">
                          <div>
                            <span className="font-mono text-[9px] text-white/40 block">SCHEMA DRIFT DETECTED</span>
                            <span className={`font-sans text-xs font-semibold ${profilingResult.driftDetected ? 'text-rose-400' : 'text-emerald-400'}`}>
                              {profilingResult.driftDetected ? 'WARNING: Drift Detected' : 'No Schema Drift'}
                            </span>
                          </div>
                          <div>
                            <span className="font-mono text-[9px] text-white/40 block">ANOMALOUS ROWS</span>
                            <span className={`font-sans text-xs font-semibold ${profilingResult.anomaliesCount > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                              {profilingResult.anomaliesCount} flag(s) found
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4 font-mono text-[10px] text-white/30">
                        Trigger profiling above to examine quality dimensions.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* --- 3. SPECTRUM GENERATOR INTERACTIVE (Informatica Metadata & Observability Platform) --- */}
              {project.interactiveType === 'canvas' && (
                <div className="w-full h-full flex flex-col justify-between py-2 text-left">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider block">Airflow DAG Flow Lineage & Dependencies</span>
                    
                    {/* DAG nodes map */}
                    <div className="relative p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center space-y-4">
                      {/* Connection lines background */}
                      <div className="absolute top-1/2 bottom-0 w-0.5 bg-gradient-to-b from-cyan-accent to-fuchsia-500 opacity-25 z-0" style={{ height: '70%' }} />

                      {[
                        { label: 'Informatica IDMC API Extractor', desc: 'Queries REST metadata schema catalogs' },
                        { label: 'GCS Staging Loader', desc: 'Validates JSON schemas and pushes raw logs' },
                        { label: 'BigQuery Centralizer', desc: 'Processes analytics mapping datasets' },
                        { label: 'Jira API Observability Gate', desc: 'Dispatches tickets for metadata anomalies' }
                      ].map((node, idx) => {
                        const state = nodeStates[idx];
                        return (
                          <div key={idx} className="relative z-10 w-full flex items-center justify-between bg-slate-900/90 border border-white/10 p-3 rounded-xl hover:border-cyan-accent/35 transition-all">
                            <div className="flex items-center gap-3">
                              {/* Pulse state circle */}
                              <div className={`relative w-4 h-4 rounded-full flex items-center justify-center border ${
                                state === 'success' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' :
                                state === 'running' ? 'bg-cyan-accent/20 border-cyan-accent/50 text-cyan-accent animate-pulse' :
                                'bg-white/5 border-white/20 text-white/30'
                              }`}>
                                {state === 'success' ? <Check size={10} /> : <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                              </div>
                              <div className="text-left">
                                <span className="font-sans text-xs font-semibold text-on-surface block leading-tight">{node.label}</span>
                                <span className="font-sans text-[10px] text-white/50 block leading-tight">{node.desc}</span>
                              </div>
                            </div>
                            <span className="font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-white/60">
                              {state}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Operational Triggers */}
                    <div className="flex gap-3">
                      <button
                        onClick={triggerAirflowDag}
                        disabled={dagStatus === 'running'}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors ${
                          dagStatus === 'running'
                            ? 'bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent'
                            : 'bg-cyan-accent text-slate-950 border-cyan-accent hover:bg-cyan-accent/90'
                        }`}
                      >
                        {dagStatus === 'running' ? <Activity className="animate-spin" size={12} /> : <Play size={12} />}
                        {dagStatus === 'running' ? 'DAG Processing' : 'Trigger Airflow DAG'}
                      </button>

                      <button
                        onClick={resetDag}
                        disabled={dagStatus === 'running'}
                        className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-on-surface-variant transition-colors cursor-pointer"
                        title="Reset Pipeline state"
                      >
                        <RotateCcw size={14} />
                      </button>
                    </div>

                    {/* Observability Telemetry Card */}
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5 text-left font-mono">
                      <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                        <span className="text-[9px] text-white/40 uppercase block">Active Schemas Monitored</span>
                        <span className="text-sm font-bold text-cyan-accent">100+ Workflows</span>
                      </div>
                      <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                        <span className="text-[9px] text-white/40 uppercase block">Troubleshoot Reduction</span>
                        <span className="text-sm font-bold text-fuchsia-400">20% Saved Effort</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 4. SPATIAL INTERACTIVE (Governance & GCR Notification Framework) --- */}
              {project.interactiveType === 'spatial' && (
                <div className="w-full h-full flex flex-col justify-between py-2 text-left">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider block">GCR Automated Notification & ServiceNow Gate</span>
                    
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-3">
                      {/* Select targeted team */}
                      <div>
                        <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">Target Ops Domain Team</span>
                        <div className="grid grid-cols-3 gap-2">
                          {['Cloud Ops', 'Data Governance', 'Financial Audit'].map((team) => (
                            <button
                              key={team}
                              onClick={() => setGcrTeam(team)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-sans border transition-all cursor-pointer ${
                                gcrTeam === team
                                  ? 'bg-fuchsia-500/10 border-fuchsia-500/50 text-fuchsia-400 font-semibold'
                                  : 'bg-white/2 border-white/10 text-on-surface-variant hover:border-white/20'
                              }`}
                            >
                              {team}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Select severity levels */}
                      <div>
                        <span className="font-mono text-[9px] text-white/40 uppercase block mb-1">Incident Severity Level</span>
                        <div className="flex gap-2">
                          {(['Critical', 'Warning', 'Info'] as const).map((sev) => (
                            <button
                              key={sev}
                              onClick={() => setAlertSeverity(sev)}
                              className={`flex-1 px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase border transition-all cursor-pointer ${
                                alertSeverity === sev
                                  ? 'bg-rose-500/15 border-rose-500/50 text-rose-400 font-bold'
                                  : 'bg-white/2 border-white/10 text-on-surface-variant hover:border-white/20'
                              }`}
                            >
                              {sev}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleDispatchNotification}
                      disabled={isDispatching}
                      className="w-full py-3 rounded-xl bg-fuchsia-500 text-slate-950 font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-fuchsia-400 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                    >
                      {isDispatching ? (
                        <>
                          <Bell className="animate-bounce" size={14} />
                          Querying Owner Mappings...
                        </>
                      ) : (
                        <>
                          <Bell size={14} />
                          Dispatch Automated Alerts
                        </>
                      )}
                    </button>
                  </div>

                  {/* Realtime execution outputs */}
                  <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-white/10 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                      <span className="font-mono text-[9px] text-white/40 uppercase">GCR Notification Line Log</span>
                      <span className="font-sans text-[11px] text-emerald-400 font-bold">
                        +{savedHours} hrs saved
                      </span>
                    </div>

                    <div className="font-mono text-[10px] leading-relaxed text-left min-h-[90px] max-h-[100px] overflow-y-auto space-y-1 scrollbar-thin">
                      {isDispatching ? (
                        <div className="text-white/40 animate-pulse text-center pt-4">Traversing structural system dependency tree...</div>
                      ) : dispatchedLog.length > 0 ? (
                        dispatchedLog.map((log, idx) => (
                          <div key={idx} className={idx === dispatchedLog.length - 1 ? 'text-emerald-400' : 'text-white/70'}>
                            &gt; {log}
                          </div>
                        ))
                      ) : (
                        <div className="text-white/30 text-center pt-4">
                          Configure alerts and click dispatch to map metadata ownership automated notifications.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Information & Details metadata */}
          <div className="w-full md:w-1/2 h-3/5 md:h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6 pt-2">
              {/* Category, Year */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-accent font-semibold">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-on-surface-variant bg-white/5 px-2.5 py-1 rounded">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-sans text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface text-left">
                {project.title}
              </h2>

              {/* Description */}
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed text-left">
                {project.description}
              </p>

              {/* Sub-specifications details table */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-left">
                {project.role && (
                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">Role</span>
                    <span className="font-sans text-xs font-semibold text-on-surface">{project.role}</span>
                  </div>
                )}
                {project.client && (
                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase block mb-1">Client/Team</span>
                    <span className="font-sans text-xs font-semibold text-on-surface">{project.client}</span>
                  </div>
                )}
              </div>

              {/* Tags block */}
              <div className="pt-2 text-left">
                <span className="font-mono text-[10px] text-white/40 uppercase block mb-2">Technical Toolchain</span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] uppercase tracking-wider text-cyan-accent border border-cyan-accent/20 bg-cyan-accent/5 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Standard presentation */}
            <div className="pt-8 border-t border-white/5 flex gap-4">
              <span className="w-full text-center py-3 rounded-xl border border-white/10 bg-white/3 font-mono text-xs uppercase tracking-widest text-white/60">
                Data Lab Simulation Active
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
