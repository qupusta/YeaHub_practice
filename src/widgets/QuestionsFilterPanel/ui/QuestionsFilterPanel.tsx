import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi';
import { questionsPageSelectors } from '@/features/questions/model/selectors/questionsSelectors';
import { questionsActions } from '@/features/questions/model/slices/questionsSlice';
import { QuestionsFilter } from '@/features/questions/ui';
import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi';

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

  return (
    <QuestionsFilter
      onSearch={handleSearch}
      onSpecializationToggle={handleSpecializationToggle}
      selectedSpecializations={filters.specializations}
      specializations={specializations?.data || []}
      skills={skills?.data || []}
      selectedSkills={filters.skills}
      onSkillsToggle={handleSkillsToggle}
    />
  );
};
