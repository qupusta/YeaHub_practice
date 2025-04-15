import { useDispatch } from 'react-redux';
import { questionsActions } from '../../model/slices/questionsSlice';
import { QuestionsListSkeleton } from './QuestionsList.skeleton';
import { QuestionsPagination } from '../QuestionsPagination/QuestionsPagination';
import { QuestionsCard } from '@/entities/questions';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Button } from '@/shared/ui/Button';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

import type { IQuestion } from '@/features/questions/model/types/question';
import styles from './QuestionsList.module.css';

interface QuestionsListProps {
  questions: IQuestion[];
  isLoading: boolean;
  questionsTitle: string | undefined;
  onOpenModal: () => void;
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
  onOpenModal,
}: QuestionsListProps) => {
  const dispatch = useDispatch();
  const { isTablet, isMobile } = useScreenSize();
  if (isLoading) return <QuestionsListSkeleton />;

  return (
    <BlockWrapper>
      <div className={styles.container}>
        <h2 className={styles.title}>Вопросы {questionsTitle}</h2>
        {isTablet || isMobile ? (
          <button
            onClick={onOpenModal}
            className={styles['filters-button--open']}
          />
        ) : null}
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
                id={question.id}
                title={question.title}
                shortAnswer={question.shortAnswer}
                complexity={question.complexity}
                rate={question.rate}
              />
            ))
          )}
        </ul>
        {pagination && <QuestionsPagination {...pagination} />}
      </div>
    </BlockWrapper>
  );
};

export default QuestionsList;
