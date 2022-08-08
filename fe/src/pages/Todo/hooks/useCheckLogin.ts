import React from 'react';
import { useNavigate } from 'react-router-dom';

const useCheckLogin = () => {
  const [authenticationToken] = React.useState<string | null>(
    localStorage.getItem('auth'),
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authenticationToken) {
      alert('로그인이 필요합니다.');
      navigate('/auth');
    }
  }, [authenticationToken]);

  return { authenticationToken };
};

export default useCheckLogin;
