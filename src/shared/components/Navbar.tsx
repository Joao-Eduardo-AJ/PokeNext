import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.linkItems}>
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
