import { QuestionsPageSkeleton } from "@/pages/QuestionsPage";
import { PaginationSkeleton } from '@/shared/ui/Pagination/ui/Paginations.skeleton';

export const MainLayoutSkeleton = () => {
  return (
    <>
      <QuestionsPageSkeleton />
      <PaginationSkeleton />
    </>
  )
}