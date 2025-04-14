import { ISkills } from '@/entities/skills/model/types/skills';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { FilterButton } from '@/shared/ui/FilterButton';
import { TagBubble } from '@/shared/ui/TagBubble';
import styles from './QuestionInfo.module.css';
import { IQuestion } from '@/features/questions/model/types/question';
import { nanoid } from 'nanoid';
import { useScreenSize } from '@/shared/hooks/useScreenSize';

type QuestionInfoProps = Pick<
  IQuestion,
  'rate' | 'complexity' | 'questionSkills' | 'keywords'
> & {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const QuestionInfo = ({
  rate,
  complexity,
  questionSkills,
  keywords,
  isOpen,
  setIsOpen,
}: QuestionInfoProps) => {
  const { isTablet, isMobile } = useScreenSize();
  return (
    <div
      className={`${isOpen ? styles['modal-wrapper--open'] : styles['modal-wrapper--closed']}`}
    >
      {isTablet || isMobile ? (
        <button onClick={setIsOpen} className={styles['modal__button']} />
      ) : null}
      <BlockWrapper>
        <h3 className={styles.question__info__title}>Уровень:</h3>

        <div className={styles.question__info__tags}>
          <TagBubble value={rate} title="Рейтинг" />
          <TagBubble value={complexity} title="Сложность" />
        </div>
        <h3 className={styles.question__info__title}>Навыки:</h3>
        <ul className={styles.question__info__skills}>
          {questionSkills?.map((skill: ISkills) => (
            <li key={skill.id}>
              <FilterButton
                image={skill.imageSrc || undefined}
                type="checkbox"
                id={skill.id}
                title={skill.title}
              />
            </li>
          ))}
        </ul>
        <h3 className={styles.question__info__title}>Ключевые слова:</h3>
        <div className={styles.question__info__keywords}>
          {keywords?.map((keyword: string) => (
            <span key={nanoid()} className={styles.keyword}>
              #{keyword}
            </span>
          ))}
        </div>
      </BlockWrapper>
    </div>
  );
};
