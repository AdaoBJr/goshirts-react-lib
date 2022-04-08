import { useEffect } from 'react';

const useEventListener = (target, event, listener, ...rest) => {
  useEffect(() => {
    if (!target || typeof target.addEventListener !== 'function') return null;
    target.addEventListener(event, listener, ...rest);

    return () => {
      target.removeEventListener(event, listener, ...rest);
    };
  }, [target, event, listener, rest]);
};

export default useEventListener;
