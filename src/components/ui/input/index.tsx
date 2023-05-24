import { Input, InputProps, Select, Slider } from 'antd';

import styles from './input.module.scss';
import clsx from 'clsx';
import { IInputSelect, IInputSlider } from './types';
import { useState } from 'react';

export const DefaultInput: React.FC<InputProps> = ({
  type = 'text',
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  if (type === 'password') {
    return (
      <Input.Password
        {...props}
        className={clsx(styles.input, props.className)}
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
      />
    );
  } else {
    return (
      <Input
        {...props}
        className={clsx(styles.input, props.className)}
      />
    );
  }
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
