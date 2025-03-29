import { ChangeEvent, useState } from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  currentValue?: string;
}

export const SearchInput = ({
  onSearch,
  placeholder = '...',
  currentValue,
}: SearchInputProps) => {
  const [query, setQuery] = useState(currentValue || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={query}
      onChange={handleChange}
    />
  );
};
