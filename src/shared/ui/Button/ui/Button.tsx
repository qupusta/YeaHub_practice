import styles from './Button.module.css';
import classNames from 'classnames';
import { ButtonProps } from '../model/types';

export const Button = ({
  onClick,
  children,
  className = '',
  variant = 'purple',
  wide = false,
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    {
      [styles['button--purple']]: variant === 'purple',
      [styles['button--transparent']]: variant === 'transparent',
      [styles['button--transparent-border']]: variant === 'transparent-border',
      [styles.wide]: wide,
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
