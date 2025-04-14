import { QuestionHeader } from '../QuestionHeader/QuestionHeader';
import { useGetPublicQuestionByIdQuery } from '@/features/questions/api/questionsApi';
import styles from './QuestionContent.module.css';
import { QuestionInfo } from '../QuestionInfo/QuestionInfo';
import { QuestionLongAnswer, QuestionShortAnswer } from '@/entities/question';
import { Params } from 'react-router-dom';
import { prepareQuestionDataForUI } from '@/features/questions/lib/sainitizer';
import { useState } from 'react';
import { QuestionContentSkeleton } from './QuestionContent.skeleton';

interface QuestionContentProps {
  params: Params<string>;
}

export const QuestionContent = ({ params }: QuestionContentProps) => {
  const { data } = useGetPublicQuestionByIdQuery(params);
  const [isOpenModal, setIsOpenModal] = useState(false);
  if (!data) return <QuestionContentSkeleton />;
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
        <QuestionHeader
          isOpen={isOpenModal}
          setIsOpen={() => setIsOpenModal(!isOpenModal)}
          title={title}
          imageSrc={imageSrc || ''}
          description={description}
        />
        <QuestionShortAnswer sanitizedShortAnswer={shortAnswer} />
        <QuestionLongAnswer sanitizedLongAnswer={longAnswer} />
        <QuestionInfo
          isOpen={isOpenModal}
          setIsOpen={() => setIsOpenModal(!isOpenModal)}
          rate={rate}
          complexity={complexity}
          keywords={keywords}
          questionSkills={questionSkills}
        />
      </div>
    </div>
  );
};
