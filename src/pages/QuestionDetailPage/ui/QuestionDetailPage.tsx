import { useParams } from 'react-router-dom';
import { QuestionContent } from '@/widgets/QuestionDetail';

const QuestionDetailPage = () => {
  const params = useParams<{questionId: string}>();
  return (
    <QuestionContent params={{ questionId: params.questionId as string }} />
  );
};

export default QuestionDetailPage;
