import { usePagination } from '@/shared/hooks/usePagination';
import { PaginationProps } from '../model/types/PaginationProps';

import arrowSvg from '@/shared/assets/icons/Arrow.svg';
import styles from './Pagination.module.css';

export const Pagination = ({
  onNextPage,
  onPrevPage,
  onPageChange,
  currentPage,
  maxPage,
}: PaginationProps) => {
  const { pages } = usePagination({ currentPage, maxPage });
  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        <img
          src={arrowSvg}
          alt="prev"
          className={styles.paginationButton__arrow}
        />
      </button>

      <div className={styles.pageNumbers}>
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.activePage : ''
              }`}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className={styles.paginationButton}
        onClick={onNextPage}
        disabled={currentPage === maxPage}
      >
        <img
          src={arrowSvg}
          alt="prev"
          className={styles.paginationButton__arrow}
        />
      </button>
    </div>
  );
};
