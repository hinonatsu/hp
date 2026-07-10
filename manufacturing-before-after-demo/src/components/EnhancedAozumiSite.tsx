import type { ReactNode } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const heroImage = `${basePath}/images/fictional-workshop-hero.png`;

const company = {
  name: '青澄ファブリカ株式会社',
  tagline: '未来にのこる精密加工',
  description:
    '小ロット試作から保全部品の加工まで、現場の条件に合わせて相談できる架空の製造パートナーです。',
  address: '〒100-0000 東京都架空区青澄町1番地 サンプル工業ビル6F',
  tel: '03-0000-2486',
  fax: '03-0000-2487',
  email: 'info@example.invalid',
  note:
    'このデモサイトに記載する会社名、住所、連絡先、事業内容はすべて架空です。',
};

const consultationItems = [
  '既存部品の代替製作、改良案の検討',
  '小ロットの金属加工、樹脂加工、組立用治具の製作',
  '現場で使う工具、保持具、保管具の寸法調整',
  '図面作成前の相談、材料選定、加工、簡易検査',
] as const;

const messages = [
  {
    title: '熟練の手仕事とデジタル計測の組み合わせ',
    body:
      '経験に基づく段取りと、三次元測定や加工データの管理を組み合わせ、安定した品質で一点ずつ形にする体制を整えています。',
  },
  {
    title: 'ものづくりは、現場を理解することから',
    body:
      '図面だけでは読み取りきれない使用環境や整備手順を確認し、加工しやすさ、扱いやすさ、長く使えることを大切にしています。',
  },
  {
    title: '品質確認と環境配慮を日常の工程へ',
    body:
      '寸法、外観、材料記録を工程内で確認し、無駄な再加工を減らすことで、安心して相談できる工房型の製造体制を目指しています。',
  },
] as const;

type EquipmentRow = {
  name: string;
  purpose: string;
  value: string;
};

const machiningEquipment: EquipmentRow[] = [
  {
    name: '小型マシニングセンタ',
    purpose: '切削・穴あけ・面取り',
    value: '試作品や補修部品の形状確認に対応',
  },
  {
    name: '汎用旋盤・卓上フライス',
    purpose: '一点物の加工・調整',
    value: '現場の使い勝手に合わせた寸法調整',
  },
  {
    name: 'ボール盤・タップ加工機',
    purpose: '穴あけ・ねじ加工',
    value: '治具や保持具の細かな仕様調整',
  },
  {
    name: 'バリ取り・研磨・仕上げ工具',
    purpose: '外観と扱いやすさの調整',
    value: '長く安全に使える部品づくり',
  },
];

const inspectionEquipment: EquipmentRow[] = [
  {
    name: '三次元測定機・デジタルノギス・ハイトゲージ',
    purpose: '寸法確認',
    value: '加工後の再現性と品質確認',
  },
  {
    name: '外観確認用ライト・拡大鏡',
    purpose: '表面確認',
    value: '傷や欠け、仕上げ状態の確認',
  },
  {
    name: '簡易耐久確認用の治具台',
    purpose: '組立・使用時の確認',
    value: '現場で扱う前の使い勝手確認',
  },
  {
    name: '加工記録・材料記録の管理端末',
    purpose: '記録管理',
    value: '寸法値、仕上げ条件、注意点の整理',
  },
];

const materialExamples = ['アルミ', 'ステンレス', '一般鋼材', '樹脂材', '試作品', '補修部品'] as const;

const processSteps = [
  {
    title: '用途・使用環境の確認',
    body: '図面だけで判断せず、どこで使う部品か、交換頻度や整備手順まで確認します。',
  },
  {
    title: '材料・加工方法の検討',
    body: 'アルミ、ステンレス、一般鋼材、樹脂材などから、用途と扱いやすさに合わせて方向性を整理します。',
  },
  {
    title: '試作・寸法調整',
    body: '小ロットや一点物の加工を前提に、加工しやすさと使いやすさの両方を確認します。',
  },
  {
    title: '測定・記録',
    body: '寸法、外観、材料記録、仕上げ条件を案件ごとに整理し、次回の再現性を高めます。',
  },
  {
    title: '納品・次回相談への引き継ぎ',
    body: '納品して終わりではなく、使用後の改善点や再加工の必要性まで次の相談につなげます。',
  },
] as const;

const recruitRoles = [
  {
    title: '加工スタッフ',
    body: '切削、穴あけ、面取りなど、基本的な加工を安定して行う仕事です。',
  },
  {
    title: '検査・品質記録スタッフ',
    body: '寸法・外観・材料記録を丁寧に確認し、安定した品質を支える仕事です。',
  },
  {
    title: '営業・工程管理サポート',
    body: 'お客様の相談内容を整理し、現場と連携して工程を進める仕事です。',
  },
] as const;

const inquiryHints = [
  '部品の用途、使う場所、必要な数量',
  '図面、写真、手書きメモの有無',
  '希望納期、材質、仕上げの条件',
] as const;

const comparisonPoints = [
  {
    label: '最初に伝わること',
    before: '会社名と事業内容は分かるが、相談できる内容を本文から探す必要がある。',
    after: '小ロット試作、保全部品、治具製作など、相談できる内容が冒頭で分かる。',
  },
  {
    label: '設備情報の見え方',
    before: '設備名が並んでおり、何に役立つ設備か判断しにくい。',
    after: '設備名、用途、相談できることを表で整理し、発注前の判断材料にしている。',
  },
  {
    label: '問い合わせ前の安心感',
    before: '連絡先はあるが、何を伝えればよいか分かりにくい。',
    after: '用途、数量、図面、材質など、相談時に必要な情報が先に分かる。',
  },
  {
    label: '採用への伝わり方',
    before: '募集職種は分かるが、仕事内容のイメージが持ちにくい。',
    after: '職種ごとの役割と未経験者向けの安心材料を整理している。',
  },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function SectionLead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="enhanced-section__lead">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function EquipmentTable({ rows }: { rows: EquipmentRow[] }) {
  return (
    <div className="enhanced-table-wrap">
      <table className="enhanced-table">
        <thead>
          <tr>
            <th>設備</th>
            <th>用途</th>
            <th>相談できること</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>{row.purpose}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EnhancedAozumiSite({ onBeforeClick }: { onBeforeClick?: () => void }) {
  return (
    <main className="enhanced-site">
      <header className="enhanced-header">
        <a href="#top" className="enhanced-brand" aria-label={`${company.name} トップへ`}>
          <span>{company.name}</span>
          <small>{company.tagline}</small>
        </a>
        <button type="button" className="enhanced-mobile-return" aria-label="改善前のサイトを見る" onClick={onBeforeClick}>
          改善前へ
        </button>
        <nav className="enhanced-nav" aria-label="改善後サイト内メニュー">
          <button type="button" onClick={() => scrollToSection('consultation')}>相談内容</button>
          <button type="button" onClick={() => scrollToSection('equipment')}>設備</button>
          <button type="button" onClick={() => scrollToSection('quality')}>品質</button>
          <button type="button" onClick={() => scrollToSection('recruit')}>採用</button>
          <button type="button" onClick={() => scrollToSection('contact')}>相談する</button>
        </nav>
      </header>

      <section id="top" className="enhanced-hero" aria-label="改善後サイトのメインビジュアル">
        <img src={heroImage} alt="" />
        <div className="enhanced-hero__shade" aria-hidden="true" />
        <div className="enhanced-hero__content">
          <p>架空製造業サイト 改善後サンプル</p>
          <h1>{company.name}</h1>
          <div>
            <strong>小ロット試作から保全部品の加工まで。</strong>
            <span>
              現場の使い方、整備手順、必要数量まで確認し、長く扱いやすい部品づくりを相談できるサイトとして整理しました。
            </span>
          </div>
          <nav className="hero-actions" aria-label="主要導線">
            <button type="button" onClick={() => scrollToSection('consultation')}>何を相談できるか見る</button>
            <button type="button" onClick={() => scrollToSection('contact')}>問い合わせ前に必要な情報を見る</button>
          </nav>
        </div>
      </section>

      <section className="enhanced-intro" aria-label="改善後サイトの要点">
        <p>
          内容は改善前サイトと同じです。違うのは、見る人が判断しやすい順番へ並べ替え、
          設備名・用途・相談内容をつなげて読めるようにした点です。
        </p>
        <dl>
          <div><dt>対応範囲</dt><dd>試作 / 加工 / 保全</dd></div>
          <div><dt>加工対象</dt><dd>金属 / 樹脂 / 治具</dd></div>
          <div><dt>相談段階</dt><dd>図面作成前から可</dd></div>
        </dl>
      </section>

      <section className="enhanced-section enhanced-section--split" id="consultation">
        <SectionLead eyebrow="Consultation" title="最初に「何を相談できる会社か」を明確にします。">
          <p>改善前サイトの本文に入っていた情報を、発注担当者が最初に確認する項目として整理しています。</p>
        </SectionLead>
        <ul className="enhanced-line-list">
          {consultationItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="enhanced-section">
        <SectionLead eyebrow="Promise" title="青澄ファブリカが大切にしていること。" />
        <div className="statement-list">
          {messages.map((message, index) => (
            <section key={message.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{message.title}</h3>
              <p>{message.body}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="enhanced-section enhanced-section--split" id="equipment">
        <SectionLead eyebrow="Equipment" title="設備名だけで終わらせず、何に役立つかまで見せます。">
          <p>切削・穴あけ・面取りなどの加工設備と、測定・記録・組立確認の設備を分け、発注前に判断しやすい形にしました。</p>
        </SectionLead>
        <div className="equipment-stack">
          <section>
            <h3>加工設備</h3>
            <EquipmentTable rows={machiningEquipment} />
          </section>
          <section>
            <h3>検査・確認設備</h3>
            <EquipmentTable rows={inspectionEquipment} />
          </section>
        </div>
      </section>

      <section className="enhanced-section enhanced-section--materials" id="quality">
        <SectionLead eyebrow="Quality" title="品質確認と記録の考え方を、取引前の安心材料にします。">
          <p>寸法、外観、材料記録を工程内で確認し、仕上げ条件と注意点を案件ごとに整理する想定です。</p>
        </SectionLead>
        <div className="material-band">
          <p>加工対象の例</p>
          <ul>{materialExamples.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="enhanced-section">
        <SectionLead eyebrow="Process" title="相談から納品までの流れを、読みやすい順番で示します。" />
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="enhanced-section enhanced-section--split" id="recruit">
        <SectionLead eyebrow="Recruit" title="採用情報は、働く姿が想像できる言葉に直します。">
          <p>職種名だけでなく、どんな役割かを短く添えることで、未経験者にも入口が見えます。</p>
        </SectionLead>
        <dl className="role-list">
          {recruitRoles.map((role) => <div key={role.title}><dt>{role.title}</dt><dd>{role.body}</dd></div>)}
        </dl>
      </section>

      <section className="enhanced-section">
        <SectionLead eyebrow="Before / After" title="同じ情報でも、判断のしやすさが変わります。" />
        <div className="comparison-lines">
          {comparisonPoints.map((point) => (
            <section key={point.label}>
              <h3>{point.label}</h3>
              <p><span>改善前</span>{point.before}</p>
              <p><span>改善後</span>{point.after}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="enhanced-section enhanced-section--split" id="contact">
        <SectionLead eyebrow="Contact" title="問い合わせ前に必要な情報を先に見せ、不安を減らします。">
          <p>試作、補修、設備部品の相談は、内容が固まる前の段階でも受け付けている想定です。</p>
        </SectionLead>
        <div className="contact-panel">
          <h3>お問い合わせ時に分かるとよいこと</h3>
          <ul>{inquiryHints.map((item) => <li key={item}>{item}</li>)}</ul>
          <dl>
            <div><dt>電話</dt><dd>{company.tel}</dd></div>
            <div><dt>FAX</dt><dd>{company.fax}</dd></div>
            <div><dt>メール</dt><dd>{company.email}</dd></div>
          </dl>
        </div>
      </section>

      <section className="enhanced-company" aria-label="会社概要">
        <div>
          <p>Company</p>
          <h2>会社概要</h2>
        </div>
        <dl>
          <div><dt>会社名</dt><dd>{company.name}</dd></div>
          <div><dt>所在地</dt><dd>{company.address}</dd></div>
          <div><dt>事業内容</dt><dd>保全用部品、治具、小型機械部品の試作加工</dd></div>
          <div><dt>連絡先</dt><dd>{company.tel} / {company.email}</dd></div>
        </dl>
      </section>

      <footer className="enhanced-footer">
        <p>{company.note}</p>
        <p>Before/After demo for structured website renewal.</p>
      </footer>
    </main>
  );
}

export default EnhancedAozumiSite;
