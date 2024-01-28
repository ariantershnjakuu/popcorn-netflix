import { useState, useEffect } from "react";

interface useLocalStorageStateProps {
  initialState: any;
  key: string;
}

export const useLocalStorageState: React.FC<useLocalStorageStateProps> = ({
  initialState,
  key,
}) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as any;
};
