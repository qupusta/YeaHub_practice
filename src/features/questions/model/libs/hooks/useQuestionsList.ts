import { useGetPublicQuestionsQuery } from '@/features/questions/api/questionsApi';
import { useSelector } from 'react-redux';
import { questionsPageSelectors } from '../../selectors/questionsSelectors';

export const useQuestionsList = () => {
  const currentPage = Number(useSelector(questionsPageSelectors.currentPage));
  const filters = useSelector(questionsPageSelectors.filters);

  return useGetPublicQuestionsQuery({
    ...filters,
    specialization: filters.specializations,
    skills: filters.skills,
    page: currentPage,
  });
};
