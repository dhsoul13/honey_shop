import { Carousel } from 'antd';
import styles from './carousel.module.scss';
import { ICarouselWrapperCustoms, IDefaultCarousel } from './types';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react';

export const CarouselDefault: React.FC<IDefaultCarousel> = ({
	children,
	...props
}) => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};

	return (
		<Carousel className={styles.carousel} afterChange={onChange} {...props}>
			{children}
		</Carousel>
	);
};

export const CarouselWrapperCustoms: React.FC<ICarouselWrapperCustoms> = ({
	...props
}) => {
	return <Swiper {...props}>1</Swiper>;
};
