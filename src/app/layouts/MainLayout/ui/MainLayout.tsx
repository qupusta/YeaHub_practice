import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { HeaderMobile } from '@/widgets/Header';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

import styles from './MainLayout.module.css';

export const MainLayout = () => {
  const { isTablet, isMobile } = useScreenSize();
  return (
    <>
      {isTablet || isMobile ? <HeaderMobile /> : <Header />}
      <div className={styles.container}>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
