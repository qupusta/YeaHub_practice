import { useState } from 'react';
import { BlockWrapper } from '@/shared/ui/BlockWrapper';
import { Button } from '@/shared/ui/Button';
import { AccordeonButton } from '@/shared/ui/AccordeonButton';

import styles from './QuestionLongAnswer.module.css';

interface QuestionLongAnswerProps {
  sanitizedLongAnswer: string;
}

export const QuestionLongAnswer = ({
  sanitizedLongAnswer,
}: QuestionLongAnswerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <BlockWrapper>
      <h2 className={styles.question__answer__title}>Развёрнутый ответ</h2>
      <div
        className={`${styles['question__long-answer']} ${!isExpanded ? styles.collapsed : ''}`}
        dangerouslySetInnerHTML={{ __html: sanitizedLongAnswer }}
      />
      <Button
        variant="transparent"
        className={`${styles['expand-button']} ${isExpanded ? styles['expand-button--expanded'] : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Свернуть' : 'Развернуть'}
        <AccordeonButton isOpen={isExpanded} />
      </Button>
    </BlockWrapper>
  );
};
