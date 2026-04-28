export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-6 px-gutter py-12 md:grid-cols-2">
        <div>
          <div className="font-display text-lg font-bold text-primary-container">
            Linguist Academy
          </div>
          <p className="mt-2 text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} Linguist Academy. Authoritative English instruction for beginners.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
          {['Privacy Policy', 'Terms of Service', 'Contact Support', 'Careers'].map((l) => (
            <a
              key={l}
              href="#"
              className="text-body-md text-on-surface-variant decoration-secondary-container decoration-2 underline-offset-4 hover:underline"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
