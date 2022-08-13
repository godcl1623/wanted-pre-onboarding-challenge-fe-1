import React from 'react';

export const returnAlertMessage = (locationString: string) => {
  switch (locationString) {
    case '/auth':
      return '로그인 정보가 올바르지 않습니다.';
    case '/auth/signup':
      return '이미 가입된 정보입니다.';
    default:
      return '오류가 발생했습니다.';
  }
};

export const shortenString = (stringToShorten: string) => {
  return stringToShorten.length <= 5
    ? stringToShorten
    : stringToShorten.slice(0, 5).concat('...');
};

export const extractInputValue = (event: React.FormEvent<HTMLFormElement>) => {
  const formEventTarget = event.currentTarget;
  let firstValue = '';
  let secondValue = '';
  const firstInput = formEventTarget['0'];
  const secondInput = formEventTarget['1'];
  if (firstInput instanceof HTMLInputElement) firstValue = firstInput.value;
  if (
    secondInput instanceof HTMLInputElement ||
    secondInput instanceof HTMLTextAreaElement
  )
    secondValue = secondInput.value;

  return [firstValue, secondValue];
};

export const returnQueryString = (titleInput: string, contentInput: string) => {
  const queryString = `title=${titleInput}&content=${contentInput}`;

  return queryString;
};
