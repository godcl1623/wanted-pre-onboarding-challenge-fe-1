import { HttpRequest } from 'api/httpRequest';

const httpRequest = new HttpRequest();

export const getTodos = async (token: string | null, todoId = '') => {
  const queryString = todoId && `/${todoId}`;
  try {
    const response = await httpRequest.get(`/todos${queryString}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const createTodo = async (token: string | null, todoContent: string) => {
  try {
    const response = await httpRequest.post('/todos', todoContent, {
      headers: { Authorization: token },
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const updateTodo = async (
  token: string | null,
  todoId: string | number,
  todoContent: string,
) => {
  try {
    const response = await httpRequest.put(`/todos/${todoId}`, todoContent, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteTodo = async (token: string | null, todoId: string) => {
  try {
    const response = await httpRequest.delete(`/todos/${todoId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};
