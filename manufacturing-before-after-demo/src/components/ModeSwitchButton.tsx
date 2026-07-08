import type { ReactNode } from 'react';
import type { Mode } from '../App';

type ModeSwitchButtonProps = {
  children: ReactNode;
  currentMode?: Mode;
  targetMode: Mode;
  onSwitch: (mode: Mode) => void;
  variant?: 'primary' | 'secondary';
  className?: string;
};

function ModeSwitchButton({
  children,
  currentMode,
  targetMode,
  onSwitch,
  variant = 'secondary',
  className = '',
}: ModeSwitchButtonProps) {
  const isActive = currentMode === targetMode;
  const buttonClass = [
    'mode-switch',
    `mode-switch--${variant}`,
    isActive ? 'is-active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={buttonClass}
      aria-pressed={isActive}
      onClick={() => onSwitch(targetMode)}
    >
      {children}
    </button>
  );
}

export default ModeSwitchButton;
