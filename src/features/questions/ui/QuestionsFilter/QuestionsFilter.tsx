import { useState } from 'react';
import { SearchInput } from '@/shared/ui/SearchInput';
import { ISpecialization } from '@/entities/specializations/model/types/specializations';

import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import {
  QuestionsComplexity,
  QuestionsRate,
  QuestionsSkills,
  QuestionsSpecializations,
} from '@/entities/questions';
import { ISkills } from '@/entities/skills/model/types/skills';
import { RateFilterId } from '@/shared/constants/rateFilters';
import { ComplexityFilterId } from '@/shared/constants/complexityFilters';

interface QuestionsFilterProps {
  onSearch: (query: string) => void;
  onSpecializationToggle: (id: number) => void;
  onSkillsToggle: (id: number) => void;
  onRateToggle: (id: RateFilterId) => void;
  onComplexityToggle: (id: ComplexityFilterId) => void;
  selectedSpecializations: number | undefined;
  specializations: ISpecialization[];
  skills: ISkills[];
  selectedSkills: number[] | undefined;
  selectedRate: RateFilterId[] | undefined;
  selectedComplexity: ComplexityFilterId[] | undefined;
  initialSearchQuery?: string;
}

export const QuestionsFilter = ({
  onSearch,
  onSpecializationToggle,
  onSkillsToggle,
  onRateToggle,
  onComplexityToggle,
  selectedSpecializations,
  selectedSkills,
  selectedRate,
  selectedComplexity,
  specializations,
  skills,
  initialSearchQuery = '',
}: QuestionsFilterProps) => {
  const [query, setQuery] = useState(initialSearchQuery);

  const handleChangeInput = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <BlockWrapper>
      <SearchInput
        onSearch={handleChangeInput}
        placeholder="Введите запрос..."
        initialValue={query}
      />
      <QuestionsSpecializations
        onSpecializationToggle={onSpecializationToggle}
        selectedSpecializations={selectedSpecializations}
        specializations={specializations}
      />
      <QuestionsSkills
        onSkillToggle={onSkillsToggle}
        selectedSkills={selectedSkills}
        skills={skills}
      />
      <QuestionsComplexity
        selectedComplexity={selectedComplexity}
        onComplexitySelected={onComplexityToggle}
      />
      <QuestionsRate
        selectedRate={selectedRate}
        onRateSelected={onRateToggle}
      />
    </BlockWrapper>
  );
};
