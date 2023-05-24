import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Pokemon.module.css';
import { TextsProvider } from '@/translation';

interface result {
  results: [
    {
      id: number;
      url: string;
    }
  ];
}

type PokemonType = {
  name: string;
  id: number;
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
};

type PokemonProps = {
  pokemon: PokemonType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const maxPokemons = 1010;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const result = await fetch(`${api}?limit=${maxPokemons}`);
    const data: result = await result.json();

    const paths = data.results.map((_, index) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async context => {
  try {
    const id = context.params?.pokemonId;

    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await result.json();

    return {
      props: { pokemon: data },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const Pokemon = ({ pokemon }: PokemonProps) => {
  const texts = TextsProvider.get();

  return (
    <div className={styles.pokemonPageContent}>
      <article>
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width={200}
          height={200}
          alt={pokemon.name}
        />
        <h3>{texts.POKEMON_NUMBER_TEXT}</h3>
        <p>{`#${pokemon.id}`}</p>
        <h3>{texts.POKEMON_TYPE_TEXT}</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </article>
      <section>
        <div>
          <h4>{texts.POKEMON_HEIGHT_TEXT}</h4>
          <p>{pokemon.height * 10}cm</p>
        </div>
        <div>
          <h4>{texts.POKEMON_WEIGHT_TEXT}</h4>
          <p>{pokemon.weight / 10}Kg</p>
        </div>
        <div>
          <Link href="/" className={styles.button}>
            <h4>{texts.POKEMON_BUTTON_BACK}</h4>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pokemon;
