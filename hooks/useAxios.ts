import { useEffect, useState } from 'react';

const useAxios = <T>(requestCallback: () => Promise<T | undefined>) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const request = async () => {
      const nextState = await requestCallback();
      setState(nextState);
    };
    request();
  }, []);

  return state;
};

export default useAxios;
