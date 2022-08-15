import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Path from 'routes/Path';

const useLoginHelpers = () => {
  const navigate = useNavigate();

  const onSuccess = ({ data }: AxiosResponse) => {
    alert('로그인 되었습니다.');
    localStorage.setItem('auth', data.token);
    navigate(Path.Todos);
  };

  const onError = () => {
    alert('로그인 정보가 올바르지 않습니다.');
  };

  return { onSuccess, onError };
};

export default useLoginHelpers;
