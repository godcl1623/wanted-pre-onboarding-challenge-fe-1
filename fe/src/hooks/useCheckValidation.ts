import React from 'react';

const useCheckValidation = (
  inputValue: string | undefined,
  regexRule: RegExp,
) => {
  const [isValid, setIsValid] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (inputValue) {
      const testResult = regexRule.test(inputValue);
      if (testResult) setIsValid(true);
      else setIsValid(false);
    }
  }, [inputValue, regexRule]);

  return isValid;
};

export default useCheckValidation;
