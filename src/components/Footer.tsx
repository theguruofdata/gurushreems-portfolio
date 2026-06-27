export default function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gurushree' },
    { label: 'Email', href: 'mailto:gurushreems@gmail.com' }
  ];

  return (
    <footer className="w-full mt-24 border-t border-white/5 bg-slate-950 py-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8 text-center md:text-left">
        {/* Brand */}
        <div className="font-sans text-xl font-extrabold tracking-tight text-on-surface uppercase">
          Gurushree<span className="text-cyan-400">.</span>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap gap-8 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm text-on-surface-variant hover:text-cyan-400 transition-colors hover:-translate-y-0.5 inline-block duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-sans text-xs text-on-surface-variant uppercase tracking-wider">
          © {new Date().getFullYear()} GURUSHREE M S. SENIOR DATA ENGINEER.
        </div>
      </div>
    </footer>
  );
}
