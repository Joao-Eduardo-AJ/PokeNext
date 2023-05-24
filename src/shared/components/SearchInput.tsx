import Image from 'next/image';
import { useState } from 'react';

import { TextsProvider } from '@/translation';
import styles from '../../styles/SearchInput.module.css';

interface ISearchInput {
  handleSearch: (param: string) => void;
}

export const SearchInput = ({ handleSearch }: ISearchInput) => {
  const texts = TextsProvider.get();
  const [search, setSearch] = useState('');

  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder={texts.SEARCH_INPUT_PLACEHOLDER}
        min={1}
        value={search}
        onChange={e => setSearch(e.target.value)}
      ></input>
      <button type="submit" onClick={() => handleSearch(search)}>
        <Image
          src="/images/magnifyingGlass.png"
          alt="search"
          width={18}
          height={18}
        />
      </button>
    </div>
  );
};
