import React from 'react';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const useTodoHelpers = () => {
  const navigate = useNavigate();

  const onError = (error: unknown) => {
    if (error instanceof Error) throw new Error(error.message);
  };

  const onSuccessGet = ({ data }: AxiosResponse, callback: any) => {
    callback(data.data);
  };

  const onSuccessPost = (alertString: string, destination: string) => {
    alert(alertString);
    navigate(destination);
  };

  const onSuccessDelete = (
    title: string,
    alertString: string,
    destination: string,
  ) => {
    localStorage.removeItem(title);
    alert(alertString);
    navigate(destination);
  };

  return { onSuccessGet, onSuccessPost, onSuccessDelete, onError };
};

export default useTodoHelpers;
