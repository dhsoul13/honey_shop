import { useNavigate } from 'react-router-dom';
import { headerLink } from './constant';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header_top}>
          <span>Расположение: c.Большое Болдино</span>
          <span>Номер телефона: +7-960-16-60-64</span>
        </div>

        <div className={styles.header_middle}>
          <h2 className={styles.header__logo}>logo</h2>
          <div className={styles.header_content_list}>
            <div className={styles.header__list}>
              {headerLink.map((el) => (
                <h2
                  className={styles.header__link}
                  onClick={() => {
                    navigate(el.link);
                  }}
                >
                  {el.title}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
