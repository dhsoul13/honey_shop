import { Alert, AlertProps } from 'antd';

import styles from './alerts.module.scss';
import { useDispatch } from 'react-redux';
import { isCloseAlerts } from 'src/store/slices/alert-slice';
import { useEffect } from 'react';

export const AlertsInfo: React.FC<{ isActive: boolean } & AlertProps> = ({
	isActive = false,
	...props
}) => {
	const dispatch = useDispatch();

	const showAlertFunction = () => {
		setTimeout(() => {
			dispatch(isCloseAlerts());
		}, 3000);
	};

	useEffect(() => {
		if (isActive) {
			showAlertFunction();
		}
	}, [isActive]);

	if (isActive) {
		return <Alert className={styles.alert} {...props} showIcon closable />;
	} else {
		return <></>;
	}
};
