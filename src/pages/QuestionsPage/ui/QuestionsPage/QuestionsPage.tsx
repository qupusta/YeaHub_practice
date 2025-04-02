import styles from './QuestionsPage.module.css';
import { QuestionsMainContent } from '@/widgets/QuestionsMainContent';
import { QuestionsPageSkeleton } from './QuestionsPage.skeleton';
import { PaginationSkeleton } from '@/shared/ui/Pagination/ui/Paginations.skeleton';

export const QuestionsPage = () => (
  <div className={styles.container}>
    {/* <QuestionsPageSkeleton />
      <PaginationSkeleton /> */}
    <QuestionsMainContent />
  </div>
);
