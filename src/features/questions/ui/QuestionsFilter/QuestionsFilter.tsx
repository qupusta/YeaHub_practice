import { useState } from 'react';
import { SearchInput } from '@/shared/ui/SearchInput';
import { ISpecialization } from '@/entities/specializations/model/types/specializations';

import styles from './QuestionsFilter.module.css';
import { FilterButton } from '@/shared/ui/FilterButton';
import { Button } from '@/shared/ui/Button';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';

interface QuestionsFilterProps {
  onSearch: (query: string) => void;
  onSpecializationToggle: (id: number) => void;
  selectedSpecializations: number | undefined;
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
  const [showAll, setShowAll] = useState(false);

  const handleChangeInput = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const visibleList = showAll ? specializations : specializations.slice(0, 4);

  return (
    <BlockWrapper>
      <SearchInput
        onSearch={handleChangeInput}
        placeholder="Введите запрос..."
        initialValue={query}
      />
      <h3 className={styles.filterPanel__title}>Специализация</h3>
      <ul className={styles['specializations-list']}>
        {visibleList.map((spec) => (
          <li
            key={spec.id}
            className={styles['specializations-list__list-elem']}
          >
            <FilterButton
              id={spec.id}
              title={spec.title}
              onChangeHandler={(id) => onSpecializationToggle(id)}
              isChecked={selectedSpecializations === spec.id}
            />
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowAll(!showAll)} variant="transparent">
        {showAll ? 'Скрыть' : 'Показать еще'}
      </Button>
    </BlockWrapper>
  );
};
