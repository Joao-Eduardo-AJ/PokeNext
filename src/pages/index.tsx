import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <article>
      <div className={styles.titleContainer}>
        <p>Poke</p>
        <p>Next</p>
        <Image
          className={styles.image}
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>
      <p>Cards</p>
    </article>
  );
};

export default Home;
