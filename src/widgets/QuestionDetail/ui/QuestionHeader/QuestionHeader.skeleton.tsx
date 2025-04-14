import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Skeleton, SkeletonGroup } from '@/shared/ui/Skeleton';

export const QuestionHeaderSkeleton = () => {
  return (
    <BlockWrapper>
      <SkeletonGroup gap="20px">
        <Skeleton width="90%" height="60px" />
        <Skeleton width="90%" height="40px" />
      </SkeletonGroup>
    </BlockWrapper>
  );
};
