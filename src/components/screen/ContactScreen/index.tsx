import { DefaultLayout } from 'src/components/layout/ScreenLayout';

import styles from './contactScreen.module.scss';
import { contentInfoAboutSeller } from './constant';
import { Col, Row } from 'antd';
import { MapContent } from 'src/assets/maps/map_place';

import IMG from 'src/assets/imgs/AdobeStock_162288757_Preview.jpeg';

export const ContactScreen = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<DefaultLayout title="Контакты">
					<Row className={styles.grid} gutter={[20, 0]}>
						<Col span={10}>
							<ul className={styles.list}>
								{contentInfoAboutSeller.map((info) => (
									<li key={info.visitableTitle}>
										<h2>{info.visitableTitle}:</h2>
										<p>
											{typeof info.visibleInformation === 'string' ? (
												<>
													<span className={styles.svg}>{info.icon}</span>
													{info.visibleInformation}
												</>
											) : (
												<ul className={styles.list_nested}>
													{info.visibleInformation.map((dop) => (
														<li
															key={dop.dopVisitableTitle}
															className={styles.li_nested}
														>
															<span className={styles.svg}>{dop.iconDop}</span>
															<a href={dop.dopVisibleInformation}>
																{dop.dopVisitableTitle}
															</a>
														</li>
													))}
												</ul>
											)}
										</p>
									</li>
								))}
							</ul>
						</Col>
						<Col span={14}>
							<div className={styles.block_imgs}>
								<img src={IMG} alt="" />
							</div>
						</Col>
					</Row>
					<div className={styles.map}>
						<h2>Местоположение на карте:</h2>
						<MapContent />
					</div>
				</DefaultLayout>
			</div>
		</div>
	);
};
