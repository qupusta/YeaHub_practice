import { AccordeonButton } from '@/shared/ui/AccordeonButton';

import styles from './QuestionsCard.module.css';

interface QuestionCardProps {
  id?: number;
  title: string;
}

export const QuestionsCard = ({ title }: QuestionCardProps) => {
  return (
    <li className={styles['questions-list__question']}>
      <div className={styles['question__flex-container']}>
        <p className={styles['question__title']}>{title}</p>
        <AccordeonButton />
      </div>
    </li>
  );
};
