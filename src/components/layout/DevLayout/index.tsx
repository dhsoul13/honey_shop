import { Outlet } from 'react-router-dom';

import styles from './devLayout.module.scss';

export const DevLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_layout}>
        <Outlet />
      </div>
    </div>
  );
};
