import { Row, Col } from 'antd';
import styles from './footer.module.scss';
import { footerLink } from './constant';
import clsx from 'clsx';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_container}>
				<Row gutter={[16, 16]}>
					<Col className={clsx(styles.col, styles.col_logo)} span={6}>
						<div className={styles.logo}>Logo</div>
					</Col>
					<Col className={clsx(styles.col_link, styles.col)} span={18}>
						<ul className={styles.footer_link}>
							{footerLink.map((el) => (
								<li>{el.title}</li>
							))}
						</ul>
					</Col>
					<Col className={clsx(styles.footer_text, styles.col)} span={24}>
						The work of {'\u00A9'} dhsoul13
					</Col>
				</Row>
			</div>
		</div>
	);
};
