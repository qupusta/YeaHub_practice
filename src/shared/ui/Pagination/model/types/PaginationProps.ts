export interface PaginationProps {
    onNextPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onPrevPage: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onPageChange: (page: number) => void;
    currentPage: number;
    maxPage: number;
}