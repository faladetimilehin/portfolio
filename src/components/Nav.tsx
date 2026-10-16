import { motion, useScroll, useSpring } from 'framer-motion';
import type { Theme } from '../hooks/useTheme';

const links = [
  ['#about', 'About'],
  ['#experience', 'Experience'],
  ['#projects', 'Work'],
  ['#ai', 'AI'],
  ['#hire', 'Freelance'],
];

export function Nav({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <nav className="nav">
      <motion.div className="progress" style={{ scaleX }} />
      <div className="wrap nav-inner">
        <a href="#top" className="logo">Timi Falade<span>.</span></a>
        <div className="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggle}
            aria-label={`Switch to ${next} mode`}
            title={`Switch to ${next} mode`}
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="theme-icon"
              aria-hidden="true"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
              )}
            </motion.span>
          </button>
          <a href="#contact" className="nav-cta">Hire me</a>
        </div>
      </div>
    </nav>
  );
}
