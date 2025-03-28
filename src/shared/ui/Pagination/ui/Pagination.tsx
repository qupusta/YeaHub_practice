interface PaginationProps {
  onNextPage: () => void;
  onPrevPage: () => void;
  currentPage: number;
  maxPage?: number;
}

export const Pagination = ({ onNextPage, onPrevPage, currentPage, maxPage }: PaginationProps) => {

  return (
    <div>
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}>
        Previous
      </button>
      <span>Current Page: {currentPage}</span>
      <button
        onClick={onNextPage}
        disabled={maxPage !== undefined && currentPage === maxPage}>
        Next
      </button>
    </div>
  )
}