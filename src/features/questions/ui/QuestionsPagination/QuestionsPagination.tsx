import { Pagination } from '@/shared/ui/Pagination';

import styles from './QuestionsPagination.module.css';

interface QuestionsPaginationProps {
  onNextPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPrevPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPageChange: (page: number) => void;
  currentPage: number;
  maxPage: number;
}

export const QuestionsPagination = ({
  onNextPage,
  onPrevPage,
  onPageChange,
  currentPage,
  maxPage,
}: QuestionsPaginationProps) => {
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
