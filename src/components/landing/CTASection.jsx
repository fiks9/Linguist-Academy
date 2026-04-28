import { useMemo, useState } from 'react';
import useCountdown from '../../hooks/useCountdown.js';
import SpotCounter from './SpotCounter.jsx';

function CountdownBlock({ label, value }) {
  return (
    <div className="flex w-16 flex-col items-center rounded-lg bg-primary-container px-2 py-3 text-on-primary md:w-20">
      <span className="font-display text-[28px] font-bold leading-none tabular-nums md:text-[32px]">
        {value}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-wider text-on-primary-container md:text-label-bold">
        {label}
      </span>
    </div>
  );
}

export default function CTASection({ spots = 7 }) {
  // Cohort closes 3 days from first render — stable across re-renders.
  const target = useMemo(
    () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    []
  );
  const { days, hours, minutes, seconds } = useCountdown(target);

  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="bg-surface-container-low py-12 md:py-section-padding"
    >
      <div className="mx-auto w-full max-w-3xl px-gutter text-center">
        <span className="inline-block rounded-full bg-error-container px-3 py-1 text-label-bold text-error">
          Cohort closes soon
        </span>
        <h2 className="mt-3 font-display text-headline-lg text-on-background">
          Your First Lesson is Waiting.
        </h2>
        <p className="mt-3 text-body-lg text-on-surface-variant">
          Enter your details to claim a free 20-minute consultation with a native coach.
        </p>

        <div className="mt-stack-md flex justify-center gap-2 md:gap-3">
          <CountdownBlock label="Days" value={days} />
          <CountdownBlock label="Hours" value={hours} />
          <CountdownBlock label="Minutes" value={minutes} />
          <CountdownBlock label="Seconds" value={seconds} />
        </div>

        <div className="mt-stack-md">
          <SpotCounter spots={spots} />
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-stack-lg max-w-md space-y-stack-sm rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block font-display text-label-bold text-on-background"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Doe"
              className="w-full rounded-md border border-outline-variant bg-surface-bright px-4 py-3 text-body-md text-on-background outline-none transition focus:border-primary-container focus:ring-2 focus:ring-primary-container/30"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-display text-label-bold text-on-background"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full rounded-md border border-outline-variant bg-surface-bright px-4 py-3 text-body-md text-on-background outline-none transition focus:border-primary-container focus:ring-2 focus:ring-primary-container/30"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-secondary-container py-4 font-display text-button text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim"
          >
            {submitted ? '✓ Consultation Claimed' : 'Claim Free Consultation'}
          </button>
          {submitted && (
            <p className="text-center text-label-bold text-on-surface-variant">
              We've reserved your spot. Check your inbox for next steps.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
