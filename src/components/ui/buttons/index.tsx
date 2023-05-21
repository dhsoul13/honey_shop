import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
import React from 'react';

import styles from './buttons.module.scss';
import clsx from 'clsx';

interface IMainButton extends ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'default' | 'link';
}

export const MainButton: React.FC<IMainButton> = ({
  children,
  type = 'primary',
  ...props
}) => {
  return (
    <Button
      className={clsx(styles.btn, props.className)}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};
