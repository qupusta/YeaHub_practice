import { QuestionsCard } from '../QuestionsCard/QuestionsCard';
import { QuestionsPagination } from '../QuestionsPagination/QuestionsPagination';

import type { IQuestion } from '@/features/questions/model/types/question';
import styles from './QuestionsList.module.css';

interface QuestionsListProps {
  questions: IQuestion[];
  isLoading?: boolean;
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
  pagination,
}: QuestionsListProps) => {
  if (!questions?.length) return <h2>Ничего не найдено</h2>;
  return (
    <div className={styles.wrapper__questions}>
      <ul className={styles['questions-list']}>
        {questions.map((question: IQuestion) => (
          <QuestionsCard
            key={question.id}
            id={question.id}
            title={question.title}
          />
        ))}
      </ul>
      {pagination && <QuestionsPagination {...pagination} />}
    </div>
  );
};
