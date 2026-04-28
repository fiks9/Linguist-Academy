import { useState } from 'react';

const links = [
  { href: '#problem', label: 'Why It Works' },
  { href: '#solution', label: 'Curriculum' },
  { href: '#proof', label: 'Pricing' },
  { href: '#cta', label: 'Get Started' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest/90 backdrop-blur">
      <div className="mx-auto flex max-w-container items-center justify-between px-gutter py-4">
        <a href="#" className="font-display text-lg font-bold text-primary-container">
          Linguist Academy
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-body-md text-on-surface-variant transition-colors hover:text-primary-container"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-body-md text-on-surface-variant hover:text-primary-container md:inline"
          >
            Login
          </a>
          <a
            href="#cta"
            className="rounded-md bg-secondary-container px-4 py-2.5 font-display text-button text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim"
          >
            Start Learning
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded p-2 text-primary-container"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-outline-variant bg-surface-container-lowest">
          <div className="flex flex-col px-gutter py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-body-md text-on-surface-variant"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
