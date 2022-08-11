import React from 'react';
import { useNavigate } from 'react-router-dom';
import Path from 'routes/Path';

const useCheckLogin = () => {
  const [authenticationToken] = React.useState<string | null>(
    localStorage.getItem('auth'),
  );

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authenticationToken) {
      alert('로그인이 필요합니다.');
      navigate(Path.Auth);
    }
  }, [authenticationToken]);

  return { authenticationToken };
};

export default useCheckLogin;
