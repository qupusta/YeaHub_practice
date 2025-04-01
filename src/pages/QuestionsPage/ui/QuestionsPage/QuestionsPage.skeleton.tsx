// features/questions/ui/QuestionsList/QuestionsListSkeleton.tsx
import { SkeletonGroup, Skeleton } from '@/shared/ui/Skeleton';
import styles from './QuestionsPage.module.css';

export const QuestionsPageSkeleton = () => (
  <div className={styles.skeleton__wrapper}>
    <SkeletonGroup direction="column" gap="40px" style={{ width: '100%' }}>
      {[...Array(10)].map((_, i) => (
        <SkeletonGroup
          key={i}
          direction="row"
          gap="40px"
          style={{ alignItems: 'center', justifyContent: 'space-evenly' }}
        >
          <Skeleton variant="rect" width="50vh" height="60px" />
          <Skeleton variant="rect" width="24px" height="24px" />
        </SkeletonGroup>
      ))}
    </SkeletonGroup>
  </div>
);
