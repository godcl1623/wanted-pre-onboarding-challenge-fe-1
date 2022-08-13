import React from 'react';
import { TokenType } from 'types';

const useCheckLogin = () => {
  const [authenticationToken] = React.useState<TokenType>(
    localStorage.getItem('auth'),
  );

  return { authenticationToken };
};

export default useCheckLogin;
