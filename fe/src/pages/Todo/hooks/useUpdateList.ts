import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { TokenType } from 'types';
import returnApis from 'api/returnApis';

interface MutateFunctionParameters {
  token: TokenType;
  todoId: string;
  todoItemContent: string;
}

const useUpdateList = () => {
  const { putData } = returnApis();

  return useMutation(
    ({ token, todoId, todoItemContent }: MutateFunctionParameters) => {
      return putData(`/todos/${todoId}`, todoItemContent, {
        headers: {
          Authorization: token,
        },
      });
    },
  );
};

export default useUpdateList;
