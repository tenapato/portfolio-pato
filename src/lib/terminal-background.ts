/** A looping terminal: type code, advance output, and scroll completed lines away. */
export function mountTerminalBackground(canvas: HTMLCanvasElement): () => void {
  const context = canvas.getContext('2d');
  const field = document.createElement('canvas');
  const fieldContext = field.getContext('2d');
  if (!context || !fieldContext) return () => {};

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hover = window.matchMedia('(hover: hover) and (pointer: fine)');
  const theme = getComputedStyle(canvas);
  const color = theme.getPropertyValue('--green').trim() || '#64ffda';
  const keyword = theme.getPropertyValue('--terminal-keyword').trim() || '#82aaff';
  const string = theme.getPropertyValue('--terminal-string').trim() || '#b4d99a';
  const comment = theme.getPropertyValue('--terminal-comment').trim() || '#627d9b';
  const foreground = theme.getPropertyValue('--light-slate').trim() || '#a8b2d1';
  const cellHeight = 25;
  const scrollDuration = 260;
  const radius = 175;
  let width = 0;
  let height = 0;
  let cellWidth = 7;
  let columns = 1;
  let currentRow = 0;
  let frame = 0;
  let lastFrame = 0;
  let nextAdvance = 0;
  let lineOffset = 0;
  let characters = 0;
  let scrollOffset = 0;
  let scrollStarted = 0;
  let phase: 'typing' | 'pause' | 'scrolling' = 'typing';
  let fieldDirty = true;
  let disposed = false;
  let pointer: { x: number; y: number } | null = null;
  let cells: { x: number; y: number; text: string; color: string }[][] = [];
  const panes = [
    [
      'pato@workstation ~/projects/portfolio',
      '$ git checkout -b build/something-useful',
      '',
      '// iteration {{iteration}} / src/server.ts',
      'import { Hono } from "hono";',
      'import { memory } from "./memory";',
      '',
      'const app = new Hono();',
      '',
      'app.get("/health", (c) => {',
      '  return c.json({ status: "ok" });',
      '});',
      '',
      'export async function remember(project) {',
      '  const context = await memory.find(project.id);',
      '  return { project, context };',
      '}',
      '',
      '// small functions. useful things.',
      'const ideas = ["build", "learn", "repeat"];',
      'const next = ideas.map((idea) => ship(idea));',
      '',
      '$ npm run dev',
      '> watching for changes / pass {{iteration}}',
      '',
      'app.post("/projects", async (c) => {',
      '  const input = await c.req.json();',
      '  const project = await createProject(input);',
      '  return c.json(project, 201);',
      '});',
      '',
      '$ git diff --stat',
      '$ git add src/',
      '$ git commit -m "build something useful"',
      '',
    ],
    [
      'pato@workstation ~/projects/services',
      '$ docker compose up -d',
      '',
      '// iteration {{iteration}} / src/worker.ts',
      'export default {',
      '  async fetch(request, env) {',
      '    const url = new URL(request.url);',
      '    const key = url.pathname.slice(1);',
      '',
      '    const object = await env.BUCKET.get(key);',
      '    if (!object) {',
      '      return new Response("Not found", {',
      '        status: 404,',
      '      });',
      '    }',
      '',
      '    return new Response(object.body);',
      '  },',
      '};',
      '',
      '$ psql development',
      'SELECT name, language',
      'FROM projects',
      'WHERE published = true',
      'ORDER BY created_at DESC;',
      '',
      '// one request at a time',
      'const response = await fetch("/api/projects");',
      'const projects = await response.json();',
      '',
      '$ git log --oneline -4',
      '$ npm run build',
      '> compiling iteration {{iteration}}...',
      '',
    ],
  ];

  function isPaused() {
    return motion.matches || canvas.dataset.paused === 'true';
  }

  function sourceLine(pane: number, row: number) {
    const source = panes[pane];
    const index = lineOffset + row;
    return source[index % source.length].replace(/\{\{iteration\}\}/g, String(Math.floor(index / source.length) + 1));
  }

  function paintField() {
    if (!fieldContext) return;
    fieldContext.clearRect(0, 0, width, height + cellHeight);
    fieldContext.globalAlpha = hover.matches ? .1 : .065;
    const paneWidth = width / columns;
    cells = [];
    for (let row = 0; row <= currentRow; row++) {
      const line: { x: number; y: number; text: string; color: string }[] = [];
      for (let pane = 0; pane < columns; pane++) {
        const source = sourceLine(pane, row);
        const text = row === currentRow ? source.slice(0, characters) : source;
        const colors = Array(text.length).fill(text.startsWith('$') ? color : foreground);
        const tokens = /\/\/.*$|"[^"\n]*"|'[^'\n]*'|\b(?:import|from|const|export|async|await|return|if|new|true|SELECT|FROM|WHERE|ORDER BY|DESC)\b/g;
        let match;
        while ((match = tokens.exec(text))) {
          const tokenColor = match[0].startsWith('//') ? comment : /^["']/.test(match[0]) ? string : keyword;
          colors.fill(tokenColor, match.index, match.index + match[0].length);
        }
        Array.from(text).forEach((character, index) => {
          const x = pane * paneWidth + 20 + index * cellWidth;
          if (character === ' ' || x + cellWidth > (pane + 1) * paneWidth - 16) return;
          const cell = { x, y: row * cellHeight + 20, text: character, color: colors[index] };
          line.push(cell);
          fieldContext.fillStyle = cell.color;
          fieldContext.fillText(cell.text, cell.x, cell.y);
        });
      }
      cells.push(line);
    }
    fieldDirty = false;
  }

  function advance(now: number) {
    if (phase === 'scrolling') {
      const progress = Math.min((now - scrollStarted) / scrollDuration, 1);
      scrollOffset = cellHeight * (1 - Math.pow(1 - progress, 3));
      if (progress === 1) {
        lineOffset++;
        characters = 0;
        scrollOffset = 0;
        phase = 'typing';
        nextAdvance = now + 100;
        fieldDirty = true;
      }
      return;
    }
    if (now < nextAdvance) return;
    if (phase === 'pause') {
      phase = 'scrolling';
      scrollStarted = now;
      return;
    }
    const length = Math.max(...panes.slice(0, columns).map((_, pane) => sourceLine(pane, currentRow).length));
    characters = Math.min(characters + 3, length);
    fieldDirty = true;
    if (characters >= length) {
      phase = 'pause';
      nextAdvance = now + (length ? 230 : 100);
    } else {
      nextAdvance = now + 48;
    }
  }

  function draw(now: number) {
    frame = 0;
    if (disposed || document.hidden || !context || !width || !height) return;
    const paused = isPaused();
    if (!paused && now - lastFrame < (hover.matches ? 1000 / 24 : 1000 / 16)) {
      scheduleDraw();
      return;
    }
    lastFrame = now;
    if (!paused) advance(now);
    if (fieldDirty) paintField();

    context.clearRect(0, 0, width, height);
    context.globalAlpha = 1;
    context.shadowBlur = 0;
    context.drawImage(field, 0, -scrollOffset, width, height + cellHeight);

    if (phase !== 'scrolling' && (paused || Math.floor(now / 550) % 2 === 0)) {
      context.fillStyle = color;
      context.globalAlpha = .3;
      for (let pane = 0; pane < columns; pane++) {
        const paneWidth = width / columns;
        const visibleLength = Math.min(characters, sourceLine(pane, currentRow).length);
        const x = pane * paneWidth + Math.min(20 + visibleLength * cellWidth, paneWidth - 24);
        context.fillRect(x, currentRow * cellHeight + 9, 6, 13);
      }
    }

    if (pointer && !motion.matches && hover.matches) {
      const firstRow = Math.max(0, Math.floor((pointer.y + scrollOffset - radius) / cellHeight));
      const lastRow = Math.min(cells.length - 1, Math.ceil((pointer.y + scrollOffset + radius) / cellHeight));
      for (let row = firstRow; row <= lastRow; row++) {
        for (const cell of cells[row] || []) {
          if (Math.abs(cell.x - pointer.x) > radius) continue;
          const y = cell.y - scrollOffset;
          const distance = Math.hypot(cell.x + 3 - pointer.x, y - 4 - pointer.y);
          if (distance >= radius) continue;
          const intensity = Math.pow(1 - distance / radius, 2);
          context.fillStyle = cell.color;
          context.shadowColor = cell.color;
          context.globalAlpha = intensity * .65;
          context.shadowBlur = intensity > .35 ? 8 * intensity : 0;
          context.fillText(cell.text, cell.x, y);
        }
      }
    }
    context.globalAlpha = 1;
    context.shadowBlur = 0;
    if (!paused) scheduleDraw();
  }

  function scheduleDraw() {
    if (!disposed && !frame && !document.hidden) frame = requestAnimationFrame(draw);
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    if (!width || !height || !context || !fieldContext) return;
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = field.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    field.height = Math.round((height + cellHeight) * scale);
    for (const target of [context, fieldContext]) {
      target.setTransform(scale, 0, 0, scale, 0, 0);
      target.font = '12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    }
    cellWidth = fieldContext.measureText('M').width;
    columns = width >= 1000 ? 2 : 1;
    currentRow = Math.max(1, Math.floor(height / cellHeight) - 1);
    fieldDirty = true;
    scheduleDraw();
  }

  function move(event: PointerEvent) {
    if (event.pointerType === 'touch' || motion.matches || !hover.matches) return;
    const bounds = canvas.getBoundingClientRect();
    pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    scheduleDraw();
  }

  function clear() { pointer = null; scheduleDraw(); }
  function leave(event: PointerEvent) { if (!event.relatedTarget) clear(); }
  function resumeClock() {
    const now = performance.now();
    nextAdvance = now + 80;
    // Reverse the easing curve to continue a partially completed scroll.
    scrollStarted = now - (1 - Math.cbrt(1 - scrollOffset / cellHeight)) * scrollDuration;
    lastFrame = 0;
    scheduleDraw();
  }
  function visibility() {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; pointer = null; }
    else resumeClock();
  }
  function preferenceChanged() { pointer = null; fieldDirty = true; resumeClock(); }

  const observer = new ResizeObserver(resize);
  const controls = new MutationObserver(resumeClock);
  observer.observe(canvas);
  controls.observe(canvas, { attributes: true, attributeFilter: ['data-paused'] });
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('pointerout', leave, { passive: true });
  window.addEventListener('blur', clear);
  document.addEventListener('visibilitychange', visibility);
  motion.addEventListener('change', preferenceChanged);
  hover.addEventListener('change', preferenceChanged);
  resize();

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    controls.disconnect();
    window.removeEventListener('pointermove', move);
    window.removeEventListener('pointerout', leave);
    window.removeEventListener('blur', clear);
    document.removeEventListener('visibilitychange', visibility);
    motion.removeEventListener('change', preferenceChanged);
    hover.removeEventListener('change', preferenceChanged);
  };
}
