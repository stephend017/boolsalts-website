import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
  { label: "ABOUT", href: "/about" },
];

const legalLinks = [
  { label: "CONTACT", href: "/contact" },
  { label: "TERMS", href: "/terms" },
  { label: "PRIVACY", href: "/privacy" },
  { label: "REFUNDS", href: "/refunds" },
];

export default function Footer() {
  return (
    <footer className="bg-bool-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo + tagline */}
          <div>
            <Link href="/">
              <span className="font-display text-4xl text-bool-white block mb-3">
                bool
              </span>
            </Link>
            <p className="font-body text-xs text-white/30 leading-relaxed max-w-xs">
              Clinical-strength hydration with nootropics. Engineered in the
              Netherlands. Stress-tested in NYC.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <div className="font-display-normal text-[10px] tracking-[0.3em] text-white/20 mb-2">
              NAVIGATE
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="animated-underline font-display-normal text-xs tracking-[0.2em] text-white/50 hover:text-bool-orange transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal + social */}
          <div>
            <div className="font-display-normal text-[10px] tracking-[0.3em] text-white/20 mb-4">
              LEGAL
            </div>
            <div className="flex flex-col gap-3 mb-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="animated-underline font-display-normal text-xs tracking-[0.2em] text-white/50 hover:text-bool-orange transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="font-display-normal text-[10px] tracking-[0.3em] text-white/20 mb-4">
                FOLLOW
              </div>
              <a
                href="https://www.instagram.com/boolsalts/"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline font-display-normal text-xs tracking-[0.2em] text-white/50 hover:text-bool-orange transition-colors w-fit flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/#"
            className="font-display text-5xl text-bool-orange hover:text-white transition-colors"
          >
            WELCOME TO THE BOOL SIDE
          </Link>
          <span className="font-body text-[10px] text-white/20 tracking-widest">
            © 2026 BOOL. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
