import { MainButton } from 'src/components/ui/buttons';
import styles from './404Screen.module.scss';

export const Screen404: React.FC<IPage404> = ({ redirect }) => {
  return (
    <div className={styles.container}>
      <div>img</div>
      <h2 className={styles.title}>Ошибка: 404</h2>
      <p className={styles.text}>Похоже что вы ищите нет на нашем сайте</p>
      <MainButton
        cn={styles.btn}
        onClick={redirect}
      >
        Ввернуться на главную
      </MainButton>
    </div>
  );
};
