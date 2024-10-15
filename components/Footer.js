import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="/images/logo.png" alt="Vercel Logo" />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Learn</a></li>
              <li><a href="#">Showcase</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Next.js Conf</a></li>
              <li><a href="#">Previews</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>More</h4>
            <ul>
              <li><a href="#">Next.js Commerce</a></li>
              <li><a href="#">Contact Sales</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Releases</a></li>
              <li><a href="#">Telemetry</a></li>
              <li><a href="#">Governance</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>About Vercel</h4>
            <ul>
              <li><a href="#">Next.js + Vercel</a></li>
              <li><a href="#">Open Source Software</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Subscribe to our newsletter</h4>
            <p>Stay updated on new releases and features, guides, and case studies.</p>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="you@domain.com" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Vercel, Inc.</p>
        <div className={styles.footerIcons}>
          <a href="#" id='logo1'><img src="/images/github1.png" alt="GitHub" /></a>
          <a href="#" id='logo2'><img src="/images/twitter.jpg" alt="X" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
