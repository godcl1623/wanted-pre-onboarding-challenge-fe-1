import React from 'react';

interface FormInputType {
  type: string;
  name: string;
  text: string;
  placeholder?: string;
  className: string;
  isValid?: boolean;
  checkValidation?: (target: string, validationResult: boolean) => void;
  regexRule?: RegExp;
}

export default function FormInput({
  type,
  name,
  text,
  placeholder,
  className,
  isValid,
  checkValidation,
  regexRule,
}: FormInputType) {
  const inputValueCount = React.useRef<number>(0);
  const validationResult =
    name === 'password_check'
      ? '비밀번호가 일치하지 않습니다.'
      : '입력한 값이 형식과 맞지 않습니다.';
  const validationCondition = inputValueCount.current > 0 && !isValid;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const regexResult = (regexRule as RegExp).test(event.currentTarget.value);
    inputValueCount.current += event.currentTarget.value.length;
    checkValidation && checkValidation(name, regexResult);
  }

  return (
    <label htmlFor={name} className={className}>
      <div className="flex items-center w-full h-[30px]">
        <span className="basis-1/4">{text}</span>
        <p className="basis-3/4 text-red-500 font-semibold">
          {validationCondition && validationResult}
        </p>
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`login-input w-full ml-0 ${
          validationCondition
            ? 'border border-solid border-red-500'
            : 'border-none'
        }`}
        onChange={handleChange}
      />
    </label>
  );
}
