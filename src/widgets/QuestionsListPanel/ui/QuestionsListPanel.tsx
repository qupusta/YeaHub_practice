import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi';
import { useGetPublicQuestionsQuery } from '@/features/questions/api/questionsApi';
import { questionsPageSelectors } from '@/features/questions/model/selectors/questionsSelectors';
import { questionsActions } from '@/features/questions/model/slices/questionsSlice';
import { QuestionsList } from '@/features/questions/ui';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const QuestionsListPanel = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(questionsPageSelectors.currentPage);
  const filters = useSelector(questionsPageSelectors.filters);

  const { data: questionsData } = useGetPublicQuestionsQuery({
    ...filters,
    specialization: filters.specializations,
    page: currentPage,
  });

  const { data: specializations } = useGetSpecializationsQuery();

  const currentSpecialization = filters.specializations
    ? specializations?.data.filter(
        (spec) => spec.id === filters.specializations
      )[0].title
    : undefined;

  const handlePageChange = (page: number) => {
    dispatch(questionsActions.setPage(page));
  };

  return (
    <>
      <QuestionsList
        questions={questionsData?.data || []}
        questionsTitle={currentSpecialization}
        pagination={{
          currentPage,
          maxPage: Math.ceil((questionsData?.total || 0) / 10),
          onNextPage: () => handlePageChange(currentPage + 1),
          onPrevPage: () => handlePageChange(Math.max(1, currentPage - 1)),
          onPageChange: handlePageChange,
        }}
      />
    </>
  );
};
