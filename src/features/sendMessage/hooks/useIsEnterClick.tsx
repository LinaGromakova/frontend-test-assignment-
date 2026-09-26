import { useEffect, useState } from 'react';

const useIsEnterClick = () => {
  const [isEnterClick, setIsEnterClick] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        setIsEnterClick(true);
      } else {
        setIsEnterClick(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      setIsEnterClick(false);
    };
  }, []);
  return { isEnterClick };
};
export default useIsEnterClick;