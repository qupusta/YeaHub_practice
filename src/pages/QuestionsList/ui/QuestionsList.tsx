import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { MouseEvent } from 'react';

import { useGetPublicQuestionsQuery } from '@/entities/questions/api/questionsApi';
import { questionsPageSelectors } from '../model/selectors/questionsPageSelectors';
import { questionsPageActions } from '../model/slices/questionsPageSlice';

import { QuestionsFilter } from '@/features/questionsFilter';
import type { IQuestion } from '@/entities/questions/model/types/question';
import { AccordeonButton } from '@/shared/ui/AccordeonButton';

import styles from './QuestionsList.module.css';
import { Pagination } from '@/shared/ui/Pagination';

export const QuestionsList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(questionsPageSelectors.currentPage);
  const filters = useSelector(questionsPageSelectors.filters);

  const { data, error, isLoading } = useGetPublicQuestionsQuery(filters);
  const questions = data?.data;

  const handleNextPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(questionsPageActions.setPage(currentPage + 1));
  };

  const handlePrevPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentPage > 1) {
      dispatch(questionsPageActions.setPage(currentPage - 1));
    }
  };

  const onPageChange = (page: number) => {
    dispatch(questionsPageActions.setPage(page));
  };

  const maxPage =
    data?.total && data?.limit ? Math.ceil(data.total / data.limit) : 0;

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <section className={styles.container}>
      <div className={styles.wrapper__questions}>
        <ul className={styles['questions-list']}>
          {questions?.map((question: IQuestion) => (
            <li
              className={styles['questions-list__question']}
              key={question.id}
            >
              <div className={styles['question__flex-container']}>
                <p className={styles['question__title']}>{question.title}</p>
                <AccordeonButton />
              </div>
            </li>
          ))}
        </ul>
        <Pagination
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          onPageChange={onPageChange}
          maxPage={maxPage}
          currentPage={currentPage}
        />
      </div>
      <QuestionsFilter />
    </section>
  );
};
