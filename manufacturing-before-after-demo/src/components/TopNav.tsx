import type { Mode } from '../App';
import ModeSwitchButton from './ModeSwitchButton';

type TopNavProps = {
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
};

function TopNav({ currentMode, onModeChange }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <div className="top-nav__brand" aria-label="Web改善デモ">
          <span className="brand-mark" aria-hidden="true" />
          <span>Web改善デモ</span>
        </div>
        <nav className="top-nav__buttons" aria-label="表示モード">
          <ModeSwitchButton
            currentMode={currentMode}
            targetMode="compare"
            onSwitch={onModeChange}
          >
            比較で見る
          </ModeSwitchButton>
          <ModeSwitchButton
            currentMode={currentMode}
            targetMode="before"
            onSwitch={onModeChange}
          >
            従来型サイト
          </ModeSwitchButton>
          <ModeSwitchButton
            currentMode={currentMode}
            targetMode="after"
            onSwitch={onModeChange}
          >
            改善後サイト
          </ModeSwitchButton>
        </nav>
      </div>
    </header>
  );
}

export default TopNav;
