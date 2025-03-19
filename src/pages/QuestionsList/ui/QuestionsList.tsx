import { useGetPublicQuestionsQuery } from '@/features/questions/questionsApi';
import type { IQuestion } from '@/shared/types/question';

export const QuestionsList: React.FC = () => {
  const { data, error, isLoading } = useGetPublicQuestionsQuery();

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <ul>
      {data?.map((question: IQuestion) => (
        <li key={question.id}>{question.title}</li>
      ))}
    </ul>
  );
};
