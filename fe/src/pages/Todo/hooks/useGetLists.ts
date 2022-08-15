import React from 'react';
import { useQuery, QueryKey } from '@tanstack/react-query';
import { TokenType } from 'types';
import returnApis from 'api/returnApis';

interface MutateFunctionParameters {
  token: TokenType;
  todoId?: string;
}

const useGetLists = (key: QueryKey, token: TokenType, todoId = '') => {
  const { getData } = returnApis();
  const queryString = todoId && `/${todoId}`;
  const getTodoList = () =>
    getData(`/todos${queryString}`, {
      headers: { Authorization: token },
    });

  return useQuery(key, getTodoList);
};

export default useGetLists;
