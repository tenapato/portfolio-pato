import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Locale, portfolioCopy } from '@/data/portfolio-copy';
import { mountTerminalBackground } from '@/lib/terminal-background';

export default function TerminalBackground({ locale }: { locale: Locale }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const background = portfolioCopy[locale].background;
  const label = paused ? background.resume : background.pause;

  useEffect(() => {
    if (canvas.current) return mountTerminalBackground(canvas.current);
  }, []);

  return <>
    <canvas ref={canvas} className="terminal-background" data-paused={paused} aria-hidden="true" />
    <button className="background-toggle" type="button" aria-label={label} aria-pressed={paused} onClick={() => setPaused(!paused)}>
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      <span>{label}</span>
    </button>
  </>;
}
