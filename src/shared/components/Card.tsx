import Image from 'next/image';

import styles from '../../styles/Card.module.css';
import Link from 'next/link';

interface CardProps {
  pokemon: {
    name: string;
    id: number;
  };
}

const Card = ({ pokemon }: CardProps) => {
  return (
    <div className={styles.pokemonCard}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <button>Detalhes</button>
      </Link>
    </div>
  );
};

export default Card;
