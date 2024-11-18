import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'code for web';
export const siteTitle = 'Next.js Website';

export default function Layout({ children, home }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
        </button>
      </div>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/istockphoto-491520707-612x612.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/" legacyBehavior> 
                <Image
                  priority
                  src="/images/0_Wkrz5TuOxQs9tXri.webp"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" legacyBehavior className={utilStyles.colorInherit}>{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" legacyBehavior>← Back to home</Link> 
        </div>
      )}
    </div>
  );
}