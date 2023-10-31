import { useEffect } from "react";

export function useKeyPress(callback, keyCodes) {
  const handler = ({ code }) => {
    if (event.keyCode === 32) {
      // If space is pressed prevent default behaviour
      event.preventDefault();
    }
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
