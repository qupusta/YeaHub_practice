import { AccordeonButton } from '@/shared/ui/AccordeonButton'
import { BlockWrapper } from '@/shared/ui/BlockWrapper'
import { Button } from '@/shared/ui/Button'
import styles from './QuestionHeader.module.css'
import { useNavigate } from 'react-router-dom'
import image from '@/shared/assets/icons/img.png'

interface QuestionHeaderProps {
  title: string;
  imageSrc?: string;
  description: string;
}

export const QuestionHeader = ({ imageSrc, title, description }: QuestionHeaderProps) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={styles['back-button']}>
        <AccordeonButton />
        <Button variant="transparent" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
      <BlockWrapper>
        <img
          className={styles.question__image}
          src={imageSrc || image}
          alt="image"
        />
        <h2 className={styles.question__title}>{title}</h2>
        <p className={styles.question__description}>{description}</p>
      </BlockWrapper>
    </>
  )
}