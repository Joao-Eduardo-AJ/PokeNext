import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Card from '@/shared/components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow } from 'swiper';
import { useEffect, useState } from 'react';
interface result {
  results: [
    {
      id: number;
      name: string;
    }
  ];
}
type PokemonProps = {
  pokemons: [
    {
      id: number;
      name: string;
    }
  ];
};

export const getStaticProps = async () => {
  try {
    const maxPokemons = 151;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const result = await fetch(`${api}?limit=${maxPokemons}`);
    const data: result = await result.json();

    data.results.forEach((item, index) => {
      item.id = index + 1;
    });

    return {
      props: {
        pokemons: data.results,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const Home = ({ pokemons }: PokemonProps) => {
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getSlidesPerView() {
    if (pageWidth > 800) return 4;
    if (pageWidth < 400) return 2;
    if (pageWidth < 600) return 2.5;
    if (pageWidth < 800) return 3;
  }
  return (
    <div className={styles.homeContent}>
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
      </article>
      <section className={styles.cardWrapper}>
        <Swiper
          effect={'coverflow'}
          grabCursor
          centeredSlides={true}
          direction="horizontal"
          coverflowEffect={{
            rotate: 0,
            stretch: -8,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={getSlidesPerView()}
          modules={[EffectCoverflow]}
          style={{ padding: '1rem 0 ' }}
        >
          {pokemons.map((pokemon, index) => (
            <SwiperSlide key={pokemon.id} virtualIndex={index}>
              <Card pokemon={pokemon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
