import { ReactNode } from 'react';
import styles from './BlockWrapper.module.css';

interface BlockWrapperProps {
  children: ReactNode;
}

export const BlockWrapper = ({ children }: BlockWrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);
