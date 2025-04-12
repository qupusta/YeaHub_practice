import { BlockWrapper } from "@/shared/ui/BlockWrapper"
import styles from './QuestionLongAnswer.module.css'

interface QuestionLongAnswerProps {
  sanitizedLongAnswer: string;
}

export const QuestionLongAnswer = ({ sanitizedLongAnswer }: QuestionLongAnswerProps) => {
  return (
    <BlockWrapper>
      <h2 className={styles.question__answer__title}>Развёрнутый ответ</h2>
      <div
        className={styles['question__long-answer']}
        dangerouslySetInnerHTML={{ __html: sanitizedLongAnswer }}
      />
    </BlockWrapper>
  )
}