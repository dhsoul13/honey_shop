import { DefaultLayout } from 'src/components/layout/ScreenLayout';
import styles from './shopScreen.module.scss';

export const ShopScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DefaultLayout title="Наша продукция">fdf</DefaultLayout>
      </div>
    </div>
  );
};
