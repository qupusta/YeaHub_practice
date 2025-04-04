import { BlockWrapper } from "@/shared/ui/BlockWrapper"
import { SkeletonGroup, Skeleton } from "@/shared/ui/Skeleton"

export const QuestionsFilterSkeleton = () => {
  return (
    <BlockWrapper>
      <Skeleton variant='rect' width='100%' height='48px' />
      {[...Array(2)].map((_, i) => (
        <SkeletonGroup key={i} direction='column' gap='30px' style={{ alignItems: 'center', marginTop: 40 }}>
          <Skeleton variant='rect' width='170px' height='32px' style={{ alignSelf: "flex-start" }} />
          <SkeletonGroup direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
            {[...Array(5)].map((_, i) => (
              <Skeleton key={Math.random() + i * Math.random()} variant='rect' width="150px" height='40px' />
            ))}
          </SkeletonGroup>
          <Skeleton variant="rect" height="20px" width="40%" style={{ alignSelf: "flex-start" }} />
        </SkeletonGroup>
      ))}
      <SkeletonGroup direction='column' gap='30px' style={{ alignItems: 'center', marginTop: 40 }}>
        <Skeleton variant='rect' width='170px' height='32px' style={{ alignSelf: "flex-start" }} />
        <SkeletonGroup direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
          {[...Array(4)].map((_, i) => (
            <Skeleton key={Math.random() + i * Math.random()} variant='rect' width="70px" height='40px' />
          ))}
        </SkeletonGroup>
        <Skeleton variant='rect' width='170px' height='32px' style={{ alignSelf: "flex-start" }} />
        <SkeletonGroup direction='row' style={{ width: '100%', flexWrap: 'wrap' }}>
          {[...Array(4)].map((_, i) => (
            <Skeleton key={Math.random() + i * Math.random()} variant='rect' width="50px" height='40px' />
          ))}
        </SkeletonGroup>
      </SkeletonGroup>
    </BlockWrapper>
  )
}