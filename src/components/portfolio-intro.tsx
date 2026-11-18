import Head from 'next/head';
import { Locale, portfolioCopy } from '@/data/portfolio-copy';
import styles from './portfolio-intro.module.css';

const buildSteps = [
  { key: 'pages', delay: 700 },
  { key: 'styles', delay: 810 },
  { key: 'assets', delay: 920 },
] as const;

// Set the flag before the first paint so the homepage does not flash behind the intro.
const startIntro = `
(() => {
  const key = 'portfolio-intro-seen';

  try {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');
  } catch {
    return;
  }

  const root = document.documentElement;
  root.setAttribute('data-portfolio-intro', '');

  const dismiss = () => {
    root.removeAttribute('data-portfolio-intro');
    clearTimeout(timeout);
    document.removeEventListener('pointerdown', dismiss);
    document.removeEventListener('keydown', dismiss);
  };

  const timeout = setTimeout(dismiss, 2000);
  document.addEventListener('pointerdown', dismiss, { once: true });
  document.addEventListener('keydown', dismiss, { once: true });
})();
`;

export default function PortfolioIntro({ locale }: { locale: Locale }) {
  const { intro } = portfolioCopy[locale];
  return (
    <>
      <Head>
        <script key="portfolio-intro" dangerouslySetInnerHTML={{ __html: startIntro }} />
      </Head>
      <div className={styles.loader} aria-hidden="true">
        <div className={styles.terminal}>
          <p className={styles.path}>~/portfolio</p>
          <p className={styles.composeCommand}>
            <span className={styles.accent}>$</span>{' '}
            <span className={styles.command}>docker compose up -d</span>
            <span className={styles.caret} />
          </p>
          <p className={styles.status}>
            <span className={styles.starting}><span className={styles.accent}>⠋</span> {intro.starting}</span>
            <span className={styles.started}><span className={styles.accent}>✓</span> {intro.started}</span>
          </p>
          <p className={styles.status}>
            {buildSteps.map(({ key, delay }) => (
              <span key={key} className={styles.buildStep} style={{ animationDelay: `${delay}ms` }}>
                <span className={styles.accent}>›</span> {intro[key]}
              </span>
            ))}
            <span className={styles.buildComplete}><span className={styles.accent}>✓</span> {intro.complete}</span>
          </p>
          <p className={styles.openCommand}>
            <span className={styles.accent}>$</span>{' '}
            <span className={styles.command}>open ./portfolio</span>
            <span className={styles.caret} />
          </p>
        </div>
      </div>
    </>
  );
}
