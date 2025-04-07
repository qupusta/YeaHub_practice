import { FilterButton } from '@/shared/ui/FilterButton';
import styles from './QuestionsRate.module.css';

import { RateFilterId, RATE_FILTERS } from '@/shared/constants/rateFilters';

interface QuestionsRateProps {
  selectedRate: RateFilterId[] | undefined;
  onRateSelected: (id: RateFilterId) => void;
}

export const QuestionsRate = ({
  selectedRate,
  onRateSelected,
}: QuestionsRateProps) => {
  return (
    <>
      <h3 className={styles.filterPanel__title}>Рейтинг</h3>
      <ul className={styles['rate-list']}>
        {RATE_FILTERS.map((rateItem) => (
          <li key={rateItem.id} className={styles['rate-list__list-elem']}>
            <FilterButton<RateFilterId>
              type="checkbox"
              id={rateItem.id}
              title={rateItem.label}
              onChangeHandler={(id) => onRateSelected(id)}
              isChecked={
                selectedRate ? selectedRate.indexOf(rateItem.id) !== -1 : false
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};
