import { siteConfig } from "@/lib/siteConfig";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
};

function SectionHeading({ eyebrow, title, lead, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={light ? "text-sm font-semibold text-brand-cyan" : "text-sm font-semibold text-brand-blue"}>
        {eyebrow}
      </p>
      <h2 className={light ? "mt-4 text-3xl font-bold leading-tight text-white md:text-5xl" : "mt-4 text-3xl font-bold leading-tight text-brand-ink md:text-5xl"}>
        {title}
      </h2>
      {lead ? (
        <p className={light ? "mt-5 text-base leading-8 text-white/75" : "mt-5 text-base leading-8 text-gray-600"}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-brand-blue" aria-hidden="true" />
      <span className="text-sm leading-6 text-gray-700">{children}</span>
    </li>
  );
}

export function ProblemSection() {
  return (
    <section id="problem" className="section-anchor bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Problem"
          title="技術力があるのに、採用ページで損をしていませんか？"
          lead="技術系企業ほど、実際の仕事は面白いのに、Web上では「何をしている会社か」「入社後に何をするか」が伝わりにくくなりがちです。"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.problems.map((problem, index) => (
            <article
              key={problem.title}
              className="rounded-lg border border-brand-line bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-brand-ice text-sm font-bold text-brand-blue">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold leading-8 text-brand-ink">{problem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600">{problem.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="light-grid bg-brand-ice px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-blue">Solution</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
              ただ作るのではなく、技術を「採用に伝わる言葉」へ翻訳します。
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              TechBridge Studioは、HP制作の前に、会社の技術・仕事内容・若手にとっての魅力を整理します。
              理系・研究経験のある視点から、専門的な内容を噛み砕き、採用ページとして伝わる構成に落とし込みます。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.strengths.map((strength, index) => (
              <article
                key={strength.title}
                className="rounded-lg border border-brand-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="mb-4 text-sm font-bold text-brand-blue">0{index + 1}</p>
                <h3 className="text-lg font-bold text-brand-ink">{strength.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{strength.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceSection() {
  return (
    <section id="service" className="section-anchor bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="rounded-lg bg-brand-navy p-8 text-white shadow-lift md:p-10">
            <p className="text-sm font-semibold text-brand-cyan">Service</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              理系若手向け 技術採用LP制作プラン
            </h2>
            <div className="mt-8 border-y border-white/20 py-7">
              <p className="text-sm text-white/70">基本料金</p>
              <p className="mt-2 text-5xl font-bold">25万円</p>
              <p className="mt-2 text-sm text-white/70">税別</p>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/75">
              初回導入枠：18万円〜
              <br />
              ※制作事例として掲載許可をいただける場合
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
            >
              無料診断を相談する
            </a>
          </div>

          <div className="rounded-lg border border-brand-line bg-white p-6 shadow-card md:p-8">
            <p className="mb-6 text-sm font-semibold text-brand-blue">含まれる内容</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {siteConfig.serviceItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliverablesSection() {
  return (
    <section id="deliverables" className="section-anchor bg-brand-ice px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Deliverables" title="納品物" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {siteConfig.deliverables.map((item, index) => (
            <article key={item.title} className="rounded-lg border border-brand-line bg-white p-6 shadow-card">
              <p className="text-sm font-bold text-brand-blue">0{index + 1}</p>
              <h3 className="mt-5 text-lg font-bold leading-7 text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageStructureSection() {
  return (
    <section className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Structure"
          title="LPに入れる主な内容"
          lead="採用LPの構成を、応募前の理解が深まる順番で設計します。"
        />
        <div className="mx-auto max-w-4xl">
          {siteConfig.pageStructure.map((item, index) => (
            <div key={item.title} className="relative grid gap-5 border-l border-brand-line pb-8 pl-8 last:pb-0 md:grid-cols-[180px_1fr]">
              <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-md bg-brand-navy text-xs font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-brand-ink">{item.title}</h3>
              <p className="text-sm leading-7 text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-brand-navy px-5 py-20 text-white md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Target"
          title="専門性が高く、魅力が伝わりにくい企業に向いています。"
          lead="特に、技術職・開発職・品質管理・生産技術・研究補助などを採用したい企業に適しています。"
          light
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {siteConfig.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white/90"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-anchor bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Process" title="制作の流れ" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.process.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-brand-line bg-white p-7 shadow-card">
              <p className="text-sm font-bold text-brand-blue">Step {index + 1}</p>
              <h3 className="mt-4 text-xl font-bold text-brand-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="section-anchor light-grid bg-brand-ice px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Pricing" title="料金" />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-lg border border-brand-line bg-white p-8 shadow-card md:p-10">
            <p className="text-sm font-semibold text-brand-blue">{pricing.name}</p>
            <div className="mt-7 flex items-end gap-3">
              <span className="text-5xl font-bold text-brand-ink">{pricing.price}</span>
              <span className="pb-2 text-sm text-gray-600">{pricing.note}</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-gray-600">{pricing.intro}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
            >
              無料診断を依頼する
            </a>
          </article>

          <div className="grid gap-6 md:grid-cols-3">
            <PriceList title="含まれるもの" items={pricing.included} />
            <PriceList title="含まれないもの" items={pricing.excluded} muted />
            <PriceList title="オプション" items={pricing.options} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className="rounded-lg border border-brand-line bg-white p-6 shadow-card">
      <h3 className="text-base font-bold text-brand-ink">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-600">
            <span
              className={muted ? "mt-2 h-2 w-2 shrink-0 rounded-sm bg-gray-300" : "mt-2 h-2 w-2 shrink-0 rounded-sm bg-brand-blue"}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="bg-white px-5 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-blue">Trust</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
              なぜ、技術系企業に特化するのか
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              一般的なHP制作では、デザインは整っていても、技術の面白さや若手が知りたい仕事内容までは深く整理されないことがあります。
              TechBridge Studioは、技術系企業の採用ページに必要な「専門性」と「分かりやすさ」の両方を重視します。
            </p>
          </div>
          <div className="rounded-lg border border-brand-line bg-brand-ice p-6 md:p-8">
            <ul className="grid gap-4">
              {siteConfig.trustItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <p className="mt-7 border-t border-brand-line pt-5 text-sm leading-7 text-gray-600">
              架空の実績や顧客名は表示せず、事実確認を前提にした採用広報の土台作りを行います。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
