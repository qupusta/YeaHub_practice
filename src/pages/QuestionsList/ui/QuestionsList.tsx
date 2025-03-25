import { useGetPublicQuestionsQuery } from '@/entities/questions/api/questionsApi';
import { QuestionsFilter } from '@/features/questionsFilter';
import type { IQuestion } from '@/shared/types/question';

import styles from './QuestionsList.module.css';

export const QuestionsList = () => {
  const { error, isLoading } = useGetPublicQuestionsQuery();
  const { data } = useGetPublicQuestionsQuery();
  const questions = data?.data;
  console.log(questions);

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <>
      <section className={styles.container}>
        <ul className={styles['questions-list']}>
          {questions?.map((question: IQuestion) => (
            <li
              className={styles['questions-list__question']}
              key={question.id}
            >
              <p className={styles['question__title']}>{question.title}</p>
            </li>
          ))}
        </ul>
        <QuestionsFilter />
      </section>
    </>
  );
};
