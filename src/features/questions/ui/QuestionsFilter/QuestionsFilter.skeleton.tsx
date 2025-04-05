import { QuestionsSpecializationsSkeleton } from '@/entities/questions';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { SkeletonGroup, Skeleton } from '@/shared/ui/Skeleton';

export const QuestionsFilterSkeleton = () => {
  return (
    <BlockWrapper>
      <Skeleton variant="rect" width="100%" height="48px" />
      <QuestionsSpecializationsSkeleton />
      <SkeletonGroup
        direction="column"
        gap="30px"
        style={{ alignItems: 'center', marginTop: 40 }}
      >
        <Skeleton
          variant="rect"
          width="170px"
          height="32px"
          style={{ alignSelf: 'flex-start' }}
        />
        <SkeletonGroup
          direction="row"
          style={{ width: '100%', flexWrap: 'wrap' }}
        >
          {[...Array(4)].map((_, i) => (
            <Skeleton
              key={Math.random() + i * Math.random()}
              variant="rect"
              width="70px"
              height="40px"
            />
          ))}
        </SkeletonGroup>
        <Skeleton
          variant="rect"
          width="170px"
          height="32px"
          style={{ alignSelf: 'flex-start' }}
        />
        <SkeletonGroup
          direction="row"
          style={{ width: '100%', flexWrap: 'wrap' }}
        >
          {[...Array(4)].map((_, i) => (
            <Skeleton
              key={Math.random() + i * Math.random()}
              variant="rect"
              width="50px"
              height="40px"
            />
          ))}
        </SkeletonGroup>
      </SkeletonGroup>
    </BlockWrapper>
  );
};
