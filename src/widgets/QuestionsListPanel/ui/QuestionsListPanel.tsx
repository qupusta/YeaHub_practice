import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi';
import { useQuestionsList } from '@/features/questions/model';
import { questionsPageSelectors } from '@/features/questions/model/selectors/questionsSelectors';
import { questionsActions } from '@/features/questions/model/slices/questionsSlice';
import { QuestionsListSkeleton } from './QuestionsListPanel.skeleton';
import { QuestionsPagination } from '@/features/questions/ui/QuestionsPagination/QuestionsPagination';
import { QuestionsCard } from '@/entities/questions';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Button } from '@/shared/ui/Button';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

import type { IQuestion } from '@/features/questions/model/types/question';
import styles from './QuestionsListPanel.module.css';

interface QuestionsListPanelProps {
  onOpenFiltersModal: () => void;
}

export const QuestionsListPanel = ({
  onOpenFiltersModal,
}: QuestionsListPanelProps) => {
  const dispatch = useDispatch();
  const filters = useSelector(questionsPageSelectors.filters);
  const currentPage = Number(useSelector(questionsPageSelectors.currentPage));

  const { isTablet, isMobile } = useScreenSize();

  const { data: questionsData, isLoading } = useQuestionsList();
  const { data: specializations } = useGetSpecializationsQuery();

  if (isLoading) return <QuestionsListSkeleton />;

  const currentSpecialization = filters.specializations
    ? specializations?.data.filter(
        (spec) => spec.id === filters.specializations
      )[0].title
    : undefined;

  const handlePageChange = (page: number) => {
    dispatch(questionsActions.setPage(page));
  };

  const pagination = {
    currentPage,
    maxPage: Math.ceil((questionsData?.total || 0) / 10),
    onNextPage: () => handlePageChange(currentPage + 1),
    onPrevPage: () => handlePageChange(Math.max(1, currentPage - 1)),
    onPageChange: handlePageChange,
  };

  return (
    <BlockWrapper>
      <div className={styles.container}>
        <h2 className={styles.title}>Вопросы {currentSpecialization}</h2>
        {isTablet || isMobile ? (
          <button
            onClick={onOpenFiltersModal}
            className={styles['filters-button--open']}
          />
        ) : null}
        <ul className={styles['questions-list']}>
          {!questionsData?.data.length ? (
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
            questionsData?.data.map((question: IQuestion) => (
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
