import React from 'react';

const useCheckLogin = () => {
  const [authenticationToken] = React.useState<string | null>(
    localStorage.getItem('auth'),
  );

  return { authenticationToken };
};

export default useCheckLogin;
