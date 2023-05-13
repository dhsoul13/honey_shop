import { Row, Col } from 'antd';
import styles from './footer.module.scss';
import { footerLink } from './constant';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <Row gutter={[16, 16]}>
          <Col
            className={clsx(styles.col, styles.col_logo)}
            span={6}
          >
            <div className={styles.logo}>Logo</div>
          </Col>
          <Col
            className={clsx(styles.col_link, styles.col)}
            span={18}
          >
            <ul className={styles.footer_link}>
              {footerLink.map((el) => (
                <li>{el.title}</li>
              ))}
            </ul>
          </Col>
          <Col
            className={clsx(styles.footer_text, styles.col)}
            span={24}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            molestiae! Cumque, rem dignissimos. Maxime tenetur aperiam natus,
            hic sunt et amet inventore quas, harum temporibus rem magnam
            voluptates ad recusandae!
          </Col>
        </Row>
      </div>
    </div>
  );
};
