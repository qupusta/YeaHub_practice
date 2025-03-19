import { NavLink } from 'react-router-dom';

import styles from './AppLogo.module.css';
import logoDark from '@/shared/assets/icons/logoDark.svg';

export const AppLogo = () => {
  return (
    <NavLink to="/">
      <img src={logoDark} className={styles.logo} />
    </NavLink>
  );
};
