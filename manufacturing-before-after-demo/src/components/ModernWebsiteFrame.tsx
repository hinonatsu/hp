import { useState } from 'react';
import { company, demoNotice } from '../data/company';

type ModernWebsiteFrameProps = {
  compact?: boolean;
};

const consultationItems = [
  '工業用ゴム部品の試作',
  'シリコーンゴム製品の製造',
  '金具・樹脂との加硫接着品',
  '量産前の試作品製作',
  '継続生産品の相談',
  '寸法・外観検査を含む品質確認',
] as const;

const overviewItems = [
  {
    title: '何を頼める会社か',
    body: 'ゴム製品の試作、量産、加硫接着品の相談ができます。',
  },
  {
    title: 'どんな設備があるか',
    body: '50t〜200tの成形設備や検査設備があり、試作から量産まで対応します。',
  },
  {
    title: 'どう問い合わせればよいか',
    body: '用途、図面、数量、材質が未確定でも相談できることが分かります。',
  },
] as const;

const audienceEntrances = [
  {
    title: '発注担当者の方へ',
    body: 'どんな加工を相談できるか、設備や品質体制を確認できます。',
    button: '対応できる相談を見る',
    target: 'consultation',
  },
  {
    title: '経営者・紹介元の方へ',
    body: '会社の強み、対応範囲、相談の流れを確認できます。',
    button: '会社の強みを見る',
    target: 'strengths',
  },
  {
    title: '求職者の方へ',
    body: '仕事内容や職種、未経験者が働くイメージを確認できます。',
    button: '採用向け情報を見る',
    target: 'recruit',
  },
] as const;

const strengths = [
  {
    title: '試作から量産まで相談できる',
    body: '少量の確認品から継続生産まで、段階に応じて相談できます。',
  },
  {
    title: '合成ゴム・シリコーンゴムに対応',
    body: '工業用部品、機械部品、理化学用途など、使用環境に応じた製品づくりに対応します。',
  },
  {
    title: '加硫接着品にも対応',
    body: 'ゴム単体だけでなく、金具や樹脂と組み合わせた部品の相談も可能です。',
  },
  {
    title: '品質確認まで含めて相談できる',
    body: '寸法、外観、仕様を確認し、安定した納品を目指します。',
  },
] as const;

const equipmentRows = [
  {
    name: '50t〜200t ゴム加硫成形機',
    use: 'ゴム製品の成形',
    consultation: '試作・量産の成形相談',
  },
  {
    name: '真空プレス成形機',
    use: '空気を抜きながら成形',
    consultation: '仕上がりの安定が必要な製品',
  },
  {
    name: '14インチオープンロール',
    use: 'ゴム材料の混練',
    consultation: '材料の準備・調整',
  },
  {
    name: '乾燥炉',
    use: '加熱・乾燥',
    consultation: '成形後の処理',
  },
  {
    name: '寸法検査機器',
    use: '寸法確認',
    consultation: '納品前の品質確認',
  },
  {
    name: '外観検査設備',
    use: '表面確認',
    consultation: 'キズ・欠けなどの確認',
  },
] as const;

const processDetails = [
  {
    title: '用途・図面・数量の確認',
    body: '用途、必要数量、図面の有無を確認します。図面が固まる前でも相談できます。',
  },
  {
    title: '材質・工法の確認',
    body: '使用環境に合わせて、合成ゴム、シリコーンゴム、加硫接着などの方向性を確認します。',
  },
  {
    title: '試作・見積もり',
    body: '必要に応じて試作品を作り、条件と費用を整理します。',
  },
  {
    title: '評価・条件調整',
    body: '寸法、外観、使い勝手を確認し、量産前の条件を整えます。',
  },
  {
    title: '量産・検査・納品',
    body: '決まった条件で製造し、検査を行って納品します。',
  },
] as const;

const qualityItems = [
  '材料・仕様の確認',
  '成形条件の確認',
  '寸法確認',
  '外観確認',
  '不具合時の原因確認',
  '継続生産時の品質安定化',
] as const;

const recruitRoles = [
  {
    title: '製造スタッフ',
    body: '成形機を使い、ゴム製品を形にする仕事です。',
  },
  {
    title: '品質管理',
    body: '寸法・外観・仕様を確認し、安定した品質を支える仕事です。',
  },
  {
    title: '営業・生産管理',
    body: 'お客様の相談内容を整理し、製造現場と連携する仕事です。',
  },
] as const;

const glossaryItems = [
  {
    term: '加硫接着',
    description: 'ゴムと金属・樹脂などを、熱や圧力を使って一体化させる加工です。',
  },
  {
    term: '小ロット',
    description: '少ない数量で試作・製造することです。量産前の確認にも使われます。',
  },
  {
    term: '量産',
    description: '決まった仕様の製品を、継続的にまとまった数量で作ることです。',
  },
  {
    term: '真空プレス成形機',
    description: '空気を抜きながらゴムを成形し、仕上がりの安定を助ける設備です。',
  },
  {
    term: 'オープンロール',
    description: 'ゴム材料を練ったり、均一に整えたりするための設備です。',
  },
  {
    term: '品質管理',
    description: '製品の寸法、外観、仕様を確認し、安定した品質を保つ取り組みです。',
  },
  {
    term: '試作',
    description: '本格生産の前に、形・材質・使い勝手を確認するために少量作ることです。',
  },
] as const;

const ownerBenefits = [
  {
    title: '初回問い合わせの不安を減らす',
    body: '何を相談できる会社かが分かると、電話やメールの前の迷いが減ります。',
  },
  {
    title: '信用確認に使える',
    body: '紹介で会社名を聞いた人も、検索して会社概要・設備・品質情報を確認できます。',
  },
  {
    title: '採用応募前の不安を減らす',
    body: '仕事内容や職種が見えると、若い人が働くイメージを持ちやすくなります。',
  },
  {
    title: '営業資料として使える',
    body: 'URLを送るだけで、事業内容・設備・品質体制を説明しやすくなります。',
  },
] as const;

const companyRows = [
  ['会社名', company.name],
  ['所在地', company.address],
  ['事業内容', '工業用ゴム製品・シリコーンゴム製品・加硫接着品の製造'],
  ['営業時間', company.hours],
  ['営業日', company.businessDays],
  ['電話', company.tel],
  ['メール', company.email],
] as const;

function ModernWebsiteFrame({ compact = false }: ModernWebsiteFrameProps) {
  const [contactMessageVisible, setContactMessageVisible] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (compact) {
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleContactClick = () => {
    if (compact) {
      return;
    }

    setContactMessageVisible(true);
  };

  return (
    <article className={`modern-site ${compact ? 'modern-site--compact' : ''}`}>
      <header className="company-guide-hero">
        <div>
          <p className="company-guide-name">{company.name}</p>
          <h1>試作から量産まで対応する、茨城県のゴム成形会社</h1>
          <p>
            合成ゴム・シリコーンゴム・加硫接着品まで。
            小ロット試作から量産まで、用途・数量・材質に応じてご相談いただけます。
          </p>
          <ul className="plain-check-list" aria-label="対応内容">
            <li>工業用ゴム部品</li>
            <li>シリコーンゴム製品</li>
            <li>金具・樹脂との加硫接着品</li>
            <li>小ロット試作</li>
            <li>量産対応</li>
            <li>品質検査</li>
          </ul>
        </div>
        <div className="hero-contact-box" aria-label="問い合わせ導線">
          <h2>ご相談の入口</h2>
          <p>図面、数量、材質が固まる前でも相談できます。</p>
          <button type="button" className="modern-cta" onClick={() => scrollToSection('contact')}>
            加工について相談する
          </button>
          <button
            type="button"
            className="modern-cta modern-cta--light"
            onClick={() => scrollToSection('equipment')}
          >
            設備一覧を見る
          </button>
        </div>
      </header>

      <p className="improvement-note">
        改善意図：最初の画面で「何を頼める会社か」と「どう相談すればよいか」を伝え、問い合わせ前の迷いを減らします。
      </p>

      <nav className="page-jump-nav" aria-label="改善後サイト内の案内">
        <button type="button" onClick={() => scrollToSection('consultation')}>
          相談できること
        </button>
        <button type="button" onClick={() => scrollToSection('equipment')}>
          設備一覧
        </button>
        <button type="button" onClick={() => scrollToSection('quality')}>
          品質管理
        </button>
        <button type="button" onClick={() => scrollToSection('recruit')}>
          採用向け情報
        </button>
        <button type="button" onClick={() => scrollToSection('contact')}>
          問い合わせ
        </button>
      </nav>

      <section className="modern-section section-with-rail" aria-labelledby="overview-title">
        <div className="section-side-heading">
          <h2 id="overview-title">このページで分かること</h2>
        </div>
        <ol className="lined-number-list">
          {overviewItems.map((item, index) => (
            <li key={item.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="modern-section section-with-rail" aria-labelledby="audience-title">
        <div className="section-side-heading">
          <h2 id="audience-title">見る人に合わせて、知りたい情報へすぐ進めます</h2>
        </div>
        <div className="audience-list">
          {audienceEntrances.map((item) => (
            <section key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button type="button" className="text-button" onClick={() => scrollToSection(item.target)}>
                {item.button}
              </button>
            </section>
          ))}
        </div>
      </section>

      <section className="modern-section section-with-rail" id="consultation" aria-labelledby="consultation-title">
        <div className="section-side-heading">
          <h2 id="consultation-title">この会社に相談できること</h2>
        </div>
        <div>
          <p>
            工業用ゴム部品、シリコーンゴム製品、金具・樹脂との加硫接着品など、
            試作から継続生産まで相談できる内容を整理して見せます。
          </p>
          <ul className="plain-check-list">
            {consultationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="supporting-text">
            図面が固まる前の段階でも、用途・数量・材質をもとに相談できます。
          </p>
        </div>
      </section>

      <section className="modern-section" id="strengths" aria-labelledby="strengths-title">
        <h2 id="strengths-title">東霞ラバー工業の強み</h2>
        <ol className="lined-number-list">
          {strengths.map((strength, index) => (
            <li key={strength.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{strength.title}</h3>
                <p>{strength.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="modern-section" id="equipment" aria-labelledby="equipment-title">
        <h2 id="equipment-title">主な設備</h2>
        <p className="improvement-note">
          改善意図：設備名だけでなく、どんな相談に対応できるかまで見せます。
        </p>
        <div className="responsive-table-wrap">
          <table className="guide-table equipment-table">
            <thead>
              <tr>
                <th>設備名</th>
                <th>用途</th>
                <th>相談できる内容</th>
              </tr>
            </thead>
            <tbody>
              {equipmentRows.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  <td>{row.use}</td>
                  <td>{row.consultation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="modern-section" aria-labelledby="flow-title">
        <h2 id="flow-title">相談から納品までの流れ</h2>
        <ol className="vertical-process">
          {processDetails.map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="modern-section" id="quality" aria-labelledby="quality-title">
        <h2 id="quality-title">品質管理について</h2>
        <p>
          取引前に安心していただけるよう、材料・仕様・寸法・外観など、
          確認すべき項目を整理して掲載します。
        </p>
        <p className="improvement-note">
          改善意図：品質の考え方を見える化し、初回相談前の不安を減らします。
        </p>
        <ul className="plain-check-list">
          {qualityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="modern-section" id="recruit" aria-labelledby="recruit-title">
        <h2 id="recruit-title">働く人に伝わる情報も整理します</h2>
        <p>
          製造業の仕事は、外から見ると仕事内容や職場の雰囲気が伝わりにくいことがあります。
          仕事内容、育成方針、1日の流れを整理することで、若い人や未経験者が応募前に安心しやすくなります。
        </p>
        <p className="improvement-note">
          改善意図：仕事内容を見える化し、応募前の不安を減らします。
        </p>
        <dl className="lined-definition-list">
          {recruitRoles.map((role) => (
            <div key={role.title}>
              <dt>{role.title}</dt>
              <dd>{role.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="modern-section" aria-labelledby="glossary-title">
        <h2 id="glossary-title">用語ミニ解説</h2>
        <dl className="glossary-list">
          {glossaryItems.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="modern-section" aria-labelledby="owner-benefits-title-after">
        <h2 id="owner-benefits-title-after">経営者にとってのメリット</h2>
        <dl className="lined-definition-list">
          {ownerBenefits.map((benefit) => (
            <div key={benefit.title}>
              <dt>{benefit.title}</dt>
              <dd>{benefit.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="modern-section company-section" aria-labelledby="company-title">
        <h2 id="company-title">会社概要</h2>
        <div className="responsive-table-wrap">
          <table className="guide-table company-info-table">
            <tbody>
              {companyRows.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="final-cta" id="contact" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">図面が固まる前の相談も歓迎します</h2>
          <p>
            用途、数量、材質、納期が未確定の段階でもご相談ください。
            試作から量産まで、必要な情報を整理しながら進めます。
          </p>
        </div>
        <button type="button" className="modern-cta modern-cta--white" onClick={handleContactClick}>
          相談内容を整理して問い合わせる
        </button>
        {contactMessageVisible && (
          <p className="form-note" role="status">
            このデモではフォーム送信は行いません。実際の制作では、電話・メール・問い合わせフォームの導線を設置します。
          </p>
        )}
      </section>

      <footer className="modern-footer">{demoNotice}</footer>
    </article>
  );
}

export default ModernWebsiteFrame;
