import styles from './QuestionsPage.module.css';
import { QuestionsMainContent } from '@/widgets/QuestionsMainContent';
import { QuestionsPageSkeleton } from './QuestionsPage.skeleton';

const QuestionsPage = () => (

  <QuestionsPageSkeleton />
  // <div className={styles.container}>
  //   <QuestionsMainContent />
  // </div>
);

export default QuestionsPage