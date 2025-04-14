import { useScreenSize } from '@/shared/hooks/useScreenSize';
import styles from './QuestionsPage.module.css';
import {
  QuestionsFilterSkeleton,
  QuestionsListSkeleton,
} from '@/features/questions/ui';

export const QuestionsPageSkeleton = () => {
  const { isDesktop } = useScreenSize();
  return (
    <div className={styles.skeleton__wrapper}>
      <QuestionsListSkeleton />
      {isDesktop && <QuestionsFilterSkeleton />}
    </div>
  );
};
