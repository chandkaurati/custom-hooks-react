import { useState } from "react";

export function useCounter({ initalVal = 0 }) {
  const [counter, setCounter] = useState<number>(initalVal);

  const increment = (val = 1) => {
    setCounter((prev) => prev + val);
  };
  const decrement = (val = 1) => {
    setCounter((prev) => (prev -= val));
  };
  const reset = () => {
    setCounter(initalVal);
  };

  return { counter, increment, decrement, reset };
}
