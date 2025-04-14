import { AccordeonButton } from '@/shared/ui/AccordeonButton';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Button } from '@/shared/ui/Button';
import styles from './QuestionHeader.module.css';
import { useNavigate } from 'react-router-dom';
import image from '@/shared/assets/icons/img.png';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

interface QuestionHeaderProps {
  title: string;
  imageSrc?: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const QuestionHeader = ({
  imageSrc,
  title,
  description,
  isOpen,
  setIsOpen,
}: QuestionHeaderProps) => {
  const navigate = useNavigate();
  const { isTablet, isMobile } = useScreenSize();
  return (
    <div className={styles['header__wrapper']}>
      <div className={styles['back-button']}>
        <AccordeonButton />
        <Button variant="transparent" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
      <BlockWrapper>
        <h2 className={styles.question__title}>{title}</h2>
        <img
          className={styles.question__image}
          src={imageSrc || image}
          alt="image"
        />
        <div className={styles.question__text}>
          <p className={styles.question__description}>{description}</p>
        </div>
        {isTablet || isMobile ? (
          <button
            className={styles['modal__button']}
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : null}
      </BlockWrapper>
    </div>
  );
};
