import { useState } from 'react';
import { SearchInput } from '@/shared/ui/SearchInput';
import { ISpecialization } from '@/entities/specializations/model/types/specializations';

import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import {
  QuestionsSkills,
  QuestionsSpecializations,
} from '@/entities/questions';
import { ISkills } from '@/entities/skills/model/types/skills';

interface QuestionsFilterProps {
  onSearch: (query: string) => void;
  onSpecializationToggle: (id: number) => void;
  selectedSpecializations: number | undefined;
  specializations: ISpecialization[];
  skills: ISkills[];
  onSkillsToggle: (id: number) => void;
  selectedSkills: number[] | undefined;
  initialSearchQuery?: string;
}

export const QuestionsFilter = ({
  onSearch,
  onSpecializationToggle,
  selectedSpecializations,
  specializations,
  skills,
  selectedSkills,
  onSkillsToggle,
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
    </BlockWrapper>
  );
};
