import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy px-5 pb-14 pt-16 text-white md:pb-20 md:pt-24 lg:px-8"
    >
      <div
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-10 h-80 w-80 bg-brand-blue/30 blur-3xl md:h-[520px] md:w-[520px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_470px] lg:items-center">
          <div>
            <p className="inline-flex max-w-full items-center border-y border-white/[0.22] py-2 text-xs font-semibold leading-5 text-brand-cyan">
              {siteConfig.hero.badge}
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-white md:text-6xl lg:text-7xl">
              技術の魅力を、
              <br />
              理系若手に伝わる採用ページへ。
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              {siteConfig.description}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              {siteConfig.supporting}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-brand-blue bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy"
              >
                無料診断を相談する
              </a>
              <a
                href="#service"
                className="inline-flex items-center justify-center border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/60"
              >
                サービス内容を見る
              </a>
            </div>

            <p className="mt-5 max-w-2xl text-xs leading-6 text-slate-400">{siteConfig.hero.note}</p>
          </div>

          <aside
            className="relative border-y border-white/20 py-6"
            aria-label="Before After プレビュー"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase text-brand-cyan">Preview</p>
                <h2 className="mt-2 text-lg font-semibold text-white">採用LPの整理イメージ</h2>
              </div>
              <div className="grid h-12 w-12 place-items-center border-y border-white/25 text-sm font-semibold text-brand-cyan">
                LP
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ComparisonColumn title="Before" items={siteConfig.hero.before} tone="muted" />
              <ComparisonColumn title="After" items={siteConfig.hero.after} tone="accent" />
            </div>

            <div className="mt-5 border-t border-white/15 pt-5">
              <div className="h-2 w-28 bg-white/30" />
              <div className="mt-4 grid gap-2">
                <span className="h-2 w-full bg-white/[0.12]" />
                <span className="h-2 w-10/12 bg-white/[0.12]" />
                <span className="h-2 w-7/12 bg-brand-blue/50" />
              </div>
              <div className="mt-5 grid grid-cols-3 border-y border-white/15">
                <span className="h-14 border-r border-white/15 last:border-r-0" />
                <span className="h-14 border-r border-white/15 last:border-r-0" />
                <span className="h-14 border-r border-white/15 last:border-r-0" />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid border-y border-white/20 md:grid-cols-3">
          {siteConfig.hero.stats.map((stat) => (
            <div
              key={stat}
              className="border-b border-white/15 px-0 py-5 text-sm font-semibold text-white md:border-b-0 md:border-r md:px-5 md:last:border-r-0"
            >
              <span className="mb-3 block h-px w-8 bg-brand-cyan" aria-hidden="true" />
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: "muted" | "accent";
}) {
  return (
    <div className="border-b border-white/15 py-5 md:border-b-0 md:border-r md:pr-5 md:last:border-r-0 md:last:pl-5 lg:border-b lg:border-r-0 lg:last:pl-0 xl:border-b-0 xl:border-r xl:last:border-r-0 xl:last:pl-5">
      <h3
        className={`text-sm font-semibold ${
          tone === "accent" ? "text-brand-cyan" : "text-slate-300"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
            <span
              className={`mt-2.5 h-1.5 w-1.5 shrink-0 ${
                tone === "accent" ? "bg-brand-cyan" : "bg-slate-500"
              }`}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
