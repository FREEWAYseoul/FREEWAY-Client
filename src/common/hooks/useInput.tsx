import { useRef } from 'react';

const useInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeInputDisabled = (isBoolean: boolean) => {
    if (isBoolean) {
      if (inputRef?.current) inputRef.current.disabled = true;
    } else {
      if (inputRef?.current) inputRef.current.disabled = false;
    }
  };

  return { inputRef, changeInputDisabled };
};

export default useInput;
