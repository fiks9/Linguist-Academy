import useInView from '../../hooks/useInView.js';

const phases = [
  {
    level: 'Level A1',
    title: 'Foundations',
    body: 'Master essential vocabulary and core phonetic structures. Introduce yourself, navigate transactions, understand directions — in your first 14 days.',
  },
  {
    level: 'Level A2',
    title: 'Practical Conversations',
    body: 'Move from rehearsed phrases to dynamic dialogue. Form questions, express opinions, and hold real conversations in informal settings.',
  },
  {
    level: 'Level B1+',
    title: 'Fluency Launch',
    body: 'Handle unpredictable conversations, professional interactions, and complex narratives. Refine accent and expand idiomatic vocabulary.',
  },
];

const benefits = [
  { icon: '💬', title: 'Speak from Day 1', body: 'Verbal output is prioritized over passive grammar drills.' },
  { icon: '⏱', title: '15-Minute Lessons', body: 'Engineered for adults — daily micro-sessions that compound.' },
  { icon: '🎓', title: 'Native Coaches', body: 'Real-time feedback from verified native-speaking educators.' },
];

export default function SolutionSection() {
  const [benefitsRef, benefitsIn] = useInView();
  const [phasesRef, phasesIn] = useInView();
  return (
    <section
      id="solution"
      className="bg-surface-container-low py-12 md:py-section-padding"
    >
      <div className="mx-auto w-full max-w-container px-gutter">
        <div className="mx-auto mb-stack-lg max-w-3xl text-center">
          <span className="inline-block rounded-full bg-tertiary-fixed px-3 py-1 text-label-bold text-on-tertiary-fixed">
            Our Method
          </span>
          <h2 className="mt-3 font-display text-headline-lg text-on-background">
            A Curriculum Built for Clarity
          </h2>
          <p className="mt-3 text-body-lg text-on-surface-variant">
            A structured, linear path from absolute beginner to confident speaker — engineered around how adults actually learn.
          </p>
        </div>

        <div ref={benefitsRef} className="mb-stack-lg grid grid-cols-1 gap-stack-md md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`reveal rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-container hover:shadow-ambient ${benefitsIn ? 'is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              <div className="mb-base flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-2xl">
                {b.icon}
              </div>
              <h3 className="font-display text-[20px] font-semibold text-on-background">
                {b.title}
              </h3>
              <p className="mt-2 text-body-md text-on-surface-variant">{b.body}</p>
            </div>
          ))}
        </div>

        <div ref={phasesRef} className="flex flex-col gap-stack-md">
          {phases.map((phase, i) => (
            <article
              key={phase.title}
              className={`reveal flex flex-col items-start gap-stack-md rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md transition-all duration-300 hover:border-primary-container hover:shadow-ambient md:flex-row ${phasesIn ? 'is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 140}ms` }}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary-container font-display text-headline-md text-on-secondary-container">
                {i + 1}
              </div>
              <div className="flex-1 space-y-2">
                <span className="inline-block rounded-full bg-tertiary-fixed px-3 py-1 text-label-bold text-on-tertiary-fixed">
                  {phase.level}
                </span>
                <h3 className="font-display text-headline-md text-on-background">
                  {phase.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">{phase.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
