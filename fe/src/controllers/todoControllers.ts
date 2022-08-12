import returnApis from 'api/returnApis';

type TokenType = string | null;

const { getData, postData, putData, deleteData } = returnApis();

export const getTodos = async (token: TokenType, todoId = '') => {
  const queryString = todoId && `/${todoId}`;
  let result;

  try {
    const response = await getData(`/todos${queryString}`, {
      headers: { Authorization: token },
    });
    result = response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
};

export const createTodo = async (token: TokenType, todoItemContent: string) => {
  let result;

  try {
    const response = await postData('/todos', todoItemContent, {
      headers: { Authorization: token },
    });
    result = response;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
};

export const updateTodo = async (
  token: TokenType,
  todoId: string,
  todoItemContent: string,
) => {
  let result;

  try {
    const response = await putData(`/todos/${todoId}`, todoItemContent, {
      headers: {
        Authorization: token,
      },
    });
    result = response;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
};

export const deleteTodo = async (token: TokenType, todoId: string) => {
  let result;

  try {
    const response = await deleteData(`/todos/${todoId}`, {
      headers: {
        Authorization: token,
      },
    });
    result = response;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
};
