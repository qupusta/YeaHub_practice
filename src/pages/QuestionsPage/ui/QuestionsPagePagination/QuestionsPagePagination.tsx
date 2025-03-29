import { Pagination } from '@/shared/ui/Pagination';

import styles from './QuestionsPagePagination.module.css';

interface QuestionsPagePaginationProps {
  onNextPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPrevPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  maxPage: number;
}

export const QuestionsPagePagination = ({
  onNextPage,
  onPrevPage,
  onPageChange,
  currentPage,
  maxPage,
}: QuestionsPagePaginationProps) => {
  return (
    <div className={styles.container}>
      <Pagination
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        onPageChange={onPageChange}
        maxPage={maxPage}
        currentPage={currentPage}
      />
    </div>
  );
};
