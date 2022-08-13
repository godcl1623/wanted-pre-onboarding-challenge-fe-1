import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckLogin from 'hooks/useCheckLogin';
import Path from 'routes/Path';

export default function Landing() {
  const navigate = useNavigate();
  const { authenticationToken } = useCheckLogin();

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
