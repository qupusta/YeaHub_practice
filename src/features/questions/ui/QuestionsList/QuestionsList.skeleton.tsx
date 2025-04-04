import { BlockWrapper } from "@/shared/ui/BlockWrapper"
import { PaginationSkeleton } from "@/shared/ui/Pagination/ui/Paginations.skeleton"
import { SkeletonGroup, Skeleton } from "@/shared/ui/Skeleton"

export const QuestionsListSkeleton = () => {
  return (
    <BlockWrapper >
      <SkeletonGroup direction="column" gap="20px" style={{ width: '100%', alignItems: 'flex-start' }}>
        <Skeleton variant="rect" width="250px"  height="40px"/>
        {[...Array(10)].map((_, i) => (
          <SkeletonGroup
            key={Math.random() + i * Math.random()}
            direction="row"
            gap="40px"
            style={{ alignItems: 'center', justifyContent: 'space-evenly', borderBottom: 'var(--border-color) 1px solid', paddingBottom: 20, width: '100%' }}
          >
            <Skeleton variant="rect" width="inherit" height="60px" />
            <Skeleton variant="rect" width="24px" height="24px" />
          </SkeletonGroup>
        ))}
        <PaginationSkeleton />
      </SkeletonGroup>
    </BlockWrapper>
  )
}