import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section id="top" className="grid-surface relative overflow-hidden text-white">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1fr_0.88fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {siteConfig.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mb-4 text-sm font-semibold text-brand-cyan">TechBridge Studio</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            技術の魅力を、
            <br />
            理系若手に伝わる採用LPへ。
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {siteConfig.description}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            {siteConfig.hero.supporting}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-blue px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
            >
              無料診断を相談する
            </a>
            <a
              href="#service"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              サービス内容を見る
            </a>
          </div>

          <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.hero.stats.map((stat) => (
              <div key={stat} className="rounded-lg border border-white/20 bg-white/10 p-4">
                <dt className="sr-only">サービス概要</dt>
                <dd className="text-sm font-semibold text-white">{stat}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-cyan/20 to-brand-blue/10 blur-3xl" />
          <div className="relative rounded-lg border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/25 backdrop-blur md:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/20 pb-4">
              <div>
                <p className="text-xs font-semibold text-brand-cyan">Recruit LP Translation</p>
                <p className="mt-1 text-lg font-semibold">技術を採用向けの言葉へ</p>
              </div>
              <span className="rounded-md bg-brand-blue px-3 py-2 text-xs font-semibold">
                Draft
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ComparisonColumn title="Before" tone="muted" items={siteConfig.hero.before} />
              <ComparisonColumn title="After" tone="active" items={siteConfig.hero.after} />
            </div>

            <div className="mt-5 rounded-lg border border-white/20 bg-brand-navy/50 p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold">LP構成プレビュー</p>
                <p className="text-xs text-white/60">1ページ完結</p>
              </div>
              <div className="grid gap-3">
                {["技術・事業紹介", "仕事内容の具体化", "応募前FAQ", "応募導線"].map(
                  (label, index) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/10 text-xs font-semibold text-brand-cyan">
                        {index + 1}
                      </span>
                      <div className="h-2 flex-1 rounded bg-white/10">
                        <div
                          className="h-2 rounded bg-gradient-to-r from-brand-cyan to-brand-blue"
                          style={{ width: `${72 - index * 8}%` }}
                        />
                      </div>
                      <span className="w-28 text-xs text-white/75">{label}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({
  title,
  tone,
  items
}: {
  title: string;
  tone: "muted" | "active";
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-white/20 bg-brand-navy/40 p-4">
      <p className={tone === "active" ? "text-sm font-semibold text-brand-cyan" : "text-sm font-semibold text-white/60"}>
        {title}
      </p>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/80">
            <span
              className={
                tone === "active"
                  ? "mt-2 h-2 w-2 shrink-0 rounded-sm bg-brand-cyan"
                  : "mt-2 h-2 w-2 shrink-0 rounded-sm bg-white/30"
              }
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
