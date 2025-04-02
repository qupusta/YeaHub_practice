import { CSSProperties, ReactNode } from 'react';

interface SkeletonGroupProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  gap?: string;
  className?: string;
  style?: CSSProperties;
}

export const SkeletonGroup = ({
  children,
  direction = 'column',
  gap = '12px',
  className = '',
  style,
}: SkeletonGroupProps) => (
  <div
    className={className}
    style={{
      display: 'flex',
      flexDirection: direction,
      gap,
      ...style,
    }}
  >
    {children}
  </div>
);
