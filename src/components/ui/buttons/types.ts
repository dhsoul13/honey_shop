import { ButtonProps } from 'antd';
import { ClassValue } from 'clsx';

export interface IMainButton extends ButtonProps {
	children: React.ReactNode;
	type?: 'primary' | 'default' | 'link';
	cn?: string | undefined;
}

export interface ISliderMain
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	sliderAction?: 'next' | 'prev';
	linkForSwiper: ClassValue[];
}
