import { useNavigate } from 'react-router-dom';
import { headerLink } from './constant';
import styles from './header.module.scss';
import { MainButton } from '../buttons';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const RenderSvgWithoutAuth: React.FC<{ isAuth?: boolean }> = ({
  isAuth = true,
}) => {
  if (isAuth) {
    return <UserOutlined className={styles.link_svg} />;
  } else {
    return <LockOutlined className={styles.link_svg} />;
  }
};

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
                <MainButton
                  cn={styles.header__link}
                  type="link"
                  href={el.link}
                  disabled={el.disable}
                >
                  {el.title}
                </MainButton>
              ))}
              <MainButton
                cn={styles.header_authenticator}
                type="link"
              >
                <RenderSvgWithoutAuth />
              </MainButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
