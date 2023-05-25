import { Divider } from 'antd';
import { IDefaultLayout } from './types';

import styles from './sreenLayout.module.scss';

export const DefaultLayout: React.FC<IDefaultLayout> = ({
	children,
	title,
}) => {
	return (
		<>
			<h2 className={styles.h2}>{title}</h2>
			<Divider />
			{children}
		</>
	);
};
