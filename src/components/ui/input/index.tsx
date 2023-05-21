import { Input, Select, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import styles from './input.module.scss';
import clsx from 'clsx';
import { IInputSearch, IInputSelect, IInputSlider } from './types';

export const SearchInput: React.FC<IInputSearch> = ({ ...props }) => {
  return (
    <Input
      suffix={<SearchOutlined />}
      className={clsx(styles.input, props.className)}
      {...props}
    />
  );
};

export const SelectInput: React.FC<IInputSelect> = ({ ...props }) => {
  return (
    <Select
      className={clsx(styles.select, props.className)}
      {...props}
    />
  );
};

export const SliderInput: React.FC<IInputSlider> = ({ ...props }) => {
  return <Slider {...props} />;
};
