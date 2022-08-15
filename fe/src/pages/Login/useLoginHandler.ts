import React from 'react';
import { useMutation } from '@tanstack/react-query';
import returnApis from 'api/returnApis';

interface MutateFunctionParameters {
  emailInputValue: string;
  passwordInputValue: string;
}

const useLoginHandler = () => {
  const { postData } = returnApis();
  return useMutation(
    ({ emailInputValue, passwordInputValue }: MutateFunctionParameters) => {
      return postData<string, string>(
        '/users/login',
        `email=${emailInputValue}&password=${passwordInputValue}`,
      );
    },
  );
};

export default useLoginHandler;
