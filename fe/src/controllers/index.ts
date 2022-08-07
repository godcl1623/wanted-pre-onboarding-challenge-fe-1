import React from 'react';
import loginController from './loginController';
import signUpController from './signUpController';

export async function handleLogin(event: React.FormEvent) {
  event.preventDefault();
  const formEventTarget = event.target as HTMLFormElement;
  const emailInput = formEventTarget[0] as HTMLInputElement;
  const passwordInput = formEventTarget[1] as HTMLInputElement;
  try {
    const loginResult = await loginController(
      emailInput.value,
      passwordInput.value,
    );
    localStorage.setItem('auth', loginResult.token);
  } catch (error) {
    alert('로그인 정보가 올바르지 않습니다.');
  }
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
