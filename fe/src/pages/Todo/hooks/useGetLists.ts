import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { TokenType } from 'types';
import returnApis from 'api/returnApis';

interface MutateFunctionParameters {
  token: TokenType;
  todoId?: string;
}

const useGetLists = () => {
  const { getData } = returnApis();

  return useMutation(({ token, todoId = '' }: MutateFunctionParameters) => {
    const queryString = todoId && `/${todoId}`;
    return getData(`/todos${queryString}`, {
      headers: { Authorization: token },
    });
  });
};

export default useGetLists;
