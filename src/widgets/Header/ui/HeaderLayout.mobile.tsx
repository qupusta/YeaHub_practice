import { AppLogo } from '@/shared/ui/AppLogo';
import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { LinkButton } from '@/shared/ui/LinkButton';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

export const HeaderMobile = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => navigate('/sign-up');
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const { isMobileS } = useScreenSize();

  const toggleNav = () => {
    setIsOpenNav((prev) => !prev);
    setIsOpenAuth(false);
  };

  const toggleAuth = () => {
    setIsOpenNav(false);
    setIsOpenAuth((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles['header__navigation']}>
        <div className={styles['navigation__nav-buttons']}>
          {!isMobileS && (
            <NavLink to="/" aria-label="На главную">
              <AppLogo />
            </NavLink>
          )}
          <div className={styles.dropdown}>
            <Button variant="regular" onClick={toggleNav}>
              Подготовка
            </Button>
            {isOpenNav && (
              <div className={styles['dropdown--open']}>
                <LinkButton
                  text="База вопросов"
                  link="/questions"
                  color="black"
                />
                <LinkButton text="Тренажер" link="/traniner" color="black" />
              </div>
            )}
          </div>
        </div>
        <div className={styles['navigation__auth-buttons']}>
          <div className={styles.dropdown}>
            <Button variant="regular" onClick={toggleAuth}>
              <span className={styles['nav-buttons__burger--mobile']} />
            </Button>
            {isOpenAuth && (
              <div className={styles['dropdown--open']}>
                <LinkButton text="Вход" link="auth" color="purple" />
                <Button
                  className="button--purple"
                  onClick={handleRegisterClick}
                >
                  Регистрация
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
