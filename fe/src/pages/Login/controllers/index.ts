import React from 'react';
import loginController from './loginController';

export async function handleSubmit(event: React.FormEvent) {
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
