import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { TokenType } from 'types';
import returnApis from 'api/returnApis';

interface MutateFunctionParameters {
  token: TokenType;
  todoItemContent: string;
}

const useCreateList = () => {
  const { postData } = returnApis();

  return useMutation(({ token, todoItemContent }: MutateFunctionParameters) => {
    return postData('/todos', todoItemContent, {
      headers: { Authorization: token },
    });
  });
};

export default useCreateList;
