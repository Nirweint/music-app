import { ChangeEvent, useState } from 'react';

type UseInputReturnType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (initialValue: string): UseInputReturnType => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
