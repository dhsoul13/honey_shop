import { Button } from 'antd';
import React from 'react';

import styles from './buttons.module.scss';
import clsx from 'clsx';
import { IMainButton, ISliderMain } from './types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export const MainButton: React.FC<IMainButton> = ({
	children,
	type = 'primary',
	cn,
	...props
}) => {
	return (
		<Button className={clsx(cn, styles.btn)} type={type} {...props}>
			{children}
		</Button>
	);
};

export const SliderButton: React.FC<ISliderMain> = ({
	sliderAction = 'next',
	linkForSwiper,
	...props
}) => {
	if (sliderAction === 'next') {
		return (
			<button
				className={clsx(styles.slider_main, [...linkForSwiper])}
				{...props}
			>
				<RightOutlined />
			</button>
		);
	} else {
		return (
			<button
				className={clsx(styles.slider_main, [...linkForSwiper])}
				{...props}
			>
				<LeftOutlined />
			</button>
		);
	}
};
