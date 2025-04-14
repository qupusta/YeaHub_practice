import { useScreenSize } from '@/shared/hooks/useScreenSize';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Skeleton, SkeletonGroup } from '@/shared/ui/Skeleton';
import { QuestionHeaderSkeleton } from '../QuestionHeader/QuestionHeader.skeleton';
import { QuestionInfoSkeleton } from '../QuestionInfo/QuestionInfo.skeleton';
import styles from './QuestionContent.module.css';

export const QuestionContentSkeleton = () => {
  const { isDesktop } = useScreenSize();
  return (
    <div className={styles['grid-container']}>
      <QuestionHeaderSkeleton />
      <BlockWrapper>
        <SkeletonGroup gap="20px">
          <Skeleton width="100%" height="40px" />
          <Skeleton width="100%" height="20px" />

          <Skeleton width="100%" height="20px" />
        </SkeletonGroup>
      </BlockWrapper>
      <BlockWrapper>
        <SkeletonGroup gap="20px">
          <Skeleton width="100%" height="40px" />
          <Skeleton width="100%" height="20px" />

          <Skeleton width="100%" height="20px" />
        </SkeletonGroup>
      </BlockWrapper>
      {isDesktop && <QuestionInfoSkeleton />}
    </div>
  );
};
