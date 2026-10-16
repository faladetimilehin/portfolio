import { buildCalendlyUrl, summarise, encodeForm } from './booking';

const enquiry = {
  name: ' Ada Lovelace ',
  email: 'ada@example.com',
  company: 'Analytical Ltd',
  service: 'AI feature integration',
  budget: '£5,000 – £15,000',
  timeline: 'Within 1 month',
  details: 'Add an AI assistant to our dashboard.',
};

describe('booking helpers', () => {
  it('pre-fills Calendly with name, email and the enquiry summary', () => {
    const url = new URL(buildCalendlyUrl('https://calendly.com/me/30min', enquiry));
    expect(url.searchParams.get('name')).toBe('Ada Lovelace');
    expect(url.searchParams.get('email')).toBe('ada@example.com');
    expect(url.searchParams.get('a1')).toContain('AI feature integration');
    expect(url.searchParams.get('a1')).toContain('Analytical Ltd');
  });

  it('leaves out empty optional fields', () => {
    expect(summarise({ ...enquiry, company: '' })).not.toContain('Company');
  });

  it('url-encodes form data for Netlify', () => {
    expect(encodeForm({ 'form-name': 'x', budget: '£1,000' })).toBe('form-name=x&budget=%C2%A31%2C000');
  });
});
