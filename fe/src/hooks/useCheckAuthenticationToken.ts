import React from 'react';
import { TokenType } from 'types';

const useCheckAuthenticationToken = () => {
  const [authenticationToken] = React.useState<TokenType>(
    localStorage.getItem('auth'),
  );

  return { authenticationToken };
};

export default useCheckAuthenticationToken;
