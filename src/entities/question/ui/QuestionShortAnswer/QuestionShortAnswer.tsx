import { BlockWrapper } from "@/shared/ui/BlockWrapper"
import styles from './QuestionShortAnswer.module.css'

interface QuestionShortAnswerProps {
  sanitizedShortAnswer: string;
}

export const QuestionShortAnswer = ({ sanitizedShortAnswer }: QuestionShortAnswerProps) => {
  return (
    <BlockWrapper>
      <h2 className={styles.question__answer__title}>Краткий ответ</h2>
      <div
        className={styles['question__short-answer']}
        dangerouslySetInnerHTML={{ __html: sanitizedShortAnswer }}
      />
    </BlockWrapper>
  )
}