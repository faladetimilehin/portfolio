import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { budgets, profile, services, timelines } from '../data/profile';
import { buildCalendlyUrl, encodeForm, type Enquiry } from '../lib/booking';
import { Reveal } from './Motion';
import { SectionHead } from './Sections';

const empty: Enquiry = { name: '', email: '', company: '', service: '', budget: '', timeline: '', details: '' };

const steps = [
  ['1', 'Tell me what you need', 'A few quick questions about your project.'],
  ['2', 'Pick a time on Calendly', 'Your answers are added to the booking automatically.'],
  ['3', 'We talk', 'A free 30-minute call to scope it, then a clear quote.'],
];

export function HireMe() {
  const [form, setForm] = useState<Enquiry>(empty);
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [bookingUrl, setBookingUrl] = useState('');

  const set = (k: keyof Enquiry) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    setState('sending');
    const url = buildCalendlyUrl(profile.calendly, form);
    setBookingUrl(url);
    try {
      // Saves the enquiry in Netlify Forms (you get an email for each one).
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'freelance-enquiry', ...form, company: form.company ?? '' }),
      });
    } catch { /* still let them book even if saving fails */ }
    setState('done');
    window.open(url, '_blank', 'noopener');
  }

  return (
    <section id="hire">
      <div className="wrap">
        <SectionHead n="07" label="Freelance" title="Got a project?" serif="Let's book a call."
          lead="I take on freelance work: web apps, SaaS, AI features and fintech integrations. Tell me what you need, then pick a time that suits you." />

        <div className="hire">
          <Reveal className="steps">
            {steps.map(([n, t, d]) => (
              <div key={n} className="step">
                <span className="step-n mono">0{n}</span>
                <div><b>{t}</b><small>{d}</small></div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="hire-card">
            <AnimatePresence mode="wait">
              {state !== 'done' ? (
                <motion.form key="form" name="freelance-enquiry" onSubmit={submit} className="hire-form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}>
                  <input type="hidden" name="form-name" value="freelance-enquiry" />
                  <div className="row">
                    <label>Your name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
                    <label>Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
                  </div>
                  <label><span>Company <span className="opt">(optional)</span></span><input value={form.company} onChange={set('company')} autoComplete="organization" /></label>
                  <label>What do you need?
                    <select required value={form.service} onChange={set('service')}>
                      <option value="" disabled>Choose a service</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <div className="row">
                    <label>Budget
                      <select required value={form.budget} onChange={set('budget')}>
                        <option value="" disabled>Select</option>
                        {budgets.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </label>
                    <label>Timeline
                      <select required value={form.timeline} onChange={set('timeline')}>
                        <option value="" disabled>Select</option>
                        {timelines.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </label>
                  </div>
                  <label>Tell me about the project
                    <textarea required rows={4} value={form.details} onChange={set('details')}
                      placeholder="What are you building, who is it for, and what does success look like?" />
                  </label>
                  <motion.button type="submit" className="btn btn-dark full" disabled={state === 'sending'}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {state === 'sending' ? 'Sending…' : 'Continue to pick a time →'}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div key="done" className="hire-done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <motion.div className="tick" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}>✓</motion.div>
                  <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
                  <p>I've got your project details. Calendly should have opened in a new tab. If it didn't, use the button below.</p>
                  <a className="btn btn-dark" href={bookingUrl} target="_blank" rel="noopener noreferrer">Open Calendly</a>
                  <button type="button" className="link-btn" onClick={() => { setForm(empty); setState('idle'); }}>Send another enquiry</button>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
