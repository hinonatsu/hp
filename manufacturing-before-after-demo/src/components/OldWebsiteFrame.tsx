import { company, demoNotice, newsItems } from '../data/company';

type OldWebsiteFrameProps = {
  compact?: boolean;
};

const basicRows = [
  ['会社名', company.name],
  ['TEL', company.tel],
  ['FAX', company.fax],
  ['住所', company.address],
  ['営業時間', company.hours],
  ['営業日', company.businessDays],
  ['メールアドレス', company.email],
  ['主要製造製品', '工業用ゴム製品、シリコーンゴム製品、加硫接着品'],
] as const;

const equipmentRows = [
  ['主要設備', '50t〜200t ゴム加硫成形機、真空プレス成形機'],
  ['補助設備', '14インチオープンロール、乾燥炉、検査設備'],
] as const;

function OldWebsiteFrame({ compact = false }: OldWebsiteFrameProps) {
  return (
    <article className={`old-site ${compact ? 'old-site--compact' : ''}`}>
      <header className="old-header">
        <div>
          <h2>{company.name}</h2>
          <p>茨城県霞ヶ浦市のゴム製品製造業「{company.shortName}」へようこそ</p>
        </div>
        <div className="old-contact-box">
          <span>TEL {company.tel}</span>
          <span>{company.hours}</span>
        </div>
      </header>

      <nav className="old-nav" aria-label="従来型サイト内メニュー">
        <a href="#old-home">ホーム</a>
        <a href="#old-business">事業案内</a>
        <a href="#old-products">ゴム製品案内</a>
        <a href="#old-company">会社概要</a>
        <a href="#old-news">お知らせ</a>
      </nav>

      <div className="old-hero-placeholder" id="old-home" aria-label="設備イメージのプレースホルダー">
        <div className="old-placeholder-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>設備・製品イメージ領域</p>
      </div>

      <section className="old-section" id="old-business">
        <h3>ごあいさつ</h3>
        <p>
          当社は、合成ゴム・シリコーンゴムを中心とした工業用ゴム製品の製造に取り組んでおります。
          50t〜200tのゴム加硫成形機を保有し、試作から量産まで対応可能です。
          金具・樹脂との加硫接着品、小ロット試作、各種工業用部品のご相談を承っております。
        </p>
      </section>

      <div className="old-two-column">
        <section className="old-section old-news" id="old-news">
          <h3>お知らせ</h3>
          <ul>
            {newsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="old-section" id="old-products">
          <h3>事業内容</h3>
          <ul className="old-list">
            {company.business.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="old-section" id="old-company">
        <h3>基本情報</h3>
        <table className="old-table">
          <tbody>
            {basicRows.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="old-section">
        <h3>設備情報</h3>
        <table className="old-table">
          <tbody>
            {equipmentRows.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="old-small-contact">
        <h3>お問い合わせ</h3>
        <p>
          製品の試作・量産に関するご相談は、電話またはメールにてお問い合わせください。
        </p>
        <p>
          TEL：{company.tel}　メール：{company.email}
        </p>
      </section>

      <footer className="old-footer">{demoNotice}</footer>
    </article>
  );
}

export default OldWebsiteFrame;
