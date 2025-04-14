import { ChangeEvent, useEffect, useState } from 'react';
import styles from './SearchInput.module.css';
import useDebounce from '@/shared/hooks/useDebounce';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
  debounceDelay?: number;
}

export const SearchInput = ({
  onSearch,
  placeholder = '...',
  initialValue = '',
  debounceDelay = 500,
}: SearchInputProps) => {
  const [query, setQuery] = useState(initialValue);
  const debouncedQuery = useDebounce(query, debounceDelay);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.wrapper__input}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};
