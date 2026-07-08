import type { Mode } from '../App';
import ModeSwitchButton from './ModeSwitchButton';
import ModernWebsiteFrame from './ModernWebsiteFrame';
import OldWebsiteFrame from './OldWebsiteFrame';

type CompareViewProps = {
  onModeChange: (mode: Mode) => void;
};

const summaryPoints = [
  {
    title: '強みを最初に見せる',
    body: '従来型では本文に入っていた強みを、最初の見出しと説明で伝えます。',
  },
  {
    title: '相談しやすくする',
    body: '何を伝えて問い合わせればよいかが分かるため、初回相談の迷いを減らします。',
  },
  {
    title: '採用にも使える',
    body: '仕事内容や職種を見える化し、若い人が働くイメージを持ちやすくします。',
  },
] as const;

const comparisonRows = [
  {
    item: '最初に伝わること',
    before:
      '会社名と事業内容は分かりますが、何を頼める会社かを理解するには本文を読む必要があります。',
    after:
      '「試作から量産まで相談できるゴム成形会社」と最初の見出しで伝わります。',
  },
  {
    item: '問い合わせ前の安心感',
    before:
      '電話番号とメールはありますが、何を伝えればよいか分かりにくい状態です。',
    after:
      '用途・図面・数量・材質など、相談時に必要な情報が分かるため、問い合わせ前の迷いが減ります。',
  },
  {
    item: '技術・設備の見え方',
    before:
      '設備名は掲載されていますが、設備がどのような相談に役立つかまでは伝わりにくい状態です。',
    after:
      '設備を「試作」「量産」「品質確認」と結びつけて見せるため、発注担当者が判断しやすくなります。',
  },
  {
    item: '採用への見え方',
    before:
      '会社情報はありますが、若い人が働くイメージを持ちにくい状態です。',
    after:
      '仕事内容、職種、未経験者向けの安心材料が見えるため、応募前の不安を減らせます。',
  },
  {
    item: '会社の信頼感',
    before:
      '必要情報はありますが、情報が表や文章にまとまっているため、強みが埋もれやすい状態です。',
    after:
      '強み・品質・相談の流れを順番に見せることで、初めて見る人にも会社の信頼感が伝わりやすくなります。',
  },
] as const;

const beforeNotes = [
  '情報はあるが、強みが本文の中に入っている',
  '問い合わせ導線が下の方にある',
  '求職者向けの情報が少ない',
  '設備名だけでは、何を相談できるか分かりにくい',
] as const;

const afterNotes = [
  '最初の見出しで何の会社か分かる',
  '相談ボタンがすぐ見える',
  '設備と相談内容が結びついている',
  '採用向けの情報も見える',
] as const;

const ownerBenefits = [
  {
    title: '初回問い合わせの不安を減らす',
    body: '何を相談できる会社かが分かると、電話やメールの前の迷いが減ります。',
  },
  {
    title: '紹介された後の信用確認に使える',
    body: '紹介で会社名を聞いた人も、検索して安心できる情報があると相談しやすくなります。',
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

const priceReasons = [
  {
    title: '情報整理',
    body: '公開情報とヒアリング内容をもとに、何を伝えるべきか整理します。',
  },
  {
    title: '文章設計',
    body: '専門的な技術内容を、取引先や求職者にも分かる言葉に変換します。',
  },
  {
    title: '導線設計',
    body: '問い合わせ、採用、会社概要への流れを分かりやすくします。',
  },
  {
    title: 'スマホ対応',
    body: '高齢者や初心者でも読みやすい文字サイズと余白で設計します。',
  },
  {
    title: '公開作業',
    body: '公開後に見られる状態まで整えます。',
  },
  {
    title: '保守',
    body: '軽微な文言修正や表示確認に対応します。',
  },
] as const;

const includedItems = [
  '現在の公開情報とヒアリング内容の整理',
  'スマホ対応ページ制作',
  '事業内容・設備・強みの言語化',
  '採用・問い合わせ導線の設計',
  '基本SEO設定',
  '公開作業',
  '修正2回',
] as const;

const excludedItems = [
  '写真撮影',
  'ロゴ制作',
  '予約システム',
  'EC機能',
  '広告運用',
  'SEO順位保証',
  '複雑なCMS構築',
] as const;

function scrollToComparison() {
  document.getElementById('comparison-table')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function CompareView({ onModeChange }: CompareViewProps) {
  return (
    <section className="compare-view">
      <section className="intro-panel" aria-labelledby="guide-title">
        <p className="view-kicker">営業用Before/Afterデモ</p>
        <h1 id="guide-title">このページの見方</h1>
        <p>
          このデモは、同じ架空企業の情報を使って、従来型サイトと改善後サイトの違いを比べるためのものです。
          従来型サイトを否定するものではありません。
          すでに会社が持っている技術・設備・品質体制を、取引先や求職者に伝わる順番へ並べ替えると、
          どれくらい分かりやすくなるかを体験できます。
        </p>
        <ol className="guide-steps" aria-label="このデモを見る順番">
          <li>
            <span>1</span>
            <div>
              <h2>まず従来型サイトを見る</h2>
              <p>会社概要、事業内容、設備、連絡先が載っている構成を確認します。</p>
              <ModeSwitchButton targetMode="before" onSwitch={onModeChange} variant="secondary">
                従来型サイトを見る
              </ModeSwitchButton>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h2>次に改善後サイトを見る</h2>
              <p>同じ情報を、見る人が知りたい順番に並べ替えた状態を確認します。</p>
              <ModeSwitchButton targetMode="after" onSwitch={onModeChange} variant="primary">
                改善後サイトを見る
              </ModeSwitchButton>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h2>最後に何が変わったかを見る</h2>
              <p>問い合わせ、採用、信用確認に役立つ理由を表で確認します。</p>
              <button type="button" className="text-button" onClick={scrollToComparison}>
                5項目の比較を見る
              </button>
            </div>
          </li>
        </ol>
      </section>

      <section className="summary-panel" aria-labelledby="summary-title">
        <h2 id="summary-title">30秒で分かる改善ポイント</h2>
        <ol className="summary-list">
          {summaryPoints.map((point, index) => (
            <li key={point.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="compare-hero">
        <h2>同じ会社・同じ情報でも、伝わる順番で印象は変わります</h2>
        <p>
          必要な情報をただ掲載するだけでなく、取引先と求職者が知りたい順番に並べ替えることで、
          問い合わせ前の不安を減らします。
        </p>
      </div>

      <div className="compare-grid" aria-label="従来型サイトと改善後サイトの比較プレビュー">
        <article className="preview-panel">
          <div className="preview-panel__header">
            <span className="preview-label">Before</span>
            <h2>従来型サイト</h2>
          </div>
          <OldWebsiteFrame compact />
          <div className="preview-notes" aria-label="従来型サイトの見え方">
            <h3>見え方の注釈</h3>
            <ul>
              {beforeNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <ModeSwitchButton targetMode="before" onSwitch={onModeChange} variant="secondary">
            従来型サイトを開く
          </ModeSwitchButton>
        </article>

        <article className="preview-panel preview-panel--after">
          <div className="preview-panel__header">
            <span className="preview-label preview-label--after">After</span>
            <h2>改善後サイト</h2>
          </div>
          <ModernWebsiteFrame compact />
          <div className="preview-notes" aria-label="改善後サイトの見え方">
            <h3>見え方の注釈</h3>
            <ul>
              {afterNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <ModeSwitchButton targetMode="after" onSwitch={onModeChange} variant="primary">
            改善後サイトを開く
          </ModeSwitchButton>
        </article>
      </div>

      <section className="respect-block" aria-labelledby="respect-title">
        <h2 id="respect-title">従来型サイトにも価値はあります</h2>
        <p>
          従来型サイトは、会社概要・事業内容・連絡先を掲載するという意味では役割を果たしています。
          ただし、現在は取引先も求職者も、問い合わせ前にスマートフォンで会社を確認することが多くなっています。
          そのため、単に情報を載せるだけでなく、見る人が知りたい順番に整理することが重要です。
        </p>
      </section>

      <section className="compare-points" id="comparison-table" aria-labelledby="comparison-title">
        <h2 id="comparison-title">何が変わったのか、ひと目で分かる比較</h2>
        <div className="comparison-table" role="table" aria-label="従来型サイトと改善後サイトの5項目比較">
          <div className="comparison-row comparison-row--head" role="row">
            <div role="columnheader">比較項目</div>
            <div role="columnheader">従来型サイト</div>
            <div role="columnheader">改善後サイト</div>
          </div>
          {comparisonRows.map((row) => (
            <div className="comparison-row" role="row" key={row.item}>
              <div role="cell" data-label="比較項目">
                <strong>{row.item}</strong>
              </div>
              <div role="cell" data-label="従来型サイト">
                {row.before}
              </div>
              <div role="cell" data-label="改善後サイト">
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="owner-benefits" aria-labelledby="owner-benefits-title">
        <h2 id="owner-benefits-title">経営者にとってのメリット</h2>
        <dl className="lined-definition-list">
          {ownerBenefits.map((benefit) => (
            <div key={benefit.title}>
              <dt>{benefit.title}</dt>
              <dd>{benefit.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="proposal-block" aria-labelledby="proposal-title">
        <div className="proposal-copy">
          <p className="view-kicker">提案ブロック</p>
          <h2 id="proposal-title">このデモで伝えたいこと</h2>
          <p>
            ホームページを新しくする目的は、単に見た目を整えることではありません。
            すでに会社が持っている技術・設備・品質体制・人の魅力を、
            取引先と求職者に伝わる順番へ整理することです。
          </p>
          <p>
            本デモでは、同じ架空企業の情報を使い、従来型サイトと改善後サイトの印象差を比較できるようにしています。
          </p>
        </div>

        <div className="price-sample" aria-label="料金サンプル">
          <span className="price-label">料金サンプル</span>
          <h3>採用・信用強化Webパッケージ</h3>
          <div className="price-row">
            <span>制作費</span>
            <strong>35万円＋税</strong>
          </div>
          <div className="price-row">
            <span>保守</span>
            <strong>月1万円＋税</strong>
          </div>
        </div>

        <section className="price-reason" aria-labelledby="price-reason-title">
          <h3 id="price-reason-title">なぜこの価格なのか</h3>
          <p>
            この制作費は、ページを作る作業時間だけの金額ではありません。
            現在の情報を整理し、事業内容・設備・品質体制・採用情報を、
            取引先と求職者に伝わる言葉へ変えるための費用です。
            見た目の変更だけではなく、会社の強みを営業・採用に使える形へ整えることを目的にしています。
          </p>
          <dl className="price-breakdown">
            {priceReasons.map((reason) => (
              <div key={reason.title}>
                <dt>{reason.title}</dt>
                <dd>{reason.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="scope-grid">
          <div>
            <h3>含むもの</h3>
            <ul>
              {includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>含まないもの</h3>
            <ul>
              {excludedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CompareView;
