import { useMemo } from "react";

interface UsePaginationParams {
    currentPage: number;
    maxPage: number;
    maxVisiblePages?: number;
}

export const usePagination = ({
    currentPage,
    maxPage,
    maxVisiblePages = 6,
}: UsePaginationParams) => {

    return useMemo(() => {
        const pages: (number | '...')[] = [];
        let startPage = 1;
        let endPage = maxPage;

        if (maxPage > 6) {
            const halfVisible = Math.floor(maxVisiblePages / 2);
            startPage = Math.max(1, currentPage - halfVisible);
            endPage = Math.min(maxPage, startPage + maxVisiblePages - 1);

            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
        }

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < maxPage) {
            if (endPage < maxPage - 1) {
                pages.push('...');
            }
            pages.push(maxPage);
        }
        return { pages };
    }, [currentPage, maxPage, maxVisiblePages])
}