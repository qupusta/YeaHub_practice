import { QuestionsFilterPanel } from '@/widgets/QuestionsFilterPanel';
import styles from './QuestionsPage.module.css';
import { QuestionsListPanel } from '@/widgets/QuestionsListPanel';
import { useEffect, useState } from 'react';
import { useScreenSize } from '@/shared/hooks/useScreenSize';
const QuestionsPage = () => {
  const [isOpenFiltersModal, setIsOpenFiltersModal] = useState(false);
  const { isDesktop, isTablet } = useScreenSize();
  useEffect(() => {
    if (isDesktop || isTablet) {
      setIsOpenFiltersModal(false);
    }
  }, [isTablet, isDesktop]);
  return (
    <div className={styles.container}>
      <QuestionsListPanel
        onOpenFiltersModal={() => setIsOpenFiltersModal(!isOpenFiltersModal)}
      />
      <QuestionsFilterPanel
        onOpenFiltersModal={() => setIsOpenFiltersModal(!isOpenFiltersModal)}
        isOpen={isOpenFiltersModal}
      />
    </div>
  );
};

export default QuestionsPage;
