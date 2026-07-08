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
