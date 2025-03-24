import { NavLink } from 'react-router-dom';

import styles from './LinkButton.module.css';

type LinkButtonTextColor = 'black' | 'purple';

type LinkButtonProps = {
  text: string;
  link: string;
  color: LinkButtonTextColor;
};

export const LinkButton = ({ text, link, color }: LinkButtonProps) => {
  return (
    <NavLink to={link}>
      <button className={styles['link-button']}>
        <p
          className={`${styles['link-button__text']}
            ${styles[`link-button__text--${color}`]}`}
        >
          {text}
        </p>
      </button>
    </NavLink>
  );
};
