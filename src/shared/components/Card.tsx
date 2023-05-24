import Image from 'next/image';

import Link from 'next/link';
import { TextsProvider } from '@/translation';
import styles from '../../styles/Card.module.css';

interface CardProps {
  pokemon: {
    id: number;
    name: string;
  };
}

export const Card = ({ pokemon }: CardProps) => {
  const texts = TextsProvider.get();
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
        <button>{texts.CARD_BUTTON_DETAILS}</button>
      </Link>
    </div>
  );
};
