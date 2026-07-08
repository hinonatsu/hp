import type { Mode } from '../App';
import ModeSwitchButton from './ModeSwitchButton';
import ModernWebsiteFrame from './ModernWebsiteFrame';
import OldWebsiteFrame from './OldWebsiteFrame';

type CompareViewProps = {
  onModeChange: (mode: Mode) => void;
};

const comparePoints = [
  {
    title: '最初の15秒で伝わる内容',
    before: '会社名・事業内容は分かるが、何を相談できるかは読み込む必要がある。',
    after: '「試作から量産まで対応するゴム成形パートナー」と一瞬で分かる。',
  },
  {
    title: '問い合わせ導線',
    before: '連絡先はあるが、相談前に何を伝えればよいか分かりにくい。',
    after: '用途・図面・数量・材質など、相談の入口が明確。',
  },
  {
    title: '採用への見え方',
    before: '会社情報はあるが、若手が働くイメージを持ちにくい。',
    after: '仕事内容・職種・未経験者向けの安心材料が見える。',
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

function CompareView({ onModeChange }: CompareViewProps) {
  return (
    <section className="compare-view">
      <div className="compare-hero">
        <p className="view-kicker">比較ビュー</p>
        <h1>同じ会社・同じ情報でも、伝わる順番で印象は変わります</h1>
        <p>
          必要な情報をただ掲載するだけでなく、取引先と求職者が知りたい順番に並べ替えることで、
          問い合わせ前の不安を減らします。
        </p>
      </div>

      <div className="compare-grid" aria-label="従来型サイトと改善後サイトの比較">
        <article className="preview-panel">
          <div className="preview-panel__header">
            <span className="preview-label">Before</span>
            <h2>従来型サイト</h2>
          </div>
          <OldWebsiteFrame compact />
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
          <ModeSwitchButton targetMode="after" onSwitch={onModeChange} variant="primary">
            改善後サイトを開く
          </ModeSwitchButton>
        </article>
      </div>

      <section className="compare-points" aria-labelledby="compare-points-title">
        <h2 id="compare-points-title">比較ポイント</h2>
        <div className="point-grid">
          {comparePoints.map((point, index) => (
            <article className="point-card" key={point.title}>
              <span className="point-number">{index + 1}</span>
              <h3>{point.title}</h3>
              <dl>
                <div>
                  <dt>従来型</dt>
                  <dd>{point.before}</dd>
                </div>
                <div>
                  <dt>改善後</dt>
                  <dd>{point.after}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="proposal-block" aria-labelledby="proposal-title">
        <div className="proposal-copy">
          <p className="view-kicker">提案ブロック</p>
          <h2 id="proposal-title">このデモで伝えたいこと</h2>
          <p>
            ホームページを新しくする目的は、単に見た目を綺麗にすることではありません。
            すでに会社が持っている技術・設備・品質体制・人の魅力を、取引先と求職者に伝わる順番へ整理することです。
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
