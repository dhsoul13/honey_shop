import { Outlet } from 'react-router-dom';
import {
  AlertsInfo,
  Footer,
  Header,
  ModalsAuthentically,
} from 'src/components/ui';

import styles from './mainLayout.module.scss';
import { useSelector } from 'react-redux';
import {
  selectorAlertState,
  selectorModalStateActive,
} from 'src/store/selector';

export const MainLayout: React.FC = () => {
  const isActiveModal = useSelector(selectorModalStateActive);
  const { alertType, isActive, descriptions, message } =
    useSelector(selectorAlertState);

  return (
    <>
      <ModalsAuthentically isActive={isActiveModal} />
      <AlertsInfo
        isActive={isActive}
        type={alertType}
        message={message}
        description={descriptions}
      />
      <div className={styles.layout}>
        <div
          style={{
            width: '1140px',
            margin: '0 auto',
          }}
        >
          <Header />
        </div>
        <div className={styles.layout__content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
