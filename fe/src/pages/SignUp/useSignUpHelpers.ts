import React from 'react';
import { useNavigate } from 'react-router-dom';
import Path from 'routes/Path';

const useSignUpHelpers = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    alert('회원가입이 완료되었습니다.');
    navigate(Path.Root);
  };

  const onError = () => {
    alert('이미 가입된 정보입니다.');
  };

  return { onSuccess, onError };
};

export default useSignUpHelpers;
