import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/layout.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Welcome to <strong>TechNexus</strong>, where technology meets innovation. 
          Explore, learn, and connect with the future of tech.
        </p>
      </section>

      {/* Adding a futuristic hero section */}
      <section className={styles.heroSection}>
        <Image
          priority
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          className={styles.heroImage}
          layout="fill"
          objectFit="cover"
          alt="Futuristic background"
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Welcome to the Future</h1>
          <p className={styles.heroSubtitle}>
            Explore cutting-edge technology trends and build the future with us.
          </p>
        </div>
      </section>

      <section className={styles.profileSection}>
        <h2 className={utilStyles.headingLg}>Meet the Creator</h2>
        <div className={styles.profileContainer}>
          <Image
            priority
            src="https://i.imgur.com/yXOvdOSs.jpg"
            className={`${utilStyles.borderCircle} ${styles.glowEffect}`}
            height={144}
            width={144}
            alt="Profile Picture"
          />
          <p>
            Hi, I’m <strong>Your Name</strong>. I’m passionate about coding, robotics, and the future of AI. 
            Let’s build something amazing together!
          </p>
        </div>
      </section>

      {/* Futuristic Button Links */}
      <section className={styles.linkSection}>
        <Link href="/projects">
          <a className={styles.futuristicButton}>Explore Projects</a>
        </Link>
        <Link href="/about">
          <a className={styles.futuristicButton}>Learn More About Us</a>
        </Link>
      </section>
    </Layout>
  );
}
