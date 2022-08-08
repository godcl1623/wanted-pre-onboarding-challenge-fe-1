import React from 'react';
import loginController from './loginController';
import signUpController from './signUpController';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from './todoControllers';

export async function handleLogin(event: React.FormEvent) {
  event.preventDefault();
  const formEventTarget = event.target as HTMLFormElement;
  const emailInput = formEventTarget[0] as HTMLInputElement;
  const passwordInput = formEventTarget[1] as HTMLInputElement;
  let result = false;
  try {
    const loginResult = await loginController(
      emailInput.value,
      passwordInput.value,
    );
    localStorage.setItem('auth', loginResult.token);
    result = true;
  } catch (error) {
    alert('로그인 정보가 올바르지 않습니다.');
  }
  return result;
}

export async function handleSignUp(event: React.FormEvent) {
  event.preventDefault();
  let result = false;
  const formEventTarget = event.target as HTMLFormElement;
  const emailInput = formEventTarget[0] as HTMLInputElement;
  const passwordInput = formEventTarget[1] as HTMLInputElement;
  try {
    const signUpResult = await signUpController(
      emailInput.value,
      passwordInput.value,
    );
    localStorage.setItem('auth', signUpResult.token);
    result = true;
  } catch (error) {
    alert('이미 가입된 정보입니다.');
  }
  return result;
}

export async function getTodoLists(
  authenticationToken: string | null,
  todoId = '',
) {
  try {
    const response = await getTodos(authenticationToken, todoId);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function createTodoItem(
  authenticationToken: string | null,
  content: string,
) {
  let result = false;
  try {
    const response = await createTodo(authenticationToken, content);
    result = true;
  } catch (error) {
    throw new Error(error as string);
  }
  return result;
}

export async function updateTodoItem(
  authenticationToken: string | null,
  todoId: string,
  content: string,
) {
  let result = false;
  try {
    const response = await updateTodo(authenticationToken, todoId, content);
    console.log(response);
    result = true;
  } catch (error) {
    throw new Error(error as string);
  }
  return result;
}

export async function deleteTodoItem(
  authenticationToken: string | null,
  todoId: string,
) {
  let result = false;
  try {
    const response = await deleteTodo(authenticationToken, todoId);
    console.log(response);
    result = true;
  } catch (error) {
    throw new Error(error as string);
  }
  return result;
}
