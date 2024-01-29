import { useEffect } from "react";

interface useKeyProps {
  key: any;
  action: any;
}

const useKey: React.FC<useKeyProps> = ({ key, action }) => {
  useEffect(() => {
    function callback(e: any) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);

  return <div></div>;
};

export default useKey;
