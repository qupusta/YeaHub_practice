import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi';
import { useGetPublicQuestionsQuery } from '@/features/questions/api/questionsApi';
import { questionsPageSelectors } from '@/features/questions/model/selectors/questionsSelectors';
import { questionsActions } from '@/features/questions/model/slices/questionsSlice';
import { QuestionsFilter, QuestionsList } from '@/features/questions/ui';
import useDebounce from '@/shared/hooks/useDebounce';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const QuestionsMainContent = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(questionsPageSelectors.currentPage);
  const filters = useSelector(questionsPageSelectors.filters);

  const debouncedFilters = useDebounce(filters, 300);

  const { data: questionsData } = useGetPublicQuestionsQuery({
    ...debouncedFilters,
    page: currentPage,
    limit: 10,
  });

  const { data: specializations } = useGetSpecializationsQuery();

  const handlePageChange = (page: number) => {
    dispatch(questionsActions.setPage(page));
  };

  const handleSearch = useCallback(
    (query: string) => {
      dispatch(questionsActions.setTitle(query));
    },
    [dispatch]
  );

  const handleSpecializationToggle = (id: number) => {
    dispatch(questionsActions.toggleSpecializations(id));
    dispatch(questionsActions.setPage(1));
  };

  return (
    <>
      <QuestionsList
        questions={questionsData?.data || []}
        pagination={{
          currentPage,
          maxPage: Math.ceil((questionsData?.total || 0) / 10),
          onNextPage: () => handlePageChange(currentPage + 1),
          onPrevPage: () => handlePageChange(Math.max(1, currentPage - 1)),
          onPageChange: handlePageChange,
        }}
      />
      <QuestionsFilter
        onSearch={handleSearch}
        onSpecializationToggle={handleSpecializationToggle}
        selectedSpecializations={filters.specializations || []}
        specializations={specializations?.data || []}
      />
    </>
  );
};
