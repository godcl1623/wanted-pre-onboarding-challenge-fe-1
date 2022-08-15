import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { TokenType } from 'types';
import returnApis from 'api/returnApis';

interface MutateFunctionParameters {
  token: TokenType;
  todoId: string;
}

const useDeleteList = () => {
  const { deleteData } = returnApis();

  return useMutation(({ token, todoId }: MutateFunctionParameters) => {
    return deleteData(`/todos/${todoId}`, {
      headers: {
        Authorization: token,
      },
    });
  });
};

export default useDeleteList;
