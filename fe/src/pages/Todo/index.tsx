import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { getTodoLists } from 'controllers';
import { TodoItemType } from 'types';
import Path from 'routes/Path';
import { isEqual } from 'utils/capsuledConditions';
import ListItem from './components/ListItem';
import AddItemButton from './components/AddItemButton';
import useCheckLogin from '../../hooks/useCheckAuthenticationToken';
import useGetLists from './hooks/useGetLists';
import useTodoHelpers from './hooks/useTodoHelpers';

function Todo() {
  const [todoList, setTodoList] = React.useState<TodoItemType[]>([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { onSuccessGet, onError } = useTodoHelpers();
  const { authenticationToken } = useCheckLogin();
  const { data, isSuccess, isError, error } = useGetLists(
    ['allLists'],
    authenticationToken,
  );

  React.useEffect(() => {
    if (!authenticationToken) {
      alert('로그인이 필요합니다.');
      navigate(Path.Auth);
    }
  }, [navigate, authenticationToken]);

  // React.useEffect(() => {
  //   // const setGetResultToList = async () => {
  //   //   try {
  //   //     const getResult = await getTodoLists(authenticationToken);
  //   //     setTodoList(getResult);
  //   //   } catch (error) {
  //   //     if (error instanceof Error) throw new Error(error.message);
  //   //   }
  //   // };
  //   // setGetResultToList();
  // }, [location.pathname, authenticationToken]);

  React.useEffect(() => {
    if (isSuccess) onSuccessGet(data, setTodoList);
    else if (isError) onError(error);
  }, [isSuccess, isError]);

  if (!authenticationToken) return <div />;

  const todoItemsList = todoList.map(
    (todoItem: TodoItemType, index: number) => {
      return (
        <ListItem
          id={todoItem.id}
          title={todoItem.title}
          content={todoItem.content}
          createdAt={todoItem.createdAt}
          updatedAt={todoItem.updatedAt}
          key={index}
        />
      );
    },
  );

  return (
    <main className="main-base">
      <article
        id="todo_container"
        className="flex w-[60%] h-[75%] rounded-2xl bg-slate-50"
      >
        <article
          id="simple_lists"
          className="basis-1/2 shadow-lg p-10 overflow-y-auto"
        >
          <ul>
            {todoItemsList}
            <AddItemButton />
          </ul>
        </article>
        <Outlet />
      </article>
    </main>
  );
}

export default React.memo(Todo);
