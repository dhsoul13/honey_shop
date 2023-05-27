import { type INewCard } from './types';
import styles from './newCard.module.scss';
import DefaultImg from 'src/assets/imgs/bg.title.jpg';
import { Col, Divider, Row } from 'antd';
import clsx from 'clsx';
import { MainButton } from '../buttons';

const HiddenOtherText: React.FC<{ text: string }> = ({ text }) => {
	if (text.length < 30) {
		return <p>{text}</p>;
	}
	return (
		<p>
			{text.slice(0, 60)}...
			<MainButton cn={styles.button} type="link">
				Читать дальше
			</MainButton>
		</p>
	);
};

export const NewCard: React.FC<INewCard> = ({ content }) => {
	return (
		<Row className={styles.wrapper_card} key={content.id} gutter={[0, 20]}>
			<Col className={clsx(styles.col, styles.col_img)}>
				<img src={DefaultImg} alt="" />
			</Col>
			<Col className={clsx(styles.col, styles.col_info)}>
				<h2 className={styles.title}>{content.title}</h2>
				<div className={styles.text}>
					<div className={styles.line} />
					<HiddenOtherText text={content.info} />
				</div>
				<p className={styles.time}>{content.date}</p>
			</Col>
		</Row>
	);
};
