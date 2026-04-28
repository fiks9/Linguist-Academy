import useInView from '../../hooks/useInView.js';

const tiers = [
  {
    name: 'Basic',
    price: 29,
    features: ['Full curriculum access', 'AI pronunciation tools', 'Community forum'],
    featured: false,
  },
  {
    name: 'Pro',
    price: 79,
    features: ['Everything in Basic', '4 live sessions / month', 'Priority support'],
    featured: true,
  },
  {
    name: 'Elite',
    price: 199,
    features: ['Everything in Pro', 'Unlimited live sessions', '1-on-1 dedicated tutor'],
    featured: false,
  },
];

const stats = [
  { value: '5,000+', label: 'Active students' },
  { value: '42', label: 'Countries' },
  { value: '94%', label: 'Speaking by week 4' },
  { value: '4.9/5', label: 'Avg rating' },
];

export default function ProofSection() {
  const [statsRef, statsIn] = useInView();
  const [tiersRef, tiersIn] = useInView();
  return (
    <section id="proof" className="py-12 md:py-section-padding">
      <div className="mx-auto w-full max-w-container px-gutter">
        <div className="mx-auto mb-stack-lg max-w-3xl text-center">
          <span className="inline-block rounded-full bg-secondary-container px-3 py-1 text-label-bold text-on-secondary-container">
            The Proof
          </span>
          <h2 className="mt-3 font-display text-headline-lg text-on-background">
            Ready to Join 5,000+ Successful Students?
          </h2>
          <p className="mt-3 text-body-lg text-on-surface-variant">
            Select the tier that aligns with your learning objectives.
          </p>
        </div>

        <div ref={statsRef} className="mb-stack-lg grid grid-cols-2 gap-stack-md md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-container hover:shadow-ambient ${statsIn ? 'is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="font-display text-headline-md text-primary-container">
                {s.value}
              </div>
              <div className="mt-1 text-label-bold uppercase tracking-wider text-on-surface-variant">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div ref={tiersRef} className="grid grid-cols-1 gap-stack-md md:grid-cols-3 md:items-stretch">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal h-full ${tiersIn ? 'is-visible' : ''}`}
              style={{ '--reveal-delay': `${i * 130}ms` }}
            >
            <div
              className={[
                'flex h-full flex-col rounded-xl p-stack-md transition-all duration-300',
                t.featured
                  ? 'relative border-2 border-secondary-container bg-primary-container text-on-primary shadow-ambient hover:shadow-glow md:-translate-y-4 md:hover:-translate-y-6'
                  : 'border border-outline-variant bg-surface-container-lowest hover:-translate-y-1 hover:border-primary-container hover:shadow-ambient',
              ].join(' ')}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary-container px-4 py-1 text-label-bold text-on-secondary-container">
                  Most Popular
                </span>
              )}
              <h3
                className={[
                  'font-display text-[24px] font-semibold',
                  t.featured ? 'text-on-primary' : 'text-on-background',
                ].join(' ')}
              >
                {t.name}
              </h3>
              <div className="mt-2 mb-stack-sm">
                <span className="font-display text-[48px] font-bold leading-none">
                  ${t.price}
                </span>
                <span
                  className={[
                    'ml-1 text-body-md',
                    t.featured ? 'text-on-primary-container' : 'text-on-surface-variant',
                  ].join(' ')}
                >
                  /mo
                </span>
              </div>
              <ul className="mb-stack-lg flex-1 space-y-2">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={[
                      'flex items-start gap-2 text-body-md',
                      t.featured ? 'text-on-primary' : 'text-on-surface-variant',
                    ].join(' ')}
                  >
                    <svg
                      className={t.featured ? 'mt-1 text-secondary-fixed' : 'mt-1 text-primary-container'}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={[
                  'w-full rounded-md py-3 font-display text-button transition-colors',
                  t.featured
                    ? 'bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim'
                    : 'border border-primary-container text-primary-container hover:bg-surface-container',
                ].join(' ')}
              >
                Select {t.name}
              </button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
