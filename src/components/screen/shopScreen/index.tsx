import styles from './shopScreen.module.scss';

export const ShopScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Товары:</h2>
      </div>
    </div>
  );
};
