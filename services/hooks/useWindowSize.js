import { useState } from 'react';
import { useEventListener } from '../hooks';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  function getSize() {
    return {
      innerHeight: window.innerHeight || 1920,
      innerWidth: window.innerWidth || 1080,
      outerHeight: window.outerHeight || 1920,
      outerWidth: window.outerWidth || 1080,
    };
  }

  const handleResize = () => setWindowSize(getSize());

  useEventListener(window, 'resize', handleResize);

  return { windowSize, handleResize };
};

export default useWindowSize;
