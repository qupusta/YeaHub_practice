import styles from './FilterButton.module.css';

interface FilterButtonProps<T> {
  id: T;
  onChangeHandler?: (id: T) => void;
  title: string;
  isChecked?: boolean;
  type?: string;
  image?: string | undefined;
}

export const FilterButton = <T,>({
  id,
  image = undefined,
  onChangeHandler,
  title,
  isChecked,
  type = 'radio',
}: FilterButtonProps<T>) => (
  <label className={styles.filter__label}>
    {image && (
      <img
        className={styles.filter__ico}
        src={image}
        alt={image ? title : ''}
      />
    )}
    <p className={styles.title}>{title}</p>
    <input
      type={type}
      className={`${styles['filter-button']} ${type === 'checkbox' ? styles['filter-button--checkbox'] : ''}`}
      checked={isChecked}
      onChange={() => onChangeHandler?.(id)}
    />
  </label>
);
