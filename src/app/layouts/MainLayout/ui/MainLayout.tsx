import { Header } from '@/widgets/Header';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <section>
      <Header />
      <div className={styles.container}>
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
};
