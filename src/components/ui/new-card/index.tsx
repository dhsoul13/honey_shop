import { INewCardSwiper, type INewCard } from './types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SwiperSlide } from 'swiper/react';

export const NewCard: React.FC<INewCard> = ({ content }) => {
	return (
		<div key={content.id}>
			<div>1</div>
			<div>
				<h2>{content.title}</h2>
				<p>{content.info}</p>
			</div>
		</div>
	);
};

export const NewCardSwiperSlide: React.FC<INewCardSwiper> = ({
	arrayForSlider,
}) => {
	return (
		<>
			{arrayForSlider.map((slide) => (
				<SwiperSlide>
					<NewCard content={slide} />
				</SwiperSlide>
			))}
		</>
	);
};
