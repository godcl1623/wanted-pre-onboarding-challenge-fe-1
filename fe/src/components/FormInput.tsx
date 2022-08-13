import React from 'react';
import { isEqual, isFrontBiggerThanRear } from 'utils/capsuledConditions';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  regexRule: RegExp;
  checkIfInputValid: (inputName: string, isInputValid: boolean) => void;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const {
      type,
      name,
      text,
      placeholder,
      className,
      regexRule,
      checkIfInputValid,
    } = props;

    const [isValid, setIsValid] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>('');

    const inputValueCount = React.useRef<number>(0);

    const validationFailedString = isEqual(name, 'passwordCheck')
      ? '비밀번호가 일치하지 않습니다.'
      : '입력한 값이 형식과 맞지 않습니다.';

    const validationCondition =
      isFrontBiggerThanRear(inputValueCount.current, 0) && !isValid;

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const currentInputLength = event.currentTarget.value.length;
      inputValueCount.current += currentInputLength;
      setInputValue(event.currentTarget.value);
    }

    React.useEffect(() => {
      if (typeof name === 'string') {
        const testResult = regexRule.test(inputValue);
        setIsValid(testResult);
        if (testResult) checkIfInputValid(name, testResult);
      }
    }, [inputValue]);

    return (
      <label htmlFor={name} className={className}>
        <div className="flex items-center w-full h-[30px]">
          <span className="basis-1/4">{text}</span>
          <p className="basis-3/4 text-red-500 font-semibold">
            {validationCondition && validationFailedString}
          </p>
        </div>
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`login-input w-full ml-0 ${
            validationCondition
              ? 'border border-solid border-red-500'
              : 'border-none'
          }`}
          value={inputValue}
          onChange={handleChange}
        />
      </label>
    );
  },
);

export default React.memo(FormInput);
