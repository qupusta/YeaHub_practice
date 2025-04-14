import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi';
import { useQuestionsList } from '@/features/questions/model';
import { questionsPageSelectors } from '@/features/questions/model/selectors/questionsSelectors';
import { questionsActions } from '@/features/questions/model/slices/questionsSlice';
import { QuestionsList } from '@/features/questions/ui';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

interface QuestionsListPanelProps {
  onOpenFiltersModal: () => void;
}

export const QuestionsListPanel = ({
  onOpenFiltersModal,
}: QuestionsListPanelProps) => {
  const dispatch = useDispatch();
  const filters = useSelector(questionsPageSelectors.filters);
  const currentPage = useSelector(questionsPageSelectors.currentPage);
  const { data: questionsData, isLoading } = useQuestionsList();

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
    <QuestionsList
      onOpenModal={onOpenFiltersModal}
      questions={questionsData?.data || []}
      isLoading={isLoading}
      questionsTitle={currentSpecialization}
      pagination={{
        currentPage,
        maxPage: Math.ceil((questionsData?.total || 0) / 10),
        onNextPage: () => handlePageChange(currentPage + 1),
        onPrevPage: () => handlePageChange(Math.max(1, currentPage - 1)),
        onPageChange: handlePageChange,
      }}
    />
  );
};
