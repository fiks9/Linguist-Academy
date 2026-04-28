export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-container px-gutter py-12 md:py-section-padding">
      <div className="grid grid-cols-1 items-center gap-stack-lg md:grid-cols-2">
        <div className="flex flex-col gap-stack-md motion-safe:animate-fade-up">
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1 text-label-bold text-on-surface-variant motion-safe:animate-fade-up"
            style={{ animationDelay: '60ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-secondary-container" />
            New 2026 Cohort Open
          </span>
          <h1
            className="font-display text-display-xl text-on-background motion-safe:animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            Master English. <br className="hidden md:block" />
            Start Speaking from Day One.
          </h1>
          <p
            className="max-w-xl text-body-lg text-on-surface-variant motion-safe:animate-fade-up"
            style={{ animationDelay: '220ms' }}
          >
            No complex grammar drills. No textbooks. Just the confidence to speak
            from your very first lesson — built by linguists, loved by 5,000+ adult beginners.
          </p>
          <div
            className="flex flex-col gap-3 pt-2 sm:flex-row motion-safe:animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-secondary-container px-8 py-4 font-display text-button text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim"
            >
              Start Your Journey
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-md border border-primary-container bg-transparent px-8 py-4 font-display text-button text-primary-container transition-colors hover:bg-surface-container"
            >
              See the Curriculum
            </a>
          </div>
          <div
            className="flex items-center gap-4 pt-2 text-label-bold text-on-surface-variant motion-safe:animate-fade-up"
            style={{ animationDelay: '420ms' }}
          >
            <div className="flex -space-x-2">
              {['#fed000', '#b1c7f2', '#dbe2fa', '#001b3d'].map((c, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-surface-container-lowest"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span>Joined by 5,000+ learners across 42 countries</span>
          </div>
        </div>

        <div className="relative aspect-square w-full md:aspect-[4/3] motion-safe:animate-scale-in">
          {/* Soft ambient glow behind the image */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-tertiary-container/20 blur-3xl motion-safe:animate-fade-in"
            style={{ animationDelay: '200ms' }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-xl border border-outline-variant bg-tertiary-container shadow-ambient motion-safe:animate-float">
            <img
              alt="Glowing nodes connecting in a network — visualizing language learning"
              loading="eager"
              className="h-full w-full object-cover"
              src={`${import.meta.env.BASE_URL}hero.png`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-tertiary-container/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
