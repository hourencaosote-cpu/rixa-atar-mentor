/* eslint-disable @next/next/no-html-link-for-pages */
import { navigation } from "../_data/site";
import { BrandMark } from "./BrandMark";

type SiteHeaderProps = {
  current?: string;
};

export function SiteHeader({ current = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="/" aria-label="Go to the home page">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              aria-current={current === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/contact#inquiry">
          Free consultation
          <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="/" aria-current={current === "/" ? "page" : undefined}>
              Home
            </a>
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                aria-current={current === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="mobile-menu-cta" href="/contact#inquiry">
              Request a free consultation
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <BrandMark inverse />
          <strong>RIXA</strong>
          <p>ATAR &amp; academic mentoring for Australian high school students</p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-meta">
          <p>University of Melbourne</p>
          <p>Online / English</p>
          <p>© {new Date().getFullYear()} RIXA</p>
        </div>
      </div>
    </footer>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div className="section-shell contact-band-grid">
        <div>
          <p className="eyebrow light">FREE CONSULTATION</p>
          <h2 id="contact-band-title">
            Start with the part that still feels unclear,
            <br className="display-break" />
            and make a plan together.
          </h2>
        </div>
        <div className="contact-band-copy">
          <p>
            In a free consultation, we review your current position and next step in about 30 minutes.
            You do not need to decide on ongoing support straight away.
          </p>
          <a
            className="button button-light"
            href="mailto:yoneriku19@gmail.com?subject=Free%20consultation"
          >
            Email for a free consultation
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-details">
            <a href="mailto:yoneriku19@gmail.com">yoneriku19@gmail.com</a>
            <a href="tel:+819012906147">090-1290-6147</a>
          </div>
        </div>
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  currentLabel: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  currentLabel,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-shell">
        <p className="breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>{currentLabel}</span>
        </p>
        <div className="page-hero-copy motion-in">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
      </div>
    </section>
  );
}
