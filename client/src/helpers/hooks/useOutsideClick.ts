import { useEffect } from 'react';


const useOutsideClick = (ref: React.RefObject<any>, callback:() => void ) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    } else {
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

export default useOutsideClick;