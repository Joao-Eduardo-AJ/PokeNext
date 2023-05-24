import { useState } from 'react';
import styles from '../../styles/SearchInput.module.css';
import Image from 'next/image';

interface ISearchInput {
  handleSearch: (param: string) => void;
}

export const SearchInput = ({ handleSearch }: ISearchInput) => {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder="Nome ou número do pokemon"
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
