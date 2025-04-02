import styles from './FilterButton.module.css';

interface FilterButtonProps {
  id: number;
  onChangeHandler: (id: number) => void;
  title: string;
  isChecked: boolean;
}

export const FilterButton = ({
  id,
  onChangeHandler,
  title,
  isChecked,
}: FilterButtonProps) => (
  <label className={styles.filter__label}>
    <p className={styles.title}>{title}</p>
    <input
      type="radio"
      className={styles['filter-button']}
      checked={isChecked}
      onChange={() => onChangeHandler(id)}
    />
  </label>
);
