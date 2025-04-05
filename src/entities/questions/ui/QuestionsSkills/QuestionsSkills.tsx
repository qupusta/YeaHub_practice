import { FilterButton } from '@/shared/ui/FilterButton';
import { useState } from 'react';

import { ISkills } from '@/entities/skills/model/types/skills';
import { Button } from '@/shared/ui/Button';

import styles from './QuestionsSkills.module.css';

interface QuestionsSkillsProps {
  onSkillToggle: (id: number) => void;
  selectedSkills: number[] | undefined;
  skills: ISkills[];
}

export const QuestionsSkills = ({
  onSkillToggle,
  selectedSkills,
  skills,
}: QuestionsSkillsProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleList = showAll ? skills : skills.slice(0, 4);

  return (
    <>
      <h3 className={styles.filterPanel__title}>Навыки</h3>

      <ul className={styles['skills-list']}>
        {visibleList.map((skill) => (
          <li key={skill.id} className={styles['skills-list__list-elem']}>
            <FilterButton
              image={skill.imageSrc || undefined}
              type="checkbox"
              id={skill.id}
              title={skill.title}
              onChangeHandler={(id) => onSkillToggle(id)}
              isChecked={selectedSkills?.indexOf(skill.id) !== -1}
            />
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowAll(!showAll)} variant="transparent">
        {showAll ? 'Скрыть' : 'Показать еще'}
      </Button>
    </>
  );
};
