import React from 'react';
import { extractInputValue } from 'utils/helpers';
import loginController from './loginController';
import signUpController from './signUpController';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from './todoControllers';

export async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  let result = false;
  const [emailInputValue, passwordInputValue] = extractInputValue(event);

  try {
    const loginResult = await loginController(
      emailInputValue,
      passwordInputValue,
    );
    localStorage.setItem('auth', loginResult.token);
    result = true;
  } catch (error) {
    alert('로그인 정보가 올바르지 않습니다.');
  }

  return result;
}

export async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  let result = false;
  const [emailInputValue, passwordInputValue] = extractInputValue(event);

  try {
    const signUpResult = await signUpController(
      emailInputValue,
      passwordInputValue,
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
  let result;

  try {
    const response = await getTodos(authenticationToken, todoId);
    result = response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
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
    if (error instanceof Error) throw new Error(error.message);
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
    result = true;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
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
    result = true;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
}
