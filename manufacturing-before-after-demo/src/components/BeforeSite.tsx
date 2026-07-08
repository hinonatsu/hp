import type { Mode } from '../App';
import ModeSwitchButton from './ModeSwitchButton';
import OldWebsiteFrame from './OldWebsiteFrame';

type BeforeSiteProps = {
  onModeChange: (mode: Mode) => void;
};

function BeforeSite({ onModeChange }: BeforeSiteProps) {
  return (
    <section className="view-shell">
      <div className="view-actions">
        <div>
          <p className="view-kicker">従来型サイトビュー</p>
          <h1>情報中心の構成として見る</h1>
        </div>
        <ModeSwitchButton targetMode="after" onSwitch={onModeChange} variant="primary">
          改善後サイトを見る
        </ModeSwitchButton>
      </div>
      <section className="before-context-card" aria-labelledby="before-context-title">
        <h2 id="before-context-title">従来型サイトの特徴</h2>
        <p>
          会社概要、事業内容、設備、連絡先を一覧で伝える構成です。
          必要な情報は掲載されていますが、初めて見る取引先や求職者が
          「何を相談できるか」「どんな会社か」をすぐ判断するには、少し読み込みが必要になります。
        </p>
      </section>
      <OldWebsiteFrame />
      <div className="view-bottom-action">
        <ModeSwitchButton targetMode="after" onSwitch={onModeChange} variant="primary">
          同じ情報を改善後サイトで見る
        </ModeSwitchButton>
      </div>
    </section>
  );
}

export default BeforeSite;
