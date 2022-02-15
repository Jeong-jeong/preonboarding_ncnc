import { useCallback, useState } from 'react';

interface useOptionProps {
  initialState: boolean;
}

const useOption = ({ initialState }: useOptionProps) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);
  const [isChecked, setIsChecked] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    isChecked && setIsChecked((isChecked) => !isChecked);
    setIsActive((isActive) => !isActive);
  }, [isActive]);

  return { isActive, isChecked, setIsChecked, toggle };
};

export default useOption;
