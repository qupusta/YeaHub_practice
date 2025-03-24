import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => navigate(-1);
  return (
    <div className={styles.container}>
      <h1 className={styles['error-page__text']}>Упс!</h1>
      <h3 className={styles['error-page__description']}>Что-то пошло не так</h3>
      <Button className="wide" onClick={handleOnClickBack}>
        Вернуться назад
      </Button>
      ;
    </div>
  );
};

export default ErrorPage;
