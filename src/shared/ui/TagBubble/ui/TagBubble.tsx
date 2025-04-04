import styles from './TagBubble.module.css'

interface TagBubbleProps {
  title: string;
  value: number;
}

export const TagBubble = ({ title, value }: TagBubbleProps) => (
  <div className={styles.tag}>
    <p className={styles.tag__title}>{title}: <span className={styles.tag__value}>{value}</span></p>
  </div>
)