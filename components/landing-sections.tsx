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
    <div className="mb-12 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <p className="text-xs font-semibold uppercase text-brand-blue">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-normal text-brand-navy md:text-5xl">
          {title}
        </h2>
        {lead ? <p className="mt-5 max-w-3xl text-base leading-8 text-brand-muted">{lead}</p> : null}
      </div>
    </div>
  );
}

function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-brand-line bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-brand-blue/40 ${className}`}
    >
      {children}
    </div>
  );
}

function NumberedCard({
  index,
  title,
  body
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <span className="text-sm font-semibold text-brand-blue">{String(index).padStart(2, "0")}</span>
      <h3 className="mt-5 text-xl font-semibold leading-8 text-brand-navy">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-brand-muted">{body}</p>
    </Card>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 border border-brand-line bg-white px-4 py-3 text-sm leading-6 text-brand-muted"
        >
          <span className="mt-2 h-2 w-2 shrink-0 bg-brand-blue" aria-hidden="true" />
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
      <div className="grid gap-5 md:grid-cols-3">
        {siteConfig.problems.map((problem, index) => (
          <NumberedCard
            key={problem.title}
            index={index + 1}
            title={problem.title}
            body={problem.body}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export function StrengthSection() {
  return (
    <SectionShell id="strength" tone="soft">
      <SectionHeading
        eyebrow="Strength"
        title="東大工学部生だからできる、理系若手に近い採用ページ設計。"
        lead={siteConfig.strengthsLead}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {siteConfig.strengths.map((strength, index) => (
          <NumberedCard
            key={strength.title}
            index={index + 1}
            title={strength.title}
            body={strength.body}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export function ServiceSection() {
  return (
    <SectionShell id="service">
      <SectionHeading
        eyebrow="Service"
        title="1プランだけ。採用LP制作に必要な内容をまとめました。"
      />
      <div className="grid gap-8 lg:grid-cols-[430px_minmax(0,1fr)]">
        <Card className="bg-brand-navy text-white">
          <p className="text-sm font-semibold text-brand-cyan">理系若手採用LP制作パッケージ</p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-5xl font-semibold text-white">{siteConfig.pricing.price}</span>
            <span className="pb-2 text-sm text-slate-300">{siteConfig.pricing.note}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            初回モニター価格：{siteConfig.pricing.monitorPrice} {siteConfig.pricing.note}
            <br />
            ※{siteConfig.pricing.monitorNote}
          </p>
          <p className="mt-7 text-sm leading-7 text-slate-200">
            技術系中小企業の仕事内容・技術の魅力・職場の安心感を、理系学生や若手技術者に伝わる採用LPとして制作します。
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center border border-brand-blue bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy sm:w-auto"
          >
            無料診断を相談する
          </a>
        </Card>

        <div>
          <h3 className="mb-5 text-base font-semibold text-brand-navy">含まれるもの</h3>
          <CheckList items={siteConfig.serviceItems} />
        </div>
      </div>
    </SectionShell>
  );
}

export function DeliverablesSection() {
  return (
    <SectionShell id="deliverables" tone="soft">
      <SectionHeading eyebrow="Deliverables" title="納品物" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {siteConfig.deliverables.map((item, index) => (
          <NumberedCard key={item.title} index={index + 1} title={item.title} body={item.body} />
        ))}
      </div>
    </SectionShell>
  );
}

export function PageStructureSection() {
  return (
    <SectionShell id="structure">
      <SectionHeading
        eyebrow="Structure"
        title="採用LPに入れる主な内容"
        lead="ワイヤーフレームを組む前に、若手が応募前に知りたい順番で情報を整理します。"
      />
      <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
        <div className="border border-brand-line bg-brand-navy p-5 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="border border-white/10 bg-white/[0.06] p-4">
            <span className="block h-3 w-32 bg-brand-cyan/80" />
            <span className="mt-5 block h-3 w-full bg-white/[0.18]" />
            <span className="mt-3 block h-3 w-10/12 bg-white/[0.12]" />
            <div className="mt-6 grid gap-3">
              {siteConfig.pageStructure.slice(0, 5).map((item) => (
                <div key={item.title} className="border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="text-xs font-semibold text-brand-cyan">{item.title}</span>
                  <span className="mt-2 block h-2 w-11/12 bg-white/[0.12]" />
                </div>
              ))}
            </div>
            <span className="mt-5 block h-10 w-full bg-brand-blue/80" />
          </div>
        </div>

        <ol className="border-l border-brand-line">
          {siteConfig.pageStructure.map((item, index) => (
            <li key={item.title} className="relative pb-7 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1 grid h-4 w-4 place-items-center bg-brand-blue" />
              <p className="text-sm font-semibold text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

export function IndustriesSection() {
  return (
    <SectionShell tone="soft">
      <SectionHeading
        eyebrow="Target"
        title="専門性が高く、魅力が伝わりにくい企業に向いています。"
        lead="技術職・開発職・品質管理・生産技術・研究補助などを採用したい企業に適しています。"
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.industries.map((industry) => (
          <li
            key={industry}
            className="border border-brand-line bg-white px-4 py-4 text-sm font-semibold text-brand-ink shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
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
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.process.map((step, index) => (
          <NumberedCard key={step.title} index={index + 1} title={step.title} body={step.body} />
        ))}
      </div>
    </SectionShell>
  );
}

export function PricingSection() {
  const { pricing } = siteConfig;

  return (
    <SectionShell id="pricing" tone="soft">
      <SectionHeading eyebrow="Pricing" title="料金" />
      <div className="grid gap-8 lg:grid-cols-[430px_minmax(0,1fr)]">
        <Card className="bg-white">
          <p className="text-sm font-semibold text-brand-blue">{pricing.name}</p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-5xl font-semibold text-brand-navy">{pricing.price}</span>
            <span className="pb-2 text-sm text-brand-muted">{pricing.note}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-brand-muted">
            初回モニター価格：{pricing.monitorPrice} {pricing.note}
            <br />
            条件：{pricing.monitorNote}
          </p>
          <p className="mt-6 border border-brand-line bg-brand-soft px-4 py-3 text-xs leading-6 text-brand-muted">
            {pricing.caution}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center border border-brand-blue bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-navy sm:w-auto"
          >
            無料診断を依頼する
          </a>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          <PriceList title="含まれるもの" items={pricing.included} />
          <PriceList title="含まれないもの" items={pricing.excluded} />
        </div>
      </div>
    </SectionShell>
  );
}

function PriceList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-brand-muted">
            <span className="mt-2 h-2 w-2 shrink-0 bg-brand-blue" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function TrustSection() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Trust"
        title="「学生の格安制作」ではなく、技術採用に特化したページ制作です。"
        lead="TechBridge Studioは、安くHPを作るサービスではありません。技術系企業の仕事を、理系若手に伝わる言葉へ整理し、採用広報の土台となる1ページを制作するサービスです。"
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <CheckList items={siteConfig.trustItems} />
        <div className="border border-brand-line bg-brand-soft p-6">
          <p className="text-sm font-semibold text-brand-navy">注記</p>
          <p className="mt-3 text-sm leading-7 text-brand-muted">{siteConfig.universityNote}</p>
        </div>
      </div>
    </SectionShell>
  );
}
