import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STORAGED_TOKEN } from 'utils/constants';

const useCheckLogin = () => {
  const [authenticationToken] = React.useState<string | null>(STORAGED_TOKEN);

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
