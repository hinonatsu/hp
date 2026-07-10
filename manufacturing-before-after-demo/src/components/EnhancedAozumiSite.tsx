import type { ReactNode } from 'react';

const company = {
  name: '有限会社 小泉精機製作所',
  shortName: '小泉精機製作所',
  tagline: 'アルミを知り尽くした技術力',
  tel: '0266-58-8532',
  fax: '0266-52-2780',
  hours: '8:30〜17:00 平日',
  closed: '土日祝日休',
  address: '〒392-0131 長野県諏訪市大字湖南963-1',
  representative: '代表取締役 小泉 雅彦',
  founded: '昭和59年5月',
  capital: '500万円',
  employees: '23名',
};

const images = {
  hero:
    'https://www.e-koizumi.co.jp/wp/wp-content/themes/koizumi-child/images/top/slider/koizumi_mainvisua2.jpg',
  diecast:
    'https://www.e-koizumi.co.jp/wp/wp-content/themes/koizumi-child/images/die-cast/dei-cast_pageimg.jpg',
  equipment:
    'https://www.e-koizumi.co.jp/wp/wp-content/themes/koizumi-child/images/equipment/equipment_naibu1.jpg',
  quality:
    'https://www.e-koizumi.co.jp/wp/wp-content/themes/koizumi-child/images/quality/quality_room.jpg',
  product:
    'https://www.e-koizumi.co.jp/wp/wp-content/uploads/2023/06/semiconductor-filter-02.jpg',
};

const quickFacts = [
  ['対応領域', 'アルミダイカスト2次加工 / アルミ切削加工'],
  ['加工姿勢', '難加工・高精度・複雑形状にも対応'],
  ['相談入口', '図面送付で見積り回答最短1営業日'],
] as const;

const technologyRows = [
  {
    title: 'アルミダイカスト2次加工',
    body:
      '平面度や同軸度など精度を必要とする加工、複雑形状加工、量産前の試作製作、VA提案まで対応します。',
    image: images.diecast,
  },
  {
    title: 'アルミ切削加工・旋盤加工',
    body:
      '複雑形状、高難度、微細穴、平面度、はめあい公差など、精密さが求められるアルミ部品を1個から相談できます。',
    image: images.equipment,
  },
] as const;

const strengths = [
  ['技術力', 'アルミ切削加工30年の実績をもとに、品質・精度・コスト・納期・複雑形状加工の課題解決を支援します。'],
  ['提案力', 'アルミダイカスト2次加工で、精度改善やコストダウンにつながるVA提案を行います。'],
  ['一貫対応', '図面を用意すれば、材料手配から加工、表面処理までまとめて依頼できます。'],
  ['品質管理', '常温管理された検査室と検査教育を受けた検査員により、品質クレーム0件を目指します。'],
  ['対応力', '特急対応・短納期・見積り依頼にも、柔軟で迅速な対応を行います。'],
] as const;

const machiningDetails = [
  '穴あけ加工',
  'タップ・ねじ切り加工',
  'フライス加工',
  '鏡面フライス加工',
  '輪郭・ポケット加工',
  '微細穴加工',
  '複合旋盤加工',
  '切削刻印加工',
] as const;

const capabilityRows = [
  ['対応素材', 'A5052、6061、6063、2017、7075などアルミ全般'],
  ['加工サイズ', '〜600mm × 1,000mm'],
  ['ロット', '1個〜1000個'],
  ['加工精度', '穴深さ・穴ピッチ・穴径・外径内径公差など ±1/100mm目安'],
  ['表面処理', 'アルマイト、硬質アルマイト、レイデント、タフラム、カシマコート、メッキ、アロジンなど'],
] as const;

const proposalItems = [
  '冷凍チャックによる歪みの防止',
  'アルミの薄肉加工',
  'アルミ製治具を設計から製造まで対応',
  '加工難度が高い材質の製品を高精度で対応',
] as const;

const productExamples = [
  'アルミ製つまみカバー部品',
  '半導体製造装置用アルミフィルター',
  'アルミ削り出しによる航空機器部品コネクタケース',
  '車両部品用アルミ製ヒートシンク',
  'アルミフレーム',
  '0.1mmの微細穴を施したアルミ加工サンプル',
  '魚群探知機装置カバー',
  '産業機器外装部品',
] as const;

const qualityItems = [
  ['ISO9001に準拠した品質管理', '品質マネジメントシステムに基づき、製造プロセスを明確に設定管理します。'],
  ['20℃±1℃の常温検査室', '高精度な製品を正確に検査するため、常温管理された検査室で製品検査を行います。'],
  ['作業の標準化・5S活動', '品質安定化のため作業標準化と工場内環境整備に取り組みます。'],
  ['不良発生時の対応', '原因追求と対策を行い、作業標準書へ対策内容を反映します。'],
] as const;

const inspectionEquipment = [
  ['ハンディプローブ三次元測定機', 'キーエンス XM-C1000', '1'],
  ['画像寸法測定器', 'キーエンス IM-7500', '1'],
  ['三次元測定器', 'ミツトヨ BH-706', '1'],
  ['三次元測定器', 'ミツトヨ Crysta-ApexC776', '1'],
] as const;

const productionEquipment = [
  ['CNC自動旋盤', 'スター精密 SD-26 TypeG / SR-38 typeB'],
  ['マシニングセンター', 'ブラザー R450X2 / FANUC ROBODRILL / 豊和工業 きわみ ほか'],
  ['NC旋盤', 'テクノワシノ LG-6・LG-7・LG-60・LJ52B'],
  ['CNC複合旋盤', 'アマダマシンツール A18S / テクノワシノ A-12'],
  ['CAD/CAM', 'Autodesk FeatureCAM / MYPAC SUPER CAM'],
] as const;

const flowSteps = [
  'お問い合わせ',
  'ヒアリング相談',
  'お見積回答',
  '試作加工',
  '検査',
  '量産加工',
  '納品',
] as const;

const companyRows = [
  ['会社名', company.name],
  ['代表者', company.representative],
  ['所在地', company.address],
  ['事業内容', 'アルミダイカスト切削加工、アルミ切削加工・穴あけ加工、光学機器外観部品製造、自動車部品製造'],
  ['設立', company.founded],
  ['資本金', company.capital],
  ['従業員数', company.employees],
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

function DataTable({
  headers,
  rows,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="enhanced-table-wrap">
      <table className="enhanced-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')}>
              <th scope="row">{row[0]}</th>
              {row.slice(1).map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EnhancedAozumiSite({ onBeforeClick }: { onBeforeClick?: () => void }) {
  return (
    <main className="enhanced-site koizumi-site">
      <header className="enhanced-header">
        <a href="#top" className="enhanced-brand" aria-label={`${company.name} トップへ`}>
          <span>{company.shortName}</span>
          <small>{company.tagline}</small>
        </a>
        <button type="button" className="enhanced-mobile-return" aria-label="改善前のサイトを見る" onClick={onBeforeClick}>
          改善前へ
        </button>
        <nav className="enhanced-nav" aria-label="改善後サイト内メニュー">
          <button type="button" onClick={() => scrollToSection('technology')}>加工技術</button>
          <button type="button" onClick={() => scrollToSection('strengths')}>強み</button>
          <button type="button" onClick={() => scrollToSection('quality')}>品質保証</button>
          <button type="button" onClick={() => scrollToSection('equipment')}>工場設備</button>
          <button type="button" onClick={() => scrollToSection('contact')}>相談する</button>
        </nav>
      </header>

      <section id="top" className="enhanced-hero koizumi-hero" aria-label="改善後サイトのメインビジュアル">
        <img src={images.hero} alt="" />
        <div className="enhanced-hero__shade" aria-hidden="true" />
        <div className="enhanced-hero__content">
          <p>Aluminum's finest professional</p>
          <h1><span>アルミを知り尽くした</span><span>技術力</span></h1>
          <div>
            <strong>アルミダイカスト2次加工とアルミ切削加工に特化。</strong>
            <span>
              難加工・高精度・複雑形状など、他社があきらめた部品にも挑戦し、
              お客様に満足いただけるものづくりを追求します。
            </span>
          </div>
          <nav className="hero-actions" aria-label="主要導線">
            <button type="button" onClick={() => scrollToSection('technology')}>加工技術を見る</button>
            <button type="button" onClick={() => scrollToSection('contact')}>図面を添えて相談する</button>
          </nav>
        </div>
      </section>

      <section className="enhanced-intro" aria-label="改善後サイトの要点">
        <p>
          小泉精機製作所の公式サイトに掲載されている内容を、発注担当者が判断しやすい順番へ整理しました。
          技術、実績、品質保証、設備、相談導線を一続きで確認できます。
        </p>
        <dl>
          {quickFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="enhanced-section enhanced-section--split" id="technology">
        <SectionLead eyebrow="Technology" title="加工技術を、依頼内容から選びやすく整理します。">
          <p>アルミダイカスト2次加工とアルミ切削加工の違いを明確にし、相談したい加工へすぐ進める構成にしています。</p>
        </SectionLead>
        <div className="technology-list">
          {technologyRows.map((item) => (
            <section key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="enhanced-section" id="strengths">
        <SectionLead eyebrow="Strengths" title="小泉精機が選ばれる理由を、5つの判断材料に分けて提示します。" />
        <div className="statement-list">
          {strengths.map(([title, body], index) => (
            <section key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="enhanced-section enhanced-section--split" id="machining">
        <SectionLead eyebrow="Machining" title="複雑形状・高難度加工の具体例を先に見せます。">
          <p>穴あけ、タップ、フライス、微細穴、複合旋盤など、対応できる加工の幅が短時間で伝わるようにしています。</p>
        </SectionLead>
        <ul className="enhanced-line-list">
          {machiningDetails.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="enhanced-section enhanced-section--split">
        <SectionLead eyebrow="Capability" title="対応条件は表でまとめ、発注前の確認負担を減らします。" />
        <DataTable headers={['項目', '内容']} rows={capabilityRows} />
      </section>

      <section className="enhanced-section enhanced-section--split" id="products">
        <SectionLead eyebrow="Works" title="製品事例は用途が分かる名称で整理します。">
          <p>半導体装置部品、航空機器部品、車両部品、産業機器部品など、幅広い実績を一覧で確認できます。</p>
        </SectionLead>
        <div className="product-showcase">
          <img src={images.product} alt="" />
          <ul>
            {productExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="enhanced-section enhanced-section--split">
        <SectionLead eyebrow="Proposal" title="加工者視点のVA提案で、図面段階の課題を先回りします。">
          <p>精度改善、コストダウン、歪み防止、治具設計など、過去の経験から課題解決を支援します。</p>
        </SectionLead>
        <ul className="enhanced-line-list">
          {proposalItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="enhanced-section enhanced-section--split" id="quality">
        <SectionLead eyebrow="Quality" title="品質保証は、検査環境と不良対応まで見える化します。">
          <p>品質クレーム0件を目指す姿勢を、品質方針、検査体制、設備、不良発生時の対応まで一連で示します。</p>
        </SectionLead>
        <div className="quality-composition">
          <img src={images.quality} alt="" />
          <dl className="role-list">
            {qualityItems.map(([title, body]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="enhanced-section enhanced-section--split" id="equipment">
        <SectionLead eyebrow="Equipment" title="生産設備と検査設備を分け、対応力を読みやすくします。">
          <p>マシニングセンター、NC旋盤、複合機を活用した複合加工と、検査設備による品質保証を並べて確認できます。</p>
        </SectionLead>
        <div className="equipment-stack">
          <section>
            <h3>主な機械設備</h3>
            <DataTable headers={['設備', 'メーカー・形式']} rows={productionEquipment} />
          </section>
          <section>
            <h3>検査設備</h3>
            <DataTable headers={['設備', 'メーカー・形式', '台数']} rows={inspectionEquipment} />
          </section>
        </div>
      </section>

      <section className="enhanced-section">
        <SectionLead eyebrow="Flow" title="ご相談から納品までの流れを、迷わず追えるようにします。" />
        <ol className="process-list">
          {flowSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step}</h3>
                <p>{index === 0 ? 'TEL・FAX・メール・お問い合わせフォームから相談できます。' : '前工程の確認内容を引き継ぎ、次の判断へ進みます。'}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="enhanced-section enhanced-section--split" id="contact">
        <SectionLead eyebrow="Contact" title="加工相談は、電話・FAX・フォームの入口を明確にします。">
          <p>お問い合わせフォームでは、jpg、jpeg、gif、png、pdf、doc、docx、xls、xlsxのファイル添付に対応しています。</p>
        </SectionLead>
        <div className="contact-panel">
          <h3>加工に関するご相談・お見積りはこちら</h3>
          <dl>
            <div><dt>電話</dt><dd>{company.tel}</dd></div>
            <div><dt>FAX</dt><dd>{company.fax}</dd></div>
            <div><dt>受付</dt><dd>{company.hours} / {company.closed}</dd></div>
          </dl>
        </div>
      </section>

      <section className="enhanced-company" aria-label="会社概要">
        <div>
          <p>Company</p>
          <h2>会社概要</h2>
        </div>
        <dl>
          {companyRows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="enhanced-footer">
        <p>{company.address}</p>
        <p>{company.tel} / {company.hours} / {company.closed}</p>
      </footer>
    </main>
  );
}

export default EnhancedAozumiSite;
