import styles from './AppLogo.module.css';
import logoDark from '@/shared/assets/icons/logoDark.svg';
import logoText from '@/shared/assets/icons/logoText.svg';

export const AppLogo = () => {
  return (
    <div className={styles['app-logo']}>
      <img src={logoDark} className={styles.logo} />
      <img src={logoText} className={styles['logo-text']} />
    </div>
  );
};
