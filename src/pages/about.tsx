import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <article className={styles.about}>
      <h1>About the project</h1>
      <p>PokeNext is an App made with Next.js to search for Pokémons.</p>
      <Image
        src="/images/charizard.png"
        alt="Charizard"
        width={440}
        height={410}
      />
    </article>
  );
};

export default About;
