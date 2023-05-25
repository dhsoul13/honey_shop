import { Divider } from 'antd';
import { IDefaultLayout } from './types';

export const DefaultLayout: React.FC<IDefaultLayout> = ({
	children,
	title,
}) => {
	return (
		<>
			<h2>{title}</h2>
			<Divider />
			{children}
		</>
	);
};
