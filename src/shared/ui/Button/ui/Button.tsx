import styles from './Button.module.css';
import { ButtonProps } from '../model/types';

export const Button = ({
  onClick,
  children,
  className = 'button--purple',
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`${styles['button']} ${styles[className]}`}
  >
    {children}
  </button>
);
