import useInView from '../../hooks/useInView.js';

const problems = [
  {
    title: 'Grammar paralysis',
    body: 'Years of rules, zero conversations. Traditional courses teach you to analyze English — not speak it.',
  },
  {
    title: 'Fear of mistakes',
    body: 'Most beginners freeze the moment a native speaker replies. Confidence is never trained.',
  },
  {
    title: 'No time to study',
    body: 'Long lessons collapse under busy schedules. Progress dies in week three.',
  },
];

export default function ProblemSection() {
  const [gridRef, inView] = useInView();
  return (
    <section
      id="problem"
      className="mx-auto w-full max-w-container px-gutter py-12 md:py-section-padding"
    >
      <div className="mx-auto mb-stack-lg max-w-3xl text-center">
        <span className="inline-block rounded-full bg-error-container px-3 py-1 text-label-bold text-error">
          The Problem
        </span>
        <h2 className="mt-3 font-display text-headline-lg text-on-background">
          Why Most Beginners Fail (And Why You Won't)
        </h2>
        <p className="mt-3 text-body-lg text-on-surface-variant">
          Three roadblocks kill 90% of language journeys. We engineered our method to bypass each one.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 gap-stack-md md:grid-cols-3">
        {problems.map((p, i) => (
          <article
            key={p.title}
            className={`reveal group flex flex-col gap-base rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-container hover:shadow-ambient ${inView ? 'is-visible' : ''}`}
            style={{ '--reveal-delay': `${i * 120}ms` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed font-display text-headline-md text-on-tertiary-fixed">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="font-display text-[22px] font-semibold text-on-background">
              {p.title}
            </h3>
            <p className="text-body-md text-on-surface-variant">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
