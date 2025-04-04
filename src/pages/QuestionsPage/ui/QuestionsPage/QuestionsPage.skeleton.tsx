// features/questions/ui/QuestionsList/QuestionsListSkeleton.tsx
import styles from './QuestionsPage.module.css';
import { QuestionsFilterSkeleton, QuestionsListSkeleton } from '@/features/questions/ui';

export const QuestionsPageSkeleton = () => (
  <div className={styles.skeleton__wrapper}>
    <QuestionsListSkeleton />
    <QuestionsFilterSkeleton />
  </div>
);
