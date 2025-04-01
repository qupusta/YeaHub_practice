import { ChangeEvent, useEffect, useState } from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
  debounceDelay?: number;
}

export const SearchInput = ({
  onSearch,
  placeholder = 'Поиск вопросов...',
  initialValue = '',
  debounceDelay = 500,
}: SearchInputProps) => {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [query, debounceDelay, onSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
