import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Next.js Futuristic Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a futuristic website using Next.js"
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

      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.profileContainer}>
              <Image
                priority
                src="/images/istockphoto-491520707-612x612.jpg"
                className={`${utilStyles.borderCircle} ${styles.glowEffect}`}
                height={144}
                width={144}
                alt="Profile Picture"
              />
              <h1 className={`${utilStyles.heading2Xl} ${styles.titleEffect}`}>{name}</h1>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={`${utilStyles.borderCircle} ${styles.smallProfileGlow}`}
                height={108}
                width={108}
                alt="Profile Picture"
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                <span className={styles.titleEffect}>{name}</span>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main className={styles.mainContent}>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <span className={styles.backButton}>← Back to home</span>
          </Link>
        </div>
      )}
    </div>
  );
}
