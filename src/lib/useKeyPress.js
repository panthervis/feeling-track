import { useState, useEffect } from 'react';

// CHECK: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
export default function useKeyPress(targetKeyCode) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    let prevKeyCode = '';

    function downHandler({ keyCode }) {
      if (prevKeyCode === targetKeyCode) return;

      if (keyCode === targetKeyCode) {
        setKeyPressed(true);
        prevKeyCode = keyCode;
      }
    }

    function upHandler({ keyCode }) {
      if (keyCode === targetKeyCode) {
        setKeyPressed(false);
        prevKeyCode = '';
      }
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKeyCode]);

  return keyPressed;
}
