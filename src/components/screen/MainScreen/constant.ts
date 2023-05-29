import { Autoplay, Navigation } from 'swiper';
import { type SwiperProps } from 'swiper/react';

export const configSlider: SwiperProps = {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		prevEl: '.btn_1',
		nextEl: '.btn_2',
	},
	autoplay: {
		delay: 5000,
	},
	modules: [Navigation, Autoplay],
};
