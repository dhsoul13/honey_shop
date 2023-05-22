import { useEffect, useState } from 'react';

export const UseCount: TUseCount = ({ availableCount }) => {
  const [state, setState] = useState(1);
  const [status, setStatus] = useState<TStatusUseCount>('available');

  useEffect(() => {
    if (+availableCount === 0) {
      setStatus('not');
    }
  }, [availableCount]);

  const increaseByOneOnClick = () => {
    setState((prev) => {
      if (+availableCount === prev) {
        setStatus('crowded');
        return prev;
      }
      return prev + 1;
    });
  };

  const reduceByOneOnClick = () => {
    if (+availableCount !== 0) {
      setStatus('available');
    }
    setState((prev) => {
      if (state === 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  return [state, increaseByOneOnClick, reduceByOneOnClick, status];
};
