import { useState } from 'react';
import DOMPurify from 'dompurify';
import { AccordeonButton } from '@/shared/ui/AccordeonButton';
import { Button } from '@/shared/ui/Button';

import styles from './QuestionsCard.module.css';
import { NavLink } from 'react-router-dom';
import { TagBubble } from '@/shared/ui/TagBubble';

interface QuestionCardProps {
  title: string;
  id: number;
  shortAnswer: string;
  rate: number;
  complexity: number;
}

export const QuestionsCard = ({
  id,
  title,
  shortAnswer,
  rate,
  complexity,
}: QuestionCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);

  const sanitizedHTML = DOMPurify.sanitize(shortAnswer);

  return (
    <li
      onClick={() => setOpenPopover(!openPopover)}
      className={styles['questions-list__question']}
    >
      <div className={styles['question__header']}>
        <p className={styles['question__title']}>{title}</p>
        <Button
          variant="transparent"
          onClick={() => setOpenPopover(!openPopover)}
          className={styles['question__button']}
        >
          <AccordeonButton isOpen={openPopover} />
        </Button>
      </div>

      <div
        className={`${styles.popover} ${
          openPopover ? styles['popover--open'] : ''
        }`}
      >
        <div className={styles.question__tags}>
          <TagBubble title="Рейтинг" value={rate} />
          <TagBubble title="Сложность" value={complexity} />
        </div>
        <div
          className={styles['question__short-answer']}
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
        {openPopover && (
          <NavLink
            to={`:${id}`}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 24,
              fontWeight: 600,
              color: 'var(--color-purple-600)',
            }}
          >
            Подробнее &rarr;
          </NavLink>
        )}
      </div>
    </li>
  );
};
