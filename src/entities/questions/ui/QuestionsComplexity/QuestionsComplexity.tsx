import { FilterButton } from '@/shared/ui/FilterButton';

import {
  COMPLEXITY_FILTERS,
  ComplexityFilterId,
} from '@/shared/constants/complexityFilters';

import styles from './QuestionsComplexity.module.css';

interface QuestionCoplexityProps {
  selectedComplexity: ComplexityFilterId[] | undefined;
  onComplexitySelected: (id: ComplexityFilterId) => void;
}

export const QuestionsComplexity = ({
  selectedComplexity,
  onComplexitySelected,
}: QuestionCoplexityProps) => {
  return (
    <>
      <h3 className={styles.filterPanel__title}>Сложность вопросов</h3>
      <ul className={styles['complexity-list']}>
        {COMPLEXITY_FILTERS.map((compleixty) => (
          <li
            key={compleixty.id}
            className={styles['complexity-list__list-elem']}
          >
            <FilterButton<ComplexityFilterId>
              type="checkbox"
              id={compleixty.id}
              title={compleixty.label}
              onChangeHandler={(id) => onComplexitySelected(id)}
              isChecked={
                selectedComplexity
                  ? selectedComplexity.indexOf(compleixty.id) !== -1
                  : false
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};
