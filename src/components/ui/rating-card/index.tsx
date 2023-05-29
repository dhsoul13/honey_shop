import { IRatingCard } from './types';

import styles from './ratingCard.module.scss';
import { Col, Row } from 'antd';
import { MainButton } from '../buttons';

const HiddenOtherText: React.FC<{ text: string; onExit?: () => void }> = ({
	text,
	onExit,
}) => {
	if (text.length < 30) {
		return <p>{text}</p>;
	}
	return (
		<p>
			{text.slice(0, 60)}...
			<MainButton cn={styles.button} type="link" onClick={onExit}>
				Читать дальше
			</MainButton>
		</p>
	);
};

export const RatingCard: React.FC<IRatingCard> = ({ content }) => {
	return (
		<Row className={styles.wrapper_card} key={content.id} gutter={[0, 10]}>
			<Col span={24} className={styles.person_info}>
				<div className={styles.rating}>{content.rating}</div>
				<div className={styles.main_info}>
					<h2>Автор: {content.id_user}</h2>
					<h2>Продукт: {content.id_product}</h2>
				</div>
			</Col>
			<Col span={24} className={styles.comment}>
				<h2 className={styles.comment_title}>Комментарий:</h2>
				<div className={styles.comment_text}>
					<div className={styles.line} />
					<HiddenOtherText text={content.comment} />
				</div>
			</Col>
		</Row>
	);
};
