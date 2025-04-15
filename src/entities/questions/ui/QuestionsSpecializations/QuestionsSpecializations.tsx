import { FilterButton } from '@/shared/ui/FilterButton';
import { useState } from 'react';

import { ISpecialization } from '@/entities/specializations/model/types/specializations';
import { Button } from '@/shared/ui/Button';
import { VISIBLE_LIST_ITEMS } from '@/shared/constants/visibleListItems';

import styles from './QuestionsSpecializations.module.css';

interface QuestionsSpecializationsProps {
  onSpecializationToggle: (id: number) => void;
  selectedSpecializations: number | undefined;
  specializations: ISpecialization[];
}

export const QuestionsSpecializations = ({
  onSpecializationToggle,
  selectedSpecializations,
  specializations,
}: QuestionsSpecializationsProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleList = showAll
    ? specializations
    : specializations.slice(0, VISIBLE_LIST_ITEMS);

  return (
    <>
      <h3 className={styles.filterPanel__title}>Выберите специализацию</h3>
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
    </>
  );
};
