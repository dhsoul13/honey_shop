import { useState } from 'react';

export const UseActiveModalCardShop: TUseActiveModalCardShop = () => {
  const [state, setState] = useState<boolean>(false);

  const handlerOnClick = () => {
    setState((prev) => !prev);
  };

  return {
    isActive: state,
    changeActiveOnClick: handlerOnClick,
  };
};
