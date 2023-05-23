import { IAuthProps } from './types';

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
