import { Skeleton, SkeletonGroup } from '../../Skeleton';

export const PaginationSkeleton = () => (
  <SkeletonGroup
    direction="row"
    gap="12px"
    style={{ alignItems: 'center', margin: '0 auto'}}
  >
    <Skeleton width="40px" height="40px" />
    {[...Array(5)].map((_, i) => (
      <Skeleton key={i} width="20px" height="28px" />
    ))}
    <Skeleton width="40px" height="40px" />
  </SkeletonGroup>
);
