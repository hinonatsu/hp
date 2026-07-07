import { siteConfig } from "@/lib/siteConfig";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
};

function SectionShell({
  id,
  children,
  tone = "white"
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "white" | "soft";
}) {
  return (
    <section
      id={id}
      className={`section-anchor border-b border-brand-line px-5 py-20 md:py-28 lg:px-8 ${
        tone === "soft" ? "bg-brand-soft" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 border-t border-brand-ink pt-6 lg:grid-cols-[220px_1fr]">
      <p className="text-xs font-semibold text-brand-muted">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-brand-ink md:text-5xl">
          {title}
        </h2>
        {lead ? <p className="mt-5 max-w-3xl text-base leading-8 text-brand-muted">{lead}</p> : null}
      </div>
    </div>
  );
}

function TextRow({
  index,
  title,
  body
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <li className="grid gap-4 border-t border-brand-line py-7 md:grid-cols-[90px_0.9fr_1.4fr]">
      <span className="text-sm text-brand-muted">{String(index).padStart(2, "0")}</span>
      <h3 className="text-lg font-semibold leading-7 text-brand-ink">{title}</h3>
      <p className="text-sm leading-7 text-brand-muted">{body}</p>
    </li>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-brand-line border-y border-brand-line">
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-4 text-sm leading-6 text-brand-muted">
          <span className="mt-3 h-px w-5 shrink-0 bg-brand-ink" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProblemSection() {
  return (
    <SectionShell id="problem">
      <SectionHeading
        eyebrow="Problem"
        title="技術力があるのに、採用ページで損をしていませんか？"
        lead="技術系企業ほど、実際の仕事は面白いのに、Web上では「何をしている会社か」「入社後に何をするか」が伝わりにくくなりがちです。"
      />
      <ol className="border-b border-brand-line">
        {siteConfig.problems.map((problem, index) => (
          <TextRow key={problem.title} index={index + 1} title={problem.title} body={problem.body} />
        ))}
      </ol>
    </SectionShell>
  );
}

export function SolutionSection() {
  return (
    <SectionShell tone="soft">
      <SectionHeading
        eyebrow="Solution"
        title="ただ作るのではなく、技術を「採用に伝わる言葉」へ翻訳します。"
        lead="TechBridge Studioは、HP制作の前に、会社の技術・仕事内容・若手にとっての魅力を整理します。理系・研究経験のある視点から、専門的な内容を噛み砕き、採用ページとして伝わる構成に落とし込みます。"
      />
      <ol className="border-b border-brand-line">
        {siteConfig.strengths.map((strength, index) => (
          <TextRow key={strength.title} index={index + 1} title={strength.title} body={strength.body} />
        ))}
      </ol>
    </SectionShell>
  );
}

export function ServiceSection() {
  return (
    <SectionShell id="service">
      <SectionHeading eyebrow="Service" title="理系若手向け 技術採用LP制作プラン" />
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        <div className="border-y border-brand-ink py-7">
          <p className="text-sm text-brand-muted">基本料金</p>
          <p className="mt-3 text-5xl font-semibold text-brand-ink">25万円</p>
          <p className="mt-2 text-sm text-brand-muted">税別</p>
          <p className="mt-7 text-sm leading-7 text-brand-muted">
            初回導入枠：18万円〜
            <br />
            ※制作事例として掲載許可をいただける場合
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center border border-brand-ink bg-brand-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-ink sm:w-auto"
          >
            無料診断を相談する
          </a>
        </div>

        <div>
          <p className="mb-5 text-sm font-semibold text-brand-ink">含まれる内容</p>
          <PlainList items={siteConfig.serviceItems} />
        </div>
      </div>
    </SectionShell>
  );
}

export function DeliverablesSection() {
  return (
    <SectionShell id="deliverables" tone="soft">
      <SectionHeading eyebrow="Deliverables" title="納品物" />
      <ol className="border-b border-brand-line">
        {siteConfig.deliverables.map((item, index) => (
          <TextRow key={item.title} index={index + 1} title={item.title} body={item.body} />
        ))}
      </ol>
    </SectionShell>
  );
}

export function PageStructureSection() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Structure"
        title="LPに入れる主な内容"
        lead="採用LPの構成を、応募前の理解が深まる順番で設計します。"
      />
      <ol className="border-b border-brand-line">
        {siteConfig.pageStructure.map((item, index) => (
          <TextRow key={item.title} index={index + 1} title={item.title} body={item.body} />
        ))}
      </ol>
    </SectionShell>
  );
}

export function IndustriesSection() {
  return (
    <SectionShell tone="soft">
      <SectionHeading
        eyebrow="Target"
        title="専門性が高く、魅力が伝わりにくい企業に向いています。"
        lead="特に、技術職・開発職・品質管理・生産技術・研究補助などを採用したい企業に適しています。"
      />
      <ul className="flex flex-wrap border-t border-l border-brand-line">
        {siteConfig.industries.map((industry) => (
          <li
            key={industry}
            className="border-r border-b border-brand-line px-4 py-3 text-sm font-semibold text-brand-ink"
          >
            {industry}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export function ProcessSection() {
  return (
    <SectionShell id="process">
      <SectionHeading eyebrow="Process" title="制作の流れ" />
      <ol className="border-b border-brand-line">
        {siteConfig.process.map((step, index) => (
          <TextRow key={step.title} index={index + 1} title={step.title} body={step.body} />
        ))}
      </ol>
    </SectionShell>
  );
}

export function PricingSection() {
  const { pricing } = siteConfig;

  return (
    <SectionShell id="pricing" tone="soft">
      <SectionHeading eyebrow="Pricing" title="料金" />
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        <div className="border-y border-brand-ink py-7">
          <p className="text-sm font-semibold text-brand-ink">{pricing.name}</p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-5xl font-semibold text-brand-ink">{pricing.price}</span>
            <span className="pb-2 text-sm text-brand-muted">{pricing.note}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-brand-muted">{pricing.intro}</p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center border border-brand-ink bg-brand-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-ink sm:w-auto"
          >
            無料診断を依頼する
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <PriceList title="含まれるもの" items={pricing.included} />
          <PriceList title="含まれないもの" items={pricing.excluded} />
          <PriceList title="オプション" items={pricing.options} />
        </div>
      </div>
    </SectionShell>
  );
}

function PriceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="border-y border-brand-ink py-3 text-base font-semibold text-brand-ink">{title}</h3>
      <ul className="divide-y divide-brand-line border-b border-brand-line">
        {items.map((item) => (
          <li key={item} className="py-3 text-sm leading-6 text-brand-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrustSection() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Trust"
        title="なぜ、技術系企業に特化するのか"
        lead="一般的なHP制作では、デザインは整っていても、技術の面白さや若手が知りたい仕事内容までは深く整理されないことがあります。TechBridge Studioは、技術系企業の採用ページに必要な「専門性」と「分かりやすさ」の両方を重視します。"
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <PlainList items={siteConfig.trustItems} />
        <p className="border-y border-brand-line py-6 text-sm leading-8 text-brand-muted">
          架空の実績や顧客名は表示せず、事実確認を前提にした採用広報の土台作りを行います。
        </p>
      </div>
    </SectionShell>
  );
}
