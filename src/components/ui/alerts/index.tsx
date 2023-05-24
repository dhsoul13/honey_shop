import { Alert, AlertProps } from 'antd';

import styles from './alerts.module.scss';

export const AlertsInfo: React.FC<{ isActive: boolean } & AlertProps> = ({
  isActive = false,
  ...props
}) => {
  if (isActive) {
    return (
      <Alert
        className={styles.alert}
        {...props}
        showIcon
        closable
      />
    );
  } else {
    return <></>;
  }
};
