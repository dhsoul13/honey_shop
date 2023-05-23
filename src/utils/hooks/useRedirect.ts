import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectTimer = (callback: any) => {
  const timer = setTimeout(() => {
    callback();
  }, 10000);

  return timer;
};

export const UseRedirect: TUseRedirect = () => {
  const navigate = useNavigate();

  const redirectOnClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const timer = RedirectTimer(redirectOnClick);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return {
    redirectOnClick,
  };
};
