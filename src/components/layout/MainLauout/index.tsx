import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'src/components/ui';

import styles from './mainLayout.module.scss';

export const MainLayout: React.FC = () => {
  return (
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
  );
};
