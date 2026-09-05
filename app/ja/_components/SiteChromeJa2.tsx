/* eslint-disable @next/next/no-html-link-for-pages */
import { BrandMark } from "../../_components/BrandMark";

const navigation = [
  { href: "/support", label: "サポート" },
  { href: "/plans", label: "料金プラン" },
  { href: "/story", label: "ストーリー" },
  { href: "/results", label: "実績" },
  { href: "/contact", label: "相談の流れ" },
] as const;

function japanese2Path(current: string) {
  return current === "/" ? "/ja" : `/ja${current}`;
}

type SiteHeaderProps = {
  current?: string;
};

export function SiteHeaderJa2({ current = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="/ja" aria-label="日本語版トップへ">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <a
              href={japanese2Path(item.href)}
              key={item.href}
              aria-current={current === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <nav className="language-switch" aria-label="言語">
            <a href={current} lang="en">
              EN
            </a>
            <a href={japanese2Path(current)} lang="ja" aria-current="page">
              日本語
            </a>
          </nav>

          <a className="header-cta" href="/ja/contact#inquiry">
            無料相談
            <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="メニューを開く">
              <span />
              <span />
            </summary>
            <nav aria-label="モバイルナビゲーション">
              <a href="/ja" aria-current={current === "/" ? "page" : undefined}>
                トップ
              </a>
              {navigation.map((item) => (
                <a
                  href={japanese2Path(item.href)}
                  key={item.href}
                  aria-current={current === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
              <a className="mobile-menu-cta" href="/ja/contact#inquiry">
                無料相談を申し込む
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooterJa2() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <BrandMark inverse />
          <strong>RIXA</strong>
          <p>オーストラリア高校生のためのATAR・学習メンタリング</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          {navigation.map((item) => (
            <a href={japanese2Path(item.href)} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-meta">
          <p>University of Melbourne</p>
          <p>オンライン / 日本語</p>
          <p>© {new Date().getFullYear()} RIXA</p>
        </div>
      </div>
    </footer>
  );
}

export function ContactBandJa2() {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title-ja2">
      <div className="section-shell contact-band-grid">
        <div>
          <p className="eyebrow light">無料相談</p>
          <h2 id="contact-band-title-ja2">
            まだ整理できていない悩みから、
            <br className="display-break" />一緒に次の一歩をつくります。
          </h2>
        </div>
        <div className="contact-band-copy">
          <p>
            初回相談では、現在地と次の課題を約30分で確認します。相談しただけで、すぐに継続サポートを決める必要はありません。
          </p>
          <a
            className="button button-light"
            href="mailto:yoneriku19@gmail.com?subject=%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87"
          >
            メールで無料相談
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

export function PageHeroJa2({ eyebrow, title, lead, currentLabel }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-shell">
        <p className="breadcrumb">
          <a href="/ja">トップ</a>
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
