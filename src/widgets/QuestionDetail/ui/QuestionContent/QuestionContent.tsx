import { QuestionHeader } from '../QuestionHeader/QuestionHeader'
import { useGetPublicQuestionByIdQuery } from '@/features/questions/api/questionsApi';
import styles from './QuestionContent.module.css'
import { QuestionInfo } from '../QuestionInfo/QuestionInfo';
import { QuestionLongAnswer, QuestionShortAnswer } from '@/entities/question';
import { Params } from 'react-router-dom';
import { prepareQuestionDataForUI } from '@/features/questions/lib/sainitizer';

interface QuestionContentProps {
  params: Params<string>
}

export const QuestionContent = ({ params }: QuestionContentProps) => {
  const { data, isLoading } = useGetPublicQuestionByIdQuery(params);
  if (isLoading || !data) return <h2>Loading</h2>;
  const {
    title,
    description,
    complexity,
    rate,
    keywords,
    questionSkills,
    shortAnswer,
    longAnswer,
    imageSrc,
  } = prepareQuestionDataForUI(data);
  return (
    <div className={styles.container}>
      <div className={styles['grid-container']}>
        <QuestionHeader title={title} imageSrc={imageSrc || ''} description={description} />
        <QuestionShortAnswer sanitizedShortAnswer={shortAnswer} />
        <QuestionLongAnswer sanitizedLongAnswer={longAnswer} />
        <QuestionInfo rate={rate} complexity={complexity} keywords={keywords} questionSkills={questionSkills} />
      </div>
    </div>
  )
}