import React from 'react';
import Content from './Components/Content/Content';
import './App.scss';
import Hero from './Components/Hero/Hero';
import RootFooter from './Components/Footer/RootFooter';
import { useEffect, useRef } from 'react';

const LeftColumn = () => {
  return (
    <div className="left-column">
      <Hero />
    </div>
  );
};

const RightColumn = () => {
  return (
    <div className="right-column">
      <Content />
    </div>
  );
};

const App = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const GRID_SIZE = 100;
    const DECAY_MS = 1500;
    const MAX_TILES = 50;

    type Highlight = { x: number; y: number; color: string; createdAt: number };

    const highlights: Map<string, Highlight> = new Map();

    const palette = [
      'rgba(50, 206, 162, 0.35)',
      'rgba(95, 204, 45, 0.35)',
      'rgba(24, 167, 95, 0.35)',
      'rgba(35, 114, 84, 0.35)',
      'rgba(68, 172, 108, 0.35)'
    ];

    const makeKey = (x: number, y: number) => `${x},${y}`;

    const addHighlight = (pageX: number, pageY: number) => {
      const x = Math.floor(pageX / GRID_SIZE) * GRID_SIZE;
      const y = Math.floor(pageY / GRID_SIZE) * GRID_SIZE;
      const key = makeKey(x, y);
      const now = Date.now();
      const base = palette[Math.floor(Math.random() * palette.length)];
      const alpha = 0.32 + Math.random() * 0.3;
      const color = base.replace(/0\.35\)/, `${alpha})`);
      const existing = highlights.get(key);
      if (existing) {
        existing.createdAt = now;
      } else {
        highlights.set(key, { x, y, color, createdAt: now });
        if (highlights.size > MAX_TILES) {
      const sorted = Array.from(highlights.values()).sort((a, b) => a.createdAt - b.createdAt);
          for (let i = 0; i < sorted.length - MAX_TILES; i++) {
            highlights.delete(makeKey(sorted[i].x, sorted[i].y));
          }
        }
      }
    };

    const renderWithColors = () => {
      const now = Date.now();
      highlights.forEach((h, key) => {
        if (now - h.createdAt > DECAY_MS) highlights.delete(key);
      });
      const tiles = Array.from(highlights.values());
      const images = [
        ...tiles.map((t) => `linear-gradient(${t.color}, ${t.color})`),
        'linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
        'linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)'
      ].join(',');
      const sizes = [
        ...tiles.map(() => `${GRID_SIZE}px ${GRID_SIZE}px`),
        `${GRID_SIZE}px ${GRID_SIZE}px`,
        `${GRID_SIZE}px ${GRID_SIZE}px`
      ].join(',');
      const positions = [
        ...tiles.map((t) => `${t.x}px ${t.y}px`),
        '0 0',
        '0 0'
      ].join(',');
      const repeats = [
        ...tiles.map(() => 'no-repeat'),
        'repeat',
        'repeat'
      ].join(',');
      document.body.style.backgroundImage = images;
      document.body.style.backgroundSize = sizes;
      document.body.style.backgroundPosition = positions;
      document.body.style.backgroundRepeat = repeats;
    };

    const onMouseMove = (e: MouseEvent) => {
      addHighlight(e.pageX, e.pageY);
      renderWithColors();
    };

    window.addEventListener('mousemove', onMouseMove);

    const raf = window.setInterval(renderWithColors, 200);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(raf);
    };
  }, []);

  return (
    <div className="App" ref={rootRef}>
      <div className="FixedSection">
        <div className="container">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
      <RootFooter />
    </div>
  );
};

export default App;
