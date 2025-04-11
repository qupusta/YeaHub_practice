import { useGetPublicQuestionByIdQuery } from '@/features/questions/api/questionsApi';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import styles from './QuestionDetail.module.css';
import { TagBubble } from '@/shared/ui/TagBubble';
import { FilterButton } from '@/shared/ui/FilterButton';
import { ISkills } from '@/entities/skills/model/types/skills';
import image from '@/shared/assets/icons/img.png';
import { Button } from '@/shared/ui/Button';
import { AccordeonButton } from '@/shared/ui/AccordeonButton';

const QuestionDetailPage = () => {
  const params = useParams();
  const { data, isLoading } = useGetPublicQuestionByIdQuery(params);
  const navigate = useNavigate();
  if (isLoading || !data) return <h2>Loading</h2>;
  const {
    title,
    description,
    complexity,
    rate,
    keywords,
    questionSkills,
    shortAnswer,
    longAnswer,
    imageSrc,
  } = data;

  const sanitizedShortAnswer = DOMPurify.sanitize(shortAnswer);
  const sanitizedLongAnswer = DOMPurify.sanitize(longAnswer);
  return (
    <div className={styles.container}>
      <div className={styles['back-button']}>
        <AccordeonButton />
        <Button variant="transparent" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
      <div className={styles['grid-container']}>
        <BlockWrapper>
          <img
            className={styles.question__image}
            src={imageSrc || image}
            alt="image"
          />
          <h2 className={styles.question__title}>{title}</h2>
          <p className={styles.question__description}>{description}</p>
        </BlockWrapper>
        <BlockWrapper>
          <h2 className={styles.question__answer__title}>Краткий ответ</h2>
          <div
            className={styles['question__short-answer']}
            dangerouslySetInnerHTML={{ __html: sanitizedShortAnswer }}
          />
        </BlockWrapper>
        <BlockWrapper>
          <h2 className={styles.question__answer__title}>Развёрнутый ответ</h2>
          <div
            className={styles['question__long-answer']}
            dangerouslySetInnerHTML={{ __html: sanitizedLongAnswer }}
          />
        </BlockWrapper>
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
              <span className={styles.keyword}>#{keyword}</span>
            ))}
          </div>
        </BlockWrapper>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
