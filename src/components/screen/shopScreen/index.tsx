import { DefaultLayout } from 'src/components/layout/ScreenLayout';
import styles from './shopScreen.module.scss';
import { FiltersProduct } from 'src/components/ui';
import { ShopCardMap } from 'src/components/ui/shop-card';
import { demoCardContent } from 'src/shared/constant/demoCardContent';

export const ShopScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DefaultLayout title="Наша продукция">
          <FiltersProduct />
          <div className={styles.shops}>
            <ShopCardMap array={demoCardContent} />
          </div>
        </DefaultLayout>
      </div>
    </div>
  );
};
