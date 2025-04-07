import { useDispatch } from 'react-redux';
import { questionsActions } from '../../model/slices/questionsSlice';

import { QuestionsPagination } from '../QuestionsPagination/QuestionsPagination';
import { QuestionsCard } from '../QuestionsCard/QuestionsCard';
import type { IQuestion } from '@/features/questions/model/types/question';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Button } from '@/shared/ui/Button';

import styles from './QuestionsList.module.css';
import { QuestionsListSkeleton } from './QuestionsList.skeleton';

interface QuestionsListProps {
  questions: IQuestion[];
  isLoading: boolean;
  questionsTitle: string | undefined;
  pagination?: {
    currentPage: number;
    maxPage: number;
    onNextPage: () => void;
    onPrevPage: () => void;
    onPageChange: (page: number) => void;
  };
}

const QuestionsList = ({
  questions,
  questionsTitle,
  pagination,
  isLoading,
}: QuestionsListProps) => {
  const dispatch = useDispatch();

  if (isLoading) return <QuestionsListSkeleton />;

  return (
    <BlockWrapper>
      <h2 className={styles.title}>Вопросы {questionsTitle}</h2>
      <ul className={styles['questions-list']}>
        {!questions.length ? (
          <>
            <h3>По вашему запросу ничего не найдено</h3>
            <Button
              variant="transparent-border"
              onClick={() => dispatch(questionsActions.resetFilters())}
            >
              Сбросить фильтры
            </Button>
          </>
        ) : (
          questions.map((question: IQuestion) => (
            <QuestionsCard
              key={question.id}
              title={question.title}
              shortAnswer={question.shortAnswer}
              complexity={question.complexity}
              rate={question.rate}
            />
          ))
        )}
      </ul>
      {pagination && <QuestionsPagination {...pagination} />}
    </BlockWrapper>
  );
};

export default QuestionsList;
