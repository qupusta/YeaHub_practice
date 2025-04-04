import { QuestionsCard } from '../QuestionsCard/QuestionsCard';
import { QuestionsPagination } from '../QuestionsPagination/QuestionsPagination';

import type { IQuestion } from '@/features/questions/model/types/question';
import styles from './QuestionsList.module.css';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';

interface QuestionsListProps {
  questions: IQuestion[];
  questionsTitle: string | undefined;
  pagination?: {
    currentPage: number;
    maxPage: number;
    onNextPage: () => void;
    onPrevPage: () => void;
    onPageChange: (page: number) => void;
  };
}

export const QuestionsList = ({
  questions,
  questionsTitle,
  pagination,
}: QuestionsListProps) => {
  return (
    <BlockWrapper>
      <h2 className={styles.title}>Вопросы {questionsTitle}</h2>
      <ul className={styles['questions-list']}>
        {questions.map((question: IQuestion) => (
          <QuestionsCard
            key={question.id}
            title={question.title}
            shortAnswer={question.shortAnswer}
            complexity={question.complexity}
            rate={question.rate}
          />
        ))}
      </ul>
      {pagination && <QuestionsPagination {...pagination} />}
    </BlockWrapper>
  );
};
