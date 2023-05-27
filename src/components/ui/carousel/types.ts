// eslint-disable-next-line import/no-extraneous-dependencies
import { type SwiperProps } from 'swiper/react';
import { CarouselProps } from 'antd';

export interface IDefaultCarousel extends CarouselProps {
	children: any;
}

export interface ICarouselWrapperCustoms extends SwiperProps {
	children: React.ReactNode;
}
