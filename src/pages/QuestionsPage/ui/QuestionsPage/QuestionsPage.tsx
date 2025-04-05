import { QuestionsFilterPanel } from '@/widgets/QuestionsFilterPanel';
import styles from './QuestionsPage.module.css';
import { QuestionsListPanel } from '@/widgets/QuestionsListPanel';

const QuestionsPage = () => (
  <div className={styles.container}>
    <QuestionsListPanel />
    <QuestionsFilterPanel />
  </div>
);

export default QuestionsPage;
