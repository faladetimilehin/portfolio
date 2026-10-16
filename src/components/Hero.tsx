import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { marquee, profile, stats } from '../data/profile';
import { CountUp, Magnetic, MaskLine } from './Motion';

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.rotatingRoles.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.rotatingRoles[i]}
          className="serif"
          initial={{ y: '90%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-90%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.rotatingRoles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function LocalTime() {
  const fmt = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' }).format(new Date());
  const [t, setT] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return <span className="mono">{t} UK time</span>;
}

function Portrait() {
  return (
    <motion.div
      className="portrait"
      initial={{ opacity: 0, rotate: 0, y: 30 }}
      animate={{ opacity: 1, rotate: 3, y: 0 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {profile.photo ? (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
      ) : (
        <div className="monogram" aria-hidden="true">TF<span>.</span></div>
      )}
      <motion.div className="sticker" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs><path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
          <text><textPath href="#circle">AVAILABLE FOR WORK • OPEN TO HIRE • </textPath></text>
        </svg>
        <span className="sticker-dot" />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <span className="avail"><i />Available · Senior roles &amp; freelance</span>
          <span className="hide-sm">{profile.location} · <LocalTime /></span>
        </motion.div>

        <div className="hero-grid">
          <div>
            <h1 aria-label={profile.name}>
              <MaskLine>{profile.firstName}</MaskLine>
              <MaskLine delay={0.12}>{profile.lastName}<span className="dot">.</span></MaskLine>
            </h1>

            <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
              <p className="hero-role">{profile.title} <span className="muted">— React, TypeScript, Node.js, AWS</span></p>
              <p className="hero-line">I build <RotatingWord /><br />for banks, startups and growing teams.</p>
              <div className="actions">
                <Magnetic><a href="#projects" className="btn btn-dark">See my work <span className="arr">→</span></a></Magnetic>
                <Magnetic><a href={profile.cv} className="btn btn-line" download>Download CV</a></Magnetic>
                <a href="#hire" className="text-link">Book a freelance call</a>
              </div>
            </motion.div>
          </div>
          <Portrait />
        </div>
      </div>

      <div className="marquee" aria-label="Companies and products I've worked on">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="marquee-item">{m}<i aria-hidden="true">✳</i></span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="stats">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <b><CountUp to={s.value} suffix={s.suffix} /></b>
              <small>{s.label}</small>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}
