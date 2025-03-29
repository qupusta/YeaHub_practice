import styles from './Skeleton.module.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rect' | 'circle';
  className?: string;
}

export const Skeleton = ({
  width = '100%',
  height = '1rem',
  variant = 'rect',
  className = '',
}: SkeletonProps) => {
  const variantClass = {
    text: styles.text,
    rect: styles.rect,
    circle: styles.circle,
  }[variant];

  return (
    <div
      className={`${styles.base} ${variantClass} ${className}`}
      style={{ width, height }}
    />
  );
};
