import { useRef, useEffect } from "react";

const useKey = (key: string, cb: (e?: KeyboardEvent) => void): void => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event: KeyboardEvent) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
};

export default useKey;
