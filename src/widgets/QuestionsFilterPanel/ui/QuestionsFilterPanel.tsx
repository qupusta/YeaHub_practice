import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi';
import { questionsPageSelectors } from '@/features/questions/model/selectors/questionsSelectors';
import { questionsActions } from '@/features/questions/model/slices/questionsSlice';
import { QuestionsFilter } from '@/features/questions/ui';
import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi';
import { RateFilterId } from '@/shared/constants/rateFilters';
import { ComplexityFilterId } from '@/shared/constants/complexityFilters';

export const QuestionsFilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(questionsPageSelectors.filters);
  const { data: specializations } = useGetSpecializationsQuery();
  const { data: skills } = useGetSkillsQuery();

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

  const handleSkillsToggle = (id: number) => {
    dispatch(questionsActions.setSkills(id));
    dispatch(questionsActions.setPage(1));
  };

  const handleRateToggle = (id: RateFilterId) => {
    dispatch(questionsActions.setRate(id));
    dispatch(questionsActions.setPage(1));
  };

  const handleComplexityToggle = (id: ComplexityFilterId) => {
    dispatch(questionsActions.setComplexity(id));
    dispatch(questionsActions.setPage(1));
  };

  return (
    <QuestionsFilter
      onSearch={handleSearch}
      onSpecializationToggle={handleSpecializationToggle}
      onSkillsToggle={handleSkillsToggle}
      onRateToggle={handleRateToggle}
      onComplexityToggle={handleComplexityToggle}
      specializations={specializations?.data || []}
      skills={skills?.data || []}
      selectedSpecializations={filters.specializations}
      selectedSkills={filters.skills}
      selectedRate={filters.rate}
      selectedComplexity={filters.complexity}
    />
  );
};
