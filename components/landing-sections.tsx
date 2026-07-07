import { siteConfig } from "@/lib/siteConfig";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
};

type RowItem = {
  title: string;
  body: string;
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
    <div className="mb-12 grid gap-6 border-t border-brand-navy pt-6 lg:grid-cols-[220px_minmax(0,1fr)]">
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

function NumberedRows({ items }: { items: RowItem[] }) {
  return (
    <ol className="border-y border-brand-line">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="grid gap-4 border-b border-brand-line py-7 last:border-b-0 md:grid-cols-[90px_260px_minmax(0,1fr)]"
        >
          <span className="text-sm font-semibold text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-xl font-semibold leading-8 text-brand-navy">{item.title}</h3>
          <p className="text-sm leading-8 text-brand-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

function LineList({ items }: { items: string[] }) {
  return (
    <ul className="border-y border-brand-line">
      {items.map((item) => (
        <li key={item} className="flex gap-4 border-b border-brand-line py-4 text-sm leading-7 text-brand-muted last:border-b-0">
          <span className="mt-3 h-px w-6 shrink-0 bg-brand-blue" aria-hidden="true" />
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
      <NumberedRows items={siteConfig.problems} />
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
      <NumberedRows items={siteConfig.strengths} />
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
      <div className="grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)]">
        <div className="border-y border-brand-navy py-7">
          <p className="text-sm font-semibold text-brand-blue">理系若手採用LP制作パッケージ</p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-5xl font-semibold text-brand-navy">{siteConfig.pricing.price}</span>
            <span className="pb-2 text-sm text-brand-muted">{siteConfig.pricing.note}</span>
          </div>
          <p className="mt-5 text-sm leading-7 text-brand-muted">
            初回モニター価格：{siteConfig.pricing.monitorPrice} {siteConfig.pricing.note}
            <br />
            ※{siteConfig.pricing.monitorNote}
          </p>
          <p className="mt-7 text-sm leading-8 text-brand-muted">
            技術系中小企業の仕事内容・技術の魅力・職場の安心感を、理系学生や若手技術者に伝わる採用LPとして制作します。
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center border border-brand-blue bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-navy sm:w-auto"
          >
            無料診断を相談する
          </a>
        </div>

        <div>
          <h3 className="mb-5 text-base font-semibold text-brand-navy">含まれるもの</h3>
          <LineList items={siteConfig.serviceItems} />
        </div>
      </div>
    </SectionShell>
  );
}

export function DeliverablesSection() {
  return (
    <SectionShell id="deliverables" tone="soft">
      <SectionHeading eyebrow="Deliverables" title="納品物" />
      <NumberedRows items={siteConfig.deliverables} />
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
      <NumberedRows items={siteConfig.pageStructure} />
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
      <ul className="grid border-y border-brand-line md:grid-cols-2 lg:grid-cols-4">
        {siteConfig.industries.map((industry) => (
          <li
            key={industry}
            className="border-b border-brand-line py-4 text-sm font-semibold text-brand-ink md:pr-6 lg:border-r lg:last:border-r-0"
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
      <NumberedRows items={siteConfig.process} />
    </SectionShell>
  );
}

export function PricingSection() {
  const { pricing } = siteConfig;

  return (
    <SectionShell id="pricing" tone="soft">
      <SectionHeading eyebrow="Pricing" title="料金" />
      <div className="grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)]">
        <div className="border-y border-brand-navy py-7">
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
          <p className="mt-6 border-t border-brand-line pt-4 text-xs leading-6 text-brand-muted">
            {pricing.caution}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center border border-brand-blue bg-brand-blue px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-navy sm:w-auto"
          >
            無料診断を依頼する
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PriceList title="含まれるもの" items={pricing.included} />
          <PriceList title="含まれないもの" items={pricing.excluded} />
        </div>
      </div>
    </SectionShell>
  );
}

function PriceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="border-y border-brand-navy py-3 text-lg font-semibold text-brand-navy">{title}</h3>
      <LineList items={items} />
    </div>
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
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <LineList items={siteConfig.trustItems} />
        <div className="border-y border-brand-line py-6">
          <p className="text-sm font-semibold text-brand-navy">注記</p>
          <p className="mt-3 text-sm leading-7 text-brand-muted">{siteConfig.universityNote}</p>
        </div>
      </div>
    </SectionShell>
  );
}
