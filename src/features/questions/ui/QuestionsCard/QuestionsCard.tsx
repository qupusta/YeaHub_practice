import { useState } from 'react';
import DOMPurify from 'dompurify';
import { AccordeonButton } from '@/shared/ui/AccordeonButton';
import { Button } from '@/shared/ui/Button';

import styles from './QuestionsCard.module.css';

interface QuestionCardProps {
  title: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
}

export const QuestionsCard = ({
  title,
  shortAnswer,
  rate,
  complexity,
}: QuestionCardProps) => {
  const [openPopover, setOpenPopover] = useState(false);

  const sanitizedHTML = DOMPurify.sanitize(shortAnswer);

  return (
    <li className={styles['questions-list__question']}>
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

      {openPopover && (
        <div className={styles.popover}>
          <p>Рейтинг: {rate}</p>
          <p>Сложность: {complexity}</p>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        </div>
      )}
    </li>
  );
};
