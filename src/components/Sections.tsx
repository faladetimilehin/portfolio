import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { aiCards, cases, jobs, pillars, projects, skills, type Project } from '../data/profile';
import { Reveal, StaggerGroup, fadeUp } from './Motion';

export function SectionHead({ n, label, title, serif, lead }: { n: string; label: string; title: string; serif?: string; lead?: string }) {
  return (
    <Reveal className="section-head">
      <div className="label"><span className="mono">({n})</span> {label}</div>
      <h2>{title} {serif && <span className="serif">{serif}</span>}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead n="01" label="About" title="Eight years shipping" serif="software people rely on." />
        <div className="about">
          <Reveal className="about-text">
            <p className="big">I'm a Senior Software Engineer who takes products from idea to production: the TypeScript frontend, the Node.js API, payments, auth and the cloud setup behind them.</p>
            <p>For six years I worked at <strong>NIBSS</strong>, the system behind Nigeria's interbank payments. I built frontends for <strong>NIBSSPay</strong> bulk payments, <strong>NQR</strong> QR payments and the <strong>BVN</strong> verification ecosystem, used every day by banks, corporates and government.</p>
            <p>Today I build fintech and e-commerce products at <strong>PerfectScope</strong>, and SaaS products with AI built in, like <strong>Severus</strong> and <strong>Baby Connect</strong>. I hold an MSc in Data Science from the University of East London.</p>
          </Reveal>
          <StaggerGroup className="pillars">
            {pillars.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp} className="pillar">
                <span className="mono pillar-n">0{i + 1}</span>
                <div><h3>{p.title}</h3><p>{p.body}</p></div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead n="02" label="Experience" title="Where I've" serif="worked." />
        <div className="jobs">
          {jobs.map((j, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={j.company + j.period} className={`job${isOpen ? ' open' : ''}`}>
                <button type="button" className="job-row" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="job-period mono">{j.period}</span>
                  <span className="job-role">{j.role}</span>
                  <span className="job-company">{j.company}{j.current && <em className="now">Now</em>}</span>
                  <motion.span className="job-plus" animate={{ rotate: isOpen ? 45 : 0 }} aria-hidden="true">+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div className="job-body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="job-inner">
                        <span className="job-type mono">{j.type}</span>
                        <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                        <div className="tags">{j.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const covers: Record<string, string> = {
  Severus: 'cover-ink',
  'Baby Connect': 'cover-peach',
  'Kerry Collins Staff Portal': 'cover-mint',
  '7thLeo Couture': 'cover-sand',
  'Opeketé Foundation': 'cover-sage',
  'This portfolio': 'cover-orange',
};

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const cover = (
    <div className={`cover ${covers[p.name] ?? 'cover-sand'}`}>
      <div className="cover-top mono"><span>{String(index + 1).padStart(2, '0')}</span><span className="chip">{p.status}</span></div>
      <motion.div className="cover-title" whileHover={{ scale: 1.03 }}>{p.name}</motion.div>
      <div className="cover-sub mono">{p.sub}</div>
    </div>
  );
  return (
    <motion.article variants={fadeUp} className={`project${p.feature ? ' feature' : ''}`}>
      {p.link ? <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="cover-link" aria-label={`${p.name}: ${p.link.label}`}>{cover}</a> : cover}
      <div className="project-body">
        <p>{p.body}</p>
        <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        {p.arch && (
          <div className="stack-chips">
            {p.arch.rows.flat().map((n) => <span key={n.label} className="tag">{n.label}</span>)}
          </div>
        )}
        <div className="p-links">
          {p.link && <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="text-link">{p.link.label}</a>}
          {p.note && <span className="p-note">{p.note}</span>}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead n="03" label="Selected work" title="Things I've" serif="built." lead="Products I've built end to end, with a small team or on my own." />
        <StaggerGroup className="projects">
          {projects.map((p, i) => <ProjectCard key={p.name} p={p} index={i} />)}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function AISection() {
  return (
    <section id="ai">
      <div className="wrap">
        <SectionHead n="04" label="AI" title="Where AI fits" serif="in my work." lead="AI features are part of the products I ship, and I've spent time evaluating how language models reason and where they fail." />
        <StaggerGroup className="ai-grid">
          {aiCards.map((c, i) => (
            <motion.div key={c.title} variants={fadeUp} className="ai-card">
              <span className="mono ai-n">0{i + 1} — {c.k}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="mono where">{c.where}</span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section id="cases">
      <div className="wrap">
        <SectionHead n="05" label="Case studies · NIBSS" title="National payment" serif="infrastructure."
          lead="These are internal enterprise systems, so the code is confidential. Here's what I worked on and why it mattered." />
        <StaggerGroup className="cases">
          {cases.map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="case">
              <h3>{c.title}</h3>
              <dl>{c.items.map(([dt, dd]) => <div key={dt}><dt className="mono">{dt}</dt><dd>{dd}</dd></div>)}</dl>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function Skills() {
  const all = skills.flatMap((s) => s.items);
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead n="06" label="Toolbox" title="What I" serif="work with." />
      </div>
      <div className="skill-marquee" aria-hidden="true">
        <div className="skill-track">{[...all, ...all].map((s, i) => <span key={i}>{s}</span>)}</div>
      </div>
      <div className="wrap">
        <StaggerGroup className="skills">
          {skills.map((s) => (
            <motion.div key={s.group} variants={fadeUp} className="skill">
              <h3 className="mono">{s.group}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
