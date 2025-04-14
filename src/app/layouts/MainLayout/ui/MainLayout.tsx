import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';
import { HeaderMobile } from '@/widgets/Header';
import styles from './MainLayout.module.css';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

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
