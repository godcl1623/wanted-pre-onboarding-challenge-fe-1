import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckLogin from 'hooks/useCheckLogin';
import Path from 'routes/Path';

export default function Landing() {
  const navigate = useNavigate();
  const { isTokenAvailable } = useCheckLogin();

  React.useEffect(() => {
    if (isTokenAvailable) {
      navigate(Path.Items);
    } else {
      alert('로그인이 필요합니다.');
      navigate(Path.Auth);
    }
  }, [isTokenAvailable, navigate]);

  return <div />;
}
