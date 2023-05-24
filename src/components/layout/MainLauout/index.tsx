import { Outlet } from 'react-router-dom';
import { Footer, Header, ModalsAuthentically } from 'src/components/ui';

import styles from './mainLayout.module.scss';
import { useSelector } from 'react-redux';
import { selectorModalStateActive } from 'src/store/selector';

export const MainLayout: React.FC = () => {
  const isActiveModal = useSelector(selectorModalStateActive);

  console.log(isActiveModal);
  return (
    <>
      <ModalsAuthentically isActive={isActiveModal} />
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
