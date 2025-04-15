import { useScreenSize } from '@/shared/hooks/useScreenSize';
import {
  QuestionsFilterSkeleton,
  QuestionsListSkeleton,
} from '@/features/questions/ui';

import styles from './QuestionsPage.module.css';

export const QuestionsPageSkeleton = () => {
  const { isDesktop } = useScreenSize();

  return (
    <div className={styles.skeleton__wrapper}>
      <QuestionsListSkeleton />
      {isDesktop && <QuestionsFilterSkeleton />}
    </div>
  );
};
