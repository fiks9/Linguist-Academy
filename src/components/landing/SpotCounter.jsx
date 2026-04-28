export default function SpotCounter({ spots = 7, total = 50 }) {
  const taken = Math.max(0, total - spots);
  const pct = Math.min(100, Math.round((taken / total) * 100));

  return (
    <div className="w-full max-w-md mx-auto rounded-lg border border-outline-variant bg-surface-container-lowest p-stack-md">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-headline text-label-bold uppercase tracking-wider text-on-surface-variant">
          Cohort filling fast
        </span>
        <span className="font-display text-headline-md text-primary-container">
          {spots}
          <span className="text-body-md text-on-surface-variant"> / {total} spots left</span>
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-surface-container overflow-hidden">
        <div
          className="h-full rounded-full bg-secondary-container transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-label-bold text-on-surface-variant">
        {taken} students already enrolled this week.
      </p>
    </div>
  );
}
