import { useGetPublicQuestionsQuery } from '@/features/questions/api/questionsApi';
import type { IQuestion } from '@/shared/types/question';

export const QuestionsList = () => {
  const { error, isLoading } = useGetPublicQuestionsQuery();
  const { data } = useGetPublicQuestionsQuery();
  const questions = data?.data;

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <ul>
      {questions?.map((question: IQuestion) => (
        <li key={question.id}>{question.title}</li>
      ))}
    </ul>
  );
};
