import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './input.module.scss';
import clsx from 'clsx';
import { IInputSearch, IInputSelect } from './types';

export const SearchInput: React.FC<IInputSearch> = ({ ...probs }) => {
  return (
    <Input
      suffix={<SearchOutlined />}
      className={clsx(styles.input, probs.className)}
      {...probs}
    />
  );
};

export const SelectInput: React.FC<IInputSelect> = ({ ...probs }) => {
  return (
    <Select
      className={clsx(styles.select, probs.className)}
      {...probs}
    />
  );
};
