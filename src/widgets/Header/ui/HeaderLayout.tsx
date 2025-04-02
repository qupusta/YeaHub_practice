import { AppLogo } from '@/shared/ui/AppLogo';
import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { LinkButton } from '@/shared/ui/LinkButton';
import { Button } from '@/shared/ui/Button';

export const Header = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => navigate('/sign-up');

  return (
    <header className={styles.header}>
      <div className={styles['header__navigation']}>
        <div className={styles['navigation__nav-buttons']}>
          <NavLink to="/" aria-label="На главную">
            <AppLogo />
          </NavLink>
          <LinkButton text="База вопросов" link="/questions" color="black" />
          <LinkButton text="Тренажер" link="/traniner" color="black" />
        </div>
        <div className={styles['navigation__auth-buttons']}>
          <LinkButton text="Вход" link="auth" color="purple" />
          <Button className="button--purple" onClick={handleRegisterClick}>
            Регистрация
          </Button>
        </div>
      </div>
    </header>
  );
};
