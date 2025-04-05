import { Button } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

import NotFoundImg from '@/shared/assets/icons/404.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => navigate(-1);
  return (
    <div className={styles.container}>
      <img className={styles['not-found__img']} src={NotFoundImg} alt="404" />
      <h3 className={styles['not-found__text']}>Страница не найдена</h3>
      <Button className={'wide button--purple'} onClick={handleOnClickBack}>
        Вернуться назад
      </Button>
      ;
    </div>
  );
};

export default NotFoundPage;
