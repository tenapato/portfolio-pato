import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { mountTerminalBackground } from '@/lib/terminal-background';

export default function TerminalBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (canvas.current) return mountTerminalBackground(canvas.current);
  }, []);

  return <>
    <canvas ref={canvas} className="terminal-background" data-paused={paused} aria-hidden="true" />
    <button className="background-toggle" type="button" aria-label={paused ? 'Resume background' : 'Pause background'} aria-pressed={paused} onClick={() => setPaused(!paused)}>
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      <span>{paused ? 'Resume background' : 'Pause background'}</span>
    </button>
  </>;
}
