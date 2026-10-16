import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { currentYear } from '../lib/year';
import { Magnetic, Reveal } from './Motion';

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <Reveal>
          <div className="label light"><span className="mono">(08)</span> Contact</div>
          <h2 className="contact-title">Hiring a Senior <span className="serif">Software Engineer?</span></h2>
          <p className="contact-lead">I'm looking for senior full-stack and frontend roles in fintech, SaaS and AI products. Based in Birmingham, open to hybrid or remote across the UK.</p>
          <motion.a href={`mailto:${profile.email}`} className="big-email" whileHover="hover">
            {profile.email}
            <motion.span className="big-email-line" variants={{ hover: { scaleX: 1 } }} initial={{ scaleX: 0.15 }} />
          </motion.a>
          <div className="contact-row">
            <Magnetic><a href={profile.cv} className="btn btn-light" download>Download CV</a></Magnetic>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link light">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link light">GitHub ↗</a>
            <a href="#hire" className="text-link light">Freelance enquiry ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <span>© {currentYear()} {profile.name}</span>
        <span>{profile.title} · {profile.location}</span>
        <a href="#top" className="text-link">Back to top ↑</a>
      </div>
    </footer>
  );
}
