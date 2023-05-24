import Image from 'next/image';

import { TextsProvider } from '@/translation';
import styles from '../styles/About.module.css';

const About = () => {
  const texts = TextsProvider.get();

  return (
    <article className={styles.about}>
      <h1>{texts.ABOUT_PAGE_TITLE}</h1>
      <p>{texts.ABOUT_PAGE_TEXT}</p>
      <Image
        src="/images/charizard.png"
        alt="Charizard"
        width={200}
        height={200}
      />
    </article>
  );
};

export default About;
