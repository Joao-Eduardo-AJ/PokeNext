import Link from 'next/link';
import Image from 'next/image';

import { TextsProvider } from '@/translation';
import styles from '../../styles/Navbar.module.css';

export const Navbar = () => {
  const texts = TextsProvider.get();
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
            {texts.NAV_HOME}
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            {texts.NAV_ABOUT}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
