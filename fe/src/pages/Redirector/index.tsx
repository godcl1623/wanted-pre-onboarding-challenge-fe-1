import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckAuthenticationToken from 'hooks/useCheckAuthenticationToken';
import Path from 'routes/Path';

export default function Redirector() {
  const navigate = useNavigate();
  const { authenticationToken } = useCheckAuthenticationToken();

  React.useEffect(() => {
    if (authenticationToken) {
      navigate(Path.Todos);
    } else {
      alert('로그인이 필요합니다.');
      navigate(Path.Auth);
    }
  }, [authenticationToken, navigate]);

  return <div />;
}
