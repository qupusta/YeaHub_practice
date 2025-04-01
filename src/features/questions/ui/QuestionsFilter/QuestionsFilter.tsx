import { useState } from 'react';
import { SearchInput } from '@/shared/ui/SearchInput';
import { ISpecialization } from '@/entities/specializations/model/types/specializations';

import styles from './QuestionsFilter.module.css';

interface QuestionsFilterProps {
  onSearch: (query: string) => void;
  onSpecializationToggle: (id: number) => void;
  selectedSpecializations: number[];
  specializations: ISpecialization[];
  initialSearchQuery?: string;
}

export const QuestionsFilter = ({
  onSearch,
  onSpecializationToggle,
  selectedSpecializations,
  specializations,
  initialSearchQuery = '',
}: QuestionsFilterProps) => {
  const [query, setQuery] = useState(initialSearchQuery);

  const handleChangeInput = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className={styles.filterPanel}>
      <SearchInput
        onSearch={handleChangeInput}
        placeholder="Введите запрос..."
        initialValue={query}
      />
      <h3>Специализации</h3>
      <ul className={styles['specializations-list']}>
        {specializations.map((spec) => (
          <li key={spec.id}>
            <button
              className={`${styles.filter__button}
                 ${selectedSpecializations?.includes(spec.id) ? 'active' : ''}`}
              onChange={() => onSpecializationToggle(spec.id)}
            />
            {spec.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
