import clsx from 'clsx';
import styles from './mainSreen.module.scss';
import { Row, Col } from 'antd';
import {
	CarouselDefault,
	CarouselWrapperCustoms,
	NewCard,
	RatingCard,
} from 'src/components/ui';
import { MainButton, SliderButton } from 'src/components/ui/buttons';
import imgs from 'src/assets/imgs/bg.title.jpg';
import { demoNewsCard } from 'src/shared/constant/demoNewsCard';

// eslint-disable-next-line import/no-extraneous-dependencies
import { SwiperSlide } from 'swiper/react';
import { configSlider, configSliderComment } from './constant';
import { demoRating } from 'src/shared/constant/demoRaiting';

export const MainScreen: React.FC = () => {
	return (
		<section>
			<article className={clsx(styles.container, styles.article_first)}>
				<Row className={styles.row} gutter={[20, 0]}>
					<Col span={12} className={styles.col}>
						<h1 className={styles.title}>Logo</h1>
						<p className={styles.main_info}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores, vitae incidunt. Illum officiis vel quo odit minus
							porro labore deserunt, voluptatem temporibus doloribus et
							distinctio soluta deleniti voluptate natus veritatis.
						</p>
						<div className={styles.main_btn}>
							<MainButton type="primary">Перейти в магазин</MainButton>
						</div>
					</Col>
					<Col span={12} className={styles.col}>
						<CarouselDefault autoplay>
							<div className={styles.col_content_img}>
								<img src={imgs} />
							</div>
							<div>
								<h2>1313</h2>
							</div>
						</CarouselDefault>
					</Col>
				</Row>
			</article>
			<article className={clsx(styles.container, styles.reasons)}>
				<div className={styles.content}>
					<h2 className={styles.title}>Почему стоит покупать наш мед:</h2>
					<Row gutter={[0, 30]} align="middle">
						<Col span={12} className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
							qui quia corrupti natus, dolorum inventore doloribus repellat eum
							eos, vitae in, aliquid voluptatem eius hic quos nemo quam quo
							dolor.
						</Col>
						<Col span={12} className={styles.icon_block}>
							<div className={styles.icon}>1</div>
						</Col>
						<Col span={12} className={styles.icon_block}>
							<div className={styles.icon}>2</div>
						</Col>
						<Col span={12} className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
							qui quia corrupti natus, dolorum inventore doloribus repellat eum
							eos, vitae in, aliquid voluptatem eius hic quos nemo quam quo
							dolor.
						</Col>
						<Col span={12} className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
							qui quia corrupti natus, dolorum inventore doloribus repellat eum
							eos, vitae in, aliquid voluptatem eius hic quos nemo quam quo
							dolor.
						</Col>
						<Col span={12} className={styles.icon_block}>
							<div className={styles.icon}>3</div>
						</Col>
						<Col span={12} className={styles.icon_block}>
							<div className={styles.icon}>4</div>
						</Col>
						<Col span={12} className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
							qui quia corrupti natus, dolorum inventore doloribus repellat eum
							eos, vitae in, aliquid voluptatem eius hic quos nemo quam quo
							dolor.
						</Col>
					</Row>
				</div>
			</article>
			<article className={clsx(styles.container, styles.news)}>
				<div className={styles.content}>
					<h2 className={styles.title}>Наши новости:</h2>
					<Row>
						<Col span={24}>
							<div className={styles.slider_btn}>
								<SliderButton sliderAction={'prev'} linkForSwiper={['btn_1']} />
								<SliderButton linkForSwiper={['btn_2']} />
							</div>
							<CarouselWrapperCustoms {...configSlider}>
								{demoNewsCard.map((news) => (
									<SwiperSlide>
										<NewCard content={news} />
									</SwiperSlide>
								))}
							</CarouselWrapperCustoms>
						</Col>
					</Row>
				</div>
			</article>
			<article className={clsx(styles.container, styles.comments)}>
				<div className={styles.content}>
					<h2 className={styles.title}>Отзывы о нашей продукции:</h2>
					<Row className={styles.commet_slider}>
						<Col span={24}>
							<div className={styles.slider_btn}>
								<SliderButton
									sliderAction={'prev'}
									linkForSwiper={['btn_1_c']}
								/>
								<SliderButton linkForSwiper={['btn_2_c']} />
							</div>
							<CarouselWrapperCustoms {...configSliderComment}>
								{demoRating.map((comment) => (
									<SwiperSlide>
										<RatingCard content={comment} />
									</SwiperSlide>
								))}
							</CarouselWrapperCustoms>
						</Col>
					</Row>
				</div>
			</article>
		</section>
	);
};
