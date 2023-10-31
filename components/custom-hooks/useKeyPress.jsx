import { useEffect } from "react";

export function useKeyPress(callback, keyCodes) {
  const handler = ({ code }) => {
    event.preventDefault();
    if (keyCodes.includes(code)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}
