import { Carousel } from 'antd';
import styles from './carousel.module.scss';
import { Virtual } from 'swiper';
import { ICarouselWrapperCustoms, IDefaultCarousel } from './types';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, type SwiperProps, SwiperSlide } from 'swiper/react';
import { demoCardContent } from 'src/shared/constant/demoCardContent';

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
	children,
	...props
}) => {
	return <Swiper {...props}>{children}</Swiper>;
};
