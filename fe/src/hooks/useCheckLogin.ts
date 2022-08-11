import React from 'react';
import { STORAGED_TOKEN } from 'utils/constants';

const useCheckLogin = () => {
  const [isTokenAvailable, setTokenAvailable] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!STORAGED_TOKEN) {
      setTokenAvailable(false);
    } else {
      setTokenAvailable(true);
    }
  }, []);

  return { isTokenAvailable };
};

export default useCheckLogin;
