import clsx from 'clsx';
import styles from './mainSreen.module.scss';
import { Row, Col } from 'antd';
import {
	CarouselDefault,
	CarouselWrapperCustoms,
	NewCard,
} from 'src/components/ui';
import { MainButton, SliderButton } from 'src/components/ui/buttons';
import imgs from 'src/assets/imgs/bg.title.jpg';
import { demoNewsCard } from 'src/shared/constant/demoNewsCard';

// eslint-disable-next-line import/no-extraneous-dependencies
import { SwiperSlide } from 'swiper/react';
import { configSlider } from './constant';

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
			<article className={clsx(styles.container)}>3</article>
			<article className={clsx(styles.container)}>4</article>
		</section>
	);
};
