import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './input.module.scss';
import clsx from 'clsx';
import { IInputSearch } from './types';

export const SearchInput: React.FC<IInputSearch> = ({ ...probs }) => {
  return (
    <Input
      suffix={<SearchOutlined />}
      className={clsx(styles.input)}
      {...probs}
    />
  );
};
