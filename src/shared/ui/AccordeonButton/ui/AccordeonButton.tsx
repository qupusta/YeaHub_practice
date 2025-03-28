import accordeon from '@/shared/assets/icons/accordeon.svg'

import styles from './AccordeonButton.module.css'

export const AccordeonButton = () => {
  const buttonStyle = styles['accordeon__img']
  

  return (
    <>
      <button className={styles['accordeon__button']}>
        <img className={buttonStyle} src={accordeon} />
      </button>
    </>
  )
}