import { DefaultLayout } from 'src/components/layout/ScreenLayout';
import styles from './shopScreen.module.scss';
import { FiltersProduct } from 'src/components/ui';

export const ShopScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DefaultLayout title="Наша продукция">
          <>
            <FiltersProduct />
          </>
          1
        </DefaultLayout>
      </div>
    </div>
  );
};
