import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { currentYear } from './lib/year';

beforeAll(() => {
  // jsdom lacks these browser APIs used by framer-motion
  class IO { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  // @ts-expect-error test stub
  window.IntersectionObserver = IO;
  window.matchMedia = window.matchMedia || ((q: string) => ({ matches: false, media: q, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, onchange: null, dispatchEvent: () => false }));
  window.scrollTo = () => {};
});

describe('App', () => {
  it('shows the headline role', () => {
    render(<App />);
    expect(screen.getAllByText('Senior Software Engineer').length).toBeGreaterThan(0);
  });

  it('toggles between dark and light mode', () => {
    document.documentElement.dataset.theme = 'dark';
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /switch to light mode/i }));
    expect(document.documentElement.dataset.theme).toBe('light');
    fireEvent.click(screen.getByRole('button', { name: /switch to dark mode/i }));
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('shows the current year in the footer', () => {
    render(<App />);
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()}`))).toBeInTheDocument();
  });
});

describe('currentYear', () => {
  it('rolls over to 2027 automatically', () => {
    expect(currentYear(new Date('2027-01-01T00:00:00'))).toBe(2027);
  });
});
