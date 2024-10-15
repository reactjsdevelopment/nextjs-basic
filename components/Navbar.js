import Link from 'next/link';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <span className={styles.brand}>NEXT.JS</span>
      <ul className={styles.navLinks}>
        <li><a href="#showcase">Showcase</a></li>
        <li><a href="#docs">Docs</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#enterprise">Enterprise</a></li>
      </ul>
      </div>
      <div className={styles.actions}>
        <input type="text" placeholder="Search documentation..." className={styles.search} />
        <button className={styles.deployButton}>▲ Deploy</button>
        <button className={styles.learnButton}>Learn</button>
      </div>
    </nav>
  );
};

export default Navbar;
