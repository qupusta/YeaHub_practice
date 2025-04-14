import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Skeleton, SkeletonGroup } from '@/shared/ui/Skeleton';

export const QuestionInfoSkeleton = () => {
  return (
    <BlockWrapper>
      <SkeletonGroup gap="20px">
        <Skeleton width="70px" height="20px" />
        <SkeletonGroup direction="row">
          <Skeleton width="60px" height="40px" />
          <Skeleton width="60px" height="40px" />
          <Skeleton width="60px" height="40px" />
        </SkeletonGroup>
        <Skeleton width="70px" height="20px" />
        <SkeletonGroup direction="row">
          <Skeleton width="50px" height="25px" />
          <Skeleton width="50px" height="25px" />
          <Skeleton width="50px" height="25px" />
        </SkeletonGroup>
        <Skeleton width="70px" height="20px" />
        <SkeletonGroup direction="row">
          <Skeleton width="30px" height="20px" />
          <Skeleton width="30px" height="20px" />
          <Skeleton width="30px" height="20px" />
        </SkeletonGroup>
      </SkeletonGroup>
    </BlockWrapper>
  );
};
