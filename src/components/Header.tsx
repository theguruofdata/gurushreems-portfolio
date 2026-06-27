import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onHireClick: () => void;
}

export default function Header({ onHireClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['work', 'journey', 'studio', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Studio', href: '#studio', id: 'studio' },
    { label: 'Connect', href: '#connect', id: 'connect' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white/5 backdrop-blur-md border-white/10 shadow-lg shadow-black/30 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto h-12">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-sans text-xl md:text-2xl font-extrabold tracking-tight text-on-surface hover:opacity-80 transition-opacity uppercase"
          >
            Gurushree<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`font-mono text-xs uppercase tracking-widest transition-all duration-300 relative py-1 hover:text-on-surface ${
                  activeSection === item.id ? 'text-on-surface font-semibold' : 'text-on-surface-variant'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            <button
              id="hire-me-btn-desktop"
              onClick={onHireClick}
              className="bg-on-surface text-surface px-6 py-2.5 font-mono text-xs uppercase tracking-widest rounded-full hover:bg-primary hover:text-surface transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-on-surface p-1 focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 right-0 h-screen bg-surface z-40 flex flex-col pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 items-center justify-center h-2/3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`font-sans text-3xl font-bold transition-colors ${
                    activeSection === item.id ? 'text-cyan-400 font-extrabold' : 'text-on-surface'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <button
                id="hire-me-btn-mobile"
                onClick={() => {
                  setIsOpen(false);
                  onHireClick();
                }}
                className="w-full max-w-xs mt-6 bg-on-surface text-surface py-4 font-mono text-xs uppercase tracking-widest rounded-full hover:bg-primary transition-colors cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
