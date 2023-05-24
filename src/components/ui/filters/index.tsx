import { Form } from 'antd';
import { SelectInput, SliderInput } from '../input';

import styles from './filters.module.scss';

export const FiltersProduct = () => {
  return (
    <Form className={styles.form}>
      <div className={styles.search}>
        <SelectInput placeholder="Поиск по названию" />
      </div>
      <div className={styles.other_elem}>
        <SelectInput placeholder="Сорт меда" />
        <SelectInput placeholder="Oбъем банки" />
        <div>
          <h2>Диапазон цен</h2>
          <SliderInput
            range
            min={0}
            max={10000}
          />
        </div>
      </div>
    </Form>
  );
};
