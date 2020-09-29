import { useEffect } from 'react';

function useWindowEvent(eventType, cb) {
  useEffect(() => {
    window.addEventListener(eventType, cb);
    
    return () => {
      window.removeEventListener(eventType, cb);
    };
  }, []);
}

export default useWindowEvent;
