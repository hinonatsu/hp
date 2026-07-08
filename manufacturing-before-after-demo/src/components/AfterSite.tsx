import type { Mode } from '../App';
import ModeSwitchButton from './ModeSwitchButton';
import ModernWebsiteFrame from './ModernWebsiteFrame';

type AfterSiteProps = {
  onModeChange: (mode: Mode) => void;
};

function AfterSite({ onModeChange }: AfterSiteProps) {
  return (
    <section className="view-shell">
      <div className="view-actions">
        <div>
          <p className="view-kicker">改善後サイトビュー</p>
          <h1>伝わる順番に整理した構成として見る</h1>
        </div>
        <ModeSwitchButton targetMode="before" onSwitch={onModeChange} variant="secondary">
          従来型サイトを見る
        </ModeSwitchButton>
      </div>
      <ModernWebsiteFrame />
      <div className="view-bottom-action">
        <ModeSwitchButton targetMode="compare" onSwitch={onModeChange} variant="primary">
          従来型サイトと比較する
        </ModeSwitchButton>
      </div>
    </section>
  );
}

export default AfterSite;
