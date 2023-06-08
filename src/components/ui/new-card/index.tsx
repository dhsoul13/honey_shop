import { type INewCard } from './types';
import styles from './newCard.module.scss';
import DefaultImg from 'src/assets/imgs/bg.title.jpg';
import { Col, Divider, Row } from 'antd';
import clsx from 'clsx';
import { MainButton } from '../buttons';
import { ModalNews } from '../modals';
import { useModal } from 'src/utils/hooks/useModalNews';

const HiddenOtherText: React.FC<{ text: string; onExit: () => void }> = ({
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

export const NewCard: React.FC<INewCard> = ({ content }) => {
	const { isActive, changeActiveOnClickAlerts } = useModal();
	return (
		<>
			<ModalNews
				content={content}
				isActive={isActive}
				onExit={changeActiveOnClickAlerts}
			/>
			<Row className={styles.wrapper_card} key={content.id} gutter={[0, 20]}>
				<Col className={clsx(styles.col, styles.col_img)}>
					<img src={DefaultImg} alt="" />
				</Col>
				<Col className={clsx(styles.col, styles.col_info)}>
					<h2 className={styles.title}>{content.title}</h2>
					<div className={styles.text}>
						<div className={styles.line} />
						<HiddenOtherText
							text={content.info}
							onExit={changeActiveOnClickAlerts}
						/>
					</div>
					<p className={styles.time}>{content.date}</p>
				</Col>
			</Row>
		</>
	);
};
