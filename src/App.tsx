import { MotionConfig } from 'framer-motion';
import { Contact, Footer } from './components/Contact';
import { Hero } from './components/Hero';
import { HireMe } from './components/HireMe';
import { Nav } from './components/Nav';
import { About, AISection, CaseStudies, Experience, Projects, Skills } from './components/Sections';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    // reducedMotion="user" turns animations off for visitors who ask their OS for less motion
    <MotionConfig reducedMotion="user">
      <Nav theme={theme} onToggle={toggle} />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <AISection />
        <CaseStudies />
        <Skills />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
