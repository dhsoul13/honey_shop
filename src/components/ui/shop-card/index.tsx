import { IShopCard, IShopCardMap } from './types';
import styles from './shopCard.module.scss';
import { Divider } from 'antd';
import { MainButton } from '../buttons';
import { UseCount } from 'src/utils/hooks/useCount';
import {
  MinusOutlined,
  PlusOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import { UseActiveModalCardShop } from 'src/utils/hooks/useActiveModalCardShop';
import { ModalCard } from '../modals';

export const ShopCard: React.FC<IShopCard> = ({ content }) => {
  const [count, addFunct, delFunct, status] = UseCount({
    availableCount: content.count,
  });

  const {
    isActive,
    changeActiveOnClickWithAlerts,
    changeActiveOnClickWithoutAlerts,
  } = UseActiveModalCardShop(status);

  return (
    <>
      <ModalCard
        content={{
          ...content,
        }}
        isActive={isActive}
        onChangeActiveOnClick={changeActiveOnClickWithoutAlerts}
      />
      <div
        className={clsx(
          styles.container,
          status === 'not' ? styles.disable : ''
        )}
      >
        <MainButton
          className={styles.btn_show_alert}
          onClick={changeActiveOnClickWithAlerts}
        >
          <SearchOutlined />
        </MainButton>
        <div className={styles.img_block}>
          <img
            src="https://2sotki.ru/wp-content/uploads/2/7/9/279cb03a22dc0bce7cd7244f4f2eff5e.png"
            alt=""
          />
        </div>
        <div className={styles.info_content}>
          <h2 className={styles.title_content}>{content.title}</h2>
          <Divider />
          <div className={styles.block_content}>
            <h3 className={styles.volume_content}>Объем: {content.volume}</h3>
            <h3 className={styles.price_content}>{+content.price * count}р</h3>
          </div>
          <div className={styles.functional__block}>
            <div className={styles.adding_functional}>
              <div
                className={clsx(
                  styles.count,
                  status === 'not' || status === 'crowded' ? styles.disable : ''
                )}
              >
                {count}
              </div>
              <MainButton
                type="link"
                onClick={addFunct}
                disabled={status === 'not'}
              >
                <PlusOutlined />
              </MainButton>
              <MainButton
                type="link"
                onClick={delFunct}
                disabled={status === 'not'}
              >
                <MinusOutlined />
              </MainButton>
            </div>
            <MainButton
              className={styles.btn_add_basket}
              disabled={status === 'not'}
            >
              <ShoppingOutlined />
            </MainButton>
          </div>
        </div>
        <MainButton
          type="link"
          cn={styles.btn_link}
        >
          Посмотреть товар
        </MainButton>
      </div>
    </>
  );
};

export const ShopCardMap: React.FC<IShopCardMap> = ({ array }) => {
  return (
    <>
      {array.map((content) => (
        <ShopCard content={content} />
      ))}
    </>
  );
};
