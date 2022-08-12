import React from 'react';
import format from 'date-fns/format';

export const returnAlertMessage = (locationString: string) => {
  switch (locationString) {
    case '/auth':
      return '로그인 정보가 올바르지 않습니다.';
    case '/signup':
      return '이미 가입된 정보입니다.';
    default:
      return '오류가 발생했습니다.';
  }
};

export const formatDate = (dateString: string, withTime = false) => {
  const dateFormat = withTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
  return format(new Date(dateString), dateFormat);
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
  if (secondInput instanceof HTMLInputElement) secondValue = secondInput.value;

  return [firstValue, secondValue];
};

export const returnQueryString = (event: React.FormEvent<HTMLFormElement>) => {
  const [titleInput, contentInput] = extractInputValue(event);
  const queryString = `title=${titleInput}&content=${contentInput}`;

  return queryString;
};
