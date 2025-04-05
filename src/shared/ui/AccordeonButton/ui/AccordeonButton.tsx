import accordeon from '@/shared/assets/icons/accordeon.svg';

import styles from './AccordeonButton.module.css';

interface AccordeonButtonProps {
  isOpen: boolean;
}

export const AccordeonButton = ({ isOpen }: AccordeonButtonProps) => {
  const buttonStyle = isOpen
    ? styles['accordeon__img--open']
    : styles['accordeon__img'];

  return (
    <>
      <div className={styles['accordeon__button']}>
        <img className={buttonStyle} src={accordeon} />
      </div>
    </>
  );
};
