import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isShowAlert } from 'src/store/slices/alert-slice';

export const UseActiveModalCardShop: TUseActiveModalCardShop = (status) => {
  const [state, setState] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlerOnClick = () => {
    if (status === 'not') {
      dispatch(
        isShowAlert({
          isActive: true,
          alertType: 'info',
          message: 'Такого товара нет в наличии',
          descriptions: 'Мы надеемся, что в ближайшее время он появиться',
        })
      );
    }

    setState((prev) => !prev);
  };

  return {
    isActive: state,
    changeActiveOnClick: handlerOnClick,
  };
};
