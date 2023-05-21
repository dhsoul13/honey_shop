import { IShopCard } from './types';

import styles from './shopCard.module.scss';
import { Divider } from 'antd';
import { MainButton } from '../buttons';
import { useState } from 'react';
import { BasketSvg } from 'src/assets/imgs/svgs/basket';
import { AddingSvg } from 'src/assets/imgs/svgs/adding';
import { DeleteSvg } from 'src/assets/imgs/svgs/delete';

export const ShopCard: React.FC<IShopCard> = ({ content }) => {
  const [count, setCount] = useState(1);

  const increaseByOneOnClick = () => {
    setCount((prev) => prev + 1);
  };

  const reduceByOneOnClick = () => {
    setCount((prev) => {
      if (count === 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className={styles.container}>
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
            <div className={styles.count}>{count}</div>
            <div
              onClick={increaseByOneOnClick}
              className={styles.svg}
            >
              <AddingSvg />
            </div>
            <div
              onClick={reduceByOneOnClick}
              className={styles.svg}
            >
              <DeleteSvg />
            </div>
          </div>
          <MainButton>
            <BasketSvg />
          </MainButton>
        </div>
      </div>
    </div>
  );
};
