import returnApis from 'api/returnApis';

type TokenType = string | null;

const { getData, postData, putData, deleteData } = returnApis();

export const getTodos = async (token: TokenType, todoId = '') => {
  const queryString = todoId && `/${todoId}`;

  try {
    const response = await getData(`/todos${queryString}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const createTodo = async (token: TokenType, todoItemContent: string) => {
  try {
    const response = await postData('/todos', todoItemContent, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const updateTodo = async (
  token: TokenType,
  todoId: string,
  todoItemContent: string,
) => {
  try {
    const response = await putData(`/todos/${todoId}`, todoItemContent, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteTodo = async (token: TokenType, todoId: string) => {
  try {
    const response = await deleteData(`/todos/${todoId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};
