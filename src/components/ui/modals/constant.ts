import { IAuthProps, IRegProps } from './types';

export const AuthProps: Array<IAuthProps> = [
  {
    visibleText: 'Email',
    name: 'email',
    type: 'text',
    rules: [
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      },
    ],
  },
  {
    visibleText: 'Пароль',
    name: 'password',
    type: 'password',
    rules: [
      {
        required: true,
        message: 'Please input your E-mail!',
      },
    ],
  },
];

export const RegProps: Array<IRegProps> = [
  {
    visibleText: 'Email',
    name: 'email',
    type: 'text',
    rules: [
      {
        type: 'email',
        message: '',
      },
      {
        required: true,
        message: '',
      },
    ],
  },
  {
    visibleText: 'Имя и фамилия',
    name: 'username',
    type: 'text',
    rules: [
      {
        required: true,
        message: '',
      },
    ],
  },
  {
    visibleText: 'Пароль',
    name: 'password',
    type: 'password',
    rules: [
      {
        required: true,
        message: '',
      },
    ],
  },
  {
    visibleText: 'Повторить пароль',
    name: 'check_password',
    type: 'password',
    rules: [
      {
        required: true,
        message: '',
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(''));
        },
      }),
    ],
  },
];
