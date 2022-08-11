import communicateServerBy from 'api/communicateServerBy';

const { getData, postData, putData, deleteData } = communicateServerBy();

export const getTodos = async (token: string | null, todoId = '') => {
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

export const createTodo = async (token: string | null, todoContent: string) => {
  try {
    const response = await postData('/todos', todoContent, {
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
    const response = await putData(`/todos/${todoId}`, todoContent, {
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
