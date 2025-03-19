import { AppLogo } from '@/shared/ui/AppLogo';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Header</h2>
      <AppLogo />
    </header>
  );
};
