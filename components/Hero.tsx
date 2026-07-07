import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section id="top" className="border-b border-brand-line bg-white px-5 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-brand-line pb-5">
              {siteConfig.hero.badges.map((badge) => (
                <span key={badge} className="text-xs font-semibold text-brand-muted">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mb-5 text-sm font-semibold text-brand-muted">TechBridge Studio</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-6xl">
              技術の魅力を、
              <br />
              理系若手に伝わる採用LPへ。
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-brand-muted md:text-lg">
              {siteConfig.description}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-muted md:text-base">
              {siteConfig.hero.supporting}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-brand-ink bg-brand-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-ink"
              >
                無料診断を相談する
              </a>
              <a
                href="#service"
                className="inline-flex items-center justify-center border border-brand-line bg-white px-6 py-4 text-sm font-semibold text-brand-ink transition hover:border-brand-ink"
              >
                サービス内容を見る
              </a>
            </div>
          </div>

          <aside className="border-y border-brand-ink py-6" aria-label="サービス概要">
            <p className="text-sm font-semibold text-brand-ink">制作概要</p>
            <dl className="mt-5 divide-y divide-brand-line">
              {siteConfig.hero.stats.map((stat) => (
                <div key={stat} className="grid grid-cols-[120px_1fr] gap-4 py-4">
                  <dt className="text-xs text-brand-muted">項目</dt>
                  <dd className="text-sm font-semibold text-brand-ink">{stat}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-16 grid border-t border-brand-line lg:grid-cols-2">
          <ComparisonColumn title="現状で起きがちなこと" items={siteConfig.hero.before} />
          <ComparisonColumn title="LPで整理すること" items={siteConfig.hero.after} />
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-b border-brand-line py-8 lg:border-r lg:last:border-r-0 lg:pr-10 lg:even:pl-10">
      <h2 className="text-base font-semibold text-brand-ink">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-brand-muted">
            <span className="mt-3 h-px w-5 shrink-0 bg-brand-ink" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
