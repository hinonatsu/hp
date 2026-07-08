import { useCallback, useEffect, useState } from 'react';
import AfterSite from './components/AfterSite';
import BeforeSite from './components/BeforeSite';
import CompareView from './components/CompareView';
import DemoNotice from './components/DemoNotice';
import TopNav from './components/TopNav';

export type Mode = 'compare' | 'before' | 'after';

const modeValues = new Set<Mode>(['compare', 'before', 'after']);

const readModeFromHash = (): Mode => {
  const hash = window.location.hash.replace('#', '');
  return modeValues.has(hash as Mode) ? (hash as Mode) : 'compare';
};

function App() {
  const [mode, setMode] = useState<Mode>(() => readModeFromHash());

  useEffect(() => {
    const syncModeFromHash = () => {
      const nextMode = readModeFromHash();
      setMode(nextMode);

      if (window.location.hash !== `#${nextMode}`) {
        window.history.replaceState(null, '', `#${nextMode}`);
      }
    };

    syncModeFromHash();
    window.addEventListener('hashchange', syncModeFromHash);
    window.addEventListener('popstate', syncModeFromHash);

    return () => {
      window.removeEventListener('hashchange', syncModeFromHash);
      window.removeEventListener('popstate', syncModeFromHash);
    };
  }, []);

  const handleModeChange = useCallback((nextMode: Mode) => {
    setMode(nextMode);

    if (window.location.hash !== `#${nextMode}`) {
      window.history.pushState(null, '', `#${nextMode}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <TopNav currentMode={mode} onModeChange={handleModeChange} />
      <DemoNotice />
      <main className="app-shell">
        {mode === 'compare' && <CompareView onModeChange={handleModeChange} />}
        {mode === 'before' && <BeforeSite onModeChange={handleModeChange} />}
        {mode === 'after' && <AfterSite onModeChange={handleModeChange} />}
      </main>
    </>
  );
}

export default App;
